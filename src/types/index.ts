import { DehydratedState } from '@tanstack/react-query';

export type TUserInfo = {
  displayName: string;
  email: string;
  photoURL: string;
};

/**
 *  Bing News API 검색 필터링
 */
export type TBingNewsFilterQueries = {
  /** 검색어 */
  keyword: string;
};

/**
 *  Bing News API 응답데이터
 *  FIXME: any 타입들 전부 수정
 */
export type TRawNewsItem = {
  datePublished: string;
  description: string;
  headline?: true;
  name: string;
  image?: {
    thumbnail: {
      contentUrl: string;
      height: number;
      width: number;
    };
    name?: string;
  };
  provider: {
    _type?: string;
    image?: {
      thumbnail?: {
        contentUrl?: string;
        width?: number;
        height?: number;
      };
    };
    name?: string;
  }[];
  url: string;
  category?: string;
  about?: any;
  mentions?: any;
  video?: any;
};

/**
 *  클라이언트에서 사용할 뉴스 객체 형식
 */
export type TNewsItem = {
  newsId: string;
  datePublished: TRawNewsItem['datePublished'];
  description: TRawNewsItem['description'];
  // @ts-ignore 
  providerIcon: TRawNewsItem['provider'][0]['image']['thumbnail']['contentUrl'];
  providerName: TRawNewsItem['provider'][0]['name'];
  // @ts-ignore 
  thumbnail: TRawNewsItem['image']['thumbnail']['contentUrl'];
  title: TRawNewsItem['name'];
  isScrapped: boolean;
  url: TRawNewsItem['url'];
  searchQuery: TBingNewsFilterQueries['keyword'];
};

/**
 *  Bing News API 응답 객체 형식
 */
export type TBingNewsAPIRes = {
  queryContext: {
    adultIntent: boolean;
    originalQuery: string;
  };
  readLink: string;
  totalEstimatedMatches: number;
  value: TRawNewsItem[];
  sort?: any;
};

/**
 * ssr 메소드에서 넘어오는 return value
 */
export type TPageProps = {
  dehydratedState?: DehydratedState;
  userInfo: TUserInfo | null;
  query?: TBingNewsFilterQueries['keyword'];
  errCode?: string;
};
