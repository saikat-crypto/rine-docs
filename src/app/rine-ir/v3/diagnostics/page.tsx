import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Diagnostics in IR Responses | LAVINCI_CAD_IR_V3',
  description: 'Telemetric metadata, entity counting, and extraction warnings attached to IR payloads.',
};

export default function DiagnosticsInIRPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="diagnostics-in-ir-responses">Diagnostics in IR responses</h1>

        <p>
          Every successful call to <code>POST /extract</code> appends a dedicated <code>diagnostics</code> block adjacent to <code>ir_data</code>.
        </p>

        <h2 id="diagnostics-schema">Diagnostics schema</h2>

        <CodeBlock
          language="json"
          filename="DIAGNOSTICS_PAYLOAD.JSON"
          code={`{
  "source_filename": "mechanical_bracket.dwg",
  "source_format": "dwg",
  "extraction_time_ms": 142.8,
  "entity_count": 842,
  "layer_count": 6,
  "layout_count": 1,
  "warnings": [
    "Non-standard proxy entity encountered at handle 0x4B2; entity skipped."
  ]
}`}
        />

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
                <td className="font-mono text-white">source_filename</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Original filename provided in the multipart upload.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">source_format</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Detected input format: <code>&quot;dwg&quot;</code>, <code>&quot;dxf&quot;</code>, or <code>&quot;dwt&quot;</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">extraction_time_ms</td>
                <td className="font-mono text-emerald-400">number</td>
                <td>Wall-clock duration in milliseconds spent parsing and building the IR.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">entity_count</td>
                <td className="font-mono text-emerald-400">integer</td>
                <td>Total count of normalized geometric entities in the IR.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">layer_count</td>
                <td className="font-mono text-emerald-400">integer</td>
                <td>Count of distinct CAD layers present in the drawing.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">layout_count</td>
                <td className="font-mono text-emerald-400">integer</td>
                <td>Count of layout sheets identified.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">warnings</td>
                <td className="font-mono text-emerald-400">string[]</td>
                <td>Non-fatal warnings captured from LibreDWG or parser routines.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="evaluating-warnings">Evaluating warnings</h2>

        <p>
          Unlike transport errors (which trigger HTTP 4xx/5xx status codes), extraction warnings indicate that the file was successfully parsed, but specific elements may have been adapted or omitted.
        </p>

        <p>
          Always log and inspect <code>diagnostics.warnings</code> in automated pipelines to ensure compliance with downstream requirements.
        </p>
      </div>
    </DocsLayout>
  );
}
