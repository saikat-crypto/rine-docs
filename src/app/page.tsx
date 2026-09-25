'use client';

import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import { ArrowRight, FileCode2, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function HomePage() {
  return (
    <DocsLayout showToc={false}>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="space-y-5 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Developer Preview</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
            Engineering-file intelligence for developers
          </h1>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
            La Vinci turns supported CAD files into structured engineering data and reusable output formats through a hosted API.
          </p>

          <p className="text-sm text-white/60 font-light leading-relaxed max-w-2xl">
            Extract normalized CAD information, convert files for downstream systems, and retain diagnostics about what the parser encountered.
          </p>

          <div className="p-4 rounded-xl border border-white/10 bg-[#171717] text-xs font-light text-white/70 space-y-1">
            <strong className="text-white font-medium">Developer Preview:</strong> La Vinci is actively being validated against real engineering files. Current support does not imply universal CAD fidelity or a production SLA.
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/quickstart"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/25 text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 tracking-wide shadow-sm"
            >
              Run the Quickstart &rarr;
            </Link>
            <Link
              href="/api-reference"
              className="inline-flex items-center justify-center bg-white/[0.04] border border-white/10 text-white/80 text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 tracking-wide"
            >
              Open API Reference
            </Link>
          </div>
        </section>

        {/* Task Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
          {/* Card 1: Extract */}
          <div className="rounded-[20px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border border-white/10 bg-[#161616] hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-normal text-white tracking-tight !mt-2 !mb-0 !border-none !pb-0">
                Extract structured CAD data
              </h2>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Transform a supported CAD file into <code className="text-white/90">LAVINCI_CAD_IR_V3</code>, Rine&apos;s normalized intermediate representation.
              </p>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                The extraction response includes structured CAD information and diagnostics produced during parsing.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/extract"
                className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
              >
                <span>Read the extraction guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Convert */}
          <div className="rounded-[20px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border border-white/10 bg-[#161616] hover:border-white/20 transition-all">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-normal text-white tracking-tight !mt-2 !mb-0 !border-none !pb-0">
                Convert a CAD file
              </h2>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Produce a supported CAD, vector, or raster output from an accepted CAD input.
              </p>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Conversion support is format-specific. Check the current matrix and known limitations before integrating a path.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/convert"
                className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
              >
                <span>Read the conversion guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How La Vinci Works */}
        <section className="space-y-6 pt-4 border-t border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#c7c6c6] font-mono">
              Pipeline Architecture
            </span>
            <h2 className="text-2xl font-light text-white tracking-tight !mt-1 !border-none">
              How La Vinci works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#161616] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white/80 flex items-center justify-center text-[10px]">
                  1
                </span>
                <span>INGESTION</span>
              </div>
              <h3 className="text-sm font-medium text-white !mt-0">
                Submit a supported CAD file
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Current verified input formats are DWG, DXF, and DWT.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#161616] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white/80 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>NORMALIZATION</span>
              </div>
              <h3 className="text-sm font-medium text-white !mt-0">
                Process through Rine’s normalized representation
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                La Vinci uses <code className="text-white/80">LAVINCI_CAD_IR_V3</code> as the structured layer between source files and reusable operations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.08] bg-[#161616] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white/80 flex items-center justify-center text-[10px]">
                  3
                </span>
                <span>COMPILATION</span>
              </div>
              <h3 className="text-sm font-medium text-white !mt-0">
                Use structured data or a converted output
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Verified output families include structured IR, DXF, vector PDF, SVG, PNG, JPEG, and WebP. Exact input-to-output combinations must be checked in the supported-formats matrix.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Capability Strip */}
        <section className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#161616] space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#c7c6c6] font-mono">
              Verified Capability Strip &bull; Developer Preview
            </span>
            <Link
              href="/supported-formats"
              className="text-xs text-white/50 hover:text-white transition-colors underline underline-offset-4"
            >
              Full matrix &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3 rounded-lg border border-white/[0.06] bg-[#1a1a1a] space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                Verified Inputs
              </span>
              <span className="text-white font-medium">DWG, DXF, DWT</span>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.06] bg-[#1a1a1a] space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                Normalized Layer
              </span>
              <span className="text-purple-300 font-medium">LAVINCI_CAD_IR_V3</span>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.06] bg-[#1a1a1a] space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                Verified Outputs
              </span>
              <span className="text-white font-medium">PDF, SVG, DXF, PNG, WebP</span>
            </div>

            <div className="p-3 rounded-lg border border-white/[0.06] bg-[#1a1a1a] space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                Preview Endpoints
              </span>
              <span className="text-emerald-400 font-medium">/extract, /convert, /health</span>
            </div>
          </div>
        </section>

        {/* Diagnostics Callout */}
        <section className="p-6 rounded-2xl border border-white/10 bg-[#171717] space-y-2">
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Diagnostics are part of the result</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            CAD files vary by producer, version, entity use, and internal structure. La Vinci surfaces parsing warnings and diagnostics so that callers can inspect uncertainty instead of treating every completed request as equivalent.
          </p>
        </section>

        {/* Explore Links */}
        <section className="space-y-4 pt-4 border-t border-white/[0.08]">
          <h2 className="text-xl font-light text-white tracking-tight !mt-0 !border-none">
            Explore
          </h2>
          <ul className="space-y-2.5 text-xs font-light">
            <li className="flex items-start gap-2">
              <span className="text-white/30 mt-0.5">•</span>
              <p>
                <Link href="/quickstart" className="text-white font-medium hover:underline underline-offset-4 mr-1.5">
                  Quickstart:
                </Link>
                <span className="text-white/60">complete your first verified API request.</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/30 mt-0.5">•</span>
              <p>
                <Link href="/supported-formats" className="text-white font-medium hover:underline underline-offset-4 mr-1.5">
                  Supported formats:
                </Link>
                <span className="text-white/60">see the current input, output, and endpoint matrix.</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/30 mt-0.5">•</span>
              <p>
                <Link href="/rine-ir" className="text-white font-medium hover:underline underline-offset-4 mr-1.5">
                  Rine IR:
                </Link>
                <span className="text-white/60">understand the normalized representation.</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/30 mt-0.5">•</span>
              <p>
                <Link href="/known-limitations" className="text-white font-medium hover:underline underline-offset-4 mr-1.5">
                  Known limitations:
                </Link>
                <span className="text-white/60">review current fidelity boundaries.</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/30 mt-0.5">•</span>
              <p>
                <Link href="/api-reference" className="text-white font-medium hover:underline underline-offset-4 mr-1.5">
                  API reference:
                </Link>
                <span className="text-white/60">inspect the live operation and schema definitions.</span>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </DocsLayout>
  );
}
