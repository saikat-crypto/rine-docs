'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const SIDEBAR_SECTIONS: NavSection[] = [
  {
    title: 'Start',
    items: [
      { label: 'Documentation Home', href: '/' },
      { label: 'Overview', href: '/overview' },
      { label: 'Quickstart', href: '/quickstart' },
      { label: 'Authentication', href: '/authentication' },
    ],
  },
  {
    title: 'Work with CAD files',
    items: [
      { label: 'Extract structured CAD data', href: '/extract' },
      { label: 'Convert CAD files', href: '/convert' },
      { label: 'Supported formats', href: '/supported-formats' },
      {
        label: 'Rine IR',
        href: '/rine-ir',
        children: [
          { label: 'Introduction to Rine IR', href: '/rine-ir' },
          { label: 'LAVINCI_CAD_IR_V3', href: '/rine-ir/v3' },
          { label: 'Entities and geometry', href: '/rine-ir/v3/entities' },
          { label: 'Layers, blocks, and layouts', href: '/rine-ir/v3/structure' },
          { label: 'Coordinates and extents', href: '/rine-ir/v3/coordinates' },
          { label: 'Diagnostics in IR responses', href: '/rine-ir/v3/diagnostics' },
        ],
      },
    ],
  },
  {
    title: 'Operate and troubleshoot',
    items: [
      { label: 'Diagnostics and errors', href: '/diagnostics' },
      { label: 'Known limitations', href: '/known-limitations' },
      { label: 'Service status', href: '/service-status' },
      { label: 'Getting help and giving feedback', href: '/help' },
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        label: 'API reference',
        href: '/api-reference',
        children: [
          { label: 'API Reference Home', href: '/api-reference' },
          { label: 'GET /health', href: '/api-reference/health' },
          { label: 'POST /extract', href: '/api-reference/extract' },
          { label: 'POST /convert', href: '/api-reference/convert' },
          { label: 'Schemas', href: '/api-reference/schemas' },
        ],
      },
    ],
  },
  {
    title: 'Updates',
    items: [
      { label: 'Changelog', href: '/changelog' },
      { label: 'Developer Preview policy', href: '/developer-preview' },
    ],
  },
];

interface DocsSidebarProps {
  onItemClick?: () => void;
}

export default function DocsSidebar({ onItemClick }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full py-6 pr-4 space-y-7 text-xs select-none">
      {SIDEBAR_SECTIONS.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6]/60 px-3 font-mono">
            {section.title}
          </h3>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              if (item.children) {
                const isParentActive =
                  pathname === item.href || item.children.some((c) => c.href === pathname);
                return (
                  <li key={item.href} className="space-y-0.5">
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className={`flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors font-light ${
                        pathname === item.href
                          ? 'bg-white/10 text-white font-medium'
                          : isParentActive
                          ? 'text-white'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-white/30 transition-transform ${
                          isParentActive ? 'rotate-90 text-white/60' : ''
                        }`}
                      />
                    </Link>
                    {isParentActive && (
                      <ul className="pl-3.5 ml-3 border-l border-white/[0.08] space-y-0.5 py-1">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onItemClick}
                                className={`block px-2.5 py-1 rounded text-[11px] transition-colors ${
                                  isChildActive
                                    ? 'text-white font-medium bg-white/10'
                                    : 'text-white/50 hover:text-white hover:bg-white/[0.03]'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={`block px-3 py-1.5 rounded-lg transition-colors font-light ${
                      isActive
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
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
    </nav>
  );
}
