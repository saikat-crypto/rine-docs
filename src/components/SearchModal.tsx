'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, FileText, Code2, Layers, RefreshCw } from 'lucide-react';

export interface SearchItem {
  title: string;
  href: string;
  category: 'Guides' | 'Reference' | 'Formats' | 'Updates';
  description: string;
  keywords?: string[];
}

export const SEARCH_INDEX: SearchItem[] = [
  // Guides
  {
    title: 'Documentation Home',
    href: '/',
    category: 'Guides',
    description: 'Engineering-file intelligence for developers. Core entrypoint and task flows.',
    keywords: ['home', 'start', 'introduction', 'cad', 'developer preview'],
  },
  {
    title: 'Overview',
    href: '/overview',
    category: 'Guides',
    description: 'Hub-and-spoke architecture, intermediate representation, and preview boundary.',
    keywords: ['architecture', 'hub and spoke', 'boundaries', 'purpose'],
  },
  {
    title: 'Quickstart',
    href: '/quickstart',
    category: 'Guides',
    description: 'From a supported CAD file to your first verified La Vinci extraction or conversion.',
    keywords: ['quickstart', 'first request', 'tutorial', 'getting started', 'curl'],
  },
  {
    title: 'Authentication',
    href: '/authentication',
    category: 'Guides',
    description: 'API key transport, Bearer authentication headers, and credential security.',
    keywords: ['auth', 'api key', 'bearer', 'token', 'security', 'credentials'],
  },
  {
    title: 'Extract structured CAD data',
    href: '/extract',
    category: 'Guides',
    description: 'Transform DWG/DXF/DWT files into LAVINCI_CAD_IR_V3 with full parsing diagnostics.',
    keywords: ['extract', 'dwg', 'dxf', 'dwt', 'ir', 'parser', 'geometry'],
  },
  {
    title: 'Convert CAD files',
    href: '/convert',
    category: 'Guides',
    description: 'Generate vector PDF, SVG, DXF, PNG, JPEG, and WebP from CAD files or IR JSON.',
    keywords: ['convert', 'pdf', 'svg', 'png', 'jpeg', 'webp', 'dxf', 'presets'],
  },
  {
    title: 'Rine Intermediate Representation',
    href: '/rine-ir',
    category: 'Guides',
    description: 'The normalized data layer between source engineering files and downstream operations.',
    keywords: ['rine-ir', 'intermediate representation', 'ir', 'normalization'],
  },
  {
    title: 'LAVINCI_CAD_IR_V3 Core Schema',
    href: '/rine-ir/v3',
    category: 'Guides',
    description: 'Canonical schema documentation: metadata, extents, layers, primitives, and blocks.',
    keywords: ['v3', 'schema', 'cad ir', 'layers', 'blocks', 'metadata'],
  },
  {
    title: 'Entities and Geometry',
    href: '/rine-ir/v3/entities',
    category: 'Guides',
    description: 'Lines, arcs, circles, polylines, 2D/3D representations, and entity coverage.',
    keywords: ['geometry', 'lines', 'arcs', 'circles', 'polylines', 'entities'],
  },
  {
    title: 'Layers, Blocks, and Layouts',
    href: '/rine-ir/v3/structure',
    category: 'Guides',
    description: 'Block records, nested components, layers, ModelSpace, and PaperSpace layouts.',
    keywords: ['layers', 'blocks', 'inserts', 'layouts', 'modelspace', 'paperspace'],
  },
  {
    title: 'Coordinates and Extents',
    href: '/rine-ir/v3/coordinates',
    category: 'Guides',
    description: 'Coordinate spaces, units, extents calculation, and affine transformations.',
    keywords: ['coordinates', 'extents', 'units', 'transforms', 'bounding box'],
  },
  {
    title: 'Diagnostics in IR Responses',
    href: '/rine-ir/v3/diagnostics',
    category: 'Guides',
    description: 'Telemetry, entity counts, upstream warnings, and execution metrics.',
    keywords: ['telemetry', 'warnings', 'counts', 'extraction time'],
  },
  {
    title: 'Diagnostics and Errors',
    href: '/diagnostics',
    category: 'Guides',
    description: 'Distinguish transport failures from parser diagnostics and inspection policies.',
    keywords: ['diagnostics', 'errors', 'status codes', 'validation error', 'warnings'],
  },
  {
    title: 'Known Limitations',
    href: '/known-limitations',
    category: 'Guides',
    description: 'Characterized boundaries: conversion linework differences, universal fidelity, and SLA.',
    keywords: ['limitations', 'fidelity', 'missing linework', 'boundaries', 'sla'],
  },
  {
    title: 'Service Status',
    href: '/service-status',
    category: 'Guides',
    description: 'Point-in-time engine status check and operational policy.',
    keywords: ['status', 'uptime', 'health', 'operational'],
  },
  {
    title: 'Getting Help and Feedback',
    href: '/help',
    category: 'Guides',
    description: 'Report reproducible CAD file issues, integration queries, and security reports.',
    keywords: ['help', 'support', 'issues', 'reproducible', 'feedback'],
  },

  // Reference
  {
    title: 'API Reference',
    href: '/api-reference',
    category: 'Reference',
    description: 'Production cloud API endpoints, media types, parameters, and live Swagger link.',
    keywords: ['api reference', 'endpoints', 'swagger', 'openapi', 'rest'],
  },
  {
    title: 'GET /health',
    href: '/api-reference/health',
    category: 'Reference',
    description: 'Engine status, LibreDWG availability, and compiler subsystem diagnostics.',
    keywords: ['get health', 'health check', 'engines', 'libredwg'],
  },
  {
    title: 'POST /extract',
    href: '/api-reference/extract',
    category: 'Reference',
    description: 'Extract LAVINCI_CAD_IR_V3 from DWG, DXF, or DWT with telemetry.',
    keywords: ['post extract', 'extract endpoint', 'multipart', 'ir_version'],
  },
  {
    title: 'POST /convert',
    href: '/api-reference/convert',
    category: 'Reference',
    description: 'Compile CAD or IR JSON to PDF, SVG, PNG, JPEG, WebP, or DXF with presets.',
    keywords: ['post convert', 'target_format', 'preset', 'options_json', 'compile'],
  },
  {
    title: 'API Schemas',
    href: '/api-reference/schemas',
    category: 'Reference',
    description: 'ExtractResponse, ExtractionDiagnostics, HealthResponse, EngineInfo, and Errors.',
    keywords: ['schemas', 'json schema', 'models', 'types', 'pydantic'],
  },

  // Formats
  {
    title: 'Supported Formats & Matrix',
    href: '/supported-formats',
    category: 'Formats',
    description: 'Verified input formats, output families, and full conversion matrix.',
    keywords: ['formats', 'dwg', 'dxf', 'dwt', 'pdf', 'svg', 'matrix'],
  },

  // Updates
  {
    title: 'Changelog',
    href: '/changelog',
    category: 'Updates',
    description: 'Developer-facing release log: added capabilities, fixes, and schema updates.',
    keywords: ['changelog', 'releases', 'history', 'updates'],
  },
  {
    title: 'Developer Preview Policy',
    href: '/developer-preview',
    category: 'Updates',
    description: 'Guidelines, stability commitments, breaking change policies, and validation scope.',
    keywords: ['policy', 'preview', 'sla', 'stability', 'commitments'],
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return SEARCH_INDEX.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords?.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [query]);

  // Reset selected index when query results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      } else if (isOpen && filtered.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filtered.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const target = filtered[selectedIndex];
          if (target) {
            router.push(target.href);
            onClose();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIndex, router]);

  const grouped = useMemo(() => {
    const categories: Record<string, SearchItem[]> = {
      Guides: [],
      Reference: [],
      Formats: [],
      Updates: [],
    };
    filtered.forEach((item) => {
      if (categories[item.category]) {
        categories[item.category].push(item);
      }
    });
    return categories;
  }, [filtered]);

  if (!isOpen) return null;

  const categoryIcons: Record<string, React.ReactNode> = {
    Guides: <FileText className="w-3.5 h-3.5 text-blue-400" />,
    Reference: <Code2 className="w-3.5 h-3.5 text-emerald-400" />,
    Formats: <Layers className="w-3.5 h-3.5 text-purple-400" />,
    Updates: <RefreshCw className="w-3.5 h-3.5 text-amber-400" />,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#161616] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-[#1a1a1a]">
          <Search className="w-4 h-4 text-white/40 shrink-0" />
          <input
            type="text"
            placeholder="Search docs, endpoints, formats, schemas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-white/30 focus:outline-none font-light"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-white/40 bg-white/5 border border-white/10 rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {query.trim() === '' ? (
            <div className="text-center py-8">
              <p className="text-xs text-white/40 font-light">
                Type a query to search across guides, endpoints, format matrices, and updates.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Extract', 'Convert', 'LAVINCI_CAD_IR_V3', 'DWG', 'PDF', 'Diagnostics'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-8 text-white/40 text-xs font-light">
              No documentation pages found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            Object.entries(grouped).map(([category, items]) => {
              if (items.length === 0) return null;
              return (
                <div key={category} className="space-y-1.5">
                  <div className="flex items-center gap-2 px-2 text-[10px] uppercase font-mono tracking-widest text-white/40">
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </div>
                  <div className="space-y-1">
                    {items.map((item) => {
                      const isSelected = filtered[selectedIndex]?.href === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className={`group flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                            isSelected
                              ? 'bg-white/10 border-white/20 text-white'
                              : 'hover:bg-white/5 border-transparent hover:border-white/[0.06]'
                          }`}
                        >
                          <div className="pr-4">
                            <div className="text-xs font-medium flex items-center gap-2">
                              <span className={isSelected ? 'text-white' : 'text-white/90 group-hover:text-white'}>
                                {item.title}
                              </span>
                              <span className="text-[10px] font-mono text-white/30">{item.href}</span>
                            </div>
                            <p className="text-[11px] text-white/50 group-hover:text-white/70 line-clamp-1 mt-0.5 font-light">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight
                            className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                              isSelected
                                ? 'text-white translate-x-0.5'
                                : 'text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5'
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-[#141414] flex items-center justify-between text-[11px] text-white/30 font-mono">
          <span>{filtered.length} results</span>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>ESC Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
