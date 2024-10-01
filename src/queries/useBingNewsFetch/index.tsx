import { fetchBingNews } from '@/api/client';
import { TBingNewsQuery, TNewsItem } from '@/types';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  convertToNewsItem,
  isDuplicatedNews,
  parseDateToFormat,
  setIsScrapped,
} from '@/utils/newsItem';
import { queryClient } from '@/queries/queryClient';
import { useMemo } from 'react';
import { flatMap } from 'lodash-es';
import QUERY_KEY from '@/queries/keys';
import { queryClient } from '../queryClient';

export interface IUseBingNewsFetchParams {
  query: TBingNewsQuery['query'];
  enabled: boolean;
  maxPage: number;
}

const queryFn = async ({ pageParam = 1 }) => {
  // api 호출
  const fetchResult = await fetchBingNews(query, pageParam);
  // 스크랩 목록
  const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST]);
  // 현재 뉴스데이터
  const curNewsItems = getSearchQueryCache(query);
  // newsItem형식으로 변환
  const newsItems = fetchResult.value.map((item) => {
    const isScrapped = setIsScrapped(item.name, scrappedNewsList);
    const datePublished = parseDateToFormat(item.datePublished);
    const isDuplicated = isDuplicatedNews(item.name, curNewsItems);
    if (!isDuplicated) {
      return convertToNewsItem(item, datePublished, query, isScrapped);
    } else {
      return undefined;
    }
  });

  const filteredNewsItems = newsItems.filter((item) => item !== undefined);
  return filteredNewsItems;
};

/**
 * 뉴스 검색 쿼리 캐시 데이터 조회
 * @param searchQuery: 뉴스 검색 쿼리 (queryKey)
 * @returns 캐시 데이터
 */
export const getSearchQueryCache = (searchQuery: TBingNewsQuery['query']) => {
  const res = queryClient.getQueryData<InfiniteData<TNewsItem[]>>([
    QUERY_KEY.BING_NEWS_SEARCH,
    searchQuery,
  ]);

  return flatMap(res?.pages, (item) => {
    return item;
  });
};

const prefetchBingNewsFetch = async (query) => {
  await queryClient.prefetchInfiniteQuery({
    queryKey: [QUERY_KEY.BING_NEWS_SEARCH, query],
    queryFn,
    initialPageParam: 1,
  });
};

/**
 * 뉴스 검색 쿼리
 * @param query: 검색어
 * @param enabled: 쿼리 활성화 여부
 * @param maxPage: 호출할 최대 페이지
 * @returns queryStates
 *
 * 1. api 호출
 * 2. 결과 데이터 map으로 돌리면서
 * 2. 1. 중복요소 걸러냄
 * 3. 2. isScrapped초기화
 * 4. 2. dateformat 변경
 */
const useBingNewsFetch = ({ query, enabled = true, maxPage = 1 }: IUseBingNewsFetchParams) => {
  const queryStates = useInfiniteQuery({
    queryKey: [QUERY_KEY.BING_NEWS_SEARCH, query],
    queryFn,
    getNextPageParam: (lastPage, pages) => {
      return pages.length === maxPage ? undefined : pages.length + 1;
    },
  });
  // 이중배열 구조 평탄화
  const flattenData = useMemo(() => {
    return flatMap(queryStates.data?.pages, (item) => {
      return item;
    });
  }, [queryStates.data?.pages]);

  return {
    ...queryStates,
    isEmpty: flattenData.length === 0,
    flattenData,
  };
};

/**
 * 스크랩/언스크랩 시, 뉴스 캐시 데이터 업데이트 수행
 * @param targetNewsId: 스크랩시추가/삭제 대상 뉴스 아이디
 * @param isScrapped: true: 추가, false: 삭제
 * @param query: queryKey = 검색어
 */
export const updateNewsSearchQuery = (
  targetNewsId: TNewsItem['newsId'],
  isScrapped: TNewsItem['isScrapped'],
  searchQuery: TBingNewsQuery['query'],
) => {
  queryClient.setQueryData<InfiniteData<TNewsItem[]>>(
    [QUERY_KEY.BING_NEWS_SEARCH, searchQuery],
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
