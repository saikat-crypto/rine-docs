'use client';

import React from 'react';
import Link from 'next/link';
import RineLogo from './RineLogo';

export default function DocsNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/[0.08] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <a href="https://rine.studio" className="inline-flex items-center gap-2" aria-label="Rine Studio">
            <RineLogo className="w-6 h-6 text-black" color="#000000" />
            <span className="text-xl font-normal tracking-tight text-black">Rine</span>
          </a>
          <span className="text-xs text-neutral-300 font-light">/</span>
          <Link href="/" className="text-xs uppercase tracking-[0.16em] text-neutral-500 font-normal hover:text-black transition-colors">
            Documentation
          </Link>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4 text-xs font-normal">
          <a
            href="https://rine.studio"
            className="hidden sm:inline-block text-neutral-500 hover:text-black transition-colors"
          >
            Studio &rarr;
          </a>
          <a
            href="https://platform.rine.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-neutral-500 hover:text-black transition-colors"
          >
            Platform &rarr;
          </a>
          <a
            href="https://github.com/saikat-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://platform.rine.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded border border-black bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-normal"
          >
            Start Building
          </a>
        </div>
      </div>
    </header>
  );
}
