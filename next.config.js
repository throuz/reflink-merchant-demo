/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co", "utfs.io"],
  },
  // Enable experimental features since we're using --turbopack in package.json
  experimental: {
    turbo: true,
  },
};

module.exports = nextConfig;
