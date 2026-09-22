import React from 'react';

export default function GettingStartedPage() {
  return (
    <article className="space-y-10">
      <div className="space-y-3 border-b border-black/[0.08] pb-6">
        <div className="text-[11px] uppercase tracking-[0.14em] text-neutral-400 font-normal">
          Getting Started &bull; Onboarding
        </div>
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black">
          Developer Onboarding & Setup
        </h1>
        <p className="text-base text-neutral-600 font-normal leading-relaxed">
          How to get started with the Rine developer platform, generate your API credentials, and integrate conversion pipelines.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 font-normal leading-relaxed">
        <h2 className="text-xl font-normal tracking-tight text-black">1. Provision Credentials</h2>
        <p>
          Visit <a href="https://platform.rine.studio" target="_blank" rel="noopener noreferrer" className="underline text-black">platform.rine.studio</a> and sign in with your enterprise GitHub or Google workspace account.
        </p>
        <p>
          Upon verification, our automated onboarding pipeline delivers your production API credentials and initial quota tier instantly via Customer.io.
        </p>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">2. Install the Client SDK</h2>
        <div className="p-4 rounded-lg bg-neutral-50 border border-black/10 font-mono text-xs text-neutral-800">
          npm install @rine/sdk
        </div>

        <h2 className="text-xl font-normal tracking-tight text-black pt-4">3. Submit Your First Conversion Job</h2>
        <div className="p-4 rounded-lg bg-neutral-50 border border-black/10 font-mono text-xs text-neutral-800 whitespace-pre">
{`import { RineClient } from '@rine/sdk';

const rine = new RineClient({
  apiKey: process.env.RINE_API_KEY,
});

const job = await rine.ingest.upload({
  filePath: './blueprint.dwg',
  targetFormat: 'LAVINCI_CAD_IR_V3',
});

console.log('Job queued:', job.id);`}
        </div>
      </div>
    </article>
  );
}
