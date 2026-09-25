import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { examHistoryService } from '../services/examHistoryService';
import { questionBankService } from '../services/questionBankService';
import { ExamAttempt, UserStatsSummary } from '../types/examHistory';
import { ModuleCode } from '../types/exam';
import { ReviewModal } from '../components/ReviewModal';
import { 
  Trophy, 
  Target, 
  Clock, 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Eye, 
  RefreshCw,
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

interface DashboardPageProps {
  onLaunchModulePractice: (module: ModuleCode) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onLaunchModulePractice }) => {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [stats, setStats] = useState<UserStatsSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedReviewAttempt, setSelectedReviewAttempt] = useState<ExamAttempt | null>(null);

  useEffect(() => {
    loadData();
  }, [user]);

  const loadData = async () => {
    setLoading(true);
    const userId = user?.uid || 'guest_ce';
    const userAttempts = await examHistoryService.getUserAttempts(userId);
    setAttempts(userAttempts);
    const userStats = examHistoryService.computeStats(userAttempts);
    setStats(userStats);
    setLoading(false);
  };

  // Prepare data for Chart 1: Overall Progression
  const overallProgressionData = attempts.map((a, idx) => ({
    name: `Attempt #${idx + 1}`,
    shortDate: new Date(a.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    score: a.overallScorePercentage,
    passingThreshold: 90.0,
    passed: a.passed,
    durationMin: Math.round((a.durationSeconds || 0) / 60),
  }));

  // Prepare data for Chart 2: Category Evolution
  const categoryEvolutionData = attempts.map((a, idx) => ({
    name: `Attempt #${idx + 1}`,
    shortDate: new Date(a.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    M0: a.categoryBreakdowns?.M0?.scorePercentage || 0,
    M1: a.categoryBreakdowns?.M1?.scorePercentage || 0,
    M2: a.categoryBreakdowns?.M2?.scorePercentage || 0,
    M3: a.categoryBreakdowns?.M3?.scorePercentage || 0,
  }));

  // Prepare data for Chart 3: Radar Chart
  const radarData = [
    { subject: 'M0: Foundations & ADK', score: stats?.moduleMastery.M0 || 0, fullMark: 100 },
    { subject: 'M1: Modernization & MCP', score: stats?.moduleMastery.M1 || 0, fullMark: 100 },
    { subject: 'M2: Security & Governance', score: stats?.moduleMastery.M2 || 0, fullMark: 100 },
    { subject: 'M3: Evaluation & Cost', score: stats?.moduleMastery.M3 || 0, fullMark: 100 },
  ];

  // Diagnostic Weakest Module
  let weakestModule: ModuleCode = 'M0';
  let lowestScore = 100;
  if (stats) {
    (['M0', 'M1', 'M2', 'M3'] as ModuleCode[]).forEach(m => {
      const score = stats.moduleMastery[m] || 0;
      if (score < lowestScore) {
        lowestScore = score;
        weakestModule = m;
      }
    });
  }

  const hoursPracticed = stats
    ? (stats.totalPracticeTimeSeconds / 3600).toFixed(1)
    : '0.0';

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-400">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500 mr-2" />
        <span>Loading performance analytics...</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-3">
            <span>Candidate Evolution Dashboard</span>
            <span className="text-xs px-2.5 py-1 rounded-full font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
              Personal Analytics
            </span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time mastery tracking across all four Project Elevate exam modules vs. the 90% accreditation threshold.
          </p>
        </div>

        <button
          onClick={loadData}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refresh Analytics</span>
        </button>
      </div>

      {/* Executive KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* KPI 1: Total Simulations */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Simulations Completed</span>
            <Trophy className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {stats?.totalAttempts || 0}
          </div>
          <span className="text-[11px] text-emerald-400 font-medium mt-1 block">
            {stats?.totalPassedAttempts || 0} Met 90% Benchmark
          </span>
        </div>

        {/* KPI 2: Overall Weighted Average */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Weighted Average Score</span>
            <Target className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {stats?.averageScorePercentage || 0}%
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Target: &ge; 90.0%
          </span>
        </div>

        {/* KPI 3: Personal Best Score */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Personal Best Score</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {stats?.highestScorePercentage || 0}%
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Latest: {stats?.latestScorePercentage || 0}%
          </span>
        </div>

        {/* KPI 4: Capstone Readiness Index */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Capstone Readiness</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-1">
            {stats?.capstoneReadiness === 'ready' ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                🟢 EXAM READY
              </span>
            ) : stats?.capstoneReadiness === 'progressing' ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                🟡 PROGRESSING
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
                🔴 NEEDS PRACTICE
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {hoursPracticed} Hours Dedicated
          </span>
        </div>

      </div>

      {/* Automated Diagnostic Remediation Recommendation */}
      <div className="bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border border-blue-900/40 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center space-x-2">
              <span>Diagnostic Recommendation: Targeted Review Needed for {weakestModule}</span>
            </h4>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Your historical data indicates <strong>{weakestModule}</strong> currently has your lowest score ({lowestScore}%). Focusing 15 minutes of targeted study on this module will yield the highest probability of exceeding the 90% HackerRank threshold.
            </p>
          </div>
        </div>

        <button
          onClick={() => onLaunchModulePractice(weakestModule)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center space-x-2 shadow-md shadow-blue-600/30 transition-all shrink-0"
        >
          <span>Practice {weakestModule} Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart 1: Overall Progression vs 90% Benchmark (2 Cols) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white">Score Progression vs. 90% Benchmark</h3>
              <p className="text-xs text-slate-400">Chronological overall performance across exam attempts.</p>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
              90% Required
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={overallProgressionData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="shortDate" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-xl text-xs space-y-1">
                          <p className="font-bold text-slate-200">{data.name} ({data.shortDate})</p>
                          <p className="text-blue-400 font-mono">Score: {data.score}%</p>
                          <p className="text-slate-400 font-mono">Time: {data.durationMin} mins</p>
                          <p className={data.passed ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                            {data.passed ? 'Passed (>=90%)' : 'Did Not Pass (<90%)'}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine y={90} stroke="#ef4444" strokeDasharray="5 5" label={{ value: '90% Benchmark', fill: '#ef4444', fontSize: 10, position: 'insideTopRight' }} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#3b82f6', stroke: '#1e3a8a', strokeWidth: 2 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Category Mastery Radar Chart (1 Col) */}
        <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white mb-1">Module Competency Radar</h3>
            <p className="text-xs text-slate-400 mb-2">Balance across all four syllabus pillars.</p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <PolarRadiusAxis domain={[0, 100]} stroke="#475569" tick={{ fontSize: 9 }} />
                <Radar
                  name="Mastery %"
                  dataKey="score"
                  stroke="#38bdf8"
                  fill="#0284c7"
                  fillOpacity={0.45}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300 pt-2 border-t border-slate-800">
            <div>M0: <strong className="text-blue-400">{stats?.moduleMastery.M0}%</strong></div>
            <div>M1: <strong className="text-emerald-400">{stats?.moduleMastery.M1}%</strong></div>
            <div>M2: <strong className="text-amber-400">{stats?.moduleMastery.M2}%</strong></div>
            <div>M3: <strong className="text-purple-400">{stats?.moduleMastery.M3}%</strong></div>
          </div>
        </div>

      </div>

      {/* Chart 2: 4-Line Category Evolution Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-white">Category-Level Evolution Over Time (M0 – M3)</h3>
            <p className="text-xs text-slate-400">Detailed trajectories for each of the four Elevate curriculum modules.</p>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="flex items-center space-x-1 text-blue-400">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>M0</span>
            </span>
            <span className="flex items-center space-x-1 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>M1</span>
            </span>
            <span className="flex items-center space-x-1 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>M2</span>
            </span>
            <span className="flex items-center space-x-1 text-purple-400">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>M3</span>
            </span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={categoryEvolutionData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="shortDate" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-xl text-xs space-y-1">
                        <p className="font-bold text-slate-200">{data.name} ({data.shortDate})</p>
                        <p className="text-blue-400 font-mono">M0 Foundations: {data.M0}%</p>
                        <p className="text-emerald-400 font-mono">M1 Modernization: {data.M1}%</p>
                        <p className="text-amber-400 font-mono">M2 Security: {data.M2}%</p>
                        <p className="text-purple-400 font-mono">M3 Evaluation: {data.M3}%</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <ReferenceLine y={90} stroke="#ef4444" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="M0" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} name="M0" />
              <Line type="monotone" dataKey="M1" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} name="M1" />
              <Line type="monotone" dataKey="M2" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4 }} name="M2" />
              <Line type="monotone" dataKey="M3" stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 4 }} name="M3" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Historical Attempts Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-white mb-4">Historical Simulation Log</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono">
                <th className="pb-3 pl-2">Date & Time</th>
                <th className="pb-3">Mode</th>
                <th className="pb-3">Language</th>
                <th className="pb-3">Duration</th>
                <th className="pb-3">Overall Score</th>
                <th className="pb-3">M0</th>
                <th className="pb-3">M1</th>
                <th className="pb-3">M2</th>
                <th className="pb-3">M3</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 pr-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {attempts.slice().reverse().map((att, i) => {
                const dateStr = new Date(att.timestamp).toLocaleString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                });
                const durMin = Math.round((att.durationSeconds || 0) / 60);

                return (
                  <tr key={att.id || i} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 pl-2 font-mono text-slate-300">{dateStr}</td>
                    <td className="py-3.5 capitalize">{att.examMode}</td>
                    <td className="py-3.5 uppercase font-mono">{att.language || 'EN'}</td>
                    <td className="py-3.5 font-mono">{durMin} min</td>
                    <td className="py-3.5 font-bold font-mono text-white">
                      {att.overallScorePercentage}%
                    </td>
                    <td className="py-3.5 font-mono text-blue-400">
                      {att.categoryBreakdowns?.M0?.scorePercentage || 0}%
                    </td>
                    <td className="py-3.5 font-mono text-emerald-400">
                      {att.categoryBreakdowns?.M1?.scorePercentage || 0}%
                    </td>
                    <td className="py-3.5 font-mono text-amber-400">
                      {att.categoryBreakdowns?.M2?.scorePercentage || 0}%
                    </td>
                    <td className="py-3.5 font-mono text-purple-400">
                      {att.categoryBreakdowns?.M3?.scorePercentage || 0}%
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          att.passed
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        }`}
                      >
                        {att.passed ? 'PASSED' : 'RETAKE'}
                      </span>
                    </td>
                    <td className="py-3.5 pr-2 text-right">
                      <button
                        onClick={() => setSelectedReviewAttempt(att)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors inline-flex items-center space-x-1"
                      >
                        <Eye className="w-3 h-3 text-blue-400" />
                        <span>Review</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Modal if launched from Table */}
      {selectedReviewAttempt && (
        <ReviewModal
          questions={questionBankService.getQuestions().slice(0, 30)}
          answers={
            selectedReviewAttempt.auditTrail?.reduce((acc, item) => {
              acc[item.questionId] = item.userSelected;
              return acc;
            }, {} as Record<string, any>) || {}
          }
          onClose={() => setSelectedReviewAttempt(null)}
        />
      )}

    </div>
  );
};
