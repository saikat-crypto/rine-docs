import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Overview',
  description: 'Architecture, verified capability boundary, and role of La Vinci.',
};

export default function OverviewPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Verified in Snapshot</Badge>
        </div>

        <h1 id="overview">Overview</h1>

        <p>
          La Vinci is Rine’s engineering-file intelligence and conversion API.
        </p>

        <p>
          It is built around a hub-and-spoke architecture:
        </p>

        {/* Hub and Spoke Architecture Diagram */}
        <div className="my-6 p-6 rounded-2xl border border-white/10 bg-[#161616] text-center space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-[#c7c6c6]">
            Hub-and-Spoke Invariant
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs font-mono">
            <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90">
              Source Engineering Formats<br />
              <span className="text-[10px] text-white/50">(DWG, DXF, DWT)</span>
            </div>
            <span className="text-white/40 rotate-90 md:rotate-0">&rarr;</span>
            <div className="px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 shadow-lg">
              <span className="text-[10px] uppercase tracking-wider block text-purple-400 font-semibold">Normalized Layer</span>
              <strong>LAVINCI_CAD_IR_V3</strong>
            </div>
            <span className="text-white/40 rotate-90 md:rotate-0">&rarr;</span>
            <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 text-left">
              <div>• Extraction &amp; Inspection</div>
              <div>• Compilers: PDF, SVG, DXF, Raster</div>
              <div>• Downstream APIs &amp; MCP Workflows</div>
            </div>
          </div>
        </div>

        <p>
          <strong>source engineering formats &rarr; normalized Rine Intermediate Representation &rarr; extraction, conversion, rendering, comparison, API, and MCP capabilities</strong>
        </p>

        <p>
          The normalized representation is intended to keep file parsing separate from the operations developers build on top of parsed engineering data.
        </p>

        <h2 id="current-developer-preview">Current Developer Preview</h2>

        <p>
          The currently verified preview accepts DWG, DXF, and DWT inputs. Verified output families are:
        </p>

        <ul>
          <li>structured <code>LAVINCI_CAD_IR_V3</code>;</li>
          <li>DXF;</li>
          <li>vector PDF;</li>
          <li>SVG;</li>
          <li>PNG;</li>
          <li>JPEG;</li>
          <li>WebP.</li>
        </ul>

        {/* Verified Capability Matrix */}
        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Operation</th>
                <th>Target Surface</th>
                <th>Verified Capability</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">GET /health</td>
                <td>Engine health check</td>
                <td>LibreDWG availability &amp; 5 compiler subsystems</td>
                <td><Badge variant="verified">Verified</Badge></td>
              </tr>
              <tr>
                <td className="font-mono text-white">POST /extract</td>
                <td>Structured IR data</td>
                <td>Full <code>LAVINCI_CAD_IR_V3</code> + parsing diagnostics</td>
                <td><Badge variant="verified">Verified</Badge></td>
              </tr>
              <tr>
                <td className="font-mono text-white">POST /convert</td>
                <td>File compilation</td>
                <td>Direct compilation to PDF, SVG, DXF, PNG, JPEG, WebP</td>
                <td><Badge variant="verified">Verified</Badge></td>
              </tr>
              <tr>
                <td className="font-mono text-white">GET /docs</td>
                <td>OpenAPI Swagger UI</td>
                <td>Hosted interactive reference documentation</td>
                <td><Badge variant="verified">Verified</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The hosted service currently exposes health, extraction, conversion, and live Swagger documentation surfaces.
        </p>

        <p>
          Endpoint-specific format combinations, request syntax, limits, and response schemas must be taken from the verified API reference.
        </p>

        <h2 id="what-la-vinci-is-for">What La Vinci is for</h2>

        <p>
          Use La Vinci when a software system needs to:
        </p>

        <ul>
          <li>inspect supported CAD content as structured data;</li>
          <li>move supported CAD information into a normalized representation;</li>
          <li>generate a supported vector, raster, or CAD output;</li>
          <li>retain parser diagnostics for downstream validation and review.</li>
        </ul>

        <h2 id="what-the-preview-does-not-establish">What the preview does not establish</h2>

        <Callout type="warning" title="Developer Preview Boundary">
          <p className="font-medium text-amber-200">
            La Vinci’s Developer Preview does not establish universal CAD support, perfect round-trip fidelity, production reliability guarantees, or a production SLA.
          </p>
        </Callout>

        <p>
          Support for RVT, IFC, STEP, IGES, STL, OBJ, LAS, GeoTIFF, KML, point clouds, PDF ingestion, OCR, topology construction or healing, and other unlisted capabilities must not be inferred from Rine’s broader product direction.
        </p>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li>
            <Link href="/quickstart" className="text-white hover:underline">
              Make your first request &rarr;
            </Link>
          </li>
          <li>
            <Link href="/supported-formats" className="text-white hover:underline">
              Review supported formats &rarr;
            </Link>
          </li>
          <li>
            <Link href="/rine-ir" className="text-white hover:underline">
              Understand Rine IR &rarr;
            </Link>
          </li>
          <li>
            <Link href="/known-limitations" className="text-white hover:underline">
              Read known limitations &rarr;
            </Link>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
