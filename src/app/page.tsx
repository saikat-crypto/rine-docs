import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Construction, Mail, ShieldAlert } from 'lucide-react';
import RineLogo from '@/components/RineLogo';

export const metadata = {
  title: 'Documentation in Preparation | Rine',
  description: 'Rine official documentation is currently in progress of preparation.',
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#0F0F11] text-white flex flex-col justify-between selection:bg-white/20 selection:text-white relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.04] to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-white/[0.02] to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Top Header */}
      <header className="w-full border-b border-white/[0.06] backdrop-blur-md bg-[#0F0F11]/80 relative z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://rine.studio"
              className="inline-flex items-center gap-2 group transition-opacity hover:opacity-80"
              aria-label="Rine Studio"
            >
              <RineLogo className="w-5 h-5 text-white" color="#ffffff" />
              <span className="text-sm font-semibold tracking-widest text-white uppercase">
                Rine
              </span>
            </a>
            <span className="text-white/20 font-light">/</span>
            <span className="text-xs uppercase tracking-[0.18em] text-white/50 font-medium">
              Docs
            </span>
          </div>

          <a
            href="https://platform.rine.studio"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-full transition-all"
          >
            <span>Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </header>

      {/* Center Notice Container */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-xl w-full text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-300 text-[11px] font-medium tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Notice: In Preparation</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
              Documentation is in progress of preparation
            </h1>
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-lg mx-auto">
              Our engineering file intelligence documentation, API specifications, and integration guides are currently undergoing comprehensive revision and updates.
            </p>
          </div>

          {/* Developer Preview Callout */}
          <div className="p-5 rounded-2xl border border-white/10 bg-[#161618]/90 text-left text-xs font-light text-white/70 space-y-2 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-2 text-white font-medium text-xs">
              <ShieldAlert className="w-4 h-4 text-white/80" />
              <span>Developer Preview Notice</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              La Vinci is currently in Developer Preview. Support is actively being validated against real engineering files. Some files may produce parsing or conversion differences, and current verification does not imply universal CAD fidelity or a production SLA.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://platform.rine.studio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-xs font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all shadow-md"
            >
              <span>Visit Developer Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:hello@rine.studio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white text-xs font-medium px-6 py-3 rounded-full transition-all"
            >
              <Mail className="w-3.5 h-3.5 opacity-70" />
              <span>Contact hello@rine.studio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-white/[0.06] py-6 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <div className="flex items-center gap-2">
            <RineLogo className="w-4 h-4 text-white/40" color="currentColor" />
            <span>&copy; {new Date().getFullYear()} Rine Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://rine.studio"
              className="hover:text-white/80 transition-colors"
            >
              Rine Studio
            </a>
            <a
              href="https://platform.rine.studio"
              className="hover:text-white/80 transition-colors"
            >
              Developer Console
            </a>
            <a
              href="mailto:hello@rine.studio"
              className="hover:text-white/80 transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
