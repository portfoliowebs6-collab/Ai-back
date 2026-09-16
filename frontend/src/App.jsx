import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import RightSidebar from './components/Settings'; // Ya phir RightSidebar component name jo upar banaya

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans h-screen overflow-hidden relative flex">
      
      {/* Background Scenic Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/background.jpg" 
          onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"}} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex h-full w-full max-w-[1700px] mx-auto p-3 gap-3">
        <Sidebar />
        <ChatWindow />
        <RightSidebar />
      </div>

    </div>
  );
}
