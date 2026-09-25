import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Entities and Geometry | LAVINCI_CAD_IR_V3',
  description: 'Geometric primitive structures, coordinates, and entity representations in LAVINCI_CAD_IR_V3.',
};

export default function EntitiesAndGeometryPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="entities-and-geometry">Entities and geometry</h1>

        <p>
          Geometric primitives in <code>LAVINCI_CAD_IR_V3</code> are organized under <code>ir_data.geometry_primitives.primitives</code>. Each primitive retains its source layer, spatial domain (ModelSpace or PaperSpace), and CAD styling attributes.
        </p>

        <h2 id="lines">Lines</h2>

        <p>
          Represents a 2D line segment between two cartesian coordinate points:
        </p>

        <CodeBlock
          language="json"
          filename="LINE_PRIMITIVE.JSON"
          code={`{
  "layer": "WALLS",
  "space": "Model",
  "start": [0.0, 0.0],
  "end": [45000.0, 0.0],
  "color": "BYLAYER",
  "linetype": null
}`}
        />

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">layer</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Name of the CAD layer where this line resides.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">space</td>
                <td className="font-mono text-emerald-400">string</td>
                <td><code>&quot;Model&quot;</code>, <code>&quot;Paper&quot;</code>, or <code>&quot;Block&quot;</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">start / end</td>
                <td className="font-mono text-emerald-400">[number, number]</td>
                <td>2D coordinates <code>[x, y]</code> in document units.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">color</td>
                <td className="font-mono text-emerald-400">string | number</td>
                <td>ACI color code, <code>&quot;BYLAYER&quot;</code>, or <code>&quot;BYBLOCK&quot;</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="arcs-and-circles">Arcs and Circles</h2>

        <p>
          Circular geometry is stored in standard trigonometric angles (degrees, 0–360° counter-clockwise):
        </p>

        <CodeBlock
          language="json"
          filename="ARC_PRIMITIVE.JSON"
          code={`{
  "layer": "DOORS",
  "space": "Model",
  "center": [12500.0, 8400.0],
  "radius": 900.0,
  "start_angle": 0.0,
  "end_angle": 90.0,
  "color": 3,
  "linetype": "Continuous"
}`}
        />

        <h2 id="polylines">Polylines</h2>

        <p>
          Polylines represent sequences of connected segments, either closed or open:
        </p>

        <CodeBlock
          language="json"
          filename="POLYLINE_PRIMITIVE.JSON"
          code={`{
  "layer": "0",
  "space": "Block",
  "is_closed": true,
  "points": [
    [2857.511, 669.063],
    [2967.646, 665.413],
    [3077.513, 657.462],
    [3186.985, 645.222],
    [2857.511, 669.063]
  ],
  "color": "BYBLOCK",
  "linetype": null
}`}
        />

        <h2 id="unsupported-entity-behavior">Unsupported entity behavior</h2>

        <p>
          Proprietary 3D ACIS solids (<code>3DSOLID</code>), complex mesh regions, and third-party custom proxy entities that cannot be projected deterministically to 2D vector primitives are recorded under <code>diagnostics.warnings</code> rather than halting extraction.
        </p>
      </div>
    </DocsLayout>
  );
}
