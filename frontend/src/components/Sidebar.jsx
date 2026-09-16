import React from 'react';
import { 
  Brain, Plus, Clock, Mic, Image as ImageIcon, Settings as SettingsIcon, 
  Trash2, Moon, Crown, ChevronRight, Menu 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-72 glass rounded-2xl flex flex-col justify-between p-4 hidden lg:flex h-full">
      <div>
        {/* Logo Header */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Brain className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-wide text-white">Kewa <span className="text-indigo-400">AI</span></h1>
              <p className="text-xs text-slate-400">Your AI Assistant</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-white transition"><Menu className="w-5 h-5" /></button>
        </div>

        {/* New Chat Button */}
        <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium flex items-center justify-center gap-3 shadow-lg shadow-indigo-600/20 transition-all mb-6">
          <Plus className="w-5 h-5" /> New Chat
        </button>

        {/* Navigation Links */}
        <nav className="space-y-1 text-sm">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"><Clock className="w-5 h-5" /> Chat History</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"><Mic className="w-5 h-5" /> Voice Mode</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"><ImageIcon className="w-5 h-5" /> Image Analysis</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"><SettingsIcon className="w-5 h-5" /> Settings</a>
        </nav>

        <div className="my-6 border-t border-white/10"></div>

        {/* Quick Actions */}
        <div className="space-y-1 text-sm">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Quick Actions</p>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"><Trash2 className="w-5 h-5" /> Clear Chat</a>
          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-300 hover:bg-white/5 transition">
            <span className="flex items-center gap-3"><Moon className="w-5 h-5" /> Dark Mode</span>
            <input type="checkbox" defaultChecked className="accent-indigo-500 cursor-pointer w-4 h-4" />
          </div>
          <a href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition">
            <span className="flex items-center gap-3"><Crown className="w-5 h-5 text-amber-400" /> Upgrade</span>
            <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium">Pro</span>
          </a>
        </div>
      </div>

      {/* Footer Quote & Credit */}
      <div className="space-y-4">
        <div className="p-3 rounded-xl glass-card text-xs italic text-slate-400 text-center">
          “Big dreams need smart tools.”<br />
          <span className="not-italic text-slate-500 text-[10px]">— Kewa AI</span>
        </div>
        <div className="text-center text-xs text-slate-500">
          Built with <span className="text-rose-500">❤️</span> by Deepak Kewat
        </div>
      </div>
    </aside>
  );
}
