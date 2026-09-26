import React from 'react';
import Link from 'next/link';
import RineLogo from '@/components/RineLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141313] text-white flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-white/20 selection:text-white">
      {/* ── HEADER ── */}
      <header className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <a href="https://rine.studio" className="flex items-center gap-2.5 group">
          <RineLogo className="w-5 h-5 text-white opacity-90 group-hover:opacity-100 transition-opacity" color="#ffffff" />
          <span className="text-sm font-semibold tracking-widest text-white uppercase">
            Rine
          </span>
          <span className="text-white/20 font-light text-xs">/</span>
          <span className="text-xs uppercase tracking-[0.18em] text-white/50 font-medium">
            Docs
          </span>
        </a>

        <div className="flex items-center gap-4 text-xs font-mono tracking-wider">
          <a
            href="https://rine.studio"
            className="text-white/60 hover:text-white transition-colors"
          >
            ← Rine.studio
          </a>
          <a
            href="https://platform.rine.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all uppercase text-[11px]"
          >
            Platform Console &rarr;
          </a>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-2xl mx-auto text-center py-16 sm:py-24 px-4 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-[11px] font-mono tracking-wider uppercase text-white/80">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Documentation is in progress of preparation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
          Documentation is currently being prepared.
        </h1>

        <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-md mx-auto">
          Comprehensive API documentation, schema references, and developer guides are currently being finalized alongside our anticipated product launches. Complete developer guides will be published soon.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 font-mono tracking-wide"
          >
            ← Return to Docs Home
          </Link>
          <a
            href="https://platform.rine.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/15 text-white/80 text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 font-mono tracking-wide"
          >
            Open Platform Console &rarr;
          </a>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/40 pt-8 border-t border-white/10">
        <span>© 2026 Rine Studio. Engineering-file infrastructure.</span>
        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@rine.studio"
            className="hover:text-white transition-colors"
          >
            hello@rine.studio
          </a>
          <a
            href="https://platform.rine.studio"
            className="hover:text-white transition-colors"
          >
            Platform Console
          </a>
        </div>
      </footer>
    </div>
  );
}
