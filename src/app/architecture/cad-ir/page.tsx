import React from 'react';

export default function CadIrArchitecturePage() {
  return (
    <article className="space-y-10">
      <div className="space-y-3 border-b border-black/[0.08] pb-6">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          Core Architecture &bull; Specification
        </div>
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black">
          La Vinci CAD Intermediate Representation (IR)
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          The mathematical ground truth for normalized engineering drawings, parametric geometry, and multi-layered spatial entities.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 font-normal leading-relaxed">
        <h2 className="text-xl font-normal tracking-tight text-black">Why Decoupling Matters</h2>
        <p>
          In legacy toolchains, CAD applications bind directly to proprietary C++ binary parsers. When an export fails or a coordinate drifts, diagnosing whether the failure occurred in decompression, entity parsing, or rasterization is nearly impossible.
        </p>
        <p>
          The La Vinci Intermediate Representation introduces an immutable, deterministic boundary. Raw engineering formats (DWG, DXF, DWT) compile into a single canonical mathematical schema: <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono text-black">LAVINCI_CAD_IR_V3</code>.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">Canonical Schema Primitives</h2>
        <p>
          The IR treats geometry as first-class geometric primitives rather than raster pixels:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          <li><strong>Point & Line Segments:</strong> Explicit 3D floating-point Cartesian vectors with arbitrary precision.</li>
          <li><strong>Cubic Bézier Splines:</strong> Continuous curves decomposed into analytic polynomial control points.</li>
          <li><strong>Arc & Ellipse Primitives:</strong> Defined by focal radii, center point, and start/end radian sweeps.</li>
          <li><strong>Layer Metadata:</strong> Preserved semantic tags, stroke weights, RGB colors, and architectural classifications.</li>
        </ul>
      </div>
    </article>
  );
}
