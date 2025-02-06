import { TBingNewsAPIRes, TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import { mockBingNewsRes } from '@/mock';
import { FETCH_NEWS_COUNT_PER_PAGE } from '@/constants';
import BingAPI from './BingAPI';
import axios from 'axios';

/**
 * Bing API 호출
 * @param query: 검색어
 * @param pageNum: 불러올 페이지
 * @returns
 */
export const fetchBingNews = async (
  query: TBingNewsFilterQueries['keyword'] = '',
  pageNum: number,
) => {
  const offset = FETCH_NEWS_COUNT_PER_PAGE * pageNum;
  const url = `https://api.bing.microsoft.com/v7.0/news/search?mkt=en-us&q=&count=20&offset=0`;
  const apiRes = await BingAPI.get<TBingNewsAPIRes>(url, {});
  return apiRes.data;
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
  await axios.get('/api/scrap');
  return [];
};

/**
 * 스크랩
 */
export const scrapNews = async (userId: TUserInfo['email'], newsItem: TNewsItem) => {
  // await setDoc(doc(database, `scrap/${userId}/scrap`, newsItem.newsId), newsItem);
  await axios.patch('/api/scrap');
};

/**
 * 스크랩 해제
 */
export const unscrapNews = async (userId: TUserInfo['email'], newsId: string) => {
  // const target = doc(database, `scrap/${userId}/scrap`, newsId);
  // await deleteDoc(target);
  await axios.delete('/api/scrap');
};