import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Coordinates and Extents | LAVINCI_CAD_IR_V3',
  description: 'Coordinate spaces, units, bounding box extents, and affine coordinate transformations.',
};

export default function CoordinatesAndExtentsPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="coordinates-and-extents">Coordinates and extents</h1>

        <p>
          AutoCAD files store geometry in real-world floating-point Cartesian coordinate spaces. <code>LAVINCI_CAD_IR_V3</code> preserves native coordinates while computing exact document bounding extents.
        </p>

        <h2 id="extents-object">Extents object</h2>

        <p>
          The <code>ir_data.extents</code> namespace reports the canonical tight bounding box enclosing all active geometry:
        </p>

        <CodeBlock
          language="json"
          filename="EXTENTS_SCHEMA.JSON"
          code={`{
  "min": [293.3, -818.347],
  "max": [3309.465, 2770.062],
  "width": 3016.165,
  "height": 3588.409
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
                <td className="font-mono text-white">min</td>
                <td className="font-mono text-emerald-400">[number, number]</td>
                <td>Minimum coordinates <code>[x_min, y_min]</code> across all visible primitives.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">max</td>
                <td className="font-mono text-emerald-400">[number, number]</td>
                <td>Maximum coordinates <code>[x_max, y_max]</code> across all visible primitives.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">width</td>
                <td className="font-mono text-emerald-400">number</td>
                <td>Horizontal extent calculated as <code>max[0] - min[0]</code>.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">height</td>
                <td className="font-mono text-emerald-400">number</td>
                <td>Vertical extent calculated as <code>max[1] - min[1]</code>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="measurement-units">Measurement units</h2>

        <p>
          Extracted drawing units are recorded under <code>ir_data.metadata</code>:
        </p>

        <ul>
          <li><code>units</code>: Integer mapping corresponding to AutoCAD <code>$INSUNITS</code> (e.g. <code>1</code> = Inches, <code>4</code> = Millimeters, <code>6</code> = Meters).</li>
          <li><code>measurement_system</code>: Human-readable string indicating <code>&quot;Metric&quot;</code> or <code>&quot;Imperial&quot;</code>.</li>
        </ul>

        <h2 id="screen-y-axis-inversion">Screen Y-axis inversion</h2>

        <p>
          AutoCAD uses a Cartesian coordinate frame where the positive Y-axis points upward. Standard web and vector renderers (SVG viewBox, HTML5 Canvas, PDF rasterizers) place the origin at the top-left with the Y-axis pointing downward.
        </p>

        <p>
          La Vinci compilers apply deterministic affine transformations:
        </p>

        <CodeBlock
          language="text"
          filename="TRANSFORM.TXT"
          code={`Y_svg = (max_y - Y_cad) + min_y`}
        />

        <p>
          This ensures that drawings, text angles, and arc sweep directions render with correct visual handedness.
        </p>
      </div>
    </DocsLayout>
  );
}
