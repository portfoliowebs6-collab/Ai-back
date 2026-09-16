import React, { useState } from 'react';
import { Paperclip, Mic, Send } from 'lucide-react';

export default function ChatInput({ onSendMessage, loading }) {
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedImage) return;

    onSendMessage(input, selectedImage);
    setInput('');
    setSelectedImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 glass-card border-t border-white/5 shrink-0">
      <div className="relative flex items-center">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? "AI is thinking..." : "Type your message..."}
          disabled={loading}
          className="w-full py-3.5 pl-4 pr-32 rounded-xl glass-card border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500/50 transition disabled:opacity-50"
        />
        <div className="absolute right-2 flex items-center gap-2">
          {/* File Upload Trigger */}
          <label className="text-slate-400 hover:text-white text-xs px-2 py-1.5 rounded-lg hover:bg-white/5 transition flex items-center gap-1 cursor-pointer">
            <Paperclip className="w-4 h-4" /> 
            <span className="hidden sm:inline">{selectedImage ? "Attached" : "Attach"}</span>
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={(e) => setSelectedImage(e.target.files[0])} 
            />
          </label>
          
          <button type="button" className="text-slate-400 hover:text-white text-xs px-2 py-1.5 rounded-lg hover:bg-white/5 transition flex items-center gap-1">
            <Mic className="w-4 h-4" /> <span className="hidden sm:inline">Voice</span>
          </button>

          <button 
            type="submit" 
            disabled={loading}
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 transition disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
