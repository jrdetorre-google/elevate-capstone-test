import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeLeft: number; // in seconds
  totalDuration?: number; // default 2700 (45 mins)
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, totalDuration = 2700 }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const percentRemaining = Math.max(0, Math.min(100, (timeLeft / totalDuration) * 100));

  // Visual urgency states
  const isDanger = timeLeft < 120; // < 2 minutes
  const isWarning = timeLeft < 600 && !isDanger; // < 10 minutes

  return (
    <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl shadow-inner">
      <div className="flex items-center space-x-2">
        {isDanger ? (
          <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
        ) : (
          <Clock className={`w-4 h-4 ${isWarning ? 'text-amber-400' : 'text-blue-400'}`} />
        )}
        <span
          className={`font-mono font-bold text-base tracking-wider ${
            isDanger
              ? 'text-rose-400 animate-pulse'
              : isWarning
              ? 'text-amber-400'
              : 'text-slate-100'
          }`}
        >
          {formattedTime}
        </span>
      </div>

      <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
        <div
          className={`h-full transition-all duration-1000 ${
            isDanger ? 'bg-rose-500' : isWarning ? 'bg-amber-500' : 'bg-blue-500'
          }`}
          style={{ width: `${percentRemaining}%` }}
        />
      </div>
    </div>
  );
};
