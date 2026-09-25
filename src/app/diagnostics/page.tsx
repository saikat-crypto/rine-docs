import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Diagnostics and errors',
  description: 'Distinguish transport failures from parser diagnostics and inspection policies.',
};

export default function DiagnosticsAndErrorsPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="diagnostics-and-errors">Diagnostics and errors</h1>

        <p>
          La Vinci distinguishes transport or request failures from diagnostics produced while processing a CAD file.
        </p>

        <h2 id="errors">Errors</h2>

        <p>
          An error means the request could not complete as intended. Transport errors return standard HTTP 4xx or 5xx status codes with a structured error envelope.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Status Code</th>
                <th>Classification</th>
                <th>Typical Cause</th>
                <th>Retryable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">400 Bad Request</td>
                <td>Client error</td>
                <td>Malformed request parameters or mismatched form field names.</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="font-mono text-white">401 Unauthorized</td>
                <td>Authentication error</td>
                <td>Missing or invalid <code>Authorization: Bearer</code> token on Platform Gateway.</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="font-mono text-white">422 Unprocessable Content</td>
                <td>Payload validation / corrupt CAD</td>
                <td>Corrupted file structure, missing ENDSEC tag, or missing required fields.</td>
                <td>No</td>
              </tr>
              <tr>
                <td className="font-mono text-white">502 Bad Gateway</td>
                <td>Upstream error</td>
                <td>Engine container restart or communication interruption.</td>
                <td>Yes (Backoff)</td>
              </tr>
              <tr>
                <td className="font-mono text-white">504 Gateway Timeout</td>
                <td>Timeout</td>
                <td>Processing exceeded the 30-second API Gateway ceiling.</td>
                <td>Conditional</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="error-envelope">Verified error envelope</h3>

        <p>
          Structured error responses provide descriptive error codes and actionable hints:
        </p>

        <CodeBlock
          language="json"
          filename="ERROR_ENVELOPE.JSON"
          code={`{
  "detail": {
    "type": "about:blank",
    "title": "Extraction failed",
    "status": 422,
    "detail": "Failed to parse native DXF file: DXFStructureError: missing ENDSEC tag.",
    "code": "EXTRACTION_FAILED",
    "hint": "Check that the file is a valid AutoCAD DWG/DXF and not corrupted."
  }
}`}
        />

        <h2 id="diagnostics">Diagnostics</h2>

        <p>
          Diagnostics describe conditions encountered while parsing or converting a file. A request may complete successfully (HTTP 200) and still contain diagnostics.
        </p>

        <p>
          Diagnostics inform calling applications about:
        </p>

        <ul>
          <li><strong>Severity levels:</strong> informational notices vs. warnings that affect entity coverage;</li>
          <li><strong>Parser messages:</strong> upstream LibreDWG or compiler warnings;</li>
          <li><strong>Entity references:</strong> handles or layer identifiers associated with skipped elements;</li>
          <li><strong>Fidelity impact:</strong> whether the condition alters visual linework or semantic completeness;</li>
          <li><strong>Idempotency:</strong> retrying the same binary CAD input will produce the identical diagnostic.</li>
        </ul>

        <h2 id="recommended-handling">Recommended handling</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Condition</th>
                <th>Recommended application behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Completed with no diagnostics</td>
                <td>Continue with workflow-specific validation</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Informational diagnostic</td>
                <td>Record it; continue if acceptable for the workflow</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Warning affecting possible completeness</td>
                <td>Flag for review or apply a workflow-specific policy</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Conversion-fidelity warning</td>
                <td>Compare the output with the source before use</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Unsupported or invalid input</td>
                <td>Stop and show the verified error</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Service or transient failure</td>
                <td>Retry only according to documented backend guidance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Fidelity Assurance Notice">
          <p className="font-medium text-amber-200">
            A successful HTTP response is not, by itself, proof of complete engineering-file fidelity.
          </p>
        </Callout>
      </div>
    </DocsLayout>
  );
}
