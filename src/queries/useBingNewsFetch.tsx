import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsCategory } from '@/types';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryClient } from './queryClient';

export const bingNewsFetchQueryKey = 'BingNewsFetch';

interface Params {
  query: TBingNewsQuery['query'];
  category: TNewsCategory;
  enabled: boolean;
  selector?: any;
}

const useBingNewsFetch = ({ query, category, enabled = true, selector }: Params) => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query],
    ({ pageParam = 1 }) => fetchBingNews(query, pageParam, category),
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
      enabled,
      select: selector && selector,
    },
  );
  return {
    ...queryStates,
    isEmpty: queryStates.data?.pages.length === 0,
  };
};

export default useBingNewsFetch;
