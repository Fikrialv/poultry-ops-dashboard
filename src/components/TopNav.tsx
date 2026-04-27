import React from 'react';
import { Bell, Settings, Calendar, Clock, Plus } from 'lucide-react';

export const TopNav: React.FC = () => {
  return (
    <header className="h-16 w-full px-8 bg-surface border-b border-outline flex justify-between items-center sticky top-0 z-40">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold tracking-tight text-on-surface">Dashboard Produksi</h1>
        <p className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Update terakhir: 24 May 2024, 09:45 WIB</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-primary-hover flex items-center gap-2 transition-all">
          <Plus className="w-4 h-4" />
          Entry Produksi
        </button>
        
        <div className="h-8 w-px bg-outline mx-2" />
        
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-dim transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-surface-container transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
