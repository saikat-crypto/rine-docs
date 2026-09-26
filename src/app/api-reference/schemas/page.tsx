import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Schemas | API Reference',
  description: 'Canonical OpenAPI 3.1.0 data schemas and model definitions.',
};

export default function ApiReferenceSchemasPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">OpenAPI 3.1.0</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="schemas">Schemas</h1>

        <p>
          Canonical data schemas and TypeScript interface definitions for the La Vinci Developer Preview API models.
        </p>

        <h2 id="extractresponse">ExtractResponse</h2>

        <p>Successful response model from <code>POST /extract</code>.</p>

        <CodeBlock
          language="typescript"
          filename="EXTRACT_RESPONSE.D.TS"
          code={`interface ExtractResponse {
  /** IR schema version, default "LAVINCI_CAD_IR_V3" */
  ir_version: string;
  /** Full LAVINCI_CAD_IR_V3 JSON payload */
  ir_data: Record<string, any>;
  /** Telemetry attached to every /extract response */
  diagnostics: ExtractionDiagnostics;
}`}
        />

        <h2 id="extractiondiagnostics">ExtractionDiagnostics</h2>

        <p>Telemetry and parsing warnings attached to every extraction.</p>

        <CodeBlock
          language="typescript"
          filename="EXTRACTION_DIAGNOSTICS.D.TS"
          code={`interface ExtractionDiagnostics {
  /** Original uploaded filename */
  source_filename: string;
  /** Detected input format: dwg | dxf | dwt */
  source_format: 'dwg' | 'dxf' | 'dwt';
  /** Wall-clock extraction duration in milliseconds */
  extraction_time_ms: number;
  /** Total geometric entity count in the IR */
  entity_count: number;
  /** Number of distinct layers extracted */
  layer_count: number;
  /** Number of layouts found */
  layout_count: number;
  /** Non-fatal extraction warnings */
  warnings: string[];
}`}
        />

        <h2 id="healthresponse">HealthResponse</h2>

        <p>Response model from <code>GET /health</code>.</p>

        <CodeBlock
          language="typescript"
          filename="HEALTH_RESPONSE.D.TS"
          code={`interface HealthResponse {
  status: string;
  api_version: string;
  libdwg_available: boolean;
  engines: EngineInfo[];
}

interface EngineInfo {
  name: string;
  version: string;
  status: string;
}`}
        />

        <h2 id="validationerror">HTTPValidationError &amp; ValidationError</h2>

        <p>Validation failure model returned with HTTP 422.</p>

        <CodeBlock
          language="typescript"
          filename="VALIDATION_ERROR.D.TS"
          code={`interface HTTPValidationError {
  detail: ValidationError[];
}

interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
  input?: any;
  ctx?: Record<string, any>;
}`}
        />
      </div>
    </DocsLayout>
  );
}
