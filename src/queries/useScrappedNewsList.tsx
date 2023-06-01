import { fetchScrappedList } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { TUserInfo } from '@/types';
import { queryClient } from './queryClient';

export const scrappedNewsListQueryKey = 'ScrappedNewsList';

// firebase 연동
const useScrappedNewsList = ({ userId }) => {
  const queryStates = useQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
    [scrappedNewsListQueryKey],
    () => fetchScrappedList(userId),
    {
      enabled: Boolean(userId),
    },
  );

  return queryStates;
};

export const fetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error('userId is required');

  const res = await queryClient.fetchQuery({
    queryKey: [scrappedNewsListQueryKey],
    queryFn: () => fetchScrappedList(userId),
  });

  return res;
};

export const prefetchScrappedNewsList = async (userId: TUserInfo['email']) => {
  if (!userId) throw new Error('userId is required');

  await queryClient.prefetchQuery({
    queryKey: [scrappedNewsListQueryKey],
    queryFn: () => fetchScrappedList(userId),
  });
};

export default useScrappedNewsList;
