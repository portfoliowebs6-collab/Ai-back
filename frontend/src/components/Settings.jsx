import React from 'react';
import { 
  Crown, ChevronDown, Settings, MessageSquare, Mic, Image as ImageIcon, 
  Volume2, Clock, Code, MapPin, ChevronRight 
} from 'lucide-react';

export default function RightSidebar() {
  return (
    <aside className="w-80 glass rounded-2xl flex flex-col p-4 hidden xl:flex overflow-y-auto space-y-6 h-full">
      
      {/* User Profile Header */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}} className="w-10 h-10 rounded-full object-cover border border-amber-500/50" alt="Profile" />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-sm text-white">Deepak Kewat</h3>
              <Crown className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-xs text-slate-400">Free Plan</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-white"><ChevronDown className="w-4 h-4" /></button>
      </div>

      {/* Banner Card */}
      <div className="relative rounded-2xl overflow-hidden p-4 border border-white/10 group">
        <div className="absolute inset-0 z-0">
          <img src="/assets/background.jpg" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"}} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Banner" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>
        <div className="relative z-10 space-y-1">
          <h4 className="font-bold text-white text-sm">Better Questions<br />Brighter Answers</h4>
          <p className="text-[10px] text-slate-300">Powered by AI • Built for You</p>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Settings className="w-4 h-4 text-indigo-400" /> Features
        </h4>
        <div className="space-y-2">
          <div className="p-3 rounded-xl glass-card flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400"><MessageSquare className="w-4 h-4" /></div>
            <div>
              <h5 className="text-xs font-semibold text-white">Text Chat</h5>
              <p className="text-[11px] text-slate-400">Ask anything, get instant responses</p>
            </div>
          </div>
          <div className="p-3 rounded-xl glass-card flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400"><Mic className="w-4 h-4" /></div>
            <div>
              <h5 className="text-xs font-semibold text-white">Voice Input <span className="text-[9px] text-indigo-400 bg-indigo-950 px-1.5 py-0.5 rounded">coming soon</span></h5>
              <p className="text-[11px] text-slate-400">Speak your message</p>
            </div>
          </div>
          <div className="p-3 rounded-xl glass-card flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400"><ImageIcon className="w-4 h-4" /></div>
            <div>
              <h5 className="text-xs font-semibold text-white">Image Analysis <span className="text-[9px] text-indigo-400 bg-indigo-950 px-1.5 py-0.5 rounded">coming soon</span></h5>
              <p className="text-[11px] text-slate-400">Upload and ask about images</p>
            </div>
          </div>
          <div className="p-3 rounded-xl glass-card flex items-start gap-3">
            <div className="p-2 rounded-lg bg-rose-600/20 text-rose-400"><Volume2 className="w-4 h-4" /></div>
            <div>
              <h5 className="text-xs font-semibold text-white">Text to Speech <span className="text-[9px] text-indigo-400 bg-indigo-950 px-1.5 py-0.5 rounded">coming soon</span></h5>
              <p className="text-[11px] text-slate-400">Listen to AI responses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Chats */}
      <div>
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-400" /> Recent Chats
        </h4>
        <div className="space-y-1.5 text-xs">
          <a href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition text-slate-300">
            <ImageIcon className="w-4 h-4 text-slate-400" />
            <div className="truncate">
              <p className="font-medium text-slate-200 truncate">Beautiful Mountain View</p>
              <span className="text-[10px] text-slate-500">2 hours ago</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition text-slate-300">
            <Code className="w-4 h-4 text-slate-400" />
            <div className="truncate">
              <p className="font-medium text-slate-200 truncate">Code Help Request</p>
              <span className="text-[10px] text-slate-500">5 hours ago</span>
            </div>
          </a>
          <a href="#" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition text-slate-300">
            <MapPin className="w-4 h-4 text-slate-400" />
            <div className="truncate">
              <p className="font-medium text-slate-200 truncate">Travel Plan Suggestion</p>
              <span className="text-[10px] text-slate-500">Yesterday</span>
            </div>
          </a>
        </div>
      </div>

      {/* Upgrade to Pro Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/20 to-purple-600/25 border border-amber-500/30 flex items-center justify-between cursor-pointer hover:border-amber-500/60 transition group mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <h5 className="font-bold text-xs text-white group-hover:text-amber-300 transition">Upgrade to Pro</h5>
            <p className="text-[10px] text-slate-300">Get unlimited access & features</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition" />
      </div>

    </aside>
  );
}
