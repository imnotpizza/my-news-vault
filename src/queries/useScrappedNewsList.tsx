import { fetchScrappedList } from '@/api/client';
import { INewsItem } from '@/types';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const scrappedNewsListQueryKey = 'ScrappedNewsList';

// firebase 연동
const useScrappedNewsList = () => {
  const queryStates = useQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
    [scrappedNewsListQueryKey],
    () => fetchScrappedList('userId'),
    {},
  );

  return queryStates;
};

export default useScrappedNewsList;
