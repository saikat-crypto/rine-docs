import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import EndpointCard from '@/components/EndpointCard';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'GET /health | API Reference',
  description: 'System and compiler subsystem health check endpoint.',
};

export default function ApiReferenceHealthPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="get-health">GET /health</h1>

        <p>
          Reports the current health of La Vinci’s engines and underlying CAD parsing binaries.
        </p>

        <EndpointCard
          method="GET"
          path="/health"
          purpose="API and engine health check verifying LibreDWG and 5 internal compiler subsystems."
          authentication="None"
          acceptedMedia="None"
          responseMedia="application/json"
          statusBadge="verified"
          badgeLabel="Live Verified"
          limitationsHref="/known-limitations"
        />

        <h2 id="response-schema">Response schema (200 OK)</h2>

        <p>
          Returns a structured <code>HealthResponse</code> object:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">status</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Overall system status: <code>&quot;ok&quot;</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">api_version</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Active API semantic version (e.g. <code>&quot;1.0.0&quot;</code>).</td>
              </tr>
              <tr>
                <td className="font-mono text-white">libdwg_available</td>
                <td className="font-mono text-emerald-400">boolean</td>
                <td>Whether the GNU LibreDWG native Linux build is present and operational.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">engines</td>
                <td className="font-mono text-emerald-400">EngineInfo[]</td>
                <td>Array of compiler subsystem records with <code>name</code>, <code>version</code>, and <code>status</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tested-example">Tested invocation</h2>

        <CodeBlock
          language="bash"
          filename="HEALTH_CHECK.SH"
          code={`curl -X GET "https://lavinci.rine.studio/health"`}
        />

        <h3 id="verified-response">Verified Response</h3>

        <CodeBlock
          language="json"
          filename="HEALTH_RESPONSE.JSON"
          code={`{
  "status": "ok",
  "api_version": "1.0.0",
  "libdwg_available": true,
  "engines": [
    {
      "name": "cad-extractor-ir",
      "version": "1.0.0",
      "status": "ok"
    },
    {
      "name": "cad-ir-to-dxf",
      "version": "1.0.0",
      "status": "ok"
    },
    {
      "name": "cad-ir-to-pdf",
      "version": "0.1.0",
      "status": "ok"
    },
    {
      "name": "cad-ir-to-svg",
      "version": "1.0.0",
      "status": "ok"
    },
    {
      "name": "cad-ir-to-raster",
      "version": "1.0.0",
      "status": "ok"
    }
  ]
}`}
        />
      </div>
    </DocsLayout>
  );
}
