import React from 'react';
import { OptionKey } from '../types/exam';
import { Flag, CheckCircle2 } from 'lucide-react';

interface QuestionGridProps {
  totalQuestions: number;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  answers: Record<string, OptionKey[]>;
  flags: Record<string, boolean>;
  questionIds: string[];
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  totalQuestions,
  currentIndex,
  onSelectIndex,
  answers,
  flags,
  questionIds,
}) => {
  const answeredCount = questionIds.filter(id => (answers[id] || []).length > 0).length;
  const flaggedCount = questionIds.filter(id => Boolean(flags[id])).length;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
        <h3 className="text-sm font-semibold text-slate-200">Question Matrix</h3>
        <span className="text-xs font-mono text-slate-400">
          {answeredCount}/{totalQuestions} Answered
        </span>
      </div>

      {/* Grid of 30 questions */}
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const qId = questionIds[idx];
          const isCurrent = idx === currentIndex;
          const isAnswered = qId && (answers[qId] || []).length > 0;
          const isFlagged = qId && Boolean(flags[qId]);

          let buttonStyle = 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700';

          if (isCurrent) {
            buttonStyle = 'bg-blue-600 text-white border-blue-400 ring-2 ring-blue-500/50 shadow-md shadow-blue-500/30';
          } else if (isAnswered) {
            buttonStyle = 'bg-slate-800 text-blue-300 border-blue-500/40 font-semibold';
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`relative h-10 rounded-xl text-xs font-medium border flex items-center justify-center transition-all ${buttonStyle}`}
            >
              <span>{idx + 1}</span>

              {/* Flag Indicator */}
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border border-slate-900 flex items-center justify-center">
                  <Flag className="w-2 h-2 text-slate-950 fill-current" />
                </span>
              )}

              {/* Answered indicator checkmark if not current */}
              {isAnswered && !isCurrent && (
                <CheckCircle2 className="w-2.5 h-2.5 text-blue-400 absolute bottom-1 right-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-[11px] text-slate-400">
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded bg-blue-600 border border-blue-400" />
          <span>Current</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded bg-slate-800 border border-blue-500/40" />
          <span>Answered</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded bg-slate-950 border border-amber-500/60 relative">
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-500 rounded-full" />
          </div>
          <span>Flagged</span>
        </div>
      </div>
    </div>
  );
};
