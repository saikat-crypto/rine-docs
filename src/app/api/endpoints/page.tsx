import React from 'react';

export default function ApiEndpointsPage() {
  return (
    <article className="space-y-10">
      <div className="space-y-3 border-b border-black/[0.08] pb-6">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          API Reference &bull; REST & Webhooks
        </div>
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black">
          API Reference & Authentication
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          Programmatic ingress, asynchronous parse job queues, and real-time webhook telemetry powered by Customer.io.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 font-normal leading-relaxed">
        <h2 className="text-xl font-normal tracking-tight text-black">Authentication</h2>
        <p>
          All requests to the Rine API require a valid API key passed in the <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-xs font-mono text-black">Authorization</code> header:
        </p>
        <div className="p-4 rounded-lg bg-neutral-50 border border-black/10 font-mono text-xs text-neutral-800">
          Authorization: Bearer rine_live_pk_****************
        </div>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">Core Endpoints</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-black/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-black text-white text-[10px] font-mono uppercase">POST</span>
              <span className="font-mono text-xs text-black">/v1/ingest/upload</span>
            </div>
            <p className="text-xs text-neutral-500">
              Upload a raw binary file (DWG, DXF, DWT) and receive an asynchronous processing job ID.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-black/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-neutral-100 text-black text-[10px] font-mono uppercase">GET</span>
              <span className="font-mono text-xs text-black">/v1/jobs/:job_id</span>
            </div>
            <p className="text-xs text-neutral-500">
              Poll job execution status, entity extraction counts, and normalized geometry artifact URLs.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-black/10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-black text-white text-[10px] font-mono uppercase">POST</span>
              <span className="font-mono text-xs text-black">/v1/compile/pdf</span>
            </div>
            <p className="text-xs text-neutral-500">
              Compile a validated La Vinci IR payload into a production vector PDF document.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
