'use client';

import { fetchBingNews } from '@/api/client';
import { defaultNewsFilterQueries } from '@/constants';
import ERRCODE from '@/constants/errCode';
import { queryClient } from '@/queries/queryClient';
import { TBingNewsFilterQueries, TNewsItem } from '@/types';
import APIError from '@/utils/APIError';
import {
  convertToNewsItem,
  isDuplicatedNews,
  parseDateToFormat,
  setIsScrapped,
} from '@/utils/newsItem';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';
import { flatMap } from 'lodash-es';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { queryOptionsFactory } from '@/utils/queryOptionsFactory';

interface Params {
  query: TBingNewsFilterQueries['keyword'];
  enabled: boolean;
  maxPage: number;
}

/**
 * 뉴스 검색 쿼리 캐시 데이터 조회
 * @param searchQuery: 뉴스 검색 쿼리 (queryKey)
 * @returns 캐시 데이터
 */
export const getSearchQueryCache = (filterQueries: TBingNewsFilterQueries) => {
  const res = queryClient.getQueryData<InfiniteData<TNewsItem[]>>(
    queryOptionsFactory.news.bing.list(filterQueries).queryKey,
  );

  return flatMap(res?.pages, (item) => {
    return item;
  });
};

/** 검색어 query atom */
export const queryAtom = atom<TBingNewsFilterQueries>({
  ...defaultNewsFilterQueries,
});

/**
 * bing news fetch api hook
 */
function useBingNewsFetchQuery({ maxPage = 1 }: Params) {
  const filterQueries = useAtomValue(queryAtom);

  const queryStates = useSuspenseInfiniteQuery({
    ...queryOptionsFactory.news.bing.list(filterQueries),
    getNextPageParam: (lastPage, pages) => {
      return pages.length === maxPage ? undefined : pages.length + 1;
    },
    initialPageParam: 1,
  });

  // 이중배열 구조 평탄화
  const flattenData = useMemo(() => {
    return flatMap(queryStates.data?.pages, (item) => {
      return item;
    });
  }, [queryStates.data?.pages]);

  return {
    ...queryStates,
    flattenData,
  };
}

/**
 * 뉴스 검색 상태 hook
 * @return
    - filterQueries: 검색어 상태,
    - setFilterQueries: 검색어 상태 변경 함수
 * @example
 * ```
 * const { filterQueries, setFilterQueries } = useBingNewsFetchState();
 * ```
 */
function useBingNewsFetchState() {
  const searchParams = useSearchParams();

  const [filterQueries, _setFilterQueries] = useAtom(queryAtom);
  const setFilterQueries = (newFilterQueries: Partial<TBingNewsFilterQueries>) => {
    _setFilterQueries({
      ...filterQueries,
      ...newFilterQueries,
    });
  };

  /**
   * 쿼리 파라미터 변경에 따라 form 상태 초기화
   * TODO: jotai 사용하여초기화하는게 맞는지 확인: 검색 상태는 searchParams에 의해 결정되는 중...
   * */
  useEffect(() => {
    const keyword = searchParams.get('keyword');
    setFilterQueries({ ...filterQueries, keyword });
  }, [searchParams]);

  return {
    filterQueries,
    setFilterQueries,
  };
}

/**
 * 스크랩/언스크랩 시, 뉴스 캐시 데이터 업데이트 수행
 * @param targetNewsId: 스크랩시추가/삭제 대상 뉴스 아이디
 * @param isScrapped: true: 추가, false: 삭제
 * @param query: queryKey = 검색어
 */
export function updateNewsSearchQuery(
  targetNewsId: TNewsItem['newsId'],
  isScrapped: TNewsItem['isScrapped'],
  filterQueries: TBingNewsFilterQueries,
) {
  queryClient.setQueryData<InfiniteData<TNewsItem[]>>(
    queryOptionsFactory.news.bing.list(filterQueries).queryKey,
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
}

// FIXME: 나중에 api결과 처리하는 부분 어디에 둘지 결정 필요(전부 애매함)
export async function fetchNewsListAndConvert(
  filterQueries: TBingNewsFilterQueries,
  pageParam: number,
) {
  const { keyword } = filterQueries;
  // api 호출
  const fetchResult = await fetchBingNews(keyword, pageParam);

  // 검색결과 없으면 not found 에러
  if (fetchResult.value.length === 0) {
    throw new APIError(ERRCODE.NEWS_FETCH_NOT_FOUND);
  }
  // 스크랩 목록
  const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>(
    queryOptionsFactory.scrap.list('dd').queryKey,
  );
  // 현재 뉴스데이터
  const curNewsItems = getSearchQueryCache(filterQueries);
  // newsItem형식으로 변환
  const convertedNewsList = fetchResult.value
    .map((item) => {
      const isScrapped = setIsScrapped(item.name, scrappedNewsList);
      const datePublished = parseDateToFormat(item.datePublished);
      // 중복된 뉴스는 제거(중복된 뉴스 들어오는 경우 있음)
      const isDuplicated = isDuplicatedNews(item.name, curNewsItems);
      if (!isDuplicated) {
        return convertToNewsItem(item, datePublished, keyword, isScrapped);
      } else {
        return undefined;
      }
    })
    .filter(Boolean);
  return convertedNewsList;
}

const useBingNewsFetch = {
  query: useBingNewsFetchQuery,
  state: useBingNewsFetchState,
};

export default useBingNewsFetch;
