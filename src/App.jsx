import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UrlAnalysis from './components/UrlAnalysis';
import EmailAnalysis from './components/EmailAnalysis';
import PasswordChecker from './components/PasswordChecker';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Helper to get current tab name for header
  const getTabTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'url': return 'URL Analysis';
      case 'email': return 'Email Analysis';
      case 'password': return 'Password Checker';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0a14] text-zinc-100 flex font-sans antialiased">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Bar */}
        <header className="bg-[#120e1b] border-b border-violet-950 px-8 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-zinc-400 font-medium">PhishGuard Pro</span>
            <span className="text-zinc-600">/</span>
            <span className="text-white font-semibold">{getTabTitle()}</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-[#161022] px-3 py-1.5 rounded-full border border-violet-950">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              <span className="text-xs font-medium text-zinc-300">Security Workspace</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
            {activeTab === 'url' && <UrlAnalysis />}
            {activeTab === 'email' && <EmailAnalysis />}
            {activeTab === 'password' && <PasswordChecker />}
          </div>
        </main>
      </div>
    </div>
  );
}