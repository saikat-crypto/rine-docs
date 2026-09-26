import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import EndpointCard from '@/components/EndpointCard';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'POST /convert | API Reference',
  description: 'Convert CAD drawings or IR JSON into PDF, SVG, PNG, JPEG, WebP, or DXF.',
};

export default function ApiReferenceConvertPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="post-convert">POST /convert</h1>

        <p>
          Convert a CAD file or raw IR JSON into one of 6 compiled output formats (vector PDF, SVG, DXF, PNG, JPEG, or WebP).
        </p>

        <EndpointCard
          method="POST"
          path="/convert"
          purpose="Accepts a CAD file upload or raw IR JSON string, returning a binary stream of the compiled output."
          authentication="None (Direct) / Bearer Token (Gateway)"
          acceptedMedia="multipart/form-data"
          responseMedia="application/pdf | image/svg+xml | image/png | image/jpeg | image/webp | application/dxf"
          statusBadge="preview"
          badgeLabel="Developer Preview"
          limitationsHref="/known-limitations"
        />

        <h2 id="request-parameters">Request parameters</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">target_format</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Yes</td>
                <td>Output format: <code>pdf</code> | <code>svg</code> | <code>png</code> | <code>jpeg</code> | <code>webp</code> | <code>dxf</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">file</td>
                <td className="font-mono text-emerald-400">binary</td>
                <td>Conditional</td>
                <td>CAD file to convert (<code>.dwg</code>, <code>.dxf</code>, <code>.dwt</code>). Mutually exclusive with <code>ir_json</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">ir_json</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Conditional</td>
                <td>Raw <code>LAVINCI_CAD_IR_V3</code> JSON string. Mutually exclusive with <code>file</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">preset</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>No</td>
                <td>Named compiler preset (e.g. <code>monochrome-arch</code>, <code>web-preview</code>).</td>
              </tr>
              <tr>
                <td className="font-mono text-white">options_json</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>No</td>
                <td>JSON dictionary of surgical option overrides (e.g. <code>{`{"dpi": 300}`}</code>).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tested-curl-invocations">Tested cURL invocations</h2>

        <h3 id="convert-pdf">Convert CAD to Vector PDF</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_PDF.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -F "target_format=pdf" \\
     -F "preset=monochrome-arch" \\
     -F "file=@drawing.dwg" \\
     -o blueprint.pdf`}
        />

        <h3 id="convert-svg">Convert CAD to SVG</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_SVG.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -F "target_format=svg" \\
     -F "preset=web-interactive-light" \\
     -F "file=@drawing.dxf" \\
     -o output.svg`}
        />
      </div>
    </DocsLayout>
  );
}

