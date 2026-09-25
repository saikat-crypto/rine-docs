import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'LAVINCI_CAD_IR_V3 Core Specification',
  description: 'Canonical schema documentation and envelope layout for LAVINCI_CAD_IR_V3.',
};

export default function RineIRV3CorePage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="lavinci-cad-ir-v3">LAVINCI_CAD_IR_V3 Core Specification</h1>

        <p>
          <code>LAVINCI_CAD_IR_V3</code> is the canonical intermediate representation returned by the La Vinci extraction engine. It normalizes heterogeneous CAD structures into deterministic JSON.
        </p>

        <h2 id="top-level-envelope">Top-level envelope</h2>

        <p>
          The response envelope guarantees three top-level keys:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Key</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">ir_version</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Yes</td>
                <td>Always <code>&quot;LAVINCI_CAD_IR_V3&quot;</code> in the current release.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">ir_data</td>
                <td className="font-mono text-emerald-400">object</td>
                <td>Yes</td>
                <td>The structured engineering payload containing metadata, geometry, layers, and blocks.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">diagnostics</td>
                <td className="font-mono text-emerald-400">object</td>
                <td>Yes</td>
                <td>Execution metrics, file metadata, entity counts, and parser warnings.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="ir-data-schema"><code>ir_data</code> structure</h2>

        <p>
          The <code>ir_data</code> object groups all extracted technical CAD data into standardized namespaces:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Namespace</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">metadata</td>
                <td className="font-mono text-white/70">object</td>
                <td>Source file name, DXF version code, AutoCAD release, unit systems, and author.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">extents</td>
                <td className="font-mono text-white/70">object</td>
                <td>2D bounding coordinates (<code>min</code>, <code>max</code>), <code>width</code>, and <code>height</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">layers</td>
                <td className="font-mono text-white/70">array</td>
                <td>Layer definitions with names, ACI color indices, linetypes, and visibility flags.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">geometry_primitives</td>
                <td className="font-mono text-white/70">object</td>
                <td>Summary counts and geometric arrays (<code>lines</code>, <code>arcs</code>, <code>circles</code>, <code>polylines</code>).</td>
              </tr>
              <tr>
                <td className="font-mono text-white">components</td>
                <td className="font-mono text-white/70">array</td>
                <td>Block references (inserts) with spatial positions, rotations, scales, and attributes.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">annotations</td>
                <td className="font-mono text-white/70">array</td>
                <td>Text and MText entities with content, height, alignment, and rotation.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">dimensions</td>
                <td className="font-mono text-white/70">array</td>
                <td>Linear, radial, and angular dimension definitions.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="verified-schema-excerpt">Verified Schema Excerpt</h2>

        <CodeBlock
          language="json"
          filename="IR_V3_ENVELOPE.JSON"
          code={`{
  "ir_version": "LAVINCI_CAD_IR_V3",
  "ir_data": {
    "metadata": {
      "source_file": "floorplan.dwg",
      "dxf_version": "AC1027",
      "cad_version": "AutoCAD 2013",
      "units": 4,
      "measurement_system": "Metric",
      "author": "Architect",
      "extraction_warnings": []
    },
    "extents": {
      "min": [0.0, 0.0],
      "max": [54200.0, 32100.0],
      "width": 54200.0,
      "height": 32100.0
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
        "total_lines": 1420,
        "total_arcs": 230,
        "total_circles": 64,
        "total_polylines": 412,
        "total_components": 18,
        "total_annotations": 45,
        "total_dimensions": 20,
        "total_block_definitions": 4
      },
      "primitives": {
        "lines": [...],
        "arcs": [...],
        "circles": [...],
        "polylines": [...]
      }
    },
    "components": [...],
    "annotations": [...],
    "dimensions": [...]
  },
  "diagnostics": {
    "source_filename": "floorplan.dwg",
    "source_format": "dwg",
    "extraction_time_ms": 1420.5,
    "entity_count": 2062,
    "layer_count": 14,
    "layout_count": 1,
    "warnings": []
  }
}`}
        />

        <h2 id="navigation">Sub-pages</h2>

        <ul>
          <li>
            <Link href="/rine-ir/v3/entities" className="text-white hover:underline">
              Entities and geometry &rarr;
            </Link>
          </li>
          <li>
            <Link href="/rine-ir/v3/structure" className="text-white hover:underline">
              Layers, blocks, and layouts &rarr;
            </Link>
          </li>
          <li>
            <Link href="/rine-ir/v3/coordinates" className="text-white hover:underline">
              Coordinates and extents &rarr;
            </Link>
          </li>
          <li>
            <Link href="/rine-ir/v3/diagnostics" className="text-white hover:underline">
              Diagnostics in IR responses &rarr;
            </Link>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
