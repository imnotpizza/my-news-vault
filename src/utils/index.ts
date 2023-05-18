import { TNewsItem, TRawNewsItem } from '@/types';
import flatMap from 'lodash-es/flatMap';

/**
 * Bing News API 응답데이터를 클라이언트에서 사용할 형식으로 변환
 * @param raw: Bing News API 원본 데이터
 */
export const parseToNewsItem = (raw: TRawNewsItem) => {
  const newsItem: TNewsItem = {
    newsId: raw.name,
    datePublished: raw.datePublished,
    description: raw.description,
    providerIcon: raw.provider[0].image ? raw.provider[0].image?.thumbnail.contentUrl : '',
    providerName: raw.provider[0].name,
    thumbnail: raw.image ? raw.image?.thumbnail.contentUrl : '',
    title: raw.name,
    isScrapped: false,
    url: raw.url,
  };

  return newsItem;
};

/**
 * 스크랩 여부 초기화
 * @param newsItemList: 검색결과 리스트
 * @param scrappedNewsList: 스크랩 리스트
 */
export const setIsScrapped = (newsItemList: TNewsItem[], scrappedNewsList: TNewsItem[]) => {
  return newsItemList.map((item) => {
    console.log('############## 1111111', 12312313, scrappedNewsList)
    const isScrapped = scrappedNewsList.find((sItem) => {
      console.log('########## 1111', sItem.newsId, item.newsId);
      return sItem.newsId === item.newsId;
    });
    console.log('########## isScrapped', isScrapped);
    return {
      ...item,
      isScrapped: Boolean(isScrapped),
    };
  });
};

/**
 * 리스트 평탄화 수행
 * @param data: 2차원 배열
 */
export const getFlattenList = (data) => {
  return flatMap(data, (item) => {
    return item;
  });
};
