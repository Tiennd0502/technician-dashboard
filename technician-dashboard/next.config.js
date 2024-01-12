/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
    deviceSizes: [425, 576, 769, 992, 1200, 1920],
    imageSizes: [190, 240, 330, 450],
    minimumCacheTTL: 90,
  },
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
