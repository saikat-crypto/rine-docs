import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!$|_next|favicon.ico|apple-touch-icon.png|opengraph-image|robots.txt|sitemap.xml).*)',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
