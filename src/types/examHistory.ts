import { ModuleCode, OptionKey } from './exam';

export interface CategoryBreakdown {
  module: ModuleCode;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
}

export interface QuestionAuditItem {
  questionId: string;
  module: ModuleCode;
  type: 'single' | 'multi';
  userSelected: OptionKey[];
  correctOptions: OptionKey[];
  isCorrect: boolean;
}

export interface ExamAttempt {
  id: string;
  userId: string;
  userEmail: string;
  userDisplayName: string;
  timestamp: string; // ISO 8601
  examMode: string;
  language: string;
  durationSeconds: number; // e.g. 2100 (35 min)
  overallScorePercentage: number; // e.g. 93.3
  totalQuestions: number; // 30
  totalCorrect: number; // 28
  passed: boolean; // overallScorePercentage >= 90
  categoryBreakdowns: Record<ModuleCode, CategoryBreakdown>;
  auditTrail: QuestionAuditItem[];
}

export interface UserStatsSummary {
  userId: string;
  totalAttempts: number;
  totalPassedAttempts: number;
  averageScorePercentage: number;
  highestScorePercentage: number;
  latestScorePercentage: number;
  totalPracticeTimeSeconds: number;
  capstoneReadiness: 'ready' | 'progressing' | 'needs_practice';
  moduleMastery: Record<ModuleCode, number>; // average % per module
  lastAttemptTimestamp: string;
}
