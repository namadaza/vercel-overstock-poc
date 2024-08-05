/** @type {import('next').NextConfig} */
module.exports = {
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
