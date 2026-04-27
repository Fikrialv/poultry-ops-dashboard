import React from 'react';
import { LayoutDashboard, Truck, Factory, BarChartBig, Snowflake, HelpCircle, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard Produksi' },
    { id: 'logistics', icon: Truck, label: 'Penerimaan' },
    { id: 'production', icon: Factory, label: 'Parting' },
    { id: 'inventory', icon: Snowflake, label: 'Gudang' },
    { id: 'reports', icon: BarChartBig, label: 'Laporan' },
  ];

  return (
    <motion.nav 
      className="fixed left-0 top-0 h-full w-20 hover:w-64 bg-sidebar text-sidebar-text border-r border-slate-800 z-50 transition-all duration-300 group overflow-hidden flex flex-col"
      initial={{ x: -80 }}
      animate={{ x: 0 }}
    >
      <div className="h-16 flex items-center px-5 border-b border-slate-800 shrink-0 overflow-hidden">
        <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shrink-0">
          <Factory className="text-white w-6 h-6" />
        </div>
        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden group-hover:block">
          <p className="font-bold text-sm text-white">ProdSystem v3</p>
          <p className="text-[10px] text-sidebar-text uppercase tracking-wider">Main Facility</p>
        </div>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto overflow-x-hidden px-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center h-12 w-full px-4 rounded-lg transition-all relative overflow-hidden ${
              currentScreen === item.id 
                ? 'bg-primary text-white' 
                : 'text-sidebar-text hover:bg-slate-800 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            <span className="ml-6 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800 flex flex-col gap-2 shrink-0">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-slate-700 shrink-0"></div>
          <div className="text-[10px] hidden group-hover:block whitespace-nowrap">
            <p className="text-white font-medium">Operator Shifting</p>
            <p className="text-sidebar-text">Shift A - Pagi</p>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
