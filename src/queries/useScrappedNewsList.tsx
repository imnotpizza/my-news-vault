import { fetchScrappedList } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { TNewsItem, TUserInfo } from '@/types';
import ERRCODE from '@/constants/errCode';
import { queryClient } from './queryClient';
import QUERY_KEY from './keys';

/**
 * 유저별 스크랩한 뉴스 목록 호출 쿼리
 * @param userId: 사용자 email
 * @returns
 */
const useScrappedNewsList = ({ userId }) => {
  // const queryStates = useQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
  //   [QUERY_KEY.SCRAP_LIST],
  //   () => fetchScrappedList(userId),

  // );

  return {};
};

/**
 * 스크랩 데이터 prefetch
 * @param userId: 사용자 email
 */
export const prefetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error(ERRCODE.FETCH_SCRAPPED_NEWS_LIST_FAILED);
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.SCRAP_LIST],
    queryFn: () => fetchScrappedList(userId),
  });
};

/**
 * 사용자 데이터 캐시에 추가 (api호출 X)
 * @param item: 추가할 뉴스 아이템
 */
export const addScrapNewsToCache = (item: TNewsItem) => {
  queryClient.setQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST], (oldData) => {
    return [...oldData, item];
  });
};

/**
 * 캐시에서 스크랩 데이터 삭제 (api호출 X)
 * @param newsId: 삭제할 뉴스의 id
 */
export const deleteScrapNewsFromCache = (newsId: TNewsItem['newsId']) => {
  queryClient.setQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST], (oldData) => {
    return oldData.filter((news: TNewsItem) => news.newsId !== newsId);
  });
};

/**
 * 스크랩 데이터 fetch
 * @param userId: 사용자 email
 * @returns 호출된 데이터
 */
export const fetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error(ERRCODE.FETCH_SCRAPPED_NEWS_LIST_FAILED);

  const res = await queryClient.fetchQuery({
    queryKey: [QUERY_KEY.SCRAP_LIST],
    queryFn: () => fetchScrappedList(userId),
  });
  return res;
};

export const removeQueryCache = () => {
  // queryClient.removeQueries([QUERY_KEY.SCRAP_LIST]);
};

export default useScrappedNewsList;
