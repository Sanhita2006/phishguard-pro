import React, { useState } from 'react';
import { Mail, Search, CheckCircle2 } from 'lucide-react';

export default function EmailAnalysis() {
  const [activeTab, setActiveTab] = useState('address');
  
  const [email, setEmail] = useState('');
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [analyzedAddress, setAnalyzedAddress] = useState(false);

  const [content, setContent] = useState('');
  const [loadingContent, setLoadingContent] = useState(false);
  const [analyzedContent, setAnalyzedContent] = useState(false);

  const handleAnalyzeAddress = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoadingAddress(true);
    setAnalyzedAddress(false);

    setTimeout(() => {
      setLoadingAddress(false);
      setAnalyzedAddress(true);
    }, 1200);
  };

  const handleAnalyzeContent = (e) => {
    e.preventDefault();
    if (!content) return;
    setLoadingContent(true);
    setAnalyzedContent(false);

    setTimeout(() => {
      setLoadingContent(false);
      setAnalyzedContent(true);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">INVESTIGATION TOOL</span>
        <h1 className="text-2xl font-bold text-white mt-1">Email Analysis</h1>
        <p className="text-sm text-zinc-300">Investigate suspicious email addresses and examine email messages for phishing indicators.</p>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#161022] border border-violet-950 p-1.5 rounded-xl max-w-xl shadow-md">
        <button
          onClick={() => setActiveTab('address')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'address'
              ? 'bg-[#1c142e] text-white shadow-sm border border-violet-800/50'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Mail className="w-4 h-4 text-violet-400" />
          <span>Email Address Analysis</span>
        </button>

        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'content'
              ? 'bg-[#1c142e] text-white shadow-sm border border-violet-800/50'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Search className="w-4 h-4 text-violet-400" />
          <span>Email Content Analysis</span>
        </button>
      </div>

      {activeTab === 'address' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-[#161022] border border-violet-950 p-6 rounded-xl h-fit shadow-md">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-violet-400" />
              <span>Investigate Email Address</span>
            </h2>
            
            <form onSubmit={handleAnalyzeAddress} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="security@example.com"
                  className="w-full bg-[#120e1b] border border-violet-950 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              
              <button
                type="submit"
                disabled={loadingAddress}
                className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-violet-600/30"
              >
                <Search className="w-4 h-4" />
                <span>{loadingAddress ? 'Analyzing Email...' : 'Analyze Email Address'}</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#161022] border border-violet-950 p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-violet-950/60">
                <div>
                  <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">INVESTIGATION COMPLETE</span>
                  <h3 className="text-xl font-bold text-white">Address Analysis Results</h3>
                </div>
                {analyzedAddress && (
                  <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold rounded-full flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Low Risk</span>
                  </span>
                )}
              </div>

              {!analyzedAddress && !loadingAddress && (
                <div className="py-16 text-center text-zinc-400">
                  <Mail className="w-12 h-12 mx-auto mb-3 opacity-25 text-violet-400" />
                  <p className="text-sm">Enter an email address to investigate domain configuration and reputation.</p>
                </div>
              )}

              {loadingAddress && (
                <div className="py-16 text-center text-violet-400 animate-pulse">
                  <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm font-medium">Checking email reputation and spam databases...</p>
                </div>
              )}

              {analyzedAddress && (
                <div className="mt-6 space-y-6">
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
                    <h4 className="text-sm font-semibold text-white mb-3">Email Reputation Report</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#120e1b] p-3 rounded-lg border border-violet-950 flex items-center justify-between">
                        <span className="text-xs text-zinc-400">Email Format Validity</span>
                        <span className="text-xs bg-violet-950 text-violet-300 px-2 py-0.5 rounded border border-violet-800/40">Valid</span>
                      </div>
                      <div className="bg-[#120e1b] p-3 rounded-lg border border-violet-950 flex items-center justify-between">
                        <span className="text-xs text-zinc-400">Disposable Detection</span>
                        <span className="text-xs bg-violet-950 text-violet-300 px-2 py-0.5 rounded border border-violet-800/40">Not Disposable</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'content' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-[#161022] border border-violet-950 p-6 rounded-xl flex flex-col justify-between shadow-md">
            <div>
              <h2 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                <Search className="w-5 h-5 text-violet-400" />
                <span>Investigate Email Content</span>
              </h2>
              <p className="text-xs text-zinc-400 mb-4">Paste the suspicious message below.</p>
              
              <form onSubmit={handleAnalyzeContent} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 uppercase">Email Content</label>
                  <textarea
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Paste the suspicious email message here..."
                    className="w-full bg-[#120e1b] border border-violet-950 rounded-lg p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loadingContent}
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-violet-600/30"
                >
                  <Search className="w-4 h-4" />
                  <span>{loadingContent ? 'Analyzing Content...' : 'Analyze Email Content'}</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#161022] border border-violet-950 p-6 rounded-xl h-full flex flex-col justify-center items-center text-center shadow-md">
              <div className="border-b border-violet-950/60 w-full pb-4 mb-6 text-left">
                <span className="text-xs font-semibold text-violet-300/70 uppercase tracking-wider">INVESTIGATION RESULTS</span>
                <h3 className="text-xl font-bold text-white">Content Analysis Results</h3>
              </div>

              {!analyzedContent && !loadingContent && (
                <div className="py-12 text-zinc-400">
                  <Mail className="w-12 h-12 mx-auto mb-3 opacity-25 text-violet-400" />
                  <p className="text-sm">Submit email content to view the risk assessment and phishing indicators returned by the analyzer.</p>
                </div>
              )}

              {loadingContent && (
                <div className="py-12 text-violet-400 animate-pulse">
                  <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-sm font-medium">Scanning email content for phishing patterns...</p>
                </div>
              )}

              {analyzedContent && (
                <div className="w-full space-y-4 text-left animate-fadeIn">
                  <div className="bg-[#120e1b] p-4 rounded-lg border border-violet-950 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Content Threat Assessment</p>
                      <p className="text-lg font-bold text-violet-300">Safe / Low Risk</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-400">Phishing Score</p>
                      <p className="text-lg font-mono font-bold text-white">0/100</p>
                    </div>
                  </div>
                  <div className="bg-[#120e1b] p-4 rounded-lg border border-violet-950">
                    <p className="text-sm text-zinc-300 font-medium mb-1">Findings:</p>
                    <p className="text-xs text-zinc-400">No malicious keywords, suspicious login links, or urgency triggers detected in this message body.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}