import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { questionBankService, SyncStatus } from '../services/questionBankService';
import { 
  GraduationCap, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle, 
  Globe, 
  User as UserIcon, 
  LogOut, 
  BarChart3, 
  BookOpen, 
  PlayCircle 
} from 'lucide-react';

interface NavbarProps {
  currentTab: 'exam' | 'dashboard' | 'study';
  setCurrentTab: (tab: 'exam' | 'dashboard' | 'study') => void;
  selectedLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LANGUAGES = [
  { code: 'en', label: 'English (Original)' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  selectedLanguage,
  onLanguageChange,
}) => {
  const { user, signInWithGoogle, signOutUser } = useAuth();
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(questionBankService.getSyncStatus());
  const [syncToast, setSyncToast] = useState<string | null>(null);

  useEffect(() => {
    return questionBankService.subscribe(status => {
      setSyncStatus(status);
    });
  }, []);

  const handleManualSync = async () => {
    try {
      await questionBankService.reloadQuestions({ force: true });
      setSyncToast(`Synced ${syncStatus.questionCount} questions from Cloud Storage!`);
      setTimeout(() => setSyncToast(null), 3500);
    } catch {
      setSyncToast('Sync completed with local fallback.');
      setTimeout(() => setSyncToast(null), 3500);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Project Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentTab('exam')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Project Elevate
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Capstone GRAD &apos;26
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Agentic AI Exam Simulator & Analytics</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setCurrentTab('exam')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentTab === 'exam'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Exam Simulator</span>
            </button>

            <button
              onClick={() => setCurrentTab('dashboard')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentTab === 'dashboard'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Evolution Dashboard</span>
            </button>

            <button
              onClick={() => setCurrentTab('study')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentTab === 'study'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Study Mode</span>
            </button>
          </nav>

          {/* Right Actions: Sync Status, Language, User Auth */}
          <div className="flex items-center space-x-3">
            
            {/* Question Bank Cloud Sync Trigger */}
            <div className="relative">
              <button
                onClick={handleManualSync}
                disabled={syncStatus.isSyncing}
                title={`Corpus source: ${syncStatus.source} (${syncStatus.questionCount} questions). Click to reload from Cloud Storage bucket.`}
                className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 hover:bg-slate-750 text-slate-300 border border-slate-700/60 transition-colors disabled:opacity-50"
              >
                <RotateCw className={`w-3.5 h-3.5 text-cyan-400 ${syncStatus.isSyncing ? 'animate-spin' : ''}`} />
                <span className="hidden lg:inline">Sync Questions</span>
                <span className="px-1.5 py-0.2 bg-slate-700 rounded text-[10px] text-cyan-300 font-mono">
                  {syncStatus.questionCount}Q
                </span>
              </button>
              {syncToast && (
                <div className="absolute right-0 top-10 w-64 p-2 bg-emerald-950 border border-emerald-700/80 rounded-lg text-xs text-emerald-200 shadow-xl flex items-center space-x-2 z-50 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{syncToast}</span>
                </div>
              )}
            </div>

            {/* Language Selector */}
            <div className="relative flex items-center">
              <Globe className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none" />
              <select
                value={selectedLanguage}
                onChange={e => onLanguageChange(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs font-medium bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700/60 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none"
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-slate-900 text-slate-200">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Google Authentication */}
            {user ? (
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-800">
                <img
                  src={user.photoURL || 'https://lh3.googleusercontent.com/a/default-user=s96-c'}
                  alt={user.displayName || 'CE'}
                  className="w-8 h-8 rounded-full border border-blue-500/50 object-cover"
                />
                <div className="hidden xl:block text-left">
                  <p className="text-xs font-medium text-slate-200 leading-none truncate max-w-[120px]">
                    {user.displayName}
                  </p>
                  <p className="text-[10px] text-slate-400 leading-tight truncate max-w-[120px]">
                    {user.email}
                  </p>
                </div>
                <button
                  onClick={signOutUser}
                  title="Sign out"
                  className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Google Sign-In</span>
              </button>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};
