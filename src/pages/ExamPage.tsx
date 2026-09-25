import React, { useState } from 'react';
import { useExam } from '../context/ExamContext';
import { QuestionCard } from '../components/QuestionCard';
import { QuestionGrid } from '../components/QuestionGrid';
import { Timer } from '../components/Timer';
import { ResultsModal } from '../components/ResultsModal';
import { ReviewModal } from '../components/ReviewModal';
import { ModuleCode, ExamMode } from '../types/exam';
import { 
  Play, 
  Layers, 
  Flame, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertCircle,
  Loader2 
} from 'lucide-react';

interface ExamPageProps {
  onGoToDashboard: () => void;
  onGoToStudy: () => void;
}

export const ExamPage: React.FC<ExamPageProps> = ({ onGoToDashboard, onGoToStudy }) => {
  const {
    questions,
    currentIndex,
    setCurrentIndex,
    answers,
    flags,
    timeLeft,
    isTimerRunning,
    isSubmitted,
    currentAttempt,
    isTranslating,
    translationProgress,
    startExam,
    selectOption,
    toggleFlag,
    submitExam,
    resetExam,
  } = useExam();

  const [selectedMock, setSelectedMock] = useState<number>(1);
  const [selectedModule, setSelectedModule] = useState<ModuleCode>('M0');
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);

  const currentQ = questions[currentIndex];
  const answeredCount = questions.filter(q => (answers[q.id] || []).length > 0).length;
  const unansweredCount = questions.length - answeredCount;

  // 1. Loading / Translating State
  if (isTranslating) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Preparing Multilingual Exam</h3>
        <p className="text-sm text-slate-400 max-w-md mb-4">
          Translating questions using Gemini 2.5 Flash while strictly preserving Google Cloud technical terms...
        </p>
        <div className="w-64 h-2.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${translationProgress}%` }}
          />
        </div>
        <span className="text-xs font-mono text-slate-400 mt-2">{translationProgress}% completed</span>
      </div>
    );
  }

  // 2. Exam Launcher Landing View
  if (questions.length === 0 || (!isTimerRunning && !isSubmitted)) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border border-slate-800 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 mb-4">
              <span>HackerRank Knowledge Assessment Simulator</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Project Elevate Capstone Accreditation
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Official test simulation for Google Cloud Customer Engineers. 30 questions, 45 minutes, 80/20 single vs multi-response ratio, and a strict <strong>90% passing benchmark (27/30)</strong>.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => startExam('simulation')}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center space-x-2 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Capstone Simulation (30 Qs)</span>
              </button>

              <button
                onClick={onGoToDashboard}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700 transition-colors"
              >
                View Evolution Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Exam Modes Grid */}
        <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
          <Award className="w-5 h-5 text-blue-400" />
          <span>Select Practice Simulation Mode</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mock Exams 1 to 5 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Curated Mock Exams (1 to 5)</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                5 mutually exclusive, non-overlapping 30-question sets partitioned from the 150-question syllabus.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <label className="text-xs text-slate-400">Select Mock:</label>
                <select
                  value={selectedMock}
                  onChange={e => setSelectedMock(Number(e.target.value))}
                  className="bg-slate-950 text-slate-200 text-xs px-2.5 py-1 rounded-lg border border-slate-700 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>
                      Mock Exam #{num} (30 Qs)
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={() => startExam('mock', selectedMock)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Start Mock #{selectedMock}
            </button>
          </div>

          {/* Module-Focused Practice */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Targeted Module Practice</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Focus exclusively on your weakest module to close diagnostic gaps before the Capstone.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <label className="text-xs text-slate-400">Module:</label>
                <select
                  value={selectedModule}
                  onChange={e => setSelectedModule(e.target.value as ModuleCode)}
                  className="bg-slate-950 text-slate-200 text-xs px-2.5 py-1 rounded-lg border border-slate-700 focus:outline-none"
                >
                  <option value="M0">M0: Foundations & ADK (45 Qs)</option>
                  <option value="M1">M1: Modernization & MCP (35 Qs)</option>
                  <option value="M2">M2: Security & Governance (35 Qs)</option>
                  <option value="M3">M3: Evaluation & Cost (35 Qs)</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => startExam('module', 1, selectedModule)}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Practice {selectedModule} Only
            </button>
          </div>

          {/* 150-Question Marathon Mode */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Full 150-Question Marathon</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Complete mastery trial containing all 150 questions across all 25 lessons.
              </p>
              <span className="inline-block text-[11px] text-amber-400/90 font-mono mb-4">
                Time Limit: 225 Minutes
              </span>
            </div>
            <button
              onClick={() => startExam('marathon')}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Start Marathon
            </button>
          </div>

        </div>

      </div>
    );
  }

  // 3. Active Exam View
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      {/* Top Sticky Bar: Timer, Progress, Submit Button */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl backdrop-blur-md shadow-lg sticky top-20 z-40">
        <div className="flex items-center space-x-3">
          <Timer timeLeft={timeLeft} />
          <div className="hidden sm:block text-xs text-slate-400">
            <span>Answered: </span>
            <strong className="text-blue-400 font-mono">
              {answeredCount}/{questions.length}
            </strong>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Submit Exam</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Question Card & Prev/Next Controls */}
        <div className="lg:col-span-2 space-y-4">
          {currentQ && (
            <QuestionCard
              question={currentQ}
              index={currentIndex}
              totalQuestions={questions.length}
              selectedAnswers={answers[currentQ.id] || []}
              onSelectOption={key =>
                selectOption(currentQ.id, key, currentQ.type === 'multi', currentQ.num_correct)
              }
              isFlagged={Boolean(flags[currentQ.id])}
              onToggleFlag={() => toggleFlag(currentQ.id)}
            />
          )}

          {/* Prev / Next Question Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 disabled:opacity-40 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            <button
              disabled={currentIndex === questions.length - 1}
              onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 disabled:opacity-40 transition-colors"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Col: 30 Question Matrix Grid */}
        <div className="lg:col-span-1 space-y-4">
          <QuestionGrid
            totalQuestions={questions.length}
            currentIndex={currentIndex}
            onSelectIndex={idx => setCurrentIndex(idx)}
            answers={answers}
            flags={flags}
            questionIds={questions.map(q => q.id)}
          />
        </div>

      </div>

      {/* Confirmation Modal before Final Submission */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Submit Exam for Grading?</h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              You have answered <strong>{answeredCount} of {questions.length}</strong> questions.
              {unansweredCount > 0 && (
                <span className="text-amber-400 block mt-1 font-semibold">
                  ⚠️ You still have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}!
                </span>
              )}
            </p>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                Keep Reviewing
              </button>
              <button
                onClick={() => {
                  setShowConfirmSubmit(false);
                  submitExam();
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-colors"
              >
                Confirm & Grade
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Post-Exam Results Modal */}
      {isSubmitted && currentAttempt && !showReview && (
        <ResultsModal
          attempt={currentAttempt}
          onRetake={() => {
            resetExam();
            startExam('simulation');
          }}
          onReview={() => setShowReview(true)}
          onGoToDashboard={onGoToDashboard}
        />
      )}

      {/* Detailed Slide Explanation Review Modal */}
      {showReview && (
        <ReviewModal
          questions={questions}
          answers={answers}
          onClose={() => setShowReview(false)}
        />
      )}

    </div>
  );
};
