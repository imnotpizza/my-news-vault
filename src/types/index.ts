export type TNewsCategory =
  | 'All'
  | 'Politics'
  | 'Business'
  | 'ScienceAndTechnology'
  | 'Entertainment'
  | 'Sports';

export interface IUserInfo {
  displayName: string;
  email: string;
  photoURL: string;
}

/**
 *  Bing News API 쿼리스트링
 */
export interface IBingNewsQuery {
  query: string;
  pageNum: number;
  category: TNewsCategory;
}

/**
 *  Bing News API 응답데이터
 */
export interface IRawNewsItem {
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
}

/**
 *  Bing News API 응답 객체 형식
 */
export interface IBingNewsAPIRes {
  queryContext: {
    adultIntent: boolean;
    originalQuery: string;
  };
  readLink: string;
  totalEstimatedMatches: number;
  value: IRawNewsItem[];
}

/**
 *  클라이언트에서 사용할 뉴스 객체 형식
 */
export interface INewsItem {
  newsId: string;
  datePublished: string;
  description: string;
  providerIcon: string;
  providerName: string;
  thumbnail: string;
  title: string;
  isScrapped: boolean;
}

export interface IPageProps {
  params: {
    category: IBingNewsQuery['category'];
  };
  searchParams: {
    q: IBingNewsQuery['query'];
  };
}
