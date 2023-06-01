import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsCategory, TUserInfo } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const bingNewsFetchQueryKey = 'BingNewsFetch';

interface Params {
  query: TBingNewsQuery['query'];
  category: TNewsCategory;
  enabled: boolean;
  userId: TUserInfo['email'];
}

const useBingNewsFetch = ({ query, category, enabled = true, userId }: Params) => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [bingNewsFetchQueryKey, query],
    async ({ pageParam = 1 }) => {
      const newsItems = await fetchBingNews(query, pageParam, category);
      // const scrappedNewsList = await fetchScrappedNewsList(userId);
      // const newsItemWithScrapped = setIsScrapped(newsItems, scrappedNewsList);
      return newsItems;
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
