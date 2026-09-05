import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",       // unsafe-eval needed by Sanity Studio
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io https://static.wixstatic.com",
      "font-src 'self' data:",
      "frame-src https://app.cw.vet",                          // ezyVet booking iframe
      "connect-src 'self' https://*.sanity.io https://api.sanity.io",
      "media-src 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', 'next-sanity', '@sanity/client'],
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
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
