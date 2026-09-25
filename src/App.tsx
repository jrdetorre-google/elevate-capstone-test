import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ExamProvider, useExam } from './context/ExamContext';
import { Navbar } from './components/Navbar';
import { ExamPage } from './pages/ExamPage';
import { DashboardPage } from './pages/DashboardPage';
import { StudyPage } from './pages/StudyPage';
import { ModuleCode } from './types/exam';
import { ShieldCheck, Cloud, Cpu } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'exam' | 'dashboard' | 'study'>('exam');
  const { selectedLanguage, setLanguage, startExam } = useExam();

  const handleLaunchModulePractice = (module: ModuleCode) => {
    setCurrentTab('exam');
    startExam('module', 1, module);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setLanguage}
      />

      {/* Main Tab Content */}
      <main className="flex-1 pb-16">
        {currentTab === 'exam' && (
          <ExamPage
            onGoToDashboard={() => setCurrentTab('dashboard')}
            onGoToStudy={() => setCurrentTab('study')}
          />
        )}
        {currentTab === 'dashboard' && (
          <DashboardPage onLaunchModulePractice={handleLaunchModulePractice} />
        )}
        {currentTab === 'study' && <StudyPage />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-slate-400">Google Cloud Project Elevate</span>
            <span>• Capstone Accreditation Engine</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Cloud className="w-3.5 h-3.5 text-slate-400" />
              <span>europe-southwest1 (Madrid)</span>
            </span>
            <span className="flex items-center space-x-1">
              <Cpu className="w-3.5 h-3.5 text-slate-400" />
              <span>Project: elevate-capstone-testprep</span>
            </span>
          </div>

          <div className="text-slate-400">
            Passing Benchmark: 90.0% (27/30 Questions)
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <ExamProvider>
        <AppContent />
      </ExamProvider>
    </AuthProvider>
  );
}

export default App;
