import React from 'react';
import Link from 'next/link';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Developer Preview policy',
  description: 'Operating principles, stability expectations, and validation guidelines.',
};

export default function DeveloperPreviewPolicyPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Policy Specification</Badge>
        </div>

        <h1 id="developer-preview">Developer Preview</h1>

        <p>
          La Vinci is available as a hosted Developer Preview.
        </p>

        <p>
          The preview exists so developers can evaluate supported engineering-file workflows, test representative files, inspect structured outputs, and report cases that should improve the platform.
        </p>

        <p>During the preview:</p>

        <ul>
          <li>supported formats and schemas may evolve;</li>
          <li>endpoint behavior must be versioned or announced before incompatible changes;</li>
          <li>diagnostics should be retained and reviewed;</li>
          <li>representative-file testing is expected before production reliance;</li>
          <li>no universal CAD fidelity or production SLA should be inferred.</li>
        </ul>

        <p>
          Material changes should appear in the <Link href="/changelog" className="text-white underline">changelog</Link> with an effective date and any required migration action.
        </p>

        <Callout type="warning" title="Fidelity & Production Reliance">
          <p className="font-medium text-amber-200">
            Current support does not imply universal CAD fidelity or a production SLA. Always inspect diagnostics and compare converted outputs with source files before integrating into critical production pipelines.
          </p>
        </Callout>

        <h2 id="migration-and-deprecation">Migration and deprecation</h2>

        <p>
          If breaking schema adjustments become necessary during the evolution from <code>LAVINCI_CAD_IR_V3</code> to subsequent versions, Rine will maintain side-by-side versions or provide advance notice via the changelog and developer console.
        </p>
      </div>
    </DocsLayout>
  );
}
