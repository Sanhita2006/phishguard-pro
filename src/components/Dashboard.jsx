import React from 'react';
import { ShieldCheck, Link2, Mail, KeyRound, ArrowRight, ShieldAlert } from 'lucide-react';

export default function Dashboard({ setActiveTab }) {
  return (
    <div className="space-y-8 pb-10">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden rounded-2xl bg-[#161022] border border-violet-900/40 p-8 md:p-10 shadow-lg shadow-violet-950/30">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-4 tracking-wider">
            PHISHGUARD PRO
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Investigate threats.<br />
            <span className="text-violet-200/80">Protect digital identities.</span>
          </h1>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
            Your cybersecurity investigation dashboard for identifying suspicious URLs, analyzing phishing emails, and checking password strength.
          </p>
          <button
            onClick={() => setActiveTab('url')}
            className="inline-flex items-center space-x-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-violet-600/40 cursor-pointer"
          >
            <span>Start Investigation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block opacity-15 pointer-events-none">
          <ShieldCheck className="w-72 h-72 text-violet-400" />
        </div>
      </div>

      {/* Security Tools */}
      <div>
        <div className="mb-4">
          <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">SECURITY TOOLS</span>
          <h2 className="text-xl font-bold text-white">Investigation Center</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div 
            onClick={() => setActiveTab('url')}
            className="group bg-[#161022] hover:bg-[#1c142e] border border-violet-950 hover:border-violet-500/50 p-6 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Link2 className="w-6 h-6 text-violet-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                URL Analysis
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Investigate a URL and review its security indicators, threat information, and DNS records.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-medium text-violet-400 group-hover:translate-x-1 transition-all">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setActiveTab('email')}
            className="group bg-[#161022] hover:bg-[#1c142e] border border-violet-950 hover:border-violet-500/50 p-6 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 text-violet-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                Email Analysis
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Investigate suspicious email addresses and examine email messages for phishing indicators.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-medium text-violet-400 group-hover:translate-x-1 transition-all">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setActiveTab('password')}
            className="group bg-[#161022] hover:bg-[#1c142e] border border-violet-950 hover:border-violet-500/50 p-6 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <KeyRound className="w-6 h-6 text-violet-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                Password Checker
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Evaluate password complexity and learn how to improve password security strength.
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-medium text-violet-400 group-hover:translate-x-1 transition-all">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Security Notice Box */}
      <div className="bg-[#161022] border border-violet-950 rounded-xl p-5 flex items-start space-x-4 shadow-md">
        <div className="p-2 rounded-lg bg-violet-500/20 border border-violet-500/30 shrink-0">
          <ShieldAlert className="w-5 h-5 text-violet-400" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white mb-1">Investigate Before You Trust</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Never enter passwords or sensitive information on suspicious websites. Use investigation tools as one part of your security checks.
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="pt-6 border-t border-violet-950 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400">
        <p className="font-semibold text-zinc-300">PhishGuard Pro</p>
        <p className="mt-2 md:mt-0">Cybersecurity Investigation Toolkit</p>
      </div>
    </div>
  );
}