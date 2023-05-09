import { IBingNewsAPIRes, IBingNewsQuery, INewsItem, IRawNewsItem } from '@/types';
import BingAPI from './BingAPI';

// 한번에 몇개씩 호출할지 결정
const NEWS_COUNT_NUM = 20;

/**
 * Bing API 호출
 * @param query: 검색어
 * @param pageNum: 불러올 페이지
 * @returns
 */
export const fetchBingNews = async (query: IBingNewsQuery['query'], pageNum: IBingNewsQuery['pageNum']) => {
  const offset = NEWS_COUNT_NUM * pageNum;
  const url = `news/search?q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`;
  const apiRes = await BingAPI.get<IBingNewsAPIRes>(url);

  const newsItems: INewsItem[] = apiRes.data.value.map((item: IRawNewsItem) => {
    return {
      ...item,
      id: item.url,
    };
  });

  return newsItems;
};
