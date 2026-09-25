import { ExamQuestion } from '../types/exam';
import fallbackQuestions from '../data/questions.json';

const BUCKET_URL = (import.meta.env.VITE_QUESTIONS_BUCKET_URL as string) ||
  '/data/questions.json';

const STORAGE_KEYS = {
  CACHE: 'elevate_questions_cache',
  LAST_SYNC: 'elevate_questions_last_sync',
  ETAG: 'elevate_questions_etag',
};

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export interface SyncStatus {
  lastSync: Date | null;
  questionCount: number;
  source: 'bucket' | 'cache' | 'fallback';
  isSyncing: boolean;
  error?: string;
}

type SyncListener = (status: SyncStatus) => void;

export class QuestionBankService {
  private static instance: QuestionBankService;
  private questions: ExamQuestion[] = [];
  private listeners: Set<SyncListener> = new Set();
  private syncStatus: SyncStatus = {
    lastSync: null,
    questionCount: 0,
    source: 'fallback',
    isSyncing: false,
  };

  private constructor() {
    this.initialize();
  }

  public static getInstance(): QuestionBankService {
    if (!QuestionBankService.instance) {
      QuestionBankService.instance = new QuestionBankService();
    }
    return QuestionBankService.instance;
  }

  public subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    listener({ ...this.syncStatus });
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    const statusCopy = { ...this.syncStatus };
    this.listeners.forEach(fn => fn(statusCopy));
  }

  private initialize(): void {
    const cached = localStorage.getItem(STORAGE_KEYS.CACHE);
    const lastSyncStr = localStorage.getItem(STORAGE_KEYS.LAST_SYNC);

    if (cached) {
      try {
        const parsed = JSON.parse(cached) as ExamQuestion[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.questions = parsed;
          this.syncStatus.source = 'cache';
          this.syncStatus.questionCount = parsed.length;
        } else {
          this.loadFallback();
        }
      } catch {
        this.loadFallback();
      }
    } else {
      this.loadFallback();
    }

    if (lastSyncStr) {
      const ts = parseInt(lastSyncStr, 10);
      if (!isNaN(ts)) {
        this.syncStatus.lastSync = new Date(ts);
      }
    }

    // Auto check daily sync
    this.checkDailyAutoSync().catch(() => {});
  }

  private loadFallback(): void {
    this.questions = fallbackQuestions as ExamQuestion[];
    this.syncStatus.source = 'fallback';
    this.syncStatus.questionCount = this.questions.length;
  }

  public async checkDailyAutoSync(): Promise<void> {
    const lastSyncTime = this.syncStatus.lastSync ? this.syncStatus.lastSync.getTime() : 0;
    const now = Date.now();

    if (now - lastSyncTime >= ONE_DAY_MS) {
      console.log('[QuestionBank] 24 hours elapsed since last sync. Initiating daily background refresh...');
      await this.reloadQuestions({ force: false });
    }
  }

  public async reloadQuestions(options: { force?: boolean } = {}): Promise<ExamQuestion[]> {
    this.syncStatus.isSyncing = true;
    this.syncStatus.error = undefined;
    this.notify();

    try {
      const headers: HeadersInit = {};
      const cachedEtag = localStorage.getItem(STORAGE_KEYS.ETAG);

      if (!options.force && cachedEtag) {
        headers['If-None-Match'] = cachedEtag;
      }

      const url = options.force
        ? (BUCKET_URL.includes('?') ? `${BUCKET_URL}&t=${Date.now()}` : `${BUCKET_URL}?t=${Date.now()}`)
        : BUCKET_URL;

      const response = await fetch(url, { headers });

      if (response.status === 304) {
        // Not modified
        const now = Date.now();
        localStorage.setItem(STORAGE_KEYS.LAST_SYNC, now.toString());
        this.syncStatus.lastSync = new Date(now);
        this.syncStatus.isSyncing = false;
        this.notify();
        return this.questions;
      }

      if (!response.ok) {
        throw new Error(`Bucket fetch returned HTTP ${response.status}: ${response.statusText}`);
      }

      const data: ExamQuestion[] = await response.json();

      // Schema verification
      if (!Array.isArray(data) || data.length === 0 || !data[0].id || !data[0].question) {
        throw new Error('Invalid question schema received from Cloud Storage bucket');
      }

      const etag = response.headers.get('ETag');
      if (etag) {
        localStorage.setItem(STORAGE_KEYS.ETAG, etag);
      }

      this.questions = data;
      const now = Date.now();
      localStorage.setItem(STORAGE_KEYS.CACHE, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEYS.LAST_SYNC, now.toString());

      this.syncStatus = {
        lastSync: new Date(now),
        questionCount: data.length,
        source: 'bucket',
        isSyncing: false,
      };

      this.notify();
      return this.questions;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('[QuestionBank] Could not fetch questions from bucket, keeping current set:', msg);
      this.syncStatus.isSyncing = false;
      this.syncStatus.error = msg;
      this.notify();
      return this.questions;
    }
  }

  public getQuestions(): ExamQuestion[] {
    return this.questions;
  }

  public getQuestionsByIds(ids: string[]): ExamQuestion[] {
    const set = new Set(ids);
    return this.questions.filter(q => set.has(q.id));
  }

  public getSyncStatus(): SyncStatus {
    return { ...this.syncStatus };
  }
}

export const questionBankService = QuestionBankService.getInstance();
