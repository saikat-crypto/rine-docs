'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ExternalLink } from 'lucide-react';
import RineLogo from './RineLogo';
import SearchModal from './SearchModal';

interface DocsNavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export default function DocsNavbar({ onToggleSidebar, isSidebarOpen }: DocsNavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#141313]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Left: Brand + Breadcrumb */}
          <div className="flex items-center gap-3">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="md:hidden text-white/60 hover:text-white p-1 rounded transition-colors"
                aria-label="Toggle navigation"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}

            <a
              href="https://rine.studio"
              className="inline-flex items-center gap-2 group"
              aria-label="Rine Studio"
            >
              <RineLogo className="w-5 h-5 text-white transition-transform group-hover:scale-105" color="#ffffff" />
              <span className="text-sm font-semibold tracking-widest text-white uppercase">
                Rine
              </span>
            </a>
            <span className="text-white/20 font-light">/</span>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors font-medium"
            >
              Docs
            </Link>
          </div>

          {/* Center: Search Trigger */}
          <div className="flex-1 max-w-sm mx-4 hidden sm:block">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all text-xs"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                <span className="font-light">Search docs...</span>
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/40">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Utility Navigation */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-normal">
            <button
              onClick={() => setSearchOpen(true)}
              className="sm:hidden text-white/60 hover:text-white p-1.5 rounded"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/api-reference"
              className="hidden lg:inline-flex items-center text-white/60 hover:text-white transition-colors"
            >
              API Reference
            </Link>

            <a
              href="https://rine.studio"
              className="hidden md:inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors"
            >
              Back to Rine
            </a>

            <a
              href="https://platform.rine.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-medium px-4 py-1.5 rounded-full hover:bg-white/20 transition-all duration-300 tracking-wide shadow-sm"
            >
              <span>Open Platform</span>
              <ExternalLink className="w-3 h-3 text-white/70" />
            </a>
          </div>
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
