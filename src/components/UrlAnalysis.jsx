import React, { useState } from 'react';
import { Link2, Search, CheckCircle2, Lock } from 'lucide-react';

export default function UrlAnalysis() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    setAnalyzed(false);

    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">INVESTIGATION TOOL</span>
        <h1 className="text-2xl font-bold text-white mt-1">URL Analysis</h1>
        <p className="text-sm text-zinc-300">Investigate a URL and review its security indicators, threat information, and DNS records.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Box */}
        <div className="lg:col-span-1 bg-[#161022] border border-violet-950 p-6 rounded-xl h-fit shadow-md">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Link2 className="w-5 h-5 text-violet-400" />
            <span>Investigate a URL</span>
          </h2>
          
          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase">Target URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-[#120e1b] border border-violet-950 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-violet-600/30"
            >
              <Search className="w-4 h-4" />
              <span>{loading ? 'Analyzing URL...' : 'Analyze URL'}</span>
            </button>
          </form>

          <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
            Only analyze URLs you are authorized to investigate. A security analysis does not guarantee a website is safe.
          </p>
        </div>

        {/* Right Box */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#161022] border border-violet-950 p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-violet-950/60">
              <div>
                <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">INVESTIGATION COMPLETE</span>
                <h3 className="text-xl font-bold text-white">Analysis Results</h3>
              </div>
              {analyzed && (
                <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold rounded-full flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Low Risk</span>
                </span>
              )}
            </div>

            {!analyzed && !loading && (
              <div className="py-16 text-center text-zinc-400">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-25 text-violet-400" />
                <p className="text-sm">Enter a URL and start investigation to view threat assessment and DNS records.</p>
              </div>
            )}

            {loading && (
              <div className="py-16 text-center text-violet-400 animate-pulse">
                <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-sm font-medium">Scanning URL and querying threat databases...</p>
              </div>
            )}

            {analyzed && (
              <div className="mt-6 space-y-6 animate-fadeIn">
                <div className="bg-[#120e1b] p-4 rounded-lg border border-violet-950 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-400">Threat Assessment</p>
                    <p className="text-lg font-bold text-violet-300">Low Risk</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-zinc-400">Risk Score</p>
                    <p className="text-lg font-mono font-bold text-white">0/100</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Investigation Findings</h4>
                  <div className="bg-[#120e1b] p-4 rounded-lg border border-violet-950 flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-medium text-white">The URL uses HTTPS</p>
                        <span className="text-[10px] bg-violet-950 text-violet-300 px-1.5 py-0.5 rounded border border-violet-800/40">Informational</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">HTTPS encrypts traffic but does not prove that a website is trustworthy.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Threat Intelligence Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#120e1b] p-3.5 rounded-lg border border-violet-950">
                      <p className="text-xs text-zinc-400">Known Phishing</p>
                      <p className="text-sm font-semibold text-violet-300 mt-1">No (Safe)</p>
                    </div>
                    <div className="bg-[#120e1b] p-3.5 rounded-lg border border-violet-950">
                      <p className="text-xs text-zinc-400">Database Status</p>
                      <p className="text-sm font-semibold text-zinc-200 mt-1">Clean Record</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}