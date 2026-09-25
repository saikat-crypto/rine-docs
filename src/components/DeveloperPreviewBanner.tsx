'use client';

import React from 'react';
import Link from 'next/link';

export default function DeveloperPreviewBanner() {
  return (
    <div className="w-full bg-[#181818] border-b border-white/[0.08] text-xs text-white/80 py-2.5 px-4 sm:px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Developer Preview
          </span>
          <p className="text-white/70 text-xs font-light leading-snug">
            La Vinci is under active validation with real CAD files. Review supported formats, diagnostics, and known limitations before relying on an output in a production workflow.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 text-xs text-white/60 font-medium">
          <Link
            href="/developer-preview"
            className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            Read the preview policy
          </Link>
          <span className="text-white/20">|</span>
          <Link
            href="/known-limitations"
            className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white"
          >
            View known limitations
          </Link>
        </div>
      </div>
    </div>
  );
}
