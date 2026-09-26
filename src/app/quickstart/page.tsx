import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Quickstart',
  description: 'From a supported CAD file to your first verified La Vinci result.',
};

export default function QuickstartPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="quickstart">Quickstart</h1>

        <p>
          This guide takes you from a supported CAD file to your first verified La Vinci result.
        </p>

        <p>You can:</p>

        <ul>
          <li>
            use <strong>Extract</strong> to obtain structured <code>LAVINCI_CAD_IR_V3</code> and diagnostics; or
          </li>
          <li>
            use <strong>Convert</strong> to produce a supported output format.
          </li>
        </ul>

        <h2 id="before-you-begin">Before you begin</h2>

        <p>You need:</p>

        <ul>
          <li>a supported DWG, DXF, or DWT file;</li>
          <li>access to the hosted La Vinci Developer Preview;</li>
          <li>an API key (<code>rine_live_...</code>) generated from the <a href="https://platform.rine.studio" target="_blank" rel="noopener noreferrer" className="underline text-white">Developer Console</a>;</li>
          <li>a target operation and, for conversion, a supported output format.</li>
        </ul>

        <Callout type="info" title="Verification & Gateway Status">
          <p>
            The authenticated platform gateway operates at <code>https://platform.rine.studio/api/v1</code> for CAD processing. All extraction and conversion requests require an <code>Authorization: Bearer rine_live_...</code> header.
          </p>
        </Callout>

        <h2 id="1-choose-an-operation">1. Choose an operation</h2>

        <p>
          Choose <strong>Extract</strong> when your application needs structured CAD information.
        </p>

        <p>
          Choose <strong>Convert</strong> when your application needs a supported CAD, vector, or raster output.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Goal</th>
                <th>Operation</th>
                <th>Verified result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inspect a DWG or DXF as structured data</td>
                <td><code>/extract</code></td>
                <td><code>LAVINCI_CAD_IR_V3</code> plus diagnostics</td>
              </tr>
              <tr>
                <td>Produce a converted file</td>
                <td><code>/convert</code></td>
                <td>An actual converted output in a supported format</td>
              </tr>
              <tr>
                <td>Check current engine health</td>
                <td><code>/health</code></td>
                <td>Current engine-health information</td>
              </tr>
              <tr>
                <td>Inspect operations and schemas</td>
                <td><Link href="/api-reference" className="text-white underline"><code>/api-reference</code></Link></td>
                <td>Full API reference and schema definitions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-white/50">
          HTTP methods, full paths, and payload shapes are verified against the deployed platform gateway.
        </p>

        <h2 id="2-check-your-file-and-target-format">2. Check your file and target format</h2>

        <p>Before submitting a file:</p>

        <ol>
          <li>Confirm that the input format is listed as supported.</li>
          <li>For conversion, confirm that the exact input-to-output pair is supported.</li>
          <li>Review known limitations for the selected path.</li>
          <li>Preserve the source file for output comparison.</li>
        </ol>

        <p>
          A format appearing in the overall capability list does not, by itself, prove that every endpoint or every conversion pair accepts it.
        </p>

        <h2 id="3-send-the-request">3. Send the request</h2>

        <p>
          Below are verified, executed requests against the hosted Developer Preview gateway.
        </p>

        <h3 id="extract-request">Extract Request (CAD to LAVINCI_CAD_IR_V3)</h3>

        <CodeBlock
          language="bash"
          filename="EXTRACT_DWG.SH"
          code={`# Authenticated platform execution via Bearer API Key
curl -X POST "https://platform.rine.studio/api/v1/extract" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "file=@drawing.dwg"`}
        />

        <h3 id="convert-request">Convert Request (SVG Vector Output)</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_SVG.SH"
          code={`# Convert CAD input to SVG vector output
curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "target_format=svg" \\
     -F "preset=web-interactive-light" \\
     -F "file=@drawing.dxf" \\
     -o output.svg`}
        />

        <h2 id="4-inspect-the-result">4. Inspect the result</h2>

        <p>For extraction, confirm that the response:</p>

        <ul>
          <li>identifies <code>LAVINCI_CAD_IR_V3</code>;</li>
          <li>contains the expected structured payload;</li>
          <li>includes diagnostics or an explicitly empty diagnostics collection;</li>
          <li>preserves the request or job identifier if the backend provides one.</li>
        </ul>

        <p>For conversion, confirm that the response:</p>

        <ul>
          <li>identifies the output media type;</li>
          <li>returns or links to the intended output;</li>
          <li>includes any available diagnostics;</li>
          <li>provides a stable way to correlate the output with the request.</li>
        </ul>

        <h3 id="real-extraction-response">Verified Real Extraction Response (Redacted)</h3>

        <CodeBlock
          language="json"
          filename="EXTRACT_RESPONSE.JSON"
          code={`{
  "ir_version": "LAVINCI_CAD_IR_V3",
  "ir_data": {
    "metadata": {
      "source_file": "drawing.dxf",
      "dxf_version": "AC1027",
      "cad_version": "AutoCAD 2013",
      "units": 4,
      "measurement_system": "Metric",
      "author": "Architect",
      "extraction_warnings": []
    },
    "extents": {
      "min": [293.3, -818.347],
      "max": [3309.465, 2770.062],
      "width": 3016.165,
      "height": 3588.409
    },
    "layers": [
      {
        "name": "0",
        "color": 7,
        "linetype": "Continuous",
        "is_locked": false,
        "is_frozen": false,
        "is_on": true
      }
    ],
    "geometry_primitives": {
      "summary": {
        "total_lines": 0,
        "total_arcs": 0,
        "total_circles": 0,
        "total_polylines": 0,
        "total_components": 2,
        "total_annotations": 0,
        "total_dimensions": 0,
        "total_block_definitions": 2
      },
      "primitives": {
        "lines": [],
        "arcs": [],
        "circles": [],
        "polylines": []
      }
    },
    "annotations": [],
    "dimensions": [],
    "components": [...]
  },
  "diagnostics": {
    "source_filename": "drawing.dxf",
    "source_format": "dxf",
    "extraction_time_ms": 129.4,
    "entity_count": 4,
    "layer_count": 3,
    "layout_count": 1,
    "warnings": []
  }
}`}
        />

        <h2 id="5-review-diagnostics">5. Review diagnostics</h2>

        <p>A completed request is not automatically a fidelity guarantee.</p>

        <p>
          Inspect warnings and diagnostics before accepting the result. Decide which conditions your application will:
        </p>

        <ul>
          <li>accept automatically;</li>
          <li>accept with review;</li>
          <li>retry;</li>
          <li>or reject.</li>
        </ul>

        <p>
          <Link href="/diagnostics" className="text-white hover:underline">
            Understand diagnostics &rarr;
          </Link>
        </p>

        <h2 id="6-validate-the-output">6. Validate the output</h2>

        <p>
          During the Developer Preview, compare important outputs with the source file using representative files from your own workflow.
        </p>

        <p>
          For visual conversion paths, inspect geometry and linework rather than relying only on a successful HTTP response.
        </p>

        <Callout type="investigation" title="Active Investigation">
          <p>
            Some conversion cases may produce fidelity differences, including missing linework. The affected scope is still being characterized. See <Link href="/known-limitations" className="underline text-white">Known Limitations</Link> before using conversion results in a critical workflow.
          </p>
        </Callout>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li>
            <Link href="/extract" className="text-white hover:underline">
              Extract structured CAD data &rarr;
            </Link>
          </li>
          <li>
            <Link href="/convert" className="text-white hover:underline">
              Convert CAD files &rarr;
            </Link>
          </li>
          <li>
            <Link href="/supported-formats" className="text-white hover:underline">
              Review the supported-format matrix &rarr;
            </Link>
          </li>
          <li>
            <Link href="/rine-ir" className="text-white hover:underline">
              Understand LAVINCI_CAD_IR_V3 &rarr;
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-white hover:underline">
              Report a reproducible issue &rarr;
            </Link>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
