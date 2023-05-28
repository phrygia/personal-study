/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/delete_forever", // 308
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/delete_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/phrygia",
        destination: "/about/me/phrygia",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
