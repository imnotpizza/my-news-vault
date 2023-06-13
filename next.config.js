const withBundleAnalyzer = require('@next/bundle-analyzer');
const nextConfig = {
  env: {
    NEXT_PUBLIC_BING_API_BASEURL: process.env.NEXT_PUBLIC_BING_API_BASEURL,
    NEXT_PUBLIC_BING_API_KEY: process.env.NEXT_PUBLIC_BING_API_KEY,
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_AUTH_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_AUTH_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_AUTH_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_AUTH_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_AUTH_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_AUTH_APP_ID,
    NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
    NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
  },
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
  },
};

module.exports = withBundleAnalyzer(nextConfig);
