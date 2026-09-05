import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', 'next-sanity', '@sanity/client'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
