export type ModuleCode = 'M0' | 'M1' | 'M2' | 'M3';
export type QuestionType = 'single' | 'multi';
export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface ExamOption {
  key: OptionKey;
  text: string;
}

export interface ExamQuestion {
  id: string; // e.g. "Q001"
  module: ModuleCode; // "M0" | "M1" | "M2" | "M3"
  lesson: string; // e.g. "M0L1 Introduction"
  type: QuestionType; // "single" | "multi"
  num_correct: number; // 1, 2, or 3
  question: string;
  options: ExamOption[];
  correct: OptionKey[];
  explanation: string;
}

export type ExamMode = 'simulation' | 'mock' | 'marathon' | 'module';

export interface ExamState {
  currentQuestionIndex: number;
  userAnswers: Record<string, OptionKey[]>;
  flaggedQuestions: Record<string, boolean>;
  timeRemainingSeconds: number; // 45 * 60 = 2700
  isSubmitted: boolean;
  startTime: number;
  endTime?: number;
}
