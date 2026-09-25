import React from 'react';
import DocsLayout from '@/components/DocsLayout';
import Callout from '@/components/Callout';
import Badge from '@/components/Badge';

export const metadata = {
  title: 'Getting help and giving feedback',
  description: 'Reporting reproducible CAD file issues, integration queries, and security reports.',
};

export default function HelpAndFeedbackPage() {
  return (
    <DocsLayout>
      <div className="docs-prose">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="preview">Developer Preview</Badge>
          <Badge variant="verified">Support Procedures</Badge>
        </div>

        <h1 id="help">Getting help and giving feedback</h1>

        <p>
          La Vinci improves through specific, reproducible engineering-file cases.
        </p>

        <h2 id="integration-questions">Integration questions</h2>

        <p>
          When asking for help regarding API integration, payload handling, or compiler presets, include:
        </p>

        <ul>
          <li>the endpoint (<code>/extract</code>, <code>/convert</code>, or <code>/health</code>);</li>
          <li>the intended workflow;</li>
          <li>the input and target formats;</li>
          <li>the request or job identifier, if available;</li>
          <li>relevant diagnostics and warnings;</li>
          <li>the behavior you expected;</li>
          <li>the behavior you observed.</li>
        </ul>

        <h2 id="file-specific-issues">File-specific issues</h2>

        <p>
          For extraction or conversion issues, provide the smallest file that reproduces the behavior when you are permitted to share it.
        </p>

        <p>Include:</p>

        <ul>
          <li>source application and version, if known (e.g. AutoCAD 2021, Civil 3D, Rhino);</li>
          <li>file format and version, if known (e.g. DWG AC1027, DXF AC1032);</li>
          <li>affected entity, layer, block, or layout;</li>
          <li>target output format (e.g. PDF, SVG, PNG);</li>
          <li>screenshots or coordinates showing the difference;</li>
          <li>whether the issue reproduces consistently.</li>
        </ul>

        <Callout type="warning" title="Confidential Engineering Data">
          <p className="font-medium text-amber-200">
            Do not send confidential engineering files through an unapproved channel. Sanitize or strip proprietary title blocks and intellectual property before submission.
          </p>
        </Callout>

        <h2 id="contact-channels">Contact channels</h2>

        <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="docs-table !my-0">
            <thead>
              <tr>
                <th>Channel</th>
                <th>Destination / Mechanism</th>
                <th>Recommended Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-white">General Technical Support</td>
                <td className="font-mono text-white/80">hello@rine.studio</td>
                <td>General questions, account assistance, and early access inquiries.</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Platform Console Feedback</td>
                <td className="font-mono text-white/80">
                  <a href="https://platform.rine.studio/dashboard/feedback" target="_blank" rel="noopener noreferrer" className="underline text-white">
                    platform.rine.studio/dashboard/feedback
                  </a>
                </td>
                <td>Authenticated issue tracking, request correlation, and console feedback.</td>
              </tr>
              <tr>
                <td className="font-medium text-white">Security Disclosures</td>
                <td className="font-mono text-white/80">security@rine.studio</td>
                <td>Sensitive vulnerability reports and responsible disclosure communications.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-white/50">
          No response-time commitment should be published until it is operationally established.
        </p>
      </div>
    </DocsLayout>
  );
}
