import { TNewsItem, TPageProps } from '@/types';

// Toast ui duration
export const TOAST_DURATION = 3000;
// 앱 정식 이름
export const APP_NAME = 'My News Vault';
// pageProps 초기값
export const initialPageProps: TPageProps = {
  userInfo: null,
  dehydratedState: null,
};

/** 최대 호출 가능한 페이지 수 */
export const NEWS_LIST_PAGE_LIMIT = 3;

// 쿠키 설정
export const COOKIE_CONFIG = {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

export const defaultNewsItem: TNewsItem = {
  newsId: '',
  datePublished: '',
  description: '',
  providerIcon: '',
  providerName: '',
  thumbnail: '',
  title: '',
  isScrapped: false,
  searchQuery: '',
  url: '',
};
