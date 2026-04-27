import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Scale, PieChart, Thermometer, 
  Truck, ArrowUpRight, Download, Settings 
} from 'lucide-react';

const weeklyData = [
  { day: 'Sen', kg: 65000 },
  { day: 'Sel', kg: 72000 },
  { day: 'Rab', kg: 68000 },
  { day: 'Kam', kg: 85000 },
  { day: 'Jum', kg: 90000 },
  { day: 'Sab', kg: 45000 },
  { day: 'Min', kg: 20000 },
];

export const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full"
    >
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Dashboard Produksi</h2>
          <p className="text-slate-500 mt-1 italic">Ringkasan operasional real-time shift berjalan.</p>
        </div>
        <button className="bg-white border border-slate-200 hover:border-primary px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all professional-shadow">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Output', val: '12,450', unit: 'pcs', sub: '4.2%', up: true, icon: Truck, color: 'primary' },
          { label: 'Reject Rate', val: '1.24', unit: '%', sub: '+0.2%', up: false, icon: Scale, color: 'error' },
          { label: 'OEE Score', val: '88.5', unit: '%', sub: 'Optimal', up: null, icon: PieChart, color: 'primary' },
          { label: 'Mesin Aktif', val: '14/15', unit: '', sub: '1 Perawatan', up: null, icon: Thermometer, color: 'warning' },
        ].map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 professional-shadow">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{card.label}</p>
            <p className={`text-2xl font-bold ${card.color === 'error' ? 'text-rose-600' : 'text-slate-900'}`}>
              {card.val} <span className="text-xs font-normal text-slate-400 uppercase tracking-widest ml-1">{card.unit}</span>
            </p>
            <div className={`mt-2 flex items-center text-xs ${
              card.up === true ? 'text-emerald-600' : 
              card.up === false ? 'text-rose-600' : 
              card.color === 'warning' ? 'text-amber-500' : 'text-emerald-600'
            }`}>
              {card.up !== null && (card.up ? <ArrowUpRight className="w-3 h-3 mr-1" strokeWidth={3} /> : <TrendingDown className="w-3 h-3 mr-1" />)}
              <span className="font-medium">{card.sub} {card.up !== null ? 'vs target' : ''}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Table Area */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 professional-shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Aktivitas Parting Terkini</h3>
            <span className="text-xs text-indigo-600 font-semibold cursor-pointer">Lihat Laporan Lengkap →</span>
          </div>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold">
                <th className="px-6 py-3">Waktu</th>
                <th className="px-6 py-3">ID Mesin</th>
                <th className="px-6 py-3">Model Part</th>
                <th className="px-6 py-3">Qty</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 italic">
              {[
                { time: '09:30', id: 'CNC-08', model: 'Ayam Utuh', qty: '450', status: 'Selesai' },
                { time: '09:15', id: 'CNC-03', model: 'Dada Fillet', qty: '210', status: 'Selesai' },
                { time: '08:45', id: 'CNC-12', model: 'Paha Bawah', qty: '88', status: 'Pending' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">{row.time}</td>
                  <td className="px-6 py-4">{row.id}</td>
                  <td className="px-6 py-4">{row.model}</td>
                  <td className="px-6 py-4 font-medium">{row.qty}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                      row.status === 'Selesai' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity Feed / Stats Detail */}
        <div className="bg-white rounded-xl border border-slate-200 professional-shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Status Operasional</h3>
            <Settings className="w-4 h-4 text-slate-400" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Uptime Mesin Utama</span>
              <span className="text-sm font-bold text-slate-900">99.2%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[99.2%]" />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Kebutuhan Maintenance</span>
              <span className="text-sm font-bold text-amber-500">1 Unit</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 w-[15%]" />
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl">
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Target Shift A</p>
                <p className="text-sm text-indigo-900 font-medium">Anda sedang mendekati target produksi karkas hari ini (92% tercapai).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
