import React from 'react';
import { motion } from 'motion/react';
import { QrCode, Package, MoreVertical, AlertTriangle } from 'lucide-react';

const inventoryData = [
  { id: '1', name: 'Dada Fillet Utuh', batch: '#A-4920', grade: 'Grade A', weight: '1,250.0', location: 'C-14-B', status: 'optimal' },
  { id: '2', name: 'Paha Bawah (Drumstick)', batch: '#B-1102', grade: 'Grade B', weight: '840.5', location: 'A-02-A', status: 'optimal' },
  { id: '3', name: 'Sayap Utuh', batch: 'Hold - Pending QA', grade: 'Unsorted', weight: '2,100.0', location: 'D-09-C', status: 'warning' },
  { id: '4', name: 'Ceker Ayam Bersih', batch: '#C-8812', grade: 'Grade A', weight: '560.2', location: 'B-05-A', status: 'optimal' },
];

export const Inventory: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full"
    >
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Gudang Pembekuan</h2>
          <p className="text-slate-500 mt-1 italic">Ayam Clawn Stok & Cold Storage Management</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all professional-shadow shadow-primary/20">
          <QrCode className="w-5 h-5" />
          Scan Barcode QR
        </button>
      </div>

      {/* Temperature Tracker */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 flex items-center justify-between professional-shadow relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        
        <div className="flex flex-col relative z-10 w-1/3 border-r border-slate-100 pr-8">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Internal Temp</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-4xl font-black text-primary tracking-tighter">-22.4°C</span>
            <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Optimal</span>
          </div>
        </div>

        <div className="flex-1 px-8 relative z-10 h-16 flex items-end gap-1 opacity-80">
          {[75, 80, 100, 80, 85, 75, 70, 75, 95, 80, 75, 85].map((h, i) => (
            <div 
              key={i} 
              className={`w-full rounded-t-sm ${i === 8 ? 'bg-rose-500 relative group' : 'bg-primary'}`} 
              style={{ height: `${h}%` }}
            >
              {i === 8 && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap">
                  -17.8°C
                </div>
              )}
            </div>
          ))}
          <div className="absolute top-1/2 w-[calc(100%-4rem)] border-t border-dashed border-slate-300" />
        </div>

        <div className="flex flex-col gap-3 relative z-10 w-1/4 pl-8 border-l border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400">Target</span>
            <span className="text-sm font-bold text-slate-800">-20.0°C</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400">Min (24h)</span>
            <span className="text-sm font-bold text-slate-800">-24.1°C</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400">Max (24h)</span>
            <span className="text-sm font-bold text-rose-600">-17.8°C</span>
          </div>
        </div>
      </div>

      {/* Inventory List */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden professional-shadow flex flex-col">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest sticky top-0">
          <div className="col-span-4">Nama Produk</div>
          <div className="col-span-2">Grade</div>
          <div className="col-span-3">Berat (kg)</div>
          <div className="col-span-2">Lokasi Rak</div>
          <div className="col-span-1 text-right">Action</div>
        </div>

        <div className="flex flex-col divide-y divide-slate-100">
          {inventoryData.map((item) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-slate-50/50 transition-colors border-l-[6px] ${
                item.status === 'warning' ? 'border-rose-500 bg-rose-50/20' : 'border-primary'
              }`}
            >
              <div className="col-span-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  item.status === 'warning' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'
                }`}>
                  {item.status === 'warning' ? <AlertTriangle className="w-6 h-6" /> : <Package className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{item.name}</h3>
                  <p className={`text-xs mt-1 ${item.status === 'warning' ? 'text-rose-600 font-bold' : 'text-slate-400'}`}>
                    {item.batch}
                  </p>
                </div>
              </div>
              
              <div className="col-span-2">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${
                  item.grade === 'Unsorted' ? 'bg-slate-100 text-slate-500' : 'bg-indigo-50 text-indigo-700'
                }`}>
                  {item.grade}
                </span>
              </div>
              
              <div className="col-span-3 font-black text-2xl text-slate-900 tracking-tighter">
                {item.weight}
              </div>
              
              <div className="col-span-2 flex items-center gap-2">
                <Package className="w-4 h-4 text-slate-400" />
                <span className="font-bold text-slate-700">{item.location}</span>
              </div>
              
              <div className="col-span-1 text-right">
                <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
