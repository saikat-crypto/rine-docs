import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import EndpointCard from '@/components/EndpointCard';
import Callout from '@/components/Callout';
import CodeBlock from '@/components/CodeBlock';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Convert CAD files',
  description: 'Produce supported vector, raster, or CAD outputs from accepted CAD inputs or IR JSON.',
};

export default function ConvertPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Live Backend Verified</Badge>
        </div>

        <h1 id="convert">Convert CAD files</h1>

        <p>
          Use the conversion operation to produce a supported output from an accepted CAD input.
        </p>

        <h2 id="verified-preview-behavior">Verified preview behavior</h2>

        <p>
          The current technical record verifies that <code>/convert</code> accepts real CAD files and produces actual converted outputs.
        </p>

        <p>
          Verified input formats across the preview are DWG, DXF, and DWT. Verified output families are DXF, vector PDF, SVG, PNG, JPEG, and WebP.
        </p>

        <p>
          The exact supported input-to-output combinations must be verified and published as a conversion matrix. Do not imply that every listed input converts to every listed output.
        </p>

        <EndpointCard
          method="POST"
          path="/convert"
          purpose="Accepts a CAD file (.dwg, .dxf, .dwt) or pre-extracted IR JSON, compiling it directly into a chosen target format."
          authentication="Bearer API Key (rine_live_...)"
          acceptedMedia="multipart/form-data"
          responseMedia="application/pdf | image/svg+xml | image/png | image/jpeg | image/webp | application/dxf"
          statusBadge="preview"
          badgeLabel="Developer Preview"
          limitationsHref="/known-limitations"
          referenceHref="/api-reference/convert"
        />

        <h2 id="fidelity">Fidelity &amp; operational limits</h2>

        <p>
          Conversion completion means that the service produced an output. It does not mean that the output is identical to the source in every respect.
        </p>

        <p>During the Developer Preview:</p>

        <ul>
          <li>inspect diagnostics;</li>
          <li>compare critical geometry and linework;</li>
          <li>test representative files from your workflow;</li>
          <li>avoid treating visual resemblance as proof of semantic equivalence.</li>
        </ul>

        <Callout type="investigation" title="Active Investigation">
          <p className="font-medium text-orange-200">
            Some conversion outputs may contain fidelity differences, including missing linework in certain cases. The affected entity types, file characteristics, and output paths are still being characterized. See <Link href="/known-limitations" className="underline text-white">Known Limitations</Link> before using conversion results in a critical workflow.
          </p>
        </Callout>

        <Callout type="warning" title="30-Second API Gateway Hard Timeout">
          <p className="font-medium text-amber-200">
            AWS API Gateway HTTP API v2 imposes a hard 30-second integration timeout on all synchronous HTTP calls. Complex conversions (such as 600 DPI <code>ai-vision</code> rasterization on large 50MB+ drawings with thousands of entities) typically take 15–20 seconds under normal load. If processing exceeds 30 seconds, API Gateway terminates the connection with an HTTP 504 Gateway Timeout. For large models, choose vector presets (<code>monochrome-arch</code>, <code>web-interactive-light</code>) or supply pre-extracted IR payloads via <code>ir_json</code> to bypass binary decoding.
          </p>
        </Callout>

        <h2 id="compiler-presets">Compiler presets</h2>

        <p>
          Pass the optional <code>preset</code> field to apply opinionated styling configurations:
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Target Format</th>
                <th>Preset Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-white">pdf</td>
                <td className="font-mono text-emerald-400">monochrome-arch</td>
                <td>High-contrast black linework on pure white paper for technical blueprints.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">pdf</td>
                <td className="font-mono text-emerald-400">presentation-color</td>
                <td>Retains AutoCAD layer colors, ideal for design presentations.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">svg</td>
                <td className="font-mono text-emerald-400">web-interactive-light</td>
                <td>Dynamic stroke scaling, layer grouping (<code>&lt;g&gt;</code>) for interactive web viewers.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">svg</td>
                <td className="font-mono text-emerald-400">architectural-monochrome</td>
                <td>Uniform strokes, non-scaling stroke width for crisp technical embedding.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">png / jpeg / webp</td>
                <td className="font-mono text-emerald-400">web-preview</td>
                <td>150 DPI, tight linework cropping, anti-aliased clean background.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">png / jpeg / webp</td>
                <td className="font-mono text-emerald-400">ai-vision</td>
                <td>Normalized high-contrast rendering optimized for multimodal LLM vision inputs.</td>
              </tr>
              <tr>
                <td className="font-mono text-white">dxf</td>
                <td className="font-mono text-emerald-400">standard</td>
                <td>AC1027 standard re-synthesis with layer and block reconstruction.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="examples">Tested examples</h2>

        <h3 id="pdf-example">1. Convert DWG to Vector PDF</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_PDF.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "target_format=pdf" \\
     -F "preset=monochrome-arch" \\
     -F "file=@drawing.dwg" \\
     -o output.pdf`}
        />

        <h3 id="svg-example">2. Convert DXF to Scalable Vector Graphics</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_SVG.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "target_format=svg" \\
     -F "preset=web-interactive-light" \\
     -F "file=@drawing.dxf" \\
     -o output.svg`}
        />

        <h3 id="raster-example">3. Convert to 300 DPI High-Resolution PNG with Overrides</h3>

        <CodeBlock
          language="bash"
          filename="CONVERT_PNG.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "target_format=png" \\
     -F "preset=web-preview" \\
     -F "options_json={\\"dpi\\": 300, \\"background_color\\": \\"#FFFFFF\\"}" \\
     -F "file=@drawing.dwg" \\
     -o floorplan_300dpi.png`}
        />

        <h3 id="ir-json-example">4. Dual-Input: Convert Pre-Extracted IR JSON</h3>

        <p>
          If your application has already extracted or modified a <code>LAVINCI_CAD_IR_V3</code> JSON payload, you can compile it directly without re-uploading the original CAD binary:
        </p>

        <CodeBlock
          language="bash"
          filename="CONVERT_FROM_IR.SH"
          code={`curl -X POST "https://platform.rine.studio/api/v1/convert" \\
     -H "Authorization: Bearer rine_live_your_api_key_here" \\
     -F "target_format=pdf" \\
     -F "preset=presentation-color" \\
     -F "ir_json=<cad_ir.json" \\
     -o compiled.pdf`}
        />
      </div>
    </DocsLayout>
  );
}
