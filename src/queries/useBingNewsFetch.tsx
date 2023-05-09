import { fetchBingNews } from '@/api/client';
import { IBingNewsQuery } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { queryClient } from './queryClient';

export const bingNewsFetchQueryKey = 'BingNewsFetch';

const useBingNewsFetch = ({ query, pageNum }: IBingNewsQuery) => {
  const queryStates = useQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query, pageNum],
    () => fetchBingNews(query, pageNum),
    {
    },
  );

  return {
    ...queryStates,
    isEmpty: queryStates.data?.length === 0,
  };
};

export const fetchBingNewsQueryData = ({query, pageNum}: IBingNewsQuery) => {
  queryClient.invalidateQueries([bingNewsFetchQueryKey]);
  return  queryClient.fetchQuery<ReturnType<typeof fetchBingNews>>(
    [bingNewsFetchQueryKey, query, pageNum],
    () => fetchBingNews(query, pageNum),
  )
}

export default useBingNewsFetch;
