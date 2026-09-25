'use client';

import React, { useState } from 'react';
import DocsNavbar from './DocsNavbar';
import DocsSidebar from './DocsSidebar';
import TableOfContents, { TocItem } from './TableOfContents';
import DocsFooter from './DocsFooter';
import DeveloperPreviewBanner from './DeveloperPreviewBanner';

interface DocsLayoutProps {
  children: React.ReactNode;
  toc?: TocItem[];
  showToc?: boolean;
}

export default function DocsLayout({ children, toc, showToc = true }: DocsLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141313] text-white flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* 1. Slim Developer Preview Banner */}
      <DeveloperPreviewBanner />

      {/* 2. Top Navigation */}
      <DocsNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* 3. Main Workspace Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 flex">
        {/* Left Sidebar (Desktop) */}
        <aside className="hidden md:block w-64 shrink-0 border-r border-white/[0.08] sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <DocsSidebar />
        </aside>

        {/* Mobile Navigation Drawer */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div
              className="w-72 h-full bg-[#161616] border-r border-white/10 p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c7c6c6]/60">
                  Navigation
                </span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-white/50 hover:text-white p-1 rounded transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-sm font-mono">✕</span>
                </button>
              </div>
              <DocsSidebar onItemClick={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        )}

        {/* Center Reading Column */}
        <main className="flex-1 min-w-0 py-8 md:py-10 px-0 sm:px-6 md:px-10 lg:px-12">
          <article className="max-w-[760px] mx-auto space-y-8">
            {showToc && <TableOfContents items={toc} variant="inline" />}
            {children}
          </article>
        </main>

        {/* Right TOC Column (Desktop) */}
        {showToc && (
          <aside className="hidden xl:block w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pl-6 border-l border-white/[0.06]">
            <TableOfContents items={toc} />
          </aside>
        )}
      </div>

      {/* 4. Monolithic Footer */}
      <DocsFooter />
    </div>
  );
}
