import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Supported formats',
  description: 'Verified input formats, output families, and endpoint conversion matrix.',
};

export default function SupportedFormatsPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="supported-formats">Supported formats</h1>

        <p>
          Format support is specific to an operation and conversion path.
        </p>

        <p>
          A format listed here is within the verified Developer Preview boundary. It is not a promise that every file, version, entity type, or input-to-output combination will produce complete fidelity.
        </p>

        <h2 id="verified-inputs">Verified inputs</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Format</th>
                <th>Preview status</th>
                <th>Endpoint-specific note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white font-medium">DWG</td>
                <td><Badge variant="verified">Verified input</Badge></td>
                <td><code>/extract</code> with real DWG is verified. Conversion-path details require matrix verification.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">DXF</td>
                <td><Badge variant="verified">Verified input</Badge></td>
                <td>Exact extraction and conversion combinations verified on live backend (ASCII and Binary).</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">DWT</td>
                <td><Badge variant="verified">Verified input</Badge></td>
                <td>AutoCAD template files share the DWG/DXF structural container and are parsed via the same engine.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="verified-output-families">Verified output families</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Output</th>
                <th>Preview status</th>
                <th>Important note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white font-medium">LAVINCI_CAD_IR_V3</td>
                <td><Badge variant="verified">Verified structured output</Badge></td>
                <td>Verified from DWG/DXF extraction. Exact schema verified from live backend.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">DXF</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>AutoCAD AC1027 standard re-synthesis via <code>cad-ir-to-dxf</code> compiler.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">Vector PDF</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>This is an output capability, not PDF ingestion. Generated via ReportLab vector primitives.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">SVG</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>Scalable vector graphics with layer grouping (<code>&lt;g&gt;</code>) and dynamic stroke scaling.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">PNG</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>Rasterized via PyMuPDF + Pillow at configurable DPI (72–600 DPI) with tight padding.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">JPEG</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>Lossy raster output for fast thumbnails and multimodal AI vision pipelines.</td>
              </tr>
              <tr>
                <td className="font-mono text-white font-medium">WebP</td>
                <td><Badge variant="verified">Verified output family</Badge></td>
                <td>Modern compressed raster format with quality controls.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="not-established-as-current-support">Not established as current support</h2>

        <p>
          Do not infer current support for:
        </p>

        <ul>
          <li>PDF input or PDF document extraction;</li>
          <li>RVT or native Revit;</li>
          <li>IFC;</li>
          <li>STEP or IGES;</li>
          <li>STL or OBJ;</li>
          <li>LAS or point clouds;</li>
          <li>GeoTIFF or KML;</li>
          <li>OCR or specification intelligence;</li>
          <li>topology construction or healing;</li>
          <li>native Revit or IFC generation;</li>
          <li>universal engineering-format conversion.</li>
        </ul>

        <h2 id="conversion-matrix">Conversion matrix</h2>

        <p>
          Verified conversion paths tested against the hosted backend:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0 text-[11px]">
            <thead>
              <tr>
                <th>Input</th>
                <th>Output</th>
                <th>Endpoint</th>
                <th>Status</th>
                <th>Known limitation</th>
                <th>Last Verified</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">DWG</td>
                <td className="font-mono text-white">LAVINCI_CAD_IR_V3</td>
                <td><code>POST /extract</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>3D ACIS solids dropped in 2D IR</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DXF</td>
                <td className="font-mono text-white">LAVINCI_CAD_IR_V3</td>
                <td><code>POST /extract</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Requires valid ENDSEC structure</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DWT</td>
                <td className="font-mono text-white">LAVINCI_CAD_IR_V3</td>
                <td><code>POST /extract</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Template entities only</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DWG</td>
                <td className="font-mono text-white">PDF (Vector)</td>
                <td><code>POST /convert</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Linework fidelity under characterization</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DWG</td>
                <td className="font-mono text-white">SVG</td>
                <td><code>POST /convert</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Arc sweep flags subject to handedness</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DWG</td>
                <td className="font-mono text-white">DXF</td>
                <td><code>POST /convert</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Down-compiled to AC1027</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DWG</td>
                <td className="font-mono text-white">PNG / JPEG / WebP</td>
                <td><code>POST /convert</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Subject to 8px tight-crop buffer</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">DXF</td>
                <td className="font-mono text-white">SVG / PDF / Raster</td>
                <td><code>POST /convert</code></td>
                <td><Badge variant="verified">Verified in Developer Preview</Badge></td>
                <td>Linework fidelity under characterization</td>
                <td className="font-mono text-white/50">2026-09-25</td>
              </tr>
              <tr>
                <td className="font-mono text-white">PDF</td>
                <td className="font-mono text-white">DWG / DXF / IR</td>
                <td>&mdash;</td>
                <td><Badge variant="unsupported">Not supported</Badge></td>
                <td>PDF is strictly an output format</td>
                <td className="font-mono text-white/50">&mdash;</td>
              </tr>
              <tr>
                <td className="font-mono text-white">RVT / IFC</td>
                <td className="font-mono text-white">Any</td>
                <td>&mdash;</td>
                <td><Badge variant="unsupported">Not supported</Badge></td>
                <td>Product direction, not current API</td>
                <td className="font-mono text-white/50">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocsLayout>
  );
}
