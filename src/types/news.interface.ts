/**
 *  Bing News API 응답데이터
 *  FIXME: any 타입들 전부 수정
 */
export interface IBingNewsAPIResponseModel {
  queryContext: {
    adultIntent: boolean;
    originalQuery: string;
  };
  readLink: string;
  totalEstimatedMatches: number;
  value: {
    /** 뉴스 게시 일자 */
    datePublished: string;
    /** 뉴스 요약 */
    description: string;
    /** 뉴스 제목 */
    name: string;
    /** 뉴스 썸네일 */
    image?: {
      thumbnail: {
        contentUrl: string;
        height: number;
        width: number;
      };
      name?: string;
    };
    /** 뉴스 제공자 */
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
    /** 뉴스 링크 */
    url: string;
    /** 뉴스 카테고리 */
    category?: string;
    /** 뉴스 주요 내용 */
    about?: any;
    /** 뉴스 관련 링크 */
    mentions?: any;
    /** 뉴스 영상 */
    video?: any;
  }[];
}
