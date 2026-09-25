import React, { useState } from 'react';
import { ExamQuestion, OptionKey } from '../types/exam';
import { QuestionCard } from './QuestionCard';
import { X, ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';

interface ReviewModalProps {
  questions: ExamQuestion[];
  answers: Record<string, OptionKey[]>;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  questions,
  answers,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQ = questions[currentIndex];

  if (!currentQ) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div>
            <h3 className="text-lg font-bold text-white">Exam Review & Slide Explanations</h3>
            <p className="text-xs text-slate-400">Step through all questions to study curriculum details.</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable question area */}
        <div className="flex-1 overflow-y-auto py-4 pr-1">
          <QuestionCard
            question={currentQ}
            index={currentIndex}
            totalQuestions={questions.length}
            selectedAnswers={answers[currentQ.id] || []}
            onSelectOption={() => {}}
            isFlagged={false}
            onToggleFlag={() => {}}
            isReviewMode={true}
          />
        </div>

        {/* Bottom review navigation */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between shrink-0">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Quick indicators */}
          <div className="flex items-center space-x-1 overflow-x-auto max-w-[280px] sm:max-w-md py-1">
            {questions.map((q, idx) => {
              const userAns = (answers[q.id] || []).slice().sort();
              const corrAns = q.correct.slice().sort();
              const isCorrect = userAns.length === corrAns.length && userAns.every((v, i) => v === corrAns[i]);
              const isCurrent = idx === currentIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-6 h-6 rounded-md text-[10px] font-mono flex items-center justify-center shrink-0 border transition-all ${
                    isCurrent ? 'ring-2 ring-blue-500 scale-110 font-bold' : ''
                  } ${
                    isCorrect
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-600/60'
                      : 'bg-rose-950/80 text-rose-400 border-rose-600/60'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentIndex === questions.length - 1}
            onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
