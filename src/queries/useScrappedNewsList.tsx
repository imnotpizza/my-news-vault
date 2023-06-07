import { fetchScrappedList } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { TNewsItem, TUserInfo } from '@/types';
import { queryClient } from './queryClient';
import QUERY_KEY from './keys';

// firebase 연동
const useScrappedNewsList = ({ userId }) => {
  const queryStates = useQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
    [QUERY_KEY.SCRAP_LIST],
    () => fetchScrappedList(userId),
    {
      enabled: Boolean(userId),
    },
  );

  return queryStates;
};

export const prefetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error('userId is required');

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.SCRAP_LIST],
    queryFn: () => fetchScrappedList(userId),
  });
};

export const addScrapNewsToCache = (item: TNewsItem) => {
  queryClient.setQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST], (oldData) => {
    return [...oldData, item];
  });
};

export const deleteScrapNewsFromCache = (newsId: TNewsItem['newsId']) => {
  queryClient.setQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST], (oldData) => {
    return oldData.filter((news: TNewsItem) => news.newsId !== newsId);
  });
};

export default useScrappedNewsList;
