import React from 'react';
import { Brain, Copy, Volume2, RotateCcw, CheckCheck } from 'lucide-react';

export default function Message({ message }) {
  const { sender, text, timestamp, type, imageUrl, isThinking } = message;

  if (isThinking) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0">
          <Brain className="text-white w-4 h-4" />
        </div>
        <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2 text-sm text-slate-400">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]"></span>
          <span className="ml-2 text-xs">Thinking...</span>
        </div>
      </div>
    );
  }

  if (sender === 'user') {
    return (
      <div className="flex items-start justify-end gap-3">
        <div className="glass-card bg-indigo-600/20 border-indigo-500/30 p-4 rounded-2xl rounded-tr-none max-w-lg text-sm text-slate-100 shadow-md">
          {imageUrl && (
            <div className="flex items-center gap-3 mb-2">
              <p>{text}</p>
              <img src={imageUrl} alt="Uploaded" className="w-12 h-12 rounded-lg object-cover" />
            </div>
          )}
          {!imageUrl && <p>{text}</p>}
          <span className="block text-[10px] text-slate-400 text-right mt-1">
            {timestamp} <CheckCheck className="inline w-3 h-3 text-blue-400 ml-0.5" />
          </span>
        </div>
        <img src="/assets/logo.png" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}} className="w-8 h-8 rounded-full object-cover border border-indigo-500/50" alt="User" />
      </div>
    );
  }

  // AI Message
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0">
        <Brain className="text-white w-4 h-4" />
      </div>
      <div className="glass-card p-4 rounded-2xl rounded-tl-none max-w-xl text-sm text-slate-200 shadow-lg space-y-3">
        {imageUrl && (
          <div className="rounded-xl overflow-hidden border border-white/10 max-h-48">
            <img src={imageUrl} alt="AI Context" className="w-full h-full object-cover" />
          </div>
        )}
        <p className="text-slate-300 leading-relaxed text-xs whitespace-pre-line">{text}</p>
        
        {type === 'response-actions' && (
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <button className="px-3 py-1.5 rounded-lg glass-card text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition"><Copy className="w-3.5 h-3.5" /> Copy</button>
            <button className="px-3 py-1.5 rounded-lg glass-card text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition"><Volume2 className="w-3.5 h-3.5" /> Listen</button>
            <button className="px-3 py-1.5 rounded-lg glass-card text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition"><RotateCcw className="w-3.5 h-3.5" /> Regenerate</button>
          </div>
        )}
        <span className="block text-[10px] text-slate-500">{timestamp}</span>
      </div>
    </div>
  );
}
