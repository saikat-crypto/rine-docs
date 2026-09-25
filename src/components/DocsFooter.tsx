import React from 'react';
import Link from 'next/link';
import RineLogo from './RineLogo';

export default function DocsFooter() {
  return (
    <footer className="w-full mt-24 border-t border-white/[0.08] bg-[#131313] text-white/70 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        {/* Persistent Specification Footer Navigation (Section 2) */}
        <nav className="border-b border-white/[0.08] pb-6 mb-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#c7c6c6]/50">
            Persistent Navigation
          </span>
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-white/70">
            <a href="https://rine.studio" className="hover:text-white transition-colors">
              Rine
            </a>
            <a
              href="https://platform.rine.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Platform
            </a>
            <Link href="/" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/api-reference" className="hover:text-white transition-colors">
              API Reference
            </Link>
            <Link href="/known-limitations" className="hover:text-white transition-colors">
              Known Limitations
            </Link>
            <Link href="/changelog" className="hover:text-white transition-colors">
              Changelog
            </Link>
            <Link href="/help" className="hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </nav>

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <RineLogo className="w-6 h-6 text-white" color="#ffffff" />
              <span className="text-base font-semibold tracking-widest text-white uppercase">
                Rine
              </span>
            </div>
            <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm">
              Foundational intelligence layer for physical engineering files. Turning proprietary CAD formats into structured data, deterministic vector representations, and programmable API workflows.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                La Vinci Developer Preview
              </span>
            </div>
          </div>

          {/* Links 1: Documentation */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6] font-mono">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/overview" className="hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/quickstart" className="hover:text-white transition-colors">
                  Quickstart
                </Link>
              </li>
              <li>
                <Link href="/extract" className="hover:text-white transition-colors">
                  Extract CAD Data
                </Link>
              </li>
              <li>
                <Link href="/convert" className="hover:text-white transition-colors">
                  Convert CAD Files
                </Link>
              </li>
              <li>
                <Link href="/supported-formats" className="hover:text-white transition-colors">
                  Supported Formats
                </Link>
              </li>
              <li>
                <Link href="/rine-ir" className="hover:text-white transition-colors">
                  Rine IR
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2: Reference & Ops */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6] font-mono">
              Reference & Ops
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/api-reference" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <a
                  href="https://lavinci.rine.studio/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Live Swagger UI &rarr;
                </a>
              </li>
              <li>
                <Link href="/diagnostics" className="hover:text-white transition-colors">
                  Diagnostics & Errors
                </Link>
              </li>
              <li>
                <Link href="/known-limitations" className="hover:text-white transition-colors">
                  Known Limitations
                </Link>
              </li>
              <li>
                <Link href="/service-status" className="hover:text-white transition-colors">
                  Service Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 3: Rine Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6] font-mono">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="https://rine.studio" className="hover:text-white transition-colors">
                  Rine Home
                </a>
              </li>
              <li>
                <a
                  href="https://platform.rine.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Developer Platform &rarr;
                </a>
              </li>
              <li>
                <Link href="/developer-preview" className="hover:text-white transition-colors">
                  Preview Policy
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help & Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Monolithic Giant Typography Footer Mark as defined in Brand Guidelines Section 3.2 #5 */}
        <div className="border-t border-white/[0.06] pt-12 pb-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-white/40 font-light">
          <div>
            &copy; {new Date().getFullYear()} Rine. All rights reserved. La Vinci is a Developer Preview under active validation.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/developer-preview" className="hover:text-white transition-colors">
              Developer Preview Terms
            </Link>
            <Link href="/known-limitations" className="hover:text-white transition-colors">
              Fidelity Boundary
            </Link>
            <Link href="/help" className="hover:text-white transition-colors">
              Technical Inquiries
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center overflow-hidden">
          <div className="text-[6rem] sm:text-[9rem] md:text-[11rem] font-bold tracking-tighter leading-none text-white/[0.03] select-none pointer-events-none">
            RINE
          </div>
        </div>
      </div>
    </footer>
  );
}
