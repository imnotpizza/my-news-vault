import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem } from '@/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteDuplicatedNews, setIsScrapped } from '@/utils';
import { queryClient } from '@/queries/queryClient';
import { useMemo } from 'react';
import { flatMap } from 'lodash-es';
import QUERY_KEY from './keys';
import jsonData from '../../mockNews.json';

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
      const newsItems = jsonData;
      // 현재 뉴스목록
      const curNewsItems = queryClient.getQueryData<InfiniteData<TNewsItem[]>>([
        QUERY_KEY.BING_NEWS_SEARCH,
        query,
      ]);
      const flattenCurNewsItems = flatMap(curNewsItems?.pages, (item) => {
        return item;
      });

      // 중복요소 제거된 뉴스목록
      const filteredNewsItem = deleteDuplicatedNews(flattenCurNewsItems, newsItems);

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

/**
 * 스크랩/언스크랩 시, 뉴스 캐시 데이터 업데이트 수행
 * @param targetNewsId: 스크랩시추가/삭제 대상 뉴스 아이디
 * @param isScrapped: true: 추가, false: 삭제
 * @param query: 뉴스 검색 쿼리 (queryKey)
 */

export const updateNewsSearchQuery = (
  targetNewsId: TNewsItem['newsId'],
  isScrapped: TNewsItem['isScrapped'],
  query: TBingNewsQuery['query'],
) => {
  queryClient.setQueryData<InfiniteData<TNewsItem[]>>(
    [QUERY_KEY.BING_NEWS_SEARCH, query],
    (oldPagesArray) => {
      if (oldPagesArray) {
        // 캐시 데이터 존재하는 경우: 캐시 업데이트
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
      }
    },
  );
};

export default useBingNewsFetch;
