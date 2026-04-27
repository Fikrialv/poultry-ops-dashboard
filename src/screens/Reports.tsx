import React from 'react';
import { motion } from 'motion/react';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip as ReTooltip } from 'recharts';
import { 
  Download, ChevronDown, CheckCircle, AlertTriangle, 
  Search, Filter, Calendar, Users, Bird 
} from 'lucide-react';

const distributionData = [
  { name: 'Karkas Utuh', value: 60, color: '#006876' },
  { name: 'Parting', value: 30, color: '#4c56af' },
  { name: 'By-Product', value: 10, color: '#bbc9cc' },
];

const batchHistory = [
  { id: 'B-1024-01', start: '06:00 AM', input: '3,500 ekor', yield: '85.1%', status: 'Passed' },
  { id: 'B-1024-02', start: '08:30 AM', input: '4,200 ekor', yield: '84.5%', status: 'Passed' },
  { id: 'B-1024-03', start: '11:00 AM', input: '4,750 ekor', yield: '81.8%', status: 'Review' },
  { id: 'B-1024-04', start: '01:30 PM', input: '3,800 ekor', yield: '86.2%', status: 'Passed' },
];

export const Reports: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Laporan & Analitik</h2>
          <p className="text-slate-500 mt-1 italic">Tinjauan efisiensi dan performa batch produksi.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors professional-shadow">
            <Calendar className="w-4 h-4 text-primary" />
            Hari Ini (24 Okt)
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors professional-shadow">
            <Users className="w-4 h-4 text-primary" />
            Semua Shift
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm hover:opacity-95 transition-all active:scale-95 uppercase tracking-widest leading-none">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Rendemen Gauge Mock */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center professional-shadow relative overflow-hidden">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">TOTAL RENDEMEN %</h4>
          <div className="relative w-48 h-24 mb-4">
            <div className="absolute inset-0 border-[12px] border-slate-100 rounded-t-full" />
            <motion.div 
              initial={{ rotate: -90 }}
              animate={{ rotate: 60 }}
              className="absolute inset-0 border-[12px] border-primary rounded-t-full origin-bottom"
              style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
            />
            <div className="absolute bottom-0 w-full text-center">
              <span className="text-4xl font-black text-slate-900">84.2%</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 font-bold">Target Efisiensi: 82.0%</p>
        </div>

        {/* Product Donut */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col professional-shadow">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">DISTRIBUSI PRODUK</h4>
          <div className="flex-1 flex items-center">
            <div className="w-1/2 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={distributionData}
                    innerRadius={35}
                    outerRadius={55}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ReTooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              {distributionData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] font-bold text-slate-900 truncate">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mortality Box */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between professional-shadow">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TOTAL INPUT AYAM</p>
              <h3 className="text-2xl font-bold text-slate-900">12,450 <span className="text-xs font-normal text-slate-400">ekor</span></h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200">
              <Bird className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-2 professional-shadow relative overflow-hidden">
            <div className="status-strip-error" />
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">TINGKAT MORTALITAS</p>
              <AlertTriangle className="w-4 h-4 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">0.8% <span className="text-xs font-normal text-slate-400">(98 ekor)</span></h3>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-rose-600 w-[8%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Batch Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden professional-shadow flex flex-col">
        <div className="px-8 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-slate-800">Detail Efisiensi per Batch</h3>
            <div className="flex items-center bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus-within:ring-2 ring-primary/20 transition-all w-64 translate-y-0.5">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="Cari ID Batch..." className="bg-transparent border-none text-xs outline-none w-full" />
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold text-xs hover:underline">
            <Filter className="w-4 h-4" />
            Filter Data
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">
                <th className="py-4 px-8">ID Batch</th>
                <th className="py-4 px-8">Waktu Mulai</th>
                <th className="py-4 px-8">Jumlah Input</th>
                <th className="py-4 px-8">Rendemen</th>
                <th className="py-4 px-8">Status QA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm italic">
              {batchHistory.map((batch, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-4 px-8 font-bold text-slate-900">{batch.id}</td>
                  <td className="py-4 px-8 text-slate-500">{batch.start}</td>
                  <td className="py-4 px-8 text-slate-500">{batch.input}</td>
                  <td className="py-4 px-8 font-bold text-primary">{batch.yield}</td>
                  <td className="py-4 px-8 text-slate-500">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      batch.status === 'Passed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {batch.status === 'Passed' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {batch.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-4 bg-slate-50/30 border-t border-slate-100 flex justify-between items-center font-medium">
          <span className="text-xs text-slate-400">Menampilkan 4 dari 28 batch</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-bold disabled:opacity-50" disabled>Sebelumnya</button>
            <button className="px-3 py-1 border border-slate-200 bg-white rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Berikutnya</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
