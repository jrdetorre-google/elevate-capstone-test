import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { ExamQuestion, OptionKey, ModuleCode, ExamMode } from '../types/exam';
import { ExamAttempt, CategoryBreakdown, QuestionAuditItem } from '../types/examHistory';
import { questionBankService } from '../services/questionBankService';
import { examHistoryService } from '../services/examHistoryService';
import { geminiTranslator } from '../services/geminiTranslator';
import { useAuth } from './AuthContext';
import confetti from 'canvas-confetti';

interface ExamContextType {
  questions: ExamQuestion[];
  rawQuestions: ExamQuestion[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
  answers: Record<string, OptionKey[]>;
  flags: Record<string, boolean>;
  timeLeft: number;
  isTimerRunning: boolean;
  isSubmitted: boolean;
  currentAttempt: ExamAttempt | null;
  examMode: ExamMode;
  selectedLanguage: string;
  isTranslating: boolean;
  translationProgress: number;
  showReviewModal: boolean;
  setShowReviewModal: (show: boolean) => void;
  reviewQuestionIndex: number;
  setReviewQuestionIndex: (idx: number) => void;

  startExam: (mode?: ExamMode, mockNum?: number, moduleCode?: ModuleCode, lang?: string) => Promise<void>;
  selectOption: (questionId: string, key: OptionKey, isMulti: boolean, numCorrect: number) => void;
  toggleFlag: (questionId: string) => void;
  submitExam: () => Promise<void>;
  resetExam: () => void;
  setLanguage: (lang: string) => Promise<void>;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [rawQuestions, setRawQuestions] = useState<ExamQuestion[]>([]);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, OptionKey[]>>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(2700); // 45 min
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [currentAttempt, setCurrentAttempt] = useState<ExamAttempt | null>(null);
  const [examMode, setExamMode] = useState<ExamMode>('simulation');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [translationProgress, setTranslationProgress] = useState<number>(0);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState<number>(0);

  const startTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize questions from questionBankService
  useEffect(() => {
    const initial = questionBankService.getQuestions();
    setRawQuestions(initial);

    const unsubscribe = questionBankService.subscribe(status => {
      const updated = questionBankService.getQuestions();
      setRawQuestions(updated);
    });

    return () => unsubscribe();
  }, []);

  // Timer effect
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft]);

  // Sample questions according to mode
  const sampleQuestions = (
    allQs: ExamQuestion[], 
    mode: ExamMode, 
    mockNum = 1, 
    moduleCode?: ModuleCode
  ): ExamQuestion[] => {
    if (allQs.length === 0) return [];

    if (mode === 'marathon') {
      return [...allQs];
    }

    if (mode === 'module' && moduleCode) {
      return allQs.filter(q => q.module === moduleCode);
    }

    if (mode === 'mock') {
      // 5 non-overlapping mocks of 30 questions each
      const offset = ((mockNum - 1) % 5) * 30;
      return allQs.slice(offset, offset + 30);
    }

    // Default 'simulation': Capstone weighting
    // 9 M0, 7 M1, 7 M2, 7 M3 = 30 Qs
    const m0Qs = allQs.filter(q => q.module === 'M0');
    const m1Qs = allQs.filter(q => q.module === 'M1');
    const m2Qs = allQs.filter(q => q.module === 'M2');
    const m3Qs = allQs.filter(q => q.module === 'M3');

    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    const selectedM0 = shuffle(m0Qs).slice(0, 9);
    const selectedM1 = shuffle(m1Qs).slice(0, 7);
    const selectedM2 = shuffle(m2Qs).slice(0, 7);
    const selectedM3 = shuffle(m3Qs).slice(0, 7);

    return shuffle([...selectedM0, ...selectedM1, ...selectedM2, ...selectedM3]);
  };

  const startExam = async (
    mode: ExamMode = 'simulation', 
    mockNum = 1, 
    moduleCode?: ModuleCode,
    lang = selectedLanguage
  ) => {
    const all = rawQuestions.length > 0 ? rawQuestions : questionBankService.getQuestions();
    const sampled = sampleQuestions(all, mode, mockNum, moduleCode);

    setExamMode(mode);
    setAnswers({});
    setFlags({});
    setCurrentIndex(0);
    setIsSubmitted(false);
    setCurrentAttempt(null);
    setShowReviewModal(false);
    setTimeLeft(mode === 'marathon' ? 150 * 90 : 2700); // 45 min for 30 questions

    // Handle translation if not English
    if (lang !== 'en') {
      setIsTranslating(true);
      setTranslationProgress(0);
      try {
        const translated = await geminiTranslator.translateQuestionSet(
          sampled,
          lang,
          (completed, total) => {
            setTranslationProgress(Math.round((completed / total) * 100));
          }
        );
        setQuestions(translated);
      } catch (err) {
        console.warn('Failed translating exam set, using English:', err);
        setQuestions(sampled);
      } finally {
        setIsTranslating(false);
      }
    } else {
      setQuestions(sampled);
    }

    startTimeRef.current = Date.now();
    setIsTimerRunning(true);
  };

  const selectOption = (questionId: string, key: OptionKey, isMulti: boolean, numCorrect: number) => {
    if (isSubmitted) return;

    setAnswers(prev => {
      const current = prev[questionId] || [];
      if (!isMulti) {
        return { ...prev, [questionId]: [key] };
      }

      // Multi-Response logic
      let updated: OptionKey[];
      if (current.includes(key)) {
        updated = current.filter(k => k !== key);
      } else {
        if (current.length < numCorrect) {
          updated = [...current, key].sort();
        } else {
          // Replace last selection or keep within limit
          updated = [...current.slice(1), key].sort();
        }
      }
      return { ...prev, [questionId]: updated };
    });
  };

  const toggleFlag = (questionId: string) => {
    setFlags(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const submitExam = useCallback(async () => {
    if (isSubmitted) return;
    setIsTimerRunning(false);
    setIsSubmitted(true);

    const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000);

    // Compute scores
    const categoryStats: Record<ModuleCode, { total: number; correct: number }> = {
      M0: { total: 0, correct: 0 },
      M1: { total: 0, correct: 0 },
      M2: { total: 0, correct: 0 },
      M3: { total: 0, correct: 0 },
    };

    const auditTrail: QuestionAuditItem[] = [];
    let totalCorrect = 0;

    questions.forEach(q => {
      const userSelected = (answers[q.id] || []).slice().sort();
      const correctSorted = q.correct.slice().sort();

      // Strict scoring: exact match
      const isCorrect = 
        userSelected.length === correctSorted.length &&
        userSelected.every((val, idx) => val === correctSorted[idx]);

      categoryStats[q.module].total++;
      if (isCorrect) {
        categoryStats[q.module].correct++;
        totalCorrect++;
      }

      auditTrail.push({
        questionId: q.id,
        module: q.module,
        type: q.type,
        userSelected,
        correctOptions: q.correct,
        isCorrect,
      });
    });

    const totalQuestions = questions.length;
    const overallScorePercentage = Math.round((totalCorrect / (totalQuestions || 1)) * 1000) / 10;
    const passed = overallScorePercentage >= 90.0;

    const categoryBreakdowns: Record<ModuleCode, CategoryBreakdown> = {
      M0: {
        module: 'M0',
        totalQuestions: categoryStats.M0.total,
        correctCount: categoryStats.M0.correct,
        scorePercentage: categoryStats.M0.total > 0 ? Math.round((categoryStats.M0.correct / categoryStats.M0.total) * 1000) / 10 : 0,
      },
      M1: {
        module: 'M1',
        totalQuestions: categoryStats.M1.total,
        correctCount: categoryStats.M1.correct,
        scorePercentage: categoryStats.M1.total > 0 ? Math.round((categoryStats.M1.correct / categoryStats.M1.total) * 1000) / 10 : 0,
      },
      M2: {
        module: 'M2',
        totalQuestions: categoryStats.M2.total,
        correctCount: categoryStats.M2.correct,
        scorePercentage: categoryStats.M2.total > 0 ? Math.round((categoryStats.M2.correct / categoryStats.M2.total) * 1000) / 10 : 0,
      },
      M3: {
        module: 'M3',
        totalQuestions: categoryStats.M3.total,
        correctCount: categoryStats.M3.correct,
        scorePercentage: categoryStats.M3.total > 0 ? Math.round((categoryStats.M3.correct / categoryStats.M3.total) * 1000) / 10 : 0,
      },
    };

    const attempt: ExamAttempt = {
      id: 'att_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      userId: user?.uid || 'guest_ce',
      userEmail: user?.email || 'guest@google.com',
      userDisplayName: user?.displayName || 'Customer Engineer',
      timestamp: new Date().toISOString(),
      examMode,
      language: selectedLanguage,
      durationSeconds,
      overallScorePercentage,
      totalQuestions,
      totalCorrect,
      passed,
      categoryBreakdowns,
      auditTrail,
    };

    setCurrentAttempt(attempt);

    // Save to Firestore & local storage
    await examHistoryService.saveAttempt(attempt);

    // Trigger celebration confetti if passed >= 90%
    if (passed) {
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4285F4', '#34A853', '#FBBC05', '#EA4335'],
        });
      } catch (e) {
        console.log('Confetti triggered', e);
      }
    }
  }, [isSubmitted, questions, answers, examMode, selectedLanguage, user]);

  const resetExam = () => {
    setIsTimerRunning(false);
    setIsSubmitted(false);
    setAnswers({});
    setFlags({});
    setCurrentIndex(0);
    setCurrentAttempt(null);
    setShowReviewModal(false);
  };

  const setLanguage = async (lang: string) => {
    setSelectedLanguage(lang);
    if (questions.length > 0 && !isSubmitted) {
      setIsTranslating(true);
      setTranslationProgress(0);
      try {
        const translated = await geminiTranslator.translateQuestionSet(
          questions,
          lang,
          (completed, total) => {
            setTranslationProgress(Math.round((completed / total) * 100));
          }
        );
        setQuestions(translated);
      } catch (e) {
        console.warn('Language update failed:', e);
      } finally {
        setIsTranslating(false);
      }
    }
  };

  return (
    <ExamContext.Provider
      value={{
        questions,
        rawQuestions,
        currentIndex,
        setCurrentIndex,
        answers,
        flags,
        timeLeft,
        isTimerRunning,
        isSubmitted,
        currentAttempt,
        examMode,
        selectedLanguage,
        isTranslating,
        translationProgress,
        showReviewModal,
        setShowReviewModal,
        reviewQuestionIndex,
        setReviewQuestionIndex,
        startExam,
        selectOption,
        toggleFlag,
        submitExam,
        resetExam,
        setLanguage,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = (): ExamContextType => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};
