import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem } from '@/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteDuplicatedNews, setIsScrapped } from '@/utils';
import { queryClient } from '@/queries/queryClient';
import { useMemo } from 'react';
import { flatMap } from 'lodash-es';
import QUERY_KEY from './keys';

interface Params {
  query: TBingNewsQuery['query'];
  enabled: boolean;
  maxPage: number;
}

const useBingNewsFetch = ({ query, enabled = true, maxPage = 1 }: Params) => {
  const queryStates = useInfiniteQuery<Awaited<ReturnType<typeof fetchBingNews>>, AxiosError>(
    [QUERY_KEY.BING_NEWS_SEARCH, query],
    async ({ pageParam = 1 }) => {
      // const newsItems = await fetchBingNews(query, pageParam);
      const newsItems = JSON.parse(localStorage.getItem('mock-news-items'));
      const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST]);
      const filteredNewsItem = deleteDuplicatedNews(newsItems);
      const newsItemWithScrapped = setIsScrapped(newsItems, filteredNewsItem);
      return newsItemWithScrapped;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        console.log(pages.length);
        return pages.length === maxPage ? undefined : pages.length + 1;
      },
      enabled,
    },
  );
  // 이중배열 구조 평탄화
  const flattenData = useMemo(() => {
    return flatMap(queryStates.data?.pages, (item) => {
      return item;
    });
  }, [queryStates.data?.pages]);

  return {
    ...queryStates,
    isEmpty: queryStates.data?.pages.length === 0,
    flattenData,
  };
};

export default useBingNewsFetch;
