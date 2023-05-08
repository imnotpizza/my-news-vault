import { fetchBingNews } from '@/api/client';
import { IBingNewsQuery } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const bingNewsFetchQueryKey = 'BingNewsFetch';

const useBingNewsFetch = ({ query, pageNum }: IBingNewsQuery) => {
  const queryState = useQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query, pageNum],
    () => fetchBingNews(query, pageNum),
    {},
  );

  return queryState;
};

export default useBingNewsFetch;
