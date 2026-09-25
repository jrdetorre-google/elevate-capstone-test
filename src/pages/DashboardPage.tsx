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
  Sparkles,
  Play,
  Database
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
    const userId = user?.uid || '';
    if (!userId) {
      setAttempts([]);
      setStats(null);
      setLoading(false);
      return;
    }

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
  if (stats && attempts.length > 0) {
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-slate-400">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-500 mb-2" />
        <span className="text-sm font-medium">Cargando métricas desde Cloud Firestore...</span>
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
              {user?.email || 'Google Candidate'}
            </span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Métricas de maestría en tiempo real sobre los 4 módulos de Project Elevate frente al umbral de acreditación del 90%.
          </p>
        </div>

        <button
          onClick={loadData}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors self-start sm:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Actualizar Datos</span>
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
            {stats?.totalPassedAttempts || 0} Superaron el 90%
          </span>
        </div>

        {/* KPI 2: Overall Weighted Average */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Media Ponderada</span>
            <Target className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {attempts.length > 0 ? `${stats?.averageScorePercentage || 0}%` : '--'}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Objetivo: &ge; 90.0%
          </span>
        </div>

        {/* KPI 3: Personal Best Score */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Mejor Puntuación</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-white font-mono">
            {attempts.length > 0 ? `${stats?.highestScorePercentage || 0}%` : '--'}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Última: {attempts.length > 0 ? `${stats?.latestScorePercentage || 0}%` : '--'}
          </span>
        </div>

        {/* KPI 4: Capstone Readiness Index */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Estado de Acreditación</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-1">
            {attempts.length === 0 ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-400 border border-slate-700">
                ⚪ LÍNEA BASE REQUERIDA
              </span>
            ) : stats?.capstoneReadiness === 'ready' ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                🟢 LISTO PARA EXAMEN
              </span>
            ) : stats?.capstoneReadiness === 'progressing' ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                🟡 EN PROGRESO
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">
                🔴 PRÁCTICA REQUERIDA
              </span>
            )}
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {hoursPracticed} Horas de Preparación
          </span>
        </div>

      </div>

      {/* Zero Attempts Empty Baseline State */}
      {attempts.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800/90 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
            <Database className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Línea Base Requerida: Sin Simulaciones Previas
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Aún no has completado ninguna simulación de examen con tu cuenta (<strong>{user?.email}</strong>). No existen datos simulados o ficticios; este panel reflejará exclusivamente tus evaluaciones reales.
            </p>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              En cuanto completes tu primera simulación oficial de 30 preguntas, se guardará en Cloud Firestore y verás automáticamente tus curvas de aprendizaje temporal y radar de competencias por módulo.
            </p>
          </div>

          <div className="pt-3">
            <button
              onClick={() => onLaunchModulePractice('M0')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white inline-flex items-center space-x-2 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Iniciar Primera Simulación de Examen (30 Preguntas)</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Automated Diagnostic Remediation Recommendation */}
          <div className="bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border border-blue-900/40 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                  <span>Recomendación Diagnóstica: Refuerzo Sugerido en {weakestModule}</span>
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Tus registros en Firestore indican que <strong>{weakestModule}</strong> cuenta actualmente con tu puntuación más baja ({lowestScore}%). Dedicar 15 minutos a este módulo aumentará tus probabilidades de superar el 90% en HackerRank.
                </p>
              </div>
            </div>

            <button
              onClick={() => onLaunchModulePractice(weakestModule)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center space-x-2 shadow-md shadow-blue-600/30 transition-all shrink-0 cursor-pointer"
            >
              <span>Practicar {weakestModule} Ahora</span>
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
                  <p className="text-xs text-slate-400">Rendimiento cronológico global en cada simulación.</p>
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                  90% Requerido
                </span>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={overallProgressionData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="shortDate" stroke="#64748b" tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                      itemStyle={{ color: '#f8fafc', fontSize: '12px' }}
                    />
                    <ReferenceLine y={90} stroke="#ef4444" strokeDasharray="4 4" label={{ value: '90% Benchmark', fill: '#ef4444', fontSize: 11, position: 'insideTopRight' }} />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 5, fill: '#3b82f6', stroke: '#1e3a8a', strokeWidth: 2 }}
                      activeDot={{ r: 7 }}
                      name="Score %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 3: Competency Radar Chart (1 Col) */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col">
              <div className="mb-2">
                <h3 className="text-base font-bold text-white">Radar de Competencias</h3>
                <p className="text-xs text-slate-400">Maestría por módulo del currículo.</p>
              </div>

              <div className="h-72 w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius="75%" data={radarData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={{ fontSize: 9 }} />
                    <Radar
                      name="Maestría %"
                      dataKey="score"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.35}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Chart 2: Category Evolution Line Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white">Evolución de Maestría por Módulo</h3>
                <p className="text-xs text-slate-400">Comportamiento específico en M0, M1, M2 y M3 a través del tiempo.</p>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span>M0</span></span>
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span>M1</span></span>
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span>M2</span></span>
                <span className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /><span>M3</span></span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={categoryEvolutionData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="shortDate" stroke="#64748b" tick={{ fontSize: 11 }} />
                  <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                    itemStyle={{ fontSize: '11px' }}
                  />
                  <ReferenceLine y={90} stroke="#475569" strokeDasharray="3 3" />
                  <Line type="monotone" dataKey="M0" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} name="M0: Foundations" />
                  <Line type="monotone" dataKey="M1" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} name="M1: Modernization" />
                  <Line type="monotone" dataKey="M2" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} name="M2: Security" />
                  <Line type="monotone" dataKey="M3" stroke="#a855f7" strokeWidth={2} dot={{ r: 3 }} name="M3: Cost & Eval" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Historical Attempts Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white">Historial Completo de Evaluaciones (Firestore)</h3>
                <p className="text-xs text-slate-400">Auditoría detallada de cada prueba realizada con tu credencial.</p>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {attempts.length} Registro{attempts.length === 1 ? '' : 's'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-3">Fecha</th>
                    <th className="py-3 px-3">Modo</th>
                    <th className="py-3 px-3">Puntuación</th>
                    <th className="py-3 px-3">Aciertos</th>
                    <th className="py-3 px-3">Duración</th>
                    <th className="py-3 px-3">M0</th>
                    <th className="py-3 px-3">M1</th>
                    <th className="py-3 px-3">M2</th>
                    <th className="py-3 px-3">M3</th>
                    <th className="py-3 px-3 text-right">Revisión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {attempts.slice().reverse().map((att) => (
                    <tr key={att.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-3 text-slate-300">
                        {new Date(att.timestamp).toLocaleString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 capitalize text-[10px]">
                          {att.examMode}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`font-bold ${att.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {att.overallScorePercentage}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-300">
                        {att.totalCorrect} / {att.totalQuestions}
                      </td>
                      <td className="py-3 px-3 text-slate-400">
                        {Math.floor((att.durationSeconds || 0) / 60)}m {((att.durationSeconds || 0) % 60)}s
                      </td>
                      <td className="py-3 px-3 text-slate-300">{att.categoryBreakdowns?.M0?.scorePercentage || 0}%</td>
                      <td className="py-3 px-3 text-slate-300">{att.categoryBreakdowns?.M1?.scorePercentage || 0}%</td>
                      <td className="py-3 px-3 text-slate-300">{att.categoryBreakdowns?.M2?.scorePercentage || 0}%</td>
                      <td className="py-3 px-3 text-slate-300">{att.categoryBreakdowns?.M3?.scorePercentage || 0}%</td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => setSelectedReviewAttempt(att)}
                          className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 transition-colors inline-flex items-center space-x-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Revisar</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Review Modal for Historical Attempt */}
      {selectedReviewAttempt && (
        <ReviewModal
          questions={questionBankService.getQuestionsByIds(selectedReviewAttempt.auditTrail.map(a => a.questionId))}
          answers={selectedReviewAttempt.auditTrail.reduce((acc, curr) => {
            acc[curr.questionId] = curr.userSelected;
            return acc;
          }, {} as Record<string, any>)}
          onClose={() => setSelectedReviewAttempt(null)}
        />
      )}

    </div>
  );
};
