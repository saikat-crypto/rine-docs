import React from 'react';
import { AlertTriangle, AlertCircle, Info, ShieldAlert } from 'lucide-react';

interface CalloutProps {
  type?: 'warning' | 'info' | 'blocker' | 'investigation';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Callout({
  type = 'info',
  title,
  children,
  className = '',
}: CalloutProps) {
  let borderClasses = 'border-white/10 bg-[#161616] text-white/80';
  let icon = <Info className="w-4 h-4 text-blue-400 shrink-0" />;

  switch (type) {
    case 'warning':
      borderClasses = 'border-amber-500/30 bg-amber-500/[0.04] text-amber-200/90';
      icon = <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />;
      break;
    case 'blocker':
      borderClasses = 'border-rose-500/30 bg-rose-500/[0.04] text-rose-200/90';
      icon = <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />;
      break;
    case 'investigation':
      borderClasses = 'border-orange-500/30 bg-orange-500/[0.04] text-orange-200/90';
      icon = <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />;
      break;
    case 'info':
    default:
      borderClasses = 'border-white/10 bg-[#181818] text-white/80';
      icon = <Info className="w-4 h-4 text-white/60 shrink-0" />;
      break;
  }

  return (
    <div className={`my-6 rounded-xl border p-4.5 text-xs font-light leading-relaxed ${borderClasses} ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-2 font-medium text-white text-xs tracking-wide">
          {icon}
          <span>{title}</span>
        </div>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  );
}
