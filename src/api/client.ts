import BingAPI from './BingAPI';

// 한번에 몇개씩 호출할지 결정
const NEWS_COUNT_NUM = 20;

/**
 * Bing API 호출
 * @param query: 검색어
 * @param pageNum: 불러올 페이지
 * @returns
 */
export const fetchBingNews = async (query: string, pageNum: number) => {
  const offset = NEWS_COUNT_NUM * pageNum;
  const url = `news/search?q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`;
  const apiRes = await BingAPI.get<any>(url);
  return apiRes;
};
