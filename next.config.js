/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
    ANALYTIC_URL: process.env.ANALYTIC_URL,
    GEO_IP_KEY: process.env.GEO_IP_KEY,
  },
};

module.exports = nextConfig;
