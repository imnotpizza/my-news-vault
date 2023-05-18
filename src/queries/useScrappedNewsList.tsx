import { fetchScrappedList } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
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

export const fetchScrappedNewsList = (userId) => {
  return queryClient.fetchQuery({
    queryKey: [scrappedNewsListQueryKey],
    queryFn: () => fetchScrappedList(userId),
  });
};

export default useScrappedNewsList;
