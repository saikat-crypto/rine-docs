import React from 'react';
import Link from 'next/link';
import Badge from './Badge';

interface EndpointCardProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  purpose: string;
  authentication: string;
  acceptedMedia: string;
  responseMedia: string;
  statusBadge?: 'preview' | 'verified' | 'backend-verification-required' | 'known-limitation';
  badgeLabel?: string;
  limitationsHref?: string;
  referenceHref?: string;
}

export default function EndpointCard({
  method,
  path,
  purpose,
  authentication,
  acceptedMedia,
  responseMedia,
  statusBadge = 'preview',
  badgeLabel = 'Developer Preview',
  limitationsHref = '/known-limitations',
  referenceHref,
}: EndpointCardProps) {
  const methodColor =
    method === 'GET'
      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      : method === 'POST'
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
      : 'bg-amber-500/10 text-amber-400 border-amber-500/20';

  return (
    <div className="my-6 rounded-xl border border-white/10 bg-[#161616] p-5 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <span className={`px-2 py-0.5 rounded font-mono font-medium text-[11px] border ${methodColor}`}>
            {method}
          </span>
          <code className="text-sm font-mono text-white font-medium">{path}</code>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={statusBadge}>{badgeLabel}</Badge>
          {referenceHref && (
            <Link
              href={referenceHref}
              className="text-[11px] text-white/50 hover:text-white transition-colors underline underline-offset-2 ml-1"
            >
              Open operation &rarr;
            </Link>
          )}
        </div>
      </div>

      <p className="text-white/80 font-light text-sm mb-4 leading-relaxed">{purpose}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/[0.06] pt-3 text-[11px]">
        <div>
          <span className="text-white/40 block mb-0.5 font-mono uppercase tracking-wider text-[10px]">
            Authentication
          </span>
          <span className="text-white/70 font-mono">{authentication}</span>
        </div>
        <div>
          <span className="text-white/40 block mb-0.5 font-mono uppercase tracking-wider text-[10px]">
            Accepted Media
          </span>
          <span className="text-white/70 font-mono">{acceptedMedia}</span>
        </div>
        <div>
          <span className="text-white/40 block mb-0.5 font-mono uppercase tracking-wider text-[10px]">
            Response Media
          </span>
          <span className="text-white/70 font-mono">{responseMedia}</span>
        </div>
      </div>

      {limitationsHref && (
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/40">
          <span>Check integration boundaries and fidelity scope</span>
          <Link
            href={limitationsHref}
            className="text-amber-400/80 hover:text-amber-300 transition-colors underline underline-offset-2 font-light"
          >
            Review known limitations &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
