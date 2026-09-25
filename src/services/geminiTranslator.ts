import { GoogleGenAI } from '@google/genai';
import { ExamQuestion } from '../types/exam';

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';

const CACHE_PREFIX = 'elevate_i18n_v1_';

export interface TranslatedQuestion {
  id: string;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  explanation: string;
}

export class GeminiTranslator {
  private static instance: GeminiTranslator;
  private aiClient: GoogleGenAI | null = null;

  private constructor() {
    if (GEMINI_API_KEY) {
      this.aiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    }
  }

  public static getInstance(): GeminiTranslator {
    if (!GeminiTranslator.instance) {
      GeminiTranslator.instance = new GeminiTranslator();
    }
    return GeminiTranslator.instance;
  }

  public setApiKey(key: string): void {
    if (key) {
      this.aiClient = new GoogleGenAI({ apiKey: key });
    }
  }

  public isAvailable(): boolean {
    return Boolean(this.aiClient || GEMINI_API_KEY);
  }

  public getCachedTranslation(targetLang: string, questionId: string): TranslatedQuestion | null {
    if (targetLang === 'en') return null;
    const key = `${CACHE_PREFIX}${targetLang}_${questionId}`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  private saveCachedTranslation(targetLang: string, translation: TranslatedQuestion): void {
    const key = `${CACHE_PREFIX}${targetLang}_${translation.id}`;
    localStorage.setItem(key, JSON.stringify(translation));
  }

  public async translateQuestionSet(
    questions: ExamQuestion[],
    targetLang: string,
    onProgress?: (completed: number, total: number) => void
  ): Promise<ExamQuestion[]> {
    if (targetLang === 'en') {
      return questions;
    }

    const translatedResults: ExamQuestion[] = [];
    const missingIndices: number[] = [];
    const toTranslate: ExamQuestion[] = [];

    // Check local cache first
    questions.forEach((q, idx) => {
      const cached = this.getCachedTranslation(targetLang, q.id);
      if (cached) {
        translatedResults[idx] = {
          ...q,
          question: cached.question,
          options: cached.options,
          explanation: cached.explanation,
        };
      } else {
        missingIndices.push(idx);
        toTranslate.push(q);
      }
    });

    if (toTranslate.length === 0) {
      onProgress?.(questions.length, questions.length);
      return translatedResults;
    }

    if (!this.aiClient) {
      console.warn('Gemini API key not configured. Serving native English content.');
      return questions;
    }

    // Process missing questions in batches of 6
    const BATCH_SIZE = 6;
    let completedCount = questions.length - toTranslate.length;
    onProgress?.(completedCount, questions.length);

    for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
      const batch = toTranslate.slice(i, i + BATCH_SIZE);
      const batchIndices = missingIndices.slice(i, i + BATCH_SIZE);

      try {
        const batchTranslations = await this.callGeminiBatch(batch, targetLang);
        batchTranslations.forEach((item, itemIdx) => {
          const originalIdx = batchIndices[itemIdx];
          const origQ = questions[originalIdx];
          const merged: ExamQuestion = {
            ...origQ,
            question: item.question || origQ.question,
            options: item.options && item.options.length === 4 ? item.options : origQ.options,
            explanation: item.explanation || origQ.explanation,
          };
          translatedResults[originalIdx] = merged;
          this.saveCachedTranslation(targetLang, {
            id: origQ.id,
            question: merged.question,
            options: merged.options,
            explanation: merged.explanation,
          });
        });
      } catch (err) {
        console.warn(`Translation batch failed for language ${targetLang}, falling back to English:`, err);
        // Fallback for this batch
        batchIndices.forEach(originalIdx => {
          translatedResults[originalIdx] = questions[originalIdx];
        });
      }

      completedCount += batch.length;
      onProgress?.(completedCount, questions.length);
    }

    // Ensure all indices are filled
    for (let i = 0; i < questions.length; i++) {
      if (!translatedResults[i]) {
        translatedResults[i] = questions[i];
      }
    }

    return translatedResults;
  }

  private async callGeminiBatch(
    batch: ExamQuestion[],
    targetLang: string
  ): Promise<TranslatedQuestion[]> {
    if (!this.aiClient) throw new Error('Gemini AI client not initialized');

    const prompt = `You are an expert Google Cloud Localization Architect translating a technical exam from English to target language "${targetLang}".
Strict translation guidelines:
1. Preserve technical Google Cloud and Project Elevate terms intact without translating them (e.g. "Agent Runtime", "Agent Definition", "Engine Deployment", "ADK", "MCP", "GEAP", "Model Armor", "CodeMender", "Argolis", "SPIFFE", "mTLS", "HackerRank").
2. Accurately translate the technical stem, options A-D, and explanations into natural, highly professional ${targetLang}.
3. Return a valid JSON array of objects with the exact schema.

Questions to translate:
${JSON.stringify(
  batch.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    explanation: q.explanation,
  })),
  null,
  2
)}`;

    const response = await this.aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '[]';
    const parsed: TranslatedQuestion[] = JSON.parse(text);
    return parsed;
  }
}

export const geminiTranslator = GeminiTranslator.getInstance();
