import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardSignature, ChevronDown, RefreshCw, 
  ArrowRightLeft, Save, Delete, ArrowRight
} from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="p-8 h-[calc(100vh-4rem)] flex gap-6 overflow-hidden max-w-[1400px] mx-auto w-full"
    >
      {/* Left Input Area */}
      <section className="flex-1 flex flex-col gap-6 h-full overflow-y-auto pr-2 pb-2 custom-scrollbar">
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-sm">
            <ClipboardSignature className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Penerimaan Supplier</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-center cursor-pointer hover:border-primary transition-colors h-28 professional-shadow">
            <span className="text-xs font-bold text-slate-400 mb-2">Supplier</span>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-slate-900 truncate">PT. Agro Mandiri</span>
              <ChevronDown className="text-slate-400 w-5 h-5" />
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-center cursor-pointer hover:border-primary transition-colors h-28 professional-shadow">
            <span className="text-xs font-bold text-slate-400 mb-2">No. Kendaraan</span>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-slate-900 truncate">B 9012 KJL</span>
              <ChevronDown className="text-slate-400 w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 shrink-0">
          <div className="bg-white border-2 border-primary rounded-xl p-5 flex flex-col justify-between h-36 relative overflow-hidden professional-shadow">
            <div className="absolute inset-0 bg-primary/5" />
            <span className="text-xs font-bold text-primary relative z-10">Jumlah Ekor</span>
            <div className="flex items-end justify-between relative z-10 w-full overflow-hidden">
              <span className="text-4xl font-black text-slate-900 tracking-tighter truncate">4,500</span>
              <span className="text-xs font-bold text-slate-400 pb-1">ekor</span>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between h-36 hover:border-slate-300 transition-colors cursor-pointer professional-shadow">
            <span className="text-xs font-bold text-slate-400">Berat Total Kg</span>
            <div className="flex items-end justify-between w-full overflow-hidden">
              <span className="text-4xl font-black text-slate-300 tracking-tighter truncate">0</span>
              <span className="text-xs font-bold text-slate-400 pb-1 flex-shrink-0 ml-1">kg</span>
            </div>
          </div>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 flex flex-col justify-between h-36 hover:opacity-90 transition-opacity cursor-pointer professional-shadow">
            <span className="text-xs font-bold text-rose-600 flex items-center gap-2">
              Ayam Mati (DOA)
            </span>
            <div className="flex items-end justify-between w-full overflow-hidden">
              <span className="text-4xl font-black text-rose-600 tracking-tighter truncate">12</span>
              <span className="text-xs font-bold text-rose-400 pb-1 flex-shrink-0 ml-1">ekor</span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-auto pt-4 shrink-0">
          <div className="w-[320px] grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <button key={n} className="h-16 bg-white border border-slate-200 rounded-xl text-2xl font-bold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors professional-shadow">
                {n}
              </button>
            ))}
            <button className="h-16 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors flex items-center justify-center professional-shadow">
              <span className="font-bold text-sm">X</span>
            </button>
            <button className="h-16 bg-white border border-slate-200 rounded-xl text-2xl font-bold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors professional-shadow">
              0
            </button>
            <button className="h-16 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors flex items-center justify-center professional-shadow">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-end">
            <button className="w-full h-[136px] bg-primary hover:bg-primary-hover text-white rounded-2xl flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.98] professional-shadow">
              <Save className="w-8 h-8 opacity-80" />
              <span className="text-xl font-bold uppercase tracking-widest text-center">Simpan<br/>Penerimaan</span>
            </button>
          </div>
        </div>
      </section>

      {/* Right Queue Panel */}
      <aside className="w-[380px] bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shrink-0 professional-shadow">
        <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-10 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-800">Antrean Truk</h3>
            <p className="text-xs font-medium text-slate-500 mt-1">Hari Ini • 4 Menunggu</p>
          </div>
          <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-500 bg-white shadow-sm">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
          {/* Active Process */}
          <div className="bg-primary/5 border border-primary rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
            <div className="flex justify-between items-start">
              <div className="bg-primary text-white px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3" />
                Proses
              </div>
              <span className="text-xs font-bold text-slate-500">Tiba 07:15</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-800">PT. Agro Mandiri</h4>
              <p className="font-medium text-slate-500 mt-1 flex items-center gap-2 text-sm">
                 B 9012 KJL
              </p>
            </div>
          </div>

          {[
            { name: 'CV. Unggas Jaya', plate: 'D 4412 XZ', time: '08:30' },
            { name: 'PT. Farm Makmur', plate: 'A 8831 BC', time: '09:05' },
            { name: 'Koperasi Berkah', plate: 'F 2110 YA', time: '09:45' }
          ].map((truck, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start">
                <div className="bg-slate-100 text-slate-500 px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase inline-flex">
                  Menunggu
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">Tiba {truck.time}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">{truck.name}</h4>
                <p className="font-medium text-slate-500 mt-1 flex items-center gap-2 text-sm">
                   {truck.plate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </motion.div>
  );
};
