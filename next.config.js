/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // nextjs에서 외부경로의 이미지를 사용할수 있게 처리
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
    ssr: true,
  },
  async rewrites() {
    return [
      {
        source: '/scrap',
        destination: '/scrap/[userId]',
      },
    ];
  },
};

module.exports = nextConfig;
