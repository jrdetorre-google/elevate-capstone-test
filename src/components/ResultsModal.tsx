import React from 'react';
import { ExamAttempt } from '../types/examHistory';
import { ModuleCode } from '../types/exam';
import { 
  Trophy, 
  XCircle, 
  RotateCcw, 
  Eye, 
  BarChart2, 
  Clock, 
  Target 
} from 'lucide-react';

interface ResultsModalProps {
  attempt: ExamAttempt;
  onRetake: () => void;
  onReview: () => void;
  onGoToDashboard: () => void;
}

const MODULE_TITLES: Record<ModuleCode, string> = {
  M0: 'M0: Agentic AI Foundations & ADK',
  M1: 'M1: Cloud Modernization & MCP',
  M2: 'M2: Security & Agent Governance',
  M3: 'M3: Evaluation, Data & Observability',
};

export const ResultsModal: React.FC<ResultsModalProps> = ({
  attempt,
  onRetake,
  onReview,
  onGoToDashboard,
}) => {
  const isPassed = attempt.passed;
  const minutes = Math.floor(attempt.durationSeconds / 60);
  const seconds = attempt.durationSeconds % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-scale-up">
        
        {/* Header Banner */}
        <div className="text-center pb-6 border-b border-slate-800">
          <div
            className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-lg ${
              isPassed
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-emerald-500/20'
                : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-rose-500/20'
            }`}
          >
            {isPassed ? <Trophy className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
          </div>

          <h2 className="text-2xl font-bold text-white tracking-tight">
            {isPassed ? 'Capstone Accreditation Achieved!' : 'Passing Benchmark Not Reached'}
          </h2>

          <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
            {isPassed
              ? 'Outstanding performance. Your score meets the official 90.0% Google Cloud Project Elevate standard.'
              : 'The official HackerRank assessment requires at least 90.0% (27/30 correct answers) to pass.'}
          </p>
        </div>

        {/* Score & Time Badges */}
        <div className="grid grid-cols-3 gap-3 my-6">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-center">
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <Target className="w-3.5 h-3.5 text-blue-400" />
              <span>Overall Score</span>
            </span>
            <div className="text-2xl font-black text-white mt-1 font-mono">
              {attempt.overallScorePercentage}%
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              {attempt.totalCorrect} / {attempt.totalQuestions} Correct
            </span>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-center">
            <span className="text-xs text-slate-400 flex items-center justify-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Time Taken</span>
            </span>
            <div className="text-2xl font-black text-white mt-1 font-mono">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-[11px] text-slate-400">of 45:00 limit</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-center">
            <span className="text-xs text-slate-400">Status</span>
            <div
              className={`text-lg font-bold mt-2 ${
                isPassed ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isPassed ? 'ACCREDITED' : 'NEEDS PRACTICE'}
            </div>
            <span className="text-[10px] text-slate-400">90% Benchmark</span>
          </div>
        </div>

        {/* Module Category Breakdowns */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Module Breakdown (M0 – M3)
          </h4>
          {(['M0', 'M1', 'M2', 'M3'] as ModuleCode[]).map(mod => {
            const cat = attempt.categoryBreakdowns[mod];
            if (!cat) return null;
            const pct = cat.scorePercentage;
            const isModPassed = pct >= 90;

            return (
              <div key={mod} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/60">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-slate-200">{MODULE_TITLES[mod]}</span>
                  <span className="font-mono text-slate-300">
                    {cat.correctCount}/{cat.totalQuestions} ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isModPassed ? 'bg-emerald-500' : pct >= 70 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onReview}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-2 transition-all shadow-md shadow-blue-600/30"
          >
            <Eye className="w-4 h-4" />
            <span>Review Answers & Explanations</span>
          </button>

          <button
            onClick={onRetake}
            className="w-full sm:w-auto py-3 px-4 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center space-x-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake</span>
          </button>

          <button
            onClick={onGoToDashboard}
            className="w-full sm:w-auto py-3 px-4 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center space-x-2 transition-colors"
          >
            <BarChart2 className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
        </div>

      </div>
    </div>
  );
};
