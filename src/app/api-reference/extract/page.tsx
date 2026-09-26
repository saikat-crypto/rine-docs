import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import EndpointCard from '@/components/EndpointCard';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'POST /extract | API Reference',
  description: 'Extract structured LAVINCI_CAD_IR_V3 JSON from CAD drawings.',
};

export default function ApiReferenceExtractPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="post-extract">POST /extract</h1>

        <p>
          Upload a <code>.dwg</code>, <code>.dxf</code>, or <code>.dwt</code> AutoCAD file and receive a structured <code>LAVINCI_CAD_IR_V3</code> JSON payload representing the full geometric IR and parsing diagnostics.
        </p>

        <EndpointCard
          method="POST"
          path="/extract"
          purpose="Upload a CAD file and receive the full LAVINCI_CAD_IR_V3 JSON payload and extraction diagnostics."
          authentication="None (Direct) / Bearer Token (Gateway)"
          acceptedMedia="multipart/form-data"
          responseMedia="application/json"
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
                <td className="font-mono text-white">file</td>
                <td className="font-mono text-emerald-400">binary</td>
                <td>Yes</td>
                <td>Raw binary CAD file (<code>.dwg</code>, <code>.dxf</code>, or <code>.dwt</code>).</td>
              </tr>
              <tr>
                <td className="font-mono text-white">dwg2dxf_path</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>No</td>
                <td>Optional path to custom dwg2dxf binary (auto-detected on server).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="responses">Responses</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Status Code</th>
                <th>Schema</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-emerald-400">200 OK</td>
                <td><code>ExtractResponse</code></td>
                <td>Successful extraction returning IR payload and telemetry.</td>
              </tr>
              <tr>
                <td className="font-mono text-rose-400">422 Unprocessable</td>
                <td><code>HTTPValidationError</code></td>
                <td>Validation error or unparseable CAD structure.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="curl-invocation">Tested cURL invocation</h2>

        <CodeBlock
          language="bash"
          filename="EXTRACT_CLI.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/extract" \\
     -F "file=@floorplan.dwg"`}
        />
      </div>
    </DocsLayout>
  );
}

