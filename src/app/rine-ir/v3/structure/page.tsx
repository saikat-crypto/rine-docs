import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Layers, Blocks, and Layouts | LAVINCI_CAD_IR_V3',
  description: 'Organizational hierarchy, CAD layers, block records, inserts, and layout spaces.',
};

export default function StructureAndBlocksPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="layers-blocks-and-layouts">Layers, blocks, and layouts</h1>

        <p>
          CAD documents organize graphical elements into logical layers, reusable symbol definitions (blocks), and distinct coordinate spaces (ModelSpace and PaperSpace layouts).
        </p>

        <h2 id="layers">Layers</h2>

        <p>
          Extracted layers appear in <code>ir_data.layers</code> as an array of stateful definitions:
        </p>

        <CodeBlock
          language="json"
          filename="LAYER_DEFINITION.JSON"
          code={`{
  "name": "A-WALL-EXTR",
  "color": 7,
  "linetype": "Continuous",
  "is_locked": false,
  "is_frozen": false,
  "is_on": true
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
                <td className="font-mono text-white">name</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Unique layer identifier matching the CAD drawing.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">color</td>
                <td className="font-mono text-emerald-400">number</td>
                <td>AutoCAD Color Index (ACI 1–255). Standard index 7 indicates white/black depending on background.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">linetype</td>
                <td className="font-mono text-emerald-400">string</td>
                <td>Stroke pattern (e.g. <code>&quot;Continuous&quot;</code>, <code>&quot;HIDDEN&quot;</code>, <code>&quot;DASHED&quot;</code>).</td>
              </tr>
              <tr>
                <td className="font-mono text-white">is_locked / is_frozen / is_on</td>
                <td className="font-mono text-emerald-400">boolean</td>
                <td>Visibility and editability states preserved from the source document.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="blocks-and-components">Blocks and components</h2>

        <p>
          Reusable block definitions are indexed, and individual block insertions appear under <code>ir_data.components</code>:
        </p>

        <CodeBlock
          language="json"
          filename="COMPONENT_INSERT.JSON"
          code={`{
  "block_name": "DOOR_SINGLE_36",
  "resolved_name": "DOOR_SINGLE_36",
  "layer": "DOORS",
  "space": "Model",
  "position": [1051.483, 2770.062, 0.0],
  "rotation": 90.0,
  "scale": [1.0, 1.0, 1.0],
  "attributes": {
    "TAG": "D-101",
    "WIDTH": "36\\""
  }
}`}
        />

        <h2 id="layout-spaces">Layout spaces</h2>

        <p>
          La Vinci distinguishes primary engineering geometry located in <code>&quot;Model&quot;</code> space from sheet title blocks and annotation viewports located in <code>&quot;Paper&quot;</code> space.
        </p>

        <p>
          The count of available layouts is reported under <code>diagnostics.layout_count</code>.
        </p>
      </div>
    </DocsLayout>
  );
}
