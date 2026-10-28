import React from 'react';
import { 
  ShieldAlert, 
  LayoutDashboard, 
  Link2, 
  Mail, 
  KeyRound, 
  ShieldCheck 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'url', label: 'URL Analysis', icon: Link2 },
    { id: 'email', label: 'Email Analysis', icon: Mail },
    { id: 'password', label: 'Password Checker', icon: KeyRound },
  ];

  return (
    <aside className="w-64 bg-[#120e1b] border-r border-violet-950 flex flex-col justify-between h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-violet-950 flex items-center space-x-3">
          <div className="bg-violet-500/20 p-2 rounded-lg border border-violet-500/30">
            <ShieldAlert className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg tracking-wide">PhishGuard</h1>
            <span className="text-xs text-violet-400 font-semibold tracking-wider">PRO SECURITY</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="p-4">
          <p className="text-xs font-medium text-violet-300/60 mb-3 px-3 uppercase tracking-wider">Workspace</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-violet-900/50 text-violet-200 border border-violet-500/50 shadow-sm' 
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-violet-950/40'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-violet-300' : 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-violet-950">
        <div className="bg-violet-950/40 p-3 rounded-lg border border-violet-900/40 flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
          <div className="text-xs">
            <p className="text-zinc-200 font-medium">Security First</p>
            <p className="text-violet-300/70">Workspace active</p>
          </div>
        </div>
      </div>
    </aside>
  );
}