/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
