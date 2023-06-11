import { TPageProps } from '@/types';

// Toast ui duration
export const TOAST_DURATION = 3000;
// 앱 정식 이름
export const APP_NAME = 'MYNEWSVAULT';
// pageProps 초기값
export const initialPageProps: TPageProps = {
  userInfo: null,
  dehydratedState: null,
  status: false,
};

// 쿠키 설정
export const COOKIE_CONFIG = {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24, // 1 day
};
