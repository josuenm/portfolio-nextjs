/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["github.com"],
  },
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
  },
};

module.exports = nextConfig;
