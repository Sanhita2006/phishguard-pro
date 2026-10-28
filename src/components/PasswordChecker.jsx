import React, { useState } from 'react';
import { KeyRound, CheckCircle2, XCircle } from 'lucide-react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');

  const hasLength = password.length >= 12;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  let score = 0;
  if (password.length >= 8) score += 20;
  if (hasLength) score += 20;
  if (hasUppercase) score += 20;
  if (hasNumber) score += 20;
  if (hasSpecial) score += 20;

  let strengthLabel = 'Very Weak';
  let barColor = 'bg-red-500';
  if (score >= 40) { strengthLabel = 'Weak'; barColor = 'bg-orange-500'; }
  if (score >= 60) { strengthLabel = 'Medium'; barColor = 'bg-yellow-500'; }
  if (score >= 80) { strengthLabel = 'Strong'; barColor = 'bg-violet-400'; }
  if (score === 100) { strengthLabel = 'Very Strong'; barColor = 'bg-violet-400'; }

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">PASSWORD SECURITY</span>
        <h1 className="text-2xl font-bold text-white mt-1">Password Strength Checker</h1>
        <p className="text-sm text-zinc-300">Evaluate password complexity and learn how to improve it securely in your browser.</p>
      </div>

      <div className="bg-[#161022] border border-violet-950 p-6 rounded-xl max-w-3xl shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <KeyRound className="w-5 h-5 text-violet-400" />
          <span>Check Your Password</span>
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase">Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password to check"
              className="w-full bg-[#120e1b] border border-violet-950 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <div className="bg-[#120e1b] p-4 rounded-lg border border-violet-950 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Estimated Password Strength</span>
              <span className="font-bold text-white">{strengthLabel} ({score}%)</span>
            </div>
            <div className="w-full bg-violet-950/60 h-2 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-300 ${barColor}`} style={{ width: `${score}%` }}></div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Security Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-2 text-zinc-300">
                {password.length >= 8 ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>At least 8 characters</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                {hasLength ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>At least 12 characters (recommended)</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                {hasUppercase ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>Contains uppercase letters (A-Z)</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                {hasLowercase ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>Contains lowercase letters (a-z)</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                {hasNumber ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>Contains numbers (0-9)</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                {hasSpecial ? <CheckCircle2 className="w-4 h-4 text-violet-400" /> : <XCircle className="w-4 h-4 text-zinc-600" />}
                <span>Contains special characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}