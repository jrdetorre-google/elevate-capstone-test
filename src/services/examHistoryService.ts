import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebaseConfig';
import { ExamAttempt, UserStatsSummary } from '../types/examHistory';
import { ModuleCode } from '../types/exam';

const LOCAL_ATTEMPTS_PREFIX = 'elevate_attempts_';

export class ExamHistoryService {
  private static instance: ExamHistoryService;

  public static getInstance(): ExamHistoryService {
    if (!ExamHistoryService.instance) {
      ExamHistoryService.instance = new ExamHistoryService();
    }
    return ExamHistoryService.instance;
  }

  public async saveAttempt(attempt: ExamAttempt): Promise<void> {
    // 1. Always save to local storage for instant offline / local recall
    const localKey = `${LOCAL_ATTEMPTS_PREFIX}${attempt.userId}`;
    const existing = this.getLocalAttempts(attempt.userId);
    existing.push(attempt);
    localStorage.setItem(localKey, JSON.stringify(existing));

    // 2. If Firebase is active, persist to Firestore
    if (isFirebaseConfigured && !attempt.userId.startsWith('demo_')) {
      try {
        const attemptRef = doc(db, 'exam_attempts', attempt.id);
        await setDoc(attemptRef, attempt);

        // Update user summary
        const userRef = doc(db, 'users', attempt.userId);
        const stats = this.computeStats(existing);
        await setDoc(userRef, stats, { merge: true });
      } catch (err) {
        console.warn('Could not persist attempt to Firestore, cached locally:', err);
      }
    }
  }

  public async getUserAttempts(userId: string): Promise<ExamAttempt[]> {
    // 1. Fetch from Firestore if live
    if (isFirebaseConfigured && !userId.startsWith('demo_')) {
      try {
        const q = query(
          collection(db, 'exam_attempts'),
          where('userId', '==', userId),
          orderBy('timestamp', 'asc')
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const list: ExamAttempt[] = [];
          snap.forEach(docSnap => list.push(docSnap.data() as ExamAttempt));
          // Update local cache
          localStorage.setItem(`${LOCAL_ATTEMPTS_PREFIX}${userId}`, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('Firestore query failed, using local cache:', err);
      }
    }

    // 2. Fallback to local storage
    let attempts = this.getLocalAttempts(userId);

    // If candidate has 0 attempts, seed 4 realistic demo progression attempts for initial visualization
    if (attempts.length === 0) {
      attempts = this.generateSampleProgression(userId);
      localStorage.setItem(`${LOCAL_ATTEMPTS_PREFIX}${userId}`, JSON.stringify(attempts));
    }

    return attempts;
  }

  public getLocalAttempts(userId: string): ExamAttempt[] {
    const raw = localStorage.getItem(`${LOCAL_ATTEMPTS_PREFIX}${userId}`);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public computeStats(attempts: ExamAttempt[]): UserStatsSummary {
    if (attempts.length === 0) {
      return {
        userId: '',
        totalAttempts: 0,
        totalPassedAttempts: 0,
        averageScorePercentage: 0,
        highestScorePercentage: 0,
        latestScorePercentage: 0,
        totalPracticeTimeSeconds: 0,
        capstoneReadiness: 'needs_practice',
        moduleMastery: { M0: 0, M1: 0, M2: 0, M3: 0 },
        lastAttemptTimestamp: new Date().toISOString(),
      };
    }

    const totalAttempts = attempts.length;
    const totalPassed = attempts.filter(a => a.passed).length;
    const totalDuration = attempts.reduce((acc, a) => acc + (a.durationSeconds || 0), 0);
    const sumScores = attempts.reduce((acc, a) => acc + a.overallScorePercentage, 0);
    const avgScore = Math.round((sumScores / totalAttempts) * 10) / 10;
    const highestScore = Math.round(Math.max(...attempts.map(a => a.overallScorePercentage)) * 10) / 10;
    const latestScore = attempts[attempts.length - 1].overallScorePercentage;

    // Module mastery calculations
    const moduleTotals: Record<ModuleCode, { total: number; correct: number }> = {
      M0: { total: 0, correct: 0 },
      M1: { total: 0, correct: 0 },
      M2: { total: 0, correct: 0 },
      M3: { total: 0, correct: 0 },
    };

    attempts.forEach(a => {
      (['M0', 'M1', 'M2', 'M3'] as ModuleCode[]).forEach(m => {
        if (a.categoryBreakdowns && a.categoryBreakdowns[m]) {
          moduleTotals[m].total += a.categoryBreakdowns[m].totalQuestions;
          moduleTotals[m].correct += a.categoryBreakdowns[m].correctCount;
        }
      });
    });

    const moduleMastery: Record<ModuleCode, number> = {
      M0: moduleTotals.M0.total > 0 ? Math.round((moduleTotals.M0.correct / moduleTotals.M0.total) * 1000) / 10 : 0,
      M1: moduleTotals.M1.total > 0 ? Math.round((moduleTotals.M1.correct / moduleTotals.M1.total) * 1000) / 10 : 0,
      M2: moduleTotals.M2.total > 0 ? Math.round((moduleTotals.M2.correct / moduleTotals.M2.total) * 1000) / 10 : 0,
      M3: moduleTotals.M3.total > 0 ? Math.round((moduleTotals.M3.correct / moduleTotals.M3.total) * 1000) / 10 : 0,
    };

    // Readiness: If last 3 attempts all >= 90%
    const last3 = attempts.slice(-3);
    let readiness: 'ready' | 'progressing' | 'needs_practice' = 'needs_practice';
    if (last3.length >= 2 && last3.every(a => a.overallScorePercentage >= 90)) {
      readiness = 'ready';
    } else if (latestScore >= 75 || avgScore >= 80) {
      readiness = 'progressing';
    }

    return {
      userId: attempts[0].userId,
      totalAttempts,
      totalPassedAttempts: totalPassed,
      averageScorePercentage: avgScore,
      highestScorePercentage: highestScore,
      latestScorePercentage: latestScore,
      totalPracticeTimeSeconds: totalDuration,
      capstoneReadiness: readiness,
      moduleMastery,
      lastAttemptTimestamp: attempts[attempts.length - 1].timestamp,
    };
  }

  private generateSampleProgression(userId: string): ExamAttempt[] {
    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;

    return [
      {
        id: 'mock_att_1',
        userId,
        userEmail: 'ce.architect@google.com',
        userDisplayName: 'Customer Engineer',
        timestamp: new Date(now - 7 * day).toISOString(),
        examMode: 'simulation',
        language: 'en',
        durationSeconds: 2450,
        overallScorePercentage: 73.3,
        totalQuestions: 30,
        totalCorrect: 22,
        passed: false,
        categoryBreakdowns: {
          M0: { module: 'M0', totalQuestions: 9, correctCount: 7, scorePercentage: 77.8 },
          M1: { module: 'M1', totalQuestions: 7, correctCount: 5, scorePercentage: 71.4 },
          M2: { module: 'M2', totalQuestions: 7, correctCount: 5, scorePercentage: 71.4 },
          M3: { module: 'M3', totalQuestions: 7, correctCount: 5, scorePercentage: 71.4 },
        },
        auditTrail: [],
      },
      {
        id: 'mock_att_2',
        userId,
        userEmail: 'ce.architect@google.com',
        userDisplayName: 'Customer Engineer',
        timestamp: new Date(now - 4 * day).toISOString(),
        examMode: 'simulation',
        language: 'en',
        durationSeconds: 2280,
        overallScorePercentage: 83.3,
        totalQuestions: 30,
        totalCorrect: 25,
        passed: false,
        categoryBreakdowns: {
          M0: { module: 'M0', totalQuestions: 9, correctCount: 8, scorePercentage: 88.9 },
          M1: { module: 'M1', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
          M2: { module: 'M2', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
          M3: { module: 'M3', totalQuestions: 7, correctCount: 5, scorePercentage: 71.4 },
        },
        auditTrail: [],
      },
      {
        id: 'mock_att_3',
        userId,
        userEmail: 'ce.architect@google.com',
        userDisplayName: 'Customer Engineer',
        timestamp: new Date(now - 2 * day).toISOString(),
        examMode: 'simulation',
        language: 'en',
        durationSeconds: 2150,
        overallScorePercentage: 90.0,
        totalQuestions: 30,
        totalCorrect: 27,
        passed: true,
        categoryBreakdowns: {
          M0: { module: 'M0', totalQuestions: 9, correctCount: 9, scorePercentage: 100.0 },
          M1: { module: 'M1', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
          M2: { module: 'M2', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
          M3: { module: 'M3', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
        },
        auditTrail: [],
      },
      {
        id: 'mock_att_4',
        userId,
        userEmail: 'ce.architect@google.com',
        userDisplayName: 'Customer Engineer',
        timestamp: new Date(now - 12 * 60 * 60 * 1000).toISOString(),
        examMode: 'simulation',
        language: 'en',
        durationSeconds: 1980,
        overallScorePercentage: 93.3,
        totalQuestions: 30,
        totalCorrect: 28,
        passed: true,
        categoryBreakdowns: {
          M0: { module: 'M0', totalQuestions: 9, correctCount: 9, scorePercentage: 100.0 },
          M1: { module: 'M1', totalQuestions: 7, correctCount: 7, scorePercentage: 100.0 },
          M2: { module: 'M2', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
          M3: { module: 'M3', totalQuestions: 7, correctCount: 6, scorePercentage: 85.7 },
        },
        auditTrail: [],
      },
    ];
  }
}

export const examHistoryService = ExamHistoryService.getInstance();
