/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Dashboard } from './screens/Dashboard';
import { PartingInput } from './screens/PartingInput';
import { Reports } from './screens/Reports';
import { Logistics } from './screens/Logistics';
import { Inventory } from './screens/Inventory';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'logistics':
        return <Logistics key="logistics" />;
      case 'production':
        return <PartingInput key="production" />;
      case 'inventory':
        return <Inventory key="inventory" />;
      case 'reports':
        return <Reports key="reports" />;
      default:
        return <Dashboard key="dashboard" />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar 
        currentScreen={currentScreen} 
        onNavigate={setCurrentScreen} 
      />
      
      <div className="flex-1 ml-20 flex flex-col min-h-screen transition-all duration-300">
        <TopNav />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-surface-container-low transition-all duration-300">
          <AnimatePresence mode="wait">
            {renderScreen()}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
