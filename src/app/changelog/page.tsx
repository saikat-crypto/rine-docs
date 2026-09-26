import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Changelog',
  description: 'Chronological record of updates, fixes, and schema adjustments in La Vinci.',
};

export default function ChangelogPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Engineering Log</Badge>
        </div>

        <h1 id="changelog">Changelog</h1>

        <p>
          Changes to the La Vinci Developer Preview.
        </p>

        <p>
          Each entry states: publication date, change type, affected endpoint or schema, developer impact, migration action (if any), known limitations, and verification status.
        </p>

        <div className="space-y-10 my-8">
          {/* Entry 1 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#161616] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <h2 className="text-base font-medium text-white !my-0 !border-none !p-0">
                2026-09-25: Production OpenAPI 3.1.0 and Multi-Format Preview
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="added">Added</Badge>
                <Badge variant="preview">Developer Preview</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
              <div><strong>Type:</strong> Added / Synchronized</div>
              <div><strong>Affected:</strong> <code>/extract</code>, <code>/convert</code>, <code>/health</code>, <code>/docs</code></div>
              <div className="sm:col-span-2"><strong>Status:</strong> Developer Preview</div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Synchronized production OpenAPI 3.1.0 specifications at <code>https://platform.rine.studio/api/v1/openapi.json</code>. Deployed interactive Swagger UI at <code>https://platform.rine.studio/api/v1/docs</code>. Established <code>POST /convert</code> multi-format matrix supporting PDF, SVG, PNG, JPEG, WebP, and DXF.
            </p>

            <div className="text-xs space-y-1.5 pt-2 border-t border-white/[0.06]">
              <div><strong>Developer action:</strong> None required. Dual-input mode accepts CAD binary files or raw <code>ir_json</code> payloads.</div>
              <div><strong>Verification:</strong> Verified via direct curl execution against live AWS Lambda endpoints.</div>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#161616] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <h2 className="text-base font-medium text-white !my-0 !border-none !p-0">
                2026-09-23: LAVINCI_CAD_IR_V3 Core Normalization &amp; Diagnostics
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="changed">Changed</Badge>
                <Badge variant="schema">Schema: LAVINCI_CAD_IR_V3</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
              <div><strong>Type:</strong> Changed / Normalized</div>
              <div><strong>Affected:</strong> <code>LAVINCI_CAD_IR_V3</code> envelope</div>
              <div className="sm:col-span-2"><strong>Status:</strong> Developer Preview</div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Consolidated <code>ir_data</code> schema with unified <code>geometry_primitives</code>, <code>components</code>, <code>annotations</code>, and <code>dimensions</code>. Added telemetry under <code>diagnostics</code> (extraction time, entity counts, upstream LibreDWG warnings).
            </p>

            <div className="text-xs space-y-1.5 pt-2 border-t border-white/[0.06]">
              <div><strong>Developer action:</strong> Access extraction warnings under <code>diagnostics.warnings</code> instead of top-level metadata.</div>
              <div><strong>Verification:</strong> 35-model CAD test suite passed Layer 1 validation.</div>
            </div>
          </div>

          {/* Entry 3 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#161616] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <h2 className="text-base font-medium text-white !my-0 !border-none !p-0">
                2026-09-20: Dynamic SVG Stroke Scaling and Tight-Crop Buffering
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="fixed">Fixed</Badge>
                <Badge variant="preview">Developer Preview</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
              <div><strong>Type:</strong> Fixed / Mathematical alignment</div>
              <div><strong>Affected:</strong> <code>cad-ir-to-svg</code>, <code>cad-ir-to-raster</code></div>
              <div className="sm:col-span-2"><strong>Status:</strong> Developer Preview</div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Implemented dynamic stroke width calculation based on extents diagonal to prevent stroke blowout on small models and stroke invisibility on large surveys. Increased raster padding from 4px to 8px, eliminating border clipping on anti-aliased linework.
            </p>

            <div className="text-xs space-y-1.5 pt-2 border-t border-white/[0.06]">
              <div><strong>Developer action:</strong> None. SVGs automatically render with optimal stroke scale.</div>
              <div><strong>Verification:</strong> SSIM vector-raster parity benchmark reached 0.9706.</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}

