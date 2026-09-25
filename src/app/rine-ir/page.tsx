import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Rine Intermediate Representation',
  description: 'The normalized data layer between source engineering files and downstream operations.',
};

export default function RineIRIntroPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="rine-ir">Rine Intermediate Representation</h1>

        <p>
          Rine IR is the normalized data layer between source engineering files and downstream operations.
        </p>

        <p>
          Instead of requiring every consumer to understand each source format independently, La Vinci parses supported source files into a structured representation that can be used by extraction, conversion, rendering, comparison, API, and future MCP workflows.
        </p>

        <h2 id="current-version">Current version</h2>

        <p>
          The verified Developer Preview returns:
        </p>

        <p className="font-mono text-base text-purple-300">
          <code>LAVINCI_CAD_IR_V3</code>
        </p>

        <p>
          The current record establishes representation of:
        </p>

        <ul>
          <li>layers;</li>
          <li>extractor-supported blocks;</li>
          <li>text;</li>
          <li>dimensions;</li>
          <li>geometric primitives;</li>
          <li>coordinates and extents;</li>
          <li>layout information;</li>
          <li>diagnostics.</li>
        </ul>

        <p>
          This list describes established capability areas. It is not a complete schema or a guarantee that every source entity is represented identically.
        </p>

        <h2 id="schema-documentation">Schema documentation</h2>

        <p>
          Before publication, generate or verify documentation for:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Area</th>
                <th>Required documentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Document metadata</td>
                <td>Exact fields, types, requiredness, and provenance</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Units and coordinates</td>
                <td>Units, origin, axes, transforms, precision, and coordinate systems</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Layers</td>
                <td>Identifiers, names, visibility, properties, and entity relationships</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Entities</td>
                <td>Supported entity types, geometry fields, and unsupported-entity behavior</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Blocks</td>
                <td>Definitions, inserts, nesting, attributes, and supported coverage</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Text and dimensions</td>
                <td>Content, styling, placement, measurement, and loss behavior</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Layouts</td>
                <td>Model space, paper space, viewports, and layout relationships</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Extents</td>
                <td>Calculation method, coordinate frame, and empty-document behavior</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Diagnostics</td>
                <td>Severity, code, message, location, and correlation fields</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Versioning</td>
                <td>Compatibility guarantees and migration policy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Schema Verification Requirement">
          <p className="font-medium text-amber-200">
            Do not publish handwritten example JSON until it has been checked against a real <code>LAVINCI_CAD_IR_V3</code> response or the canonical schema.
          </p>
        </Callout>

        <h2 id="verified-schema-reference">Verified deep-dive schema pages</h2>

        <p>
          The subsections below provide verified, live-backend documentation for each architectural domain of the intermediate representation:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Area</th>
                <th>Documentation Link</th>
                <th>Verified Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">Core Specification</td>
                <td>
                  <Link href="/rine-ir/v3" className="underline text-white font-mono">
                    /rine-ir/v3
                  </Link>
                </td>
                <td>Top-level payload structure, envelope keys, and data types</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Entities &amp; Geometry</td>
                <td>
                  <Link href="/rine-ir/v3/entities" className="underline text-white font-mono">
                    /rine-ir/v3/entities
                  </Link>
                </td>
                <td>Lines, arcs, circles, polylines, 2D/3D coordinates</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Structure &amp; Blocks</td>
                <td>
                  <Link href="/rine-ir/v3/structure" className="underline text-white font-mono">
                    /rine-ir/v3/structure
                  </Link>
                </td>
                <td>Layer definitions, block definitions, inserts, and layout spaces</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Coordinates &amp; Extents</td>
                <td>
                  <Link href="/rine-ir/v3/coordinates" className="underline text-white font-mono">
                    /rine-ir/v3/coordinates
                  </Link>
                </td>
                <td>Bounding box extents, width, height, and unit measurements</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Diagnostics Telemetry</td>
                <td>
                  <Link href="/rine-ir/v3/diagnostics" className="underline text-white font-mono">
                    /rine-ir/v3/diagnostics
                  </Link>
                </td>
                <td>Execution time, entity counts, layer counts, and parser warnings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DocsLayout>
  );
}
