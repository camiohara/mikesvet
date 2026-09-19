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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://w.behold.so",  // unsafe-eval: Sanity Studio; behold.so: Instagram feed
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io https://static.wixstatic.com https://*.behold.so https://*.cdninstagram.com https://images.unsplash.com https://cdn.shopify.com",
      "font-src 'self' data:",
      "frame-src https://app.cw.vet https://maps.google.com https://www.google.com",  // ezyVet + Google Maps
      "connect-src 'self' https://*.sanity.io https://api.sanity.io https://formspree.io https://*.behold.so https://mikesvet.myshopify.com",
      "media-src 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', 'next-sanity', '@sanity/client'],
  async redirects() {
    return [
      { source: '/shop', destination: '/', permanent: false },
      { source: '/shop/:path*', destination: '/', permanent: false },
      { source: '/services/intensive-care', destination: '/services/emergency-care', permanent: true },
    ]
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
};

export default nextConfig;
