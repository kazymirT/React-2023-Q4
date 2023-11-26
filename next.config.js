/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'assets.example.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
