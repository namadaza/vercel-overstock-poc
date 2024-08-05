import type { NextConfig } from 'next';

const config: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "checkout.overstock.com",
        pathname: "/**",
      },
    ],
  },
};

export default config
