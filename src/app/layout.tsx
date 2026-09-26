import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#141313",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.rine.studio"),
  title: {
    template: "%s | Rine Docs",
    default: "Rine Documentation — Engineering-File Intelligence & Conversion API",
  },
  description:
    "La Vinci turns supported CAD files into structured engineering data and reusable output formats through a hosted API.",
  keywords: [
    "CAD documentation",
    "La Vinci API",
    "LAVINCI_CAD_IR_V3",
    "CAD IR",
    "DWG parsing API",
    "DXF conversion API",
    "CAD to PDF",
    "CAD to SVG",
    "Engineering file intelligence",
  ],
  authors: [{ name: "Rine Studio", url: "https://rine.studio" }],
  creator: "Rine Studio",
  publisher: "Rine Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.rine.studio",
    siteName: "Rine Documentation",
    title: "Rine Documentation — Engineering-File Intelligence & Conversion API",
    description:
      "La Vinci turns supported CAD files into structured engineering data and reusable output formats through a hosted API.",
    images: [
      {
        url: "https://rine.studio/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rine Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rine Documentation — Engineering-File Intelligence & Conversion API",
    description:
      "La Vinci turns supported CAD files into structured engineering data and reusable output formats through a hosted API.",
    images: ["https://rine.studio/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "https://rine.studio/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "https://rine.studio/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "https://rine.studio/apple-touch-icon.png",
  },
};

const jsonLdTechArticle = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Rine Documentation — Engineering-File Intelligence & Conversion API",
  description:
    "Technical documentation, API reference, and specification for La Vinci and LAVINCI_CAD_IR_V3.",
  url: "https://docs.rine.studio",
  author: {
    "@type": "Organization",
    name: "Rine Studio",
    url: "https://rine.studio",
  },
  publisher: {
    "@type": "Organization",
    name: "Rine Studio",
    url: "https://rine.studio",
    logo: "https://rine.studio/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTechArticle) }}
        />
      </head>
      <body
        className={`${manrope.className} bg-[#141313] text-white min-h-screen antialiased selection:bg-white/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
