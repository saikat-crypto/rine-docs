import React from 'react';
import Link from 'next/link';

export default function DocsHomePage() {
  return (
    <article className="space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-black/[0.08] pb-8">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          Developer Documentation &bull; Rine Platform V1
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-black">
          Rine Developer Documentation
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-3xl">
          The engineering-file intelligence layer for software teams and AI builders. Convert messy, legacy CAD formats into deterministic intermediate representations, publication-grade vector assets, and agent-native MCP toolcalls.
        </p>
      </div>

      {/* Quick Navigation Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/architecture/cad-ir"
          className="group p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-2.5"
        >
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-normal">
            Architecture
          </div>
          <h3 className="text-lg font-normal text-black tracking-tight group-hover:text-black">
            La Vinci CAD IR Specification &rarr;
          </h3>
          <p className="text-xs text-neutral-500 font-normal leading-relaxed">
            Decouple CAD parsing from geometry consumption. Learn how the LAVINCI_CAD_IR_V3 schema unifies 2D and 3D primitives.
          </p>
        </Link>

        <Link
          href="/compilers/cad-ir-to-pdf"
          className="group p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-2.5"
        >
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-normal">
            Vector Compilers
          </div>
          <h3 className="text-lg font-normal text-black tracking-tight group-hover:text-black">
            cad-ir-to-pdf Compiler &rarr;
          </h3>
          <p className="text-xs text-neutral-500 font-normal leading-relaxed">
            Compile resolution-independent PDF blueprints directly from normalized IR geometry with analytic cubic Bézier curve decomposition.
          </p>
        </Link>

        <Link
          href="/api/endpoints"
          className="group p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-2.5"
        >
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-normal">
            REST & Webhooks
          </div>
          <h3 className="text-lg font-normal text-black tracking-tight group-hover:text-black">
            API Reference & Authentication &rarr;
          </h3>
          <p className="text-xs text-neutral-500 font-normal leading-relaxed">
            Provision API keys, ingest DWG/DXF binaries via signed streams, and subscribe to Customer.io event-driven webhooks.
          </p>
        </Link>

        <Link
          href="/mcp"
          className="group p-6 rounded-xl border border-black/10 hover:border-black/30 transition-all bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-2.5"
        >
          <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-normal">
            Agent Intelligence
          </div>
          <h3 className="text-lg font-normal text-black tracking-tight group-hover:text-black">
            Model Context Protocol (MCP) &rarr;
          </h3>
          <p className="text-xs text-neutral-500 font-normal leading-relaxed">
            Empower Claude and autonomous engineering agents to inspect, query, measure, and reason over blueprints directly.
          </p>
        </Link>
      </div>

      {/* Core Principles */}
      <div className="space-y-6 pt-6">
        <h2 className="text-2xl font-normal tracking-tight text-black">
          The Architectural Doctrine
        </h2>
        <div className="space-y-4 text-sm text-neutral-600 font-normal leading-relaxed">
          <p>
            Rine was built on a single mathematical thesis: <strong>Engineering file formats should not dictate how modern software platforms consume physical world data.</strong>
          </p>
          <p>
            Traditional desktop CAD tools rely on heavy, proprietary runtimes that trap geometry inside impenetrable binary files. Rine isolates the extraction layer, normalizes geometry into canonical mathematical entities, and exposes clean, deterministic APIs that developers and AI agents can execute at scale.
          </p>
        </div>
      </div>
    </article>
  );
}
