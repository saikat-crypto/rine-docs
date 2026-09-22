import React from 'react';

export default function McpIntegrationPage() {
  return (
    <article className="space-y-10">
      <div className="space-y-3 border-b border-black/[0.08] pb-6">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          Agent Infrastructure &bull; Protocol
        </div>
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black">
          Model Context Protocol (MCP) Server
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Native integration connecting autonomous AI agents to CAD geometry, measurement tools, and spatial reasoning primitives.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 font-normal leading-relaxed">
        <h2 className="text-xl font-normal tracking-tight text-black">Overview</h2>
        <p>
          Rine provides a reference implementation of the Anthropic Model Context Protocol (MCP). Rather than forcing LLMs to read unstructured binary hex or massive raw SVG strings, Rine exposes structured agent tools for dynamic query and measurement.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">Available Tools</h2>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-black/10 space-y-1">
            <span className="font-mono text-xs text-black font-medium">cad_inspect_layers</span>
            <p className="text-xs text-neutral-500">List all architectural and engineering layers present in a drawing with entity counts.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-black/10 space-y-1">
            <span className="font-mono text-xs text-black font-medium">cad_calculate_clearance</span>
            <p className="text-xs text-neutral-500">Compute Euclidean distances and clearance tolerances between structural obstacles and conduits.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-black/10 space-y-1">
            <span className="font-mono text-xs text-black font-medium">cad_query_entities</span>
            <p className="text-xs text-neutral-500">Query geometric entities within a specified 3D bounding box filtered by entity type and layer.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
