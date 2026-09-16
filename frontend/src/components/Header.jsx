import React from 'react';
import { Brain, Search, Sun, Plus } from 'lucide-react';

export default function Header() {
  return (
    <div className="px-6 py-4 glass-card border-b border-white/5 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center">
          <Brain className="text-white w-5 h-5" />
        </div>
        <div>
          <h2 className="font-semibold text-white text-sm">Kewa AI</h2>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white transition"><Search className="w-4 h-4" /></button>
        <button className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white transition"><Sun className="w-4 h-4" /></button>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/20 hover:scale-105 transition">
          <Plus className="w-4 h-4" /> New Chat
        </button>
      </div>
    </div>
  );
}
