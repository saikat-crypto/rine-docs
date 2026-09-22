import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DocsNavbar from '@/components/DocsNavbar';
import DocsSidebar from '@/components/DocsSidebar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rine Documentation | Developer Guides & CAD IR Architecture',
  description:
    'Comprehensive technical documentation for the Rine engineering intelligence platform, La Vinci CAD Intermediate Representation, vector compilers, and MCP agent interfaces.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
        <DocsNavbar />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex">
          <DocsSidebar />
          <main className="flex-1 py-10 md:py-12 md:pl-12 max-w-4xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
