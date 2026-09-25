import React from 'react';
import { ExamQuestion, OptionKey, ModuleCode } from '../types/exam';
import { Flag, CheckCircle, XCircle, Info, Sparkles } from 'lucide-react';

interface QuestionCardProps {
  question: ExamQuestion;
  index: number;
  totalQuestions: number;
  selectedAnswers: OptionKey[];
  onSelectOption: (key: OptionKey) => void;
  isFlagged: boolean;
  onToggleFlag: () => void;
  isStudyMode?: boolean;
  isReviewMode?: boolean;
}

const MODULE_INFO: Record<ModuleCode, { label: string; badgeClass: string }> = {
  M0: {
    label: 'Module 0: Agentic AI Foundations & ADK',
    badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  },
  M1: {
    label: 'Module 1: Cloud Modernization & MCP',
    badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  },
  M2: {
    label: 'Module 2: Security & Governance',
    badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  },
  M3: {
    label: 'Module 3: ADK 2.0, Evaluation & Cost',
    badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  },
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalQuestions,
  selectedAnswers,
  onSelectOption,
  isFlagged,
  onToggleFlag,
  isStudyMode = false,
  isReviewMode = false,
}) => {
  const isMulti = question.type === 'multi';
  const showFeedback = isStudyMode || isReviewMode;
  const modInfo = MODULE_INFO[question.module] || MODULE_INFO.M0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative transition-all">
      
      {/* Top Header: Question Counter, Module Badge, Type Badge, Flag Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
        <div className="flex items-center space-x-2.5">
          <span className="text-sm font-bold text-slate-400 tracking-wide">
            Question {index + 1} of {totalQuestions}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${modInfo.badgeClass}`}>
            {question.module}
          </span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${
              isMulti
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                : 'bg-blue-500/15 text-blue-300 border-blue-500/30'
            }`}
          >
            {isMulti
              ? `Multi-Response (Select ${question.num_correct} options)`
              : 'Single-Choice (Select 1 option)'}
          </span>
        </div>

        {/* Flag for Review */}
        {!isReviewMode && (
          <button
            onClick={onToggleFlag}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isFlagged
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                : 'bg-slate-800/60 text-slate-400 border-slate-700/60 hover:text-slate-200'
            }`}
          >
            <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
          </button>
        )}
      </div>

      {/* Lesson Metadata Sub-heading */}
      <div className="pt-4 pb-2 text-xs text-slate-400 font-mono">
        {question.lesson} • ID: {question.id}
      </div>

      {/* Question Stem Text */}
      <h2 className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed pt-1 pb-6">
        {question.question}
      </h2>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map(option => {
          const isSelected = selectedAnswers.includes(option.key);
          const isCorrectAnswer = question.correct.includes(option.key);

          // State styling
          let borderClass = 'border-slate-800 hover:border-slate-700 bg-slate-950/60';
          let indicatorClass = 'border-slate-600 text-slate-400';

          if (showFeedback) {
            if (isCorrectAnswer) {
              borderClass = 'border-emerald-500/80 bg-emerald-950/30 ring-1 ring-emerald-500/50';
              indicatorClass = 'bg-emerald-500 border-emerald-500 text-white';
            } else if (isSelected && !isCorrectAnswer) {
              borderClass = 'border-rose-500/80 bg-rose-950/30 ring-1 ring-rose-500/50';
              indicatorClass = 'bg-rose-500 border-rose-500 text-white';
            }
          } else if (isSelected) {
            borderClass = 'border-blue-500 bg-blue-950/40 ring-1 ring-blue-500/60 shadow-md shadow-blue-500/10';
            indicatorClass = 'bg-blue-600 border-blue-500 text-white';
          }

          return (
            <div
              key={option.key}
              onClick={() => !isReviewMode && onSelectOption(option.key)}
              className={`flex items-start space-x-3.5 p-4 rounded-xl border text-sm sm:text-base transition-all ${
                !isReviewMode ? 'cursor-pointer' : ''
              } ${borderClass}`}
            >
              {/* Option Key Badge (Radio vs Checkbox style) */}
              <div
                className={`w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs border ${
                  isMulti ? 'rounded-md' : 'rounded-full'
                } ${indicatorClass}`}
              >
                {option.key}
              </div>

              {/* Option Text */}
              <div className="flex-1 text-slate-200 leading-normal pt-0.5">
                {option.text}
              </div>

              {/* Feedback Icons */}
              {showFeedback && (
                <div className="shrink-0 mt-0.5">
                  {isCorrectAnswer ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  ) : isSelected ? (
                    <XCircle className="w-5 h-5 text-rose-400" />
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Multi-Selection Counter Indicator */}
      {isMulti && !showFeedback && (
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Selected:{' '}
            <strong className="text-blue-400 font-mono">
              {selectedAnswers.length} of {question.num_correct}
            </strong>
          </span>
          {selectedAnswers.length === question.num_correct && (
            <span className="text-emerald-400 font-medium flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exact requirement selected</span>
            </span>
          )}
        </div>
      )}

      {/* Slide Explanation (Study / Review Mode) */}
      {showFeedback && question.explanation && (
        <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center space-x-2 text-blue-400 font-semibold mb-1.5">
            <Info className="w-4 h-4" />
            <span>Project Elevate Curriculum Context & Slide Reference</span>
          </div>
          <p className="leading-relaxed pl-6">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};
