import React from 'react';

export default function CadIrToPdfCompilerPage() {
  return (
    <article className="space-y-10">
      <div className="space-y-3 border-b border-black/[0.08] pb-6">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          Vector Compilers &bull; Engine Reference
        </div>
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black">
          cad-ir-to-pdf Compiler
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          High-performance, resolution-independent vector PDF compiler transforming La Vinci IR geometry into publication-grade documents.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 font-normal leading-relaxed">
        <h2 className="text-xl font-normal tracking-tight text-black">Zero Bitmap Pixelation</h2>
        <p>
          Unlike raster-based PDF converters that generate blurry JPEG or PNG textures at high zoom levels, <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono text-black">cad-ir-to-pdf</code> compiles native PDF vector drawing operators. At 6400% zoom, lines, curves, and annotations retain crisp 0.001mm mathematical precision.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">Mathematical Architecture</h2>
        <p>
          The compiler executes a multi-pass pipeline:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          <li><strong>Analytic Cubic Bézier Decomposition:</strong> High-order rational B-splines are partitioned into piecewise cubic segments with G1/G2 continuity constraints.</li>
          <li><strong>Viewbox Matrix Normalization:</strong> Automatically calculates bounding limits, scale factors, and sheet margins (A0 through A4 and ANSI formats).</li>
          <li><strong>Layer Hierarchy Preservation:</strong> Emits PDF optional content groups (OCGs), enabling engineers to toggle structural, MEP, and electrical layers dynamically in PDF viewers.</li>
        </ul>
      </div>
    </article>
  );
}
