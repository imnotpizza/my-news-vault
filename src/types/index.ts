import { DehydratedState } from '@tanstack/react-query';

export type TNewsCategory =
  | 'All'
  | 'Politics'
  | 'Business'
  | 'ScienceAndTechnology'
  | 'Entertainment'
  | 'Sports';

export type TUserInfo = {
  displayName: string;
  email: string;
  photoURL: string;
};

/**
 *  Bing News API 쿼리스트링
 */
export type TBingNewsQuery = {
  query: string;
  category: TNewsCategory;
};

/**
 *  Bing News API 응답데이터
 */
export type TRawNewsItem = {
  datePublished: string;
  description: string;
  headline: true;
  name: string;
  image: {
    thumbnail: {
      contentUrl: string;
      height: string;
      width: string;
    };
    name: string;
  };
  provider: {
    image: {
      thumbnail: {
        contentUrl: string;
      };
    };
    name: string;
  }[];
  url: string;
};

/**
 *  클라이언트에서 사용할 뉴스 객체 형식
 */
export type TNewsItem = {
  newsId: string;
  datePublished: TRawNewsItem['datePublished'];
  description: TRawNewsItem['description'];
  providerIcon: TRawNewsItem['provider'][0]['image']['thumbnail']['contentUrl'];
  providerName: TRawNewsItem['provider'][0]['name'];
  thumbnail: TRawNewsItem['image']['thumbnail']['contentUrl'];
  title: TRawNewsItem['name'];
  isScrapped: boolean;
  url: TRawNewsItem['url'];
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
};

/**
 * ssr 메소드에서 넘어오는 return value
 */
export type TPageProps = {
  status: boolean;
  dehydratedState?: DehydratedState;
  userInfo: TUserInfo | null;
  category?: TNewsCategory;
};
