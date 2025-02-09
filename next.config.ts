/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/home',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig