'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavSection {
  title: string;
  items: { label: string; href: string; badge?: string }[];
}

const SIDEBAR_SECTIONS: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Overview & Quickstart', href: '/' },
      { label: 'Developer Onboarding & Auth', href: '/getting-started' },
    ],
  },
  {
    title: 'Core Architecture',
    items: [
      { label: 'La Vinci CAD IR V3', href: '/architecture/cad-ir' },
      { label: 'Deterministic Normalization', href: '/architecture/normalization' },
    ],
  },
  {
    title: 'Compilers & Vector Engines',
    items: [
      { label: 'cad-ir-to-pdf Compiler', href: '/compilers/cad-ir-to-pdf' },
      { label: 'Analytic Bézier Decomposition', href: '/compilers/bezier-decomposition' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { label: 'REST Ingestion & Parse APIs', href: '/api/endpoints' },
      { label: 'Event Telemetry & Webhooks', href: '/api/webhooks' },
    ],
  },
  {
    title: 'Agent Infrastructure',
    items: [
      { label: 'Model Context Protocol (MCP)', href: '/mcp' },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-black/[0.08] py-8 pr-6 hidden md:block">
      <div className="space-y-8 sticky top-24">
        {SIDEBAR_SECTIONS.map((section, idx) => (
          <div key={idx} className="space-y-2.5">
            <h4 className="text-[11px] font-normal uppercase tracking-[0.14em] text-neutral-400">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-1.5 rounded text-xs font-normal transition-colors ${
                        isActive
                          ? 'bg-neutral-100 text-black font-medium'
                          : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
