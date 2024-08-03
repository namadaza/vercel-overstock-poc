/** @type {import('next').NextConfig} */
const nextConfig = {
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
const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
module.exports = withVercelToolbar(nextConfig);
