import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { TNewsItem, TUserInfo } from '@/types';
import ERRCODE from '@/constants/errCode';
import { queryClient } from './queryClient';
import useAuth from '@/hooks/useAuth';
import { scrapNewsQueryKeys } from './queryKey';

/**
 * 유저별 스크랩한 뉴스 목록 호출 쿼리
 * @param userId: 사용자 email
 * @returns
 */
const useScrappedNewsList = () => {
  const { authState } = useAuth();
  const userId = authState.userInfo.email;
  // TODO: 무한스크롤 기능 구현되면 infiniteQuery로 변경
  // queryKey에 userId 필요한지 확인
  const queryStates = useSuspenseQuery({
    ...scrapNewsQueryKeys.list.all,
  });

  return queryStates;
};

/**
 * 스크랩 데이터 prefetch
 * @param userId: 사용자 email
 */
export const prefetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error(ERRCODE.FETCH_SCRAPPED_NEWS_LIST_FAILED);
  await queryClient.prefetchQuery({
    ...scrapNewsQueryKeys.list.all,
  });
};

/**
 * 사용자 데이터 캐시에 추가 (api호출 X)
 * @param item: 추가할 뉴스 아이템
 */
export const addScrapNewsToCache = (item: TNewsItem) => {
  queryClient.setQueryData<TNewsItem[]>(scrapNewsQueryKeys.list.all.queryKey, (oldData) => {
    return [...oldData, item];
  });
};

/**
 * 캐시에서 스크랩 데이터 삭제 (api호출 X)
 * @param newsId: 삭제할 뉴스의 id
 */
export const deleteScrapNewsFromCache = (newsId: TNewsItem['newsId']) => {
  queryClient.setQueryData<TNewsItem[]>(scrapNewsQueryKeys.list.all.queryKey, (oldData) => {
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
    ...scrapNewsQueryKeys.list.all,
  });
  return res;
};

export const removeQueryCache = () => {
  // queryClient.removeQueries([QUERY_KEY.SCRAP_LIST]);
};

export default useScrappedNewsList;
