import { INewsItem, IRawNewsItem } from '@/types';

/**
 * Bing News API 응답데이터를 클라이언트에서 사용할 형식으로 변환
 * @param raw
 */
export const parseToNewsItem = (raw: IRawNewsItem) => {
  const newsItem: INewsItem = {
    newsId: raw.name,
    datePublished: raw.datePublished,
    description: raw.description,
    providerIcon: raw.provider[0].image.thumbnail.contentUrl,
    providerName: raw.provider[0].name,
    thumbnail: raw.image ? raw.image.thumbnail.contentUrl : '',
    title: raw.name,
  };

  return newsItem;
};
