/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // nextjs에서 외부경로의 이미지를 사용할수 있게 처리
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bing.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
    ssr: true,
  },
};

module.exports = nextConfig;
