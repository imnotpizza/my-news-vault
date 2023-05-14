import { IBingNewsAPIRes, IBingNewsQuery, INewsItem, IRawNewsItem } from '@/types';
import { doc, getDocs, collection, addDoc, deleteDoc, setDoc } from 'firebase/firestore/lite';
import { database } from '@/firebase';
import { parseToNewsItem } from '@/utils';
import BingAPI from '@/api/BingAPI';

// 한번에 몇개씩 호출할지 결정
const NEWS_COUNT_NUM = 20;

/**
 * Bing API 호출
 * @param query: 검색어
 * @param pageNum: 불러올 페이지
 * @returns
 */
export const fetchBingNews = async (
  query: IBingNewsQuery['query'],
  pageNum: IBingNewsQuery['pageNum'],
  category: IBingNewsQuery['category'],
) => {
  const offset = NEWS_COUNT_NUM * pageNum;
  const url = `news/search?mkt=en-us&q=${query}&count=${NEWS_COUNT_NUM}&offset=${offset}&category=${category}`;
  const apiRes = await BingAPI.get<IBingNewsAPIRes>(url);

  const newsItems: INewsItem[] = apiRes.data.value.map((item: IRawNewsItem) => {
    return parseToNewsItem(item);
  });

  return newsItems;
};

/**
 * 스크랩된 데이터 호출
 */
export const fetchScrappedList = async (userId) => {
  const path = `scrap/${userId}/scrap`;
  const res: INewsItem[] = [];
  const snapshot = await getDocs(collection(database, path));
  snapshot.forEach((doc) => {
    const data = doc.data() as INewsItem;
    data.isScrapped = true;
    res.push(data);
  });
  return res;
};

/**
 * 스크랩
 */
export const scrapNews = async (userId, newsItem: INewsItem) => {
  await setDoc(doc(database, `scrap/${userId}/scrap`, newsItem.newsId), newsItem);
};

/**
 * 스크랩 해제
 */
export const unscrapNews = async (userId, newsId) => {
  const target = doc(database, `scrap/${userId}/scrap`, newsId);
  await deleteDoc(target);
};
