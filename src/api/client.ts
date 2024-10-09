import { TBingNewsAPIRes, TBingNewsQuery, TNewsItem, TUserInfo } from '@/types';
import { doc, getDocs, collection, deleteDoc, setDoc } from 'firebase/firestore/lite';
import BingAPI from '@/api/BingAPI';
import { mockBingNewsRes } from '@/mock';

// 한번에 몇개씩 호출할지 결정
const NEWS_COUNT_NUM = 20;

/**
 * Bing API 호출
 * @param query: 검색어
 * @param pageNum: 불러올 페이지
 * @returns
 */
export const fetchBingNews = async (
  query: TBingNewsQuery['query'],
  pageNum: number,
) => {
  const offset = NEWS_COUNT_NUM * pageNum;
  const url = `news/search?mkt=en-us&q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}`;
  // const apiRes = await BingAPI.get<TBingNewsAPIRes>(url, {
  //   cache: 'force-cache',
  // });
  return mockBingNewsRes;
};

/**
 * 스크랩된 데이터 호출
 */
export const fetchScrappedList = async (userId: TUserInfo['email']) => {
  const path = `scrap/${userId}/scrap`;
  const res: TNewsItem[] = [];
  // const snapshot = await getDocs(collection(database, path));
  // snapshot.forEach((_doc) => {
  //   const data = _doc.data() as TNewsItem;
  //   data.isScrapped = true;
  //   res.push(data);
  // });
  return [];
};

/**
 * 스크랩
 */
export const scrapNews = async (userId: TUserInfo['email'], newsItem: TNewsItem) => {
  // await setDoc(doc(database, `scrap/${userId}/scrap`, newsItem.newsId), newsItem);
};

/**
 * 스크랩 해제
 */
export const unscrapNews = async (userId: TUserInfo['email'], newsId: string) => {
  // const target = doc(database, `scrap/${userId}/scrap`, newsId);
  // await deleteDoc(target);
};
