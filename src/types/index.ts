/**
 *  Bing News API 쿼리스트링
 */
export interface IBingNewsQuery {
  query: string;
  pageNum: number;
}

/**
 *  Bing News API 응답 객체 형식
 */
export interface IBingNewsAPIRes {
  queryContext: {
    adultIntent: boolean;
    originalQuery: string;
  },
  readLink: string;
  totalEstimatedMatches: number;
  value: IRawNewsItem[];
}

/**
 *  Bing News API 응답데이터
 */
export interface IRawNewsItem {
  datePublished: string;
  description: string;
  headline: true;
  image: {
    thumbnail: {
      contentUrl: string;
      height: string;
      width: string;
    },
    name: string;
  }
  provider: {
    image: {
      thumbnail: {
        contentUrl: string;
      }
    };
    name: string;
  }[]
  url: string;
}

/**
 *  클라이언트에서 사용할 뉴스 객체 형식
 */
export interface INewsItem extends IRawNewsItem {
  id: string;
}