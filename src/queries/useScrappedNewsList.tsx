import { fetchScrappedList } from '@/api/client';
import { INewsItem } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const scrappedNewsListQueryKey = 'ScrappedNewsList';

// firebase 연동
const useScrappedNewsList = () => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchScrappedList>>, AxiosError>(
    [scrappedNewsListQueryKey],
    ({ pageParam = 1 }) => fetchScrappedList('userId'),
    {
      getNextPageParam: (lastPage, pages) => {
      
        return undefined;
      },
    },
  );

  return queryStates;
};

export default useScrappedNewsList;
