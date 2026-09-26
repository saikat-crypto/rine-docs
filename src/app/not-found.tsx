import Link from 'next/link';
import RineLogo from '@/components/RineLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141313] text-white flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-white/20 selection:text-white">
      {/* Top Header */}
      <header className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <RineLogo className="w-5 h-5 text-white" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-white/90">
            Rine Docs
          </span>
        </Link>
        <div className="flex items-center gap-4 text-xs font-mono tracking-wider text-white/60">
          <a
            href="https://rine.studio"
            className="hover:text-white transition-colors"
          >
            ← Rine.studio
          </a>
          <a
            href="https://platform.rine.studio"
            className="hover:text-white transition-colors"
          >
            Platform →
          </a>
        </div>
      </header>

      {/* Center 404 block */}
      <main className="max-w-2xl mx-auto text-center py-20 px-4 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono tracking-widest uppercase text-white/60">
          <span>Error 404</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Documentation Route Not Found</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
          This documentation page does not exist.
        </h1>

        <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-md mx-auto">
          The requested endpoint, guide, or schema topic could not be found. Explore our primary documentation guides below.
        </p>

        {/* Quick Links Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto pt-4">
          <Link
            href="/quickstart"
            className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
          >
            <div className="text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
              01 / Quickstart →
            </div>
            <div className="text-xs text-white/60 font-light mt-1">
              From CAD file to first verified result
            </div>
          </Link>

          <Link
            href="/supported-formats"
            className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
          >
            <div className="text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
              02 / Formats →
            </div>
            <div className="text-xs text-white/60 font-light mt-1">
              DWG, DXF, DWT inputs and output matrix
            </div>
          </Link>

          <Link
            href="/api-reference"
            className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
          >
            <div className="text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
              03 / API Reference →
            </div>
            <div className="text-xs text-white/60 font-light mt-1">
              /health, /extract, and /convert operations
            </div>
          </Link>

          <Link
            href="/known-limitations"
            className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
          >
            <div className="text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
              04 / Limitations →
            </div>
            <div className="text-xs text-white/60 font-light mt-1">
              Active investigations and preview boundaries
            </div>
          </Link>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 font-mono tracking-wide"
          >
            ← Return to Documentation Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/40 pt-8 border-t border-white/10">
        <span>© 2026 Rine Studio. Developer Preview Documentation.</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@rine.studio"
            className="hover:text-white transition-colors"
          >
            hello@rine.studio
          </a>
          <a
            href="https://platform.rine.studio"
            className="hover:text-white transition-colors"
          >
            Open Platform
          </a>
        </div>
      </footer>
    </div>
  );
}
