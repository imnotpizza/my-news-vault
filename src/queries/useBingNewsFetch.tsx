import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem } from '@/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
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
    [QUERY_KEY.BING_NEWS_SEARCH],
    async ({ pageParam = 1 }) => {
      const newsItems = await fetchBingNews(query, pageParam);
      // const newsItems = JSON.parse(localStorage.getItem('mock-news-items'));
      // 현재 뉴스목록
      const curNewsItems = queryClient.getQueryData<InfiniteData<TNewsItem[]>>([
        QUERY_KEY.BING_NEWS_SEARCH,
      ]);
      const flattenCurNewsItems = flatMap(curNewsItems?.pages, (item) => {
        return item;
      });
      // console.log('scrappedNewsList', flattenCurNewsItems, newsItems);

      // 중복요소 제거된 뉴스목록
      const filteredNewsItem = deleteDuplicatedNews(flattenCurNewsItems, newsItems);
      // console.log('filteredNewsItem', flattenCurNewsItems, filteredNewsItem);

      // 스크랩 목록
      const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST]);
      // 스크랩된 뉴스는 isScrapped true로 설정
      const newsItemWithScrapped = setIsScrapped(filteredNewsItem, scrappedNewsList);
      return newsItemWithScrapped;
    },
    {
      getNextPageParam: (lastPage, pages) => {
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

export const updateNewsSearchQuery = (
  targetNewsId: TNewsItem['newsId'],
  isScrapped: TNewsItem['isScrapped'],
) => {
  queryClient.setQueryData<InfiniteData<TNewsItem[]>>(
    [QUERY_KEY.BING_NEWS_SEARCH],
    (oldPagesArray) => {
      const newPageArray = oldPagesArray.pages.map((page) => {
        return page.map((item) => {
          if (item.newsId === targetNewsId) {
            return {
              ...item,
              isScrapped,
            };
          }
          return item;
        });
      });

      return {
        pages: newPageArray,
        pageParams: oldPagesArray.pageParams,
      };
    },
  );
};

export default useBingNewsFetch;
