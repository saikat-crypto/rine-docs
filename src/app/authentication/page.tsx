import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Authentication',
  description: 'Authentication transport, API key management, and security boundaries.',
};

export default function AuthenticationPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="authentication">Authentication</h1>

        <p>
          La Vinci provides two access surfaces during the Developer Preview: the direct cloud engine for technical evaluation and the authenticated Developer Platform Gateway for production integration.
        </p>

        <Callout type="warning" title="Keep credentials private">
          <p className="font-medium text-amber-200">
            Do not place credentials in client-side code, public repositories, issue reports, or shared example files. Use server-side secret storage appropriate to your deployment environment.
          </p>
        </Callout>

        <h2 id="access-surfaces">Access surfaces</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Surface</th>
                <th>Base URL</th>
                <th>Authentication Mechanism</th>
                <th>Usage Boundary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Platform Gateway</td>
                <td><code>https://platform.rine.studio/api/v1</code></td>
                <td><code>Authorization: Bearer rine_live_...</code></td>
                <td>Standard integration with telemetry and key tracking</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Direct Engine</td>
                <td><code>https://platform.rine.studio/api/v1</code></td>
                <td>Direct endpoint execution / Developer Preview</td>
                <td>High-performance evaluation and benchmarking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="receiving-credentials">Receiving credentials</h2>

        <p>To obtain credentials for the Developer Platform Gateway:</p>

        <ol>
          <li>Sign in to your account at <a href="https://platform.rine.studio" target="_blank" rel="noopener noreferrer" className="underline text-white">platform.rine.studio</a>.</li>
          <li>Navigate to <strong>API Keys</strong> in the developer console.</li>
          <li>Click <strong>Create New Key</strong> to generate a unique API key with prefix <code>rine_live_</code>.</li>
          <li>Copy and store the raw secret immediately. The secret hash is stored securely in DynamoDB and cannot be recovered if lost.</li>
        </ol>

        <h2 id="request-header-format">Request header format</h2>

        <p>
          Pass the API key in the standard <code>Authorization</code> HTTP header with the <code>Bearer</code> scheme:
        </p>

        <CodeBlock
          language="http"
          filename="HTTP_HEADER.TXT"
          code={`Authorization: Bearer rine_live_9a7f8e32c1b4d5e6...`}
        />

        <p>
          Example request to the platform gateway:
        </p>

        <CodeBlock
          language="bash"
          filename="AUTH_CURL.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/extract" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "file=@floorplan.dwg"`}
        />

        <h2 id="authentication-errors">Authentication errors</h2>

        <p>
          The gateway verifies the SHA-256 hash of incoming tokens and enforces active status and expiration dates.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>HTTP Status</th>
                <th>Error Code / Payload</th>
                <th>Cause &amp; Remediation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-rose-400">401 Unauthorized</td>
                <td><code>{`{"error": "Missing API key. Pass it as: Authorization: Bearer rine_live_..."}`}</code></td>
                <td>The <code>Authorization</code> header was omitted or improperly formatted.</td>
              </tr>
              <tr>
                <td className="font-mono text-rose-400">401 Unauthorized</td>
                <td><code>{`{"error": "Invalid or expired API key."}`}</code></td>
                <td>The provided key does not match an active key record or has reached its expiration timestamp.</td>
              </tr>
              <tr>
                <td className="font-mono text-amber-400">503 Service Unavailable</td>
                <td><code>{`{"error": "Auth service temporarily unavailable."}`}</code></td>
                <td>Transient database or infrastructure error verifying key record. Retry with exponential backoff.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="credential-lifecycle">Credential lifecycle</h2>

        <ul>
          <li><strong>Rotation:</strong> Generate a second API key in the console, deploy the new key to your environment, and revoke the old key.</li>
          <li><strong>Revocation:</strong> Deleting a key in the console takes effect immediately across all subsequent gateway requests.</li>
          <li><strong>Browser requests:</strong> The platform gateway does not permit arbitrary browser-origin requests without preflight approval. Keep API keys in server-side workloads.</li>
        </ul>
      </div>
    </DocsLayout>
  );
}

