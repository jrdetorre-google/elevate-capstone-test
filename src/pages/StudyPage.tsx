import React, { useState } from 'react';
import { useExam } from '../context/ExamContext';
import { QuestionCard } from '../components/QuestionCard';
import { ModuleCode, OptionKey } from '../types/exam';
import { BookOpen, Search, Filter } from 'lucide-react';

export const StudyPage: React.FC = () => {
  const { rawQuestions } = useExam();
  const [selectedModule, setSelectedModule] = useState<'ALL' | ModuleCode>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userStudyAnswers, setUserStudyAnswers] = useState<Record<string, OptionKey[]>>({});

  const filteredQuestions = rawQuestions.filter(q => {
    const matchesModule = selectedModule === 'ALL' || q.module === selectedModule;
    const matchesSearch = 
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.lesson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModule && matchesSearch;
  });

  const handleSelectOption = (qId: string, key: OptionKey, isMulti: boolean, numCorrect: number) => {
    setUserStudyAnswers(prev => {
      const current = prev[qId] || [];
      if (!isMulti) {
        return { ...prev, [qId]: [key] };
      }
      let updated: OptionKey[];
      if (current.includes(key)) {
        updated = current.filter(k => k !== key);
      } else {
        if (current.length < numCorrect) {
          updated = [...current, key].sort();
        } else {
          updated = [...current.slice(1), key].sort();
        }
      }
      return { ...prev, [qId]: updated };
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center space-x-3">
          <BookOpen className="w-7 h-7 text-blue-400" />
          <span>Curriculum Study & Knowledge Base</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore all 150 canonical Project Elevate questions with immediate slide explanations and answer verification.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Module Filter Tabs */}
        <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 w-full sm:w-auto overflow-x-auto">
          {(['ALL', 'M0', 'M1', 'M2', 'M3'] as const).map(mod => (
            <button
              key={mod}
              onClick={() => setSelectedModule(mod)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                selectedModule === mod
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {mod === 'ALL' ? 'All (150)' : mod}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions by keyword, lesson, or ID..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        <div className="text-xs text-slate-400">
          Showing <strong>{filteredQuestions.length}</strong> questions
        </div>

        {filteredQuestions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={idx}
            totalQuestions={filteredQuestions.length}
            selectedAnswers={userStudyAnswers[q.id] || []}
            onSelectOption={key => handleSelectOption(q.id, key, q.type === 'multi', q.num_correct)}
            isFlagged={false}
            onToggleFlag={() => {}}
            isStudyMode={true}
          />
        ))}

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No questions match your current search or filter.
          </div>
        )}
      </div>

    </div>
  );
};
