import { useSuspenseQuery } from '@tanstack/react-query';
import { TNewsItem, TUserInfo } from '@/types';
import ERRCODE from '@/constants/errCode';
import useAuth from '@/hooks/useAuth';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { fetchScrappedList } from '@/api/client';
import APIError from '@/utils/APIError';
import { queryClient } from './queryClient';

export const SCRAP_QUERY_KEYS = createQueryKeyStore({
  SCRAP: {
    /** 목록 */
    LIST: {
      queryKey: null,
    },
  },
});

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
    queryKey: SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey,
    queryFn: () => fetchScrappedList(userId),
  });

  return queryStates;
};

/**
 * 스크랩 데이터 prefetch
 * @param userId: 사용자 email
 */
export const prefetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new APIError(ERRCODE.AUTH_USER_NOT_FOUND);
  await queryClient.prefetchQuery({
    queryKey: SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey,
    queryFn: () => fetchScrappedList(userId),
  });
};

/**
 * 사용자 데이터 캐시에 추가 (api호출 X)
 * @param item: 추가할 뉴스 아이템
 */
export const addScrapNewsToCache = (item: TNewsItem) => {
  queryClient.setQueryData<TNewsItem[]>(SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey, (oldData) => {
    return [...oldData, item];
  });
};

/**
 * 캐시에서 스크랩 데이터 삭제 (api호출 X)
 * @param newsId: 삭제할 뉴스의 id
 */
export const deleteScrapNewsFromCache = (newsId: TNewsItem['newsId']) => {
  queryClient.setQueryData<TNewsItem[]>(SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey, (oldData) => {
    return oldData.filter((news: TNewsItem) => news.newsId !== newsId);
  });
};

/**
 * 스크랩 데이터 fetch
 * @param userId: 사용자 email
 * @returns 호출된 데이터
 */
export const fetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new APIError(ERRCODE.AUTH_USER_NOT_FOUND);

  const res = await queryClient.fetchQuery({
    queryKey: SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey,
    queryFn: () => fetchScrappedList(userId),
  });
  return res;
};

export default useScrappedNewsList;
