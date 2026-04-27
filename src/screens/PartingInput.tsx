import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Box, Beef, Bird, Drumstick, Utensils, 
  Minus, Plus, Info, Target, TrendingUp 
} from 'lucide-react';

export const PartingInput: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'Ayam Utuh': 1240,
    'Dada': 850,
    'Paha': 1620,
    'Sayap': 1890,
    'Ceker': 2100,
    'Jeroan': 890,
  });

  const handleUpdate = (id: string, delta: number) => {
    setCounts(prev => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));
  };

  const productTypes = [
    { id: 'Ayam Utuh', icon: Bird, color: 'bg-primary-container/20 text-primary', unit: 'pcs' },
    { id: 'Dada', icon: Beef, color: 'bg-secondary-container/20 text-secondary', unit: 'pcs' },
    { id: 'Paha', icon: Drumstick, color: 'bg-tertiary-container/20 text-tertiary', unit: 'pcs' },
    { id: 'Sayap', icon: Bird, color: 'bg-surface-container-high text-outline', unit: 'pcs' },
    { id: 'Ceker', icon: Box, color: 'bg-surface-container-high text-outline', unit: 'pcs' },
    { id: 'Jeroan', icon: Utensils, color: 'bg-surface-container-high text-outline', unit: 'kg' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full"
    >
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Input Produksi Parting</h2>
          <p className="text-slate-500 mt-1 italic">Pencatatan real-time hasil pemotongan per bagian.</p>
        </div>
        <div className="bg-primary text-on-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all">
          <TrendingUp className="w-4 h-4" />
          Optimal Performance
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Yield Tracker */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between professional-shadow relative overflow-hidden">
          <div className="status-strip-primary" />
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Live Yield Tracker</h3>
              <p className="text-xs text-slate-500">Live Weight vs Carcass Weight</p>
            </div>
            <button className="text-slate-400 hover:text-primary transition-colors"><Info className="w-5 h-5" /></button>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Input (Live)</span>
              <div className="text-3xl font-bold text-primary">
                4,500 <span className="text-sm font-normal text-slate-500">kg</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Output (Carcass)</span>
              <div className="text-3xl font-bold text-slate-900">
                3,240 <span className="text-sm font-normal text-slate-500">kg</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800">Current Yield Efficiency</span>
            <span className="text-4xl font-black text-primary tracking-tighter">72.0%</span>
          </div>
        </div>

        {/* Quick Input Panel Simulation */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 flex flex-col gap-6">
          <h3 className="font-bold text-slate-800">Entry Produksi Cepat</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Model Part</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm focus:ring-2 ring-primary/20 outline-none transition-all">
                <option>Ayam Utuh</option>
                <option>Dada Fillet</option>
                <option>Paha Bawah</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Batch ID</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm" placeholder="B-XXXX" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Operator</label>
                <input type="text" className="w-full bg-slate-100 border border-slate-200 rounded-lg p-2.5 text-sm" value="OP-012" disabled />
              </div>
            </div>
            <button className="w-full py-3 bg-primary text-white font-bold rounded-lg mt-2 shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-[0.98] transition-all uppercase text-xs tracking-widest">
              Simpan Data Batch
            </button>
          </div>
        </div>
      </div>

      {/* Grid Menu Input */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productTypes.map((type) => (
          <div key={type.id} className="bg-white border border-slate-200 rounded-2xl p-6 professional-shadow flex flex-col gap-6 hover:border-primary transition-all group">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold text-slate-800">{type.id}</h4>
              <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${type.id === 'Ayam Utuh' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'}`}>
                <type.icon className="w-6 h-6" />
              </div>
            </div>
            
            <div className="bg-slate-50 py-4 rounded-xl border border-slate-200 flex items-center justify-center font-black text-4xl text-slate-900 tracking-tighter italic">
              {counts[type.id].toLocaleString('id-ID')}
              <span className="text-sm font-bold text-slate-400 ml-2 not-italic">{type.unit}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleUpdate(type.id, -10)}
                className="h-20 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl flex items-center justify-center transition-all active:scale-95 border border-slate-200"
              >
                <Minus className="w-10 h-10" />
              </button>
              <button 
                onClick={() => handleUpdate(type.id, 10)}
                className="h-20 bg-primary hover:bg-primary-hover text-white rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-primary/10"
              >
                <Plus className="w-10 h-10" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
