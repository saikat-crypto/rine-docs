'use client';

import React, { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TocItem[];
  variant?: 'sidebar' | 'inline';
}

export default function TableOfContents({ items, variant = 'sidebar' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<TocItem[]>(items || []);

  useEffect(() => {
    if (items && items.length > 0) {
      setHeadings(items);
      return;
    }

    // Auto-detect h2 and h3 elements in the article if not explicitly passed
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    const detected = elements.map((el) => {
      if (!el.id) {
        const id = el.textContent
          ?.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        if (id) el.id = id;
      }
      return {
        id: el.id,
        title: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      };
    });
    setHeadings(detected.filter((h) => h.id));
  }, [items]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%' }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  if (variant === 'inline') {
    return (
      <details className="xl:hidden my-4 rounded-xl border border-white/10 bg-[#161616] p-3 text-xs group">
        <summary className="flex items-center justify-between cursor-pointer list-none text-white/80 font-medium select-none">
          <span className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6]/70 font-mono">
              On this page
            </span>
            <span className="text-[10px] text-white/40 font-mono">({headings.length} sections)</span>
          </span>
          <span className="text-white/40 group-open:rotate-180 transition-transform text-[10px]">▼</span>
        </summary>
        <ul className="mt-3 pt-3 border-t border-white/[0.08] space-y-2 pl-2">
          {headings.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? '12px' : '0px' }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', `#${item.id}`);
                  }
                }}
                className={`block transition-colors font-light leading-snug line-clamp-1 ${
                  activeId === item.id ? 'text-white font-medium' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </details>
    );
  }

  return (
    <div className="space-y-3 text-xs select-none">
      <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7c6c6]/60 font-mono">
        On this page
      </h4>
      <ul className="space-y-1.5 border-l border-white/[0.08] pl-3">
        {headings.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? '12px' : '0px' }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', `#${item.id}`);
                  }
                }}
                className={`block transition-colors font-light leading-snug line-clamp-1 ${
                  isActive
                    ? 'text-white font-medium border-l border-white -ml-[13px] pl-3'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
