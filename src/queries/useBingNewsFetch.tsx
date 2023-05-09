import { fetchBingNews } from '@/api/client';
import { IBingNewsQuery } from '@/types';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryClient } from './queryClient';

export const bingNewsFetchQueryKey = 'BingNewsFetch';

const useBingNewsFetch = ({ query, pageNum }: IBingNewsQuery) => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query, pageNum],
    ({ pageParam = 1 }) => fetchBingNews(query, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
    },
  );
  return {
    ...queryStates,
    isEmpty: queryStates.data?.pages.length === 0,
  };
};

export const fetchBingNewsQueryData = ({ query, pageNum }: IBingNewsQuery) => {
  queryClient.invalidateQueries([bingNewsFetchQueryKey]);
  return queryClient.fetchQuery<ReturnType<typeof fetchBingNews>>(
    [bingNewsFetchQueryKey, query, pageNum],
    () => fetchBingNews(query, pageNum),
  );
};

export default useBingNewsFetch;
