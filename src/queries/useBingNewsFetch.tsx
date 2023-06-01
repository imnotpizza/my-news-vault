import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem, TUserInfo } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { scrappedNewsListQueryKey } from '@/queries/useScrappedNewsList';
import { deleteDuplicatedNews, setIsScrapped } from '@/utils';
import { queryClient } from '@/queries/queryClient';

export const bingNewsFetchQueryKey = 'BingNewsFetch';

interface Params {
  query: TBingNewsQuery['query'];
  enabled: boolean;
}

const useBingNewsFetch = ({ query, enabled = true }: Params) => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query],
    async ({ pageParam = 1 }) => {
      const newsItems = await fetchBingNews(query, pageParam);
      const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([scrappedNewsListQueryKey]);
      const filteredNewsItem = deleteDuplicatedNews(newsItems, scrappedNewsList);
      const newsItemWithScrapped = setIsScrapped(newsItems, filteredNewsItem);
      return newsItemWithScrapped;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
      enabled: false,
    },
  );

  return {
    ...queryStates,
    isEmpty: queryStates.data?.pages.length === 0,
  };
};

export default useBingNewsFetch;
