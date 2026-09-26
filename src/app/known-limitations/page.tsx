import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Known limitations',
  description: 'Characterized boundaries, conversion fidelity differences, and SLA scope.',
};

export default function KnownLimitationsPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="known-limitation">Characterized Limitations</Badge>
        </div>

        <h1 id="known-limitations">Known limitations</h1>

        <p>
          La Vinci is a Developer Preview under active validation with real engineering files.
        </p>

        <p>
          This page records limitations that can affect integration decisions or output interpretation. It does not imply that every file is affected.
        </p>

        <h2 id="gateway-timeout">30-second API gateway hard timeout</h2>

        <div className="my-5 p-5 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
            <div>
              <strong className="text-white">Status:</strong>{' '}
              <Badge variant="known-limitation">Architectural limit</Badge>
            </div>
            <div>
              <strong className="text-white">Last updated:</strong>{' '}
              <span className="font-mono text-white/80">2026-09-26</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Scope:</strong>{' '}
              <span>All synchronous HTTP API Gateway calls (<code>/extract</code>, <code>/convert</code>)</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Possible effect:</strong>{' '}
              <span>AWS API Gateway HTTP API v2 imposes a hard 30-second integration timeout. High-resolution rasterization (such as 600 DPI <code>ai-vision</code> on massive 50MB+ drawings with tens of thousands of entities) takes 15–20 seconds under normal load. If end-to-end processing exceeds 30 seconds, API Gateway severs the connection with an <code>HTTP 504 Gateway Timeout</code>.</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Mitigation:</strong>{' '}
              <span>For massive CAD files, avoid heavy rasterization overrides. Prefer vector formats (<code>pdf</code>, <code>svg</code>) or upload pre-extracted <code>ir_json</code> payloads to eliminate the initial CAD binary decoding phase.</span>
            </div>
          </div>
        </div>

        <h2 id="conversion-fidelity-differences">Conversion fidelity differences</h2>

        <div className="my-5 p-5 rounded-xl border border-orange-500/20 bg-orange-500/[0.03] space-y-2 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
            <div>
              <strong className="text-white">Status:</strong>{' '}
              <Badge variant="investigation">Under investigation</Badge>
            </div>
            <div>
              <strong className="text-white">Last updated:</strong>{' '}
              <span className="font-mono text-white/80">2026-09-25</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Scope:</strong>{' '}
              <span>Certain conversion cases; exact affected paths are being characterized</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Possible effect:</strong>{' '}
              <span>Output geometry or linework may differ from the source, including missing linework in some cases</span>
            </div>
            <div className="sm:col-span-2">
              <strong className="text-white">Mitigation:</strong>{' '}
              <span>Inspect diagnostics and compare important converted outputs with their source files before downstream use</span>
            </div>
          </div>
        </div>

        <h2 id="universal-fidelity">Universal fidelity</h2>

        <p>
          La Vinci does not currently claim perfect round-trip or universal CAD fidelity.
        </p>

        <p>
          Differences may depend on source-file structure, producer, version, entity type, layout, and target format. Publish narrower limitations as they are reproduced and confirmed.
        </p>

        <h2 id="format-scope">Format scope</h2>

        <p>
          Only formats listed in <Link href="/supported-formats" className="text-white underline">Supported Formats</Link> are within the current verified boundary. Broader engineering-file and technical-document capabilities are product direction, not current endpoint support.
        </p>

        <h2 id="reliability-and-sla">Reliability and SLA</h2>

        <p>
          The Developer Preview does not carry a documented production SLA in the current source record. A healthy <code>/health</code> response indicates current engine status only.
        </p>

        <Callout type="warning" title="Evaluation Policy">
          <p className="font-medium text-amber-200">
            Review supported formats, diagnostics, and known limitations before relying on an output in a production workflow. See the <Link href="/developer-preview" className="underline text-white">Developer Preview Policy</Link> for lifecycle details.
          </p>
        </Callout>
      </div>
    </DocsLayout>
  );
}
