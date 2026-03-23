import { useState } from 'react';
import { Mic, Download, Zap, Lock, Command, Apple, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const handleDownload = () => {
    // Create a dummy DMG file for download
    const content = "Placeholder DMG. macOS apps cannot be compiled in this Linux web environment. Please compile the provided Swift code in Xcode.";
    const blob = new Blob([content], { type: 'application/x-apple-diskimage' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'FlowClone-v1.0.dmg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Alert the user about the environment limitation
    alert("Download started!\n\nNote: Because this is a web-based Linux environment, it cannot compile a real macOS .dmg file. The downloaded file is a placeholder. To get the real working app, the Swift code must be compiled in Xcode on a Mac.");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-white font-semibold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <span>FlowClone</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        </div>
        <button 
          onClick={handleDownload}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Get App</span>
        </button>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Now available for macOS 13.0+</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 max-w-4xl"
        >
          Speak your mind.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Type anywhere.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
        >
          Hold the Control key, speak naturally, and release. FlowClone instantly transcribes your voice and types it into any active Mac application.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/25 w-full sm:w-auto"
          >
            <Apple className="w-5 h-5" />
            <span>Download .dmg</span>
          </button>
          <p className="text-sm text-zinc-500 mt-4 sm:mt-0 sm:ml-4">
            Free • Apple Silicon & Intel • 100% Local
          </p>
        </motion.div>

        {/* Visual Demo / Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 relative w-full max-w-4xl aspect-video rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 z-10" />
          
          {/* Fake macOS Window */}
          <div className="w-3/4 h-3/4 bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden z-0">
            <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="p-6 flex-1 text-left">
              <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                Hey team, just wanted to give a quick update on the project. <span className="text-orange-400 border-r-2 border-orange-400 animate-pulse">Everything is running smoothly and we are on track for the release tomorrow.</span>
              </p>
            </div>
          </div>

          {/* Floating Dictation Indicator */}
          <div className="absolute bottom-12 z-20 flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-5 py-3 rounded-full shadow-2xl">
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-20" />
              <Mic className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-sm font-medium text-white">Listening...</span>
          </div>
        </motion.div>
      </main>

      {/* Features */}
      <section id="features" className="border-t border-zinc-900 bg-zinc-950/50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
              <p className="text-zinc-400 leading-relaxed">
                Starts recording the millisecond you press Control. Transcribes in real-time with near-zero latency.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Command className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Works Everywhere</h3>
              <p className="text-zinc-400 leading-relaxed">
                Whether you're in Slack, Notion, Xcode, or your browser. If you can type there, you can dictate there.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Lock className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">100% Private</h3>
              <p className="text-zinc-400 leading-relaxed">
                Powered by local Whisper models. Your voice never leaves your Mac. No internet connection required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
