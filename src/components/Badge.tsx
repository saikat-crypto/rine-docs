import React from 'react';

export type BadgeVariant =
  | 'preview'
  | 'verified'
  | 'backend-verification-required'
  | 'known-limitation'
  | 'schema'
  | 'investigation'
  | 'unsupported'
  | 'added'
  | 'changed'
  | 'fixed'
  | 'deprecated';

interface BadgeProps {
  variant?: BadgeVariant;
  children?: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = 'preview', children, className = '' }: BadgeProps) {
  let styleClasses = 'bg-white/5 text-white/70 border-white/10';
  let dotColor = '';

  switch (variant) {
    case 'preview':
      styleClasses = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      dotColor = 'bg-emerald-400 animate-pulse';
      break;
    case 'verified':
      styleClasses = 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      dotColor = 'bg-blue-400';
      break;
    case 'backend-verification-required':
      styleClasses = 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      dotColor = 'bg-amber-400';
      break;
    case 'known-limitation':
    case 'investigation':
      styleClasses = 'bg-orange-500/10 text-orange-300 border-orange-500/20';
      dotColor = 'bg-orange-400';
      break;
    case 'schema':
      styleClasses = 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      dotColor = 'bg-purple-400';
      break;
    case 'unsupported':
      styleClasses = 'bg-rose-500/10 text-rose-300 border-rose-500/20';
      dotColor = 'bg-rose-400';
      break;
    case 'added':
      styleClasses = 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      break;
    case 'changed':
      styleClasses = 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      break;
    case 'fixed':
      styleClasses = 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      break;
    case 'deprecated':
      styleClasses = 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-tight border ${styleClasses} ${className}`}
    >
      {dotColor && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />}
      <span>{children}</span>
    </span>
  );
}
