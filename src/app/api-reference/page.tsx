import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Badge from '@/components/Badge';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'API reference',
  description: 'Operations, request parameters, response models, and live OpenAPI definitions.',
};

export default function ApiReferenceLandingPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">OpenAPI 3.1.0 Verified</Badge>
        </div>

        <h1 id="api-reference">API reference</h1>

        <p>
          The API reference describes the currently deployed La Vinci Developer Preview.
        </p>

        <p>
          Use the guides when you need workflow explanations, validation guidance, and limitations. Use the reference when you need exact request fields, response schemas, media types, or error definitions.
        </p>

        <h2 id="operations">Operations</h2>

        <div className="space-y-4 my-6">
          {/* Operation 1: GET /health */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#161616] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded font-mono font-medium text-[11px] border bg-blue-500/10 text-blue-400 border-blue-500/20">
                  GET
                </span>
                <code className="text-sm font-mono text-white">/health</code>
              </div>
              <Badge variant="preview">Developer Preview</Badge>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Reports the current health of La Vinci’s engines. A healthy response is a point-in-time operational result. It is not an uptime commitment or SLA.
            </p>
            <div className="pt-2">
              <Link
                href="/api-reference/health"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline underline-offset-4 font-medium"
              >
                <span>Open operation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Operation 2: POST /extract */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#161616] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded font-mono font-medium text-[11px] border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  POST
                </span>
                <code className="text-sm font-mono text-white">/extract</code>
              </div>
              <div className="flex items-center gap-1.5">
                <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
                <Badge variant="preview">Developer Preview</Badge>
              </div>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Accepts a supported CAD input and returns structured Rine IR with diagnostics. Real DWG extraction to <code>LAVINCI_CAD_IR_V3</code> is verified.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/api-reference/extract"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline underline-offset-4 font-medium"
              >
                <span>Open operation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/extract"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Read extraction guide &rarr;
              </Link>
            </div>
          </div>

          {/* Operation 3: POST /convert */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#161616] space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="px-2 py-0.5 rounded font-mono font-medium text-[11px] border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  POST
                </span>
                <code className="text-sm font-mono text-white">/convert</code>
              </div>
              <Badge variant="preview">Developer Preview</Badge>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Accepts a supported CAD input and produces a supported converted output. Check the conversion matrix before choosing a target format.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/api-reference/convert"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline underline-offset-4 font-medium"
              >
                <span>Open operation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/convert"
                className="text-xs text-white/60 hover:text-white transition-colors"
              >
                Read conversion guide &rarr;
              </Link>
            </div>
          </div>
        </div>

        <h2 id="interactive-console">Interactive testing in Developer Console</h2>

        <p>
          Developers can evaluate endpoints interactively using the hosted Playground in the Developer Console.
        </p>

        <div className="my-6 p-6 rounded-2xl border border-white/10 bg-[#161616] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-white !mt-0">
              Platform Console Playground
            </h3>
            <p className="text-xs text-white/60 font-light">
              Upload real CAD files, test format conversions, generate API keys, and review live execution telemetry.
            </p>
          </div>
          <a
            href="https://platform.rine.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors shrink-0"
          >
            <span>Open Playground</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </div>

        <h2 id="schemas">Canonical Schemas</h2>

        <p>
          Review structured Pydantic schemas returned across endpoints:
        </p>

        <ul>
          <li>
            <Link href="/api-reference/schemas" className="text-white underline font-mono">
              ExtractResponse &amp; ExtractionDiagnostics
            </Link>
          </li>
          <li>
            <Link href="/api-reference/schemas" className="text-white underline font-mono">
              HealthResponse &amp; EngineInfo
            </Link>
          </li>
          <li>
            <Link href="/api-reference/schemas" className="text-white underline font-mono">
              HTTPValidationError &amp; ValidationError
            </Link>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
