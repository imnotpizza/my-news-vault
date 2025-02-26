import { fetchBingNews } from '@/api/client';
import { defaultNewsFilterQueries } from '@/constants';
import { mockBingNewsRes } from '@/mock';
import QUERY_KEY from '@/queries/keys';
import { queryClient } from '@/queries/queryClient';
import { TBingNewsFilterQueries, TNewsItem } from '@/types';
import {
  convertToNewsItem,
  isDuplicatedNews,
  parseDateToFormat,
  setIsScrapped,
} from '@/utils/newsItem';
import {
  InfiniteData,
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';
import { flatMap, flatten } from 'lodash-es';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

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
export const getSearchQueryCache = (searchQuery: TBingNewsFilterQueries['keyword']) => {
  const res = queryClient.getQueryData<InfiniteData<TNewsItem[]>>([
    QUERY_KEY.BING_NEWS_SEARCH,
    searchQuery,
  ]);

  return flatMap(res?.pages, (item) => {
    return item;
  });
};

/** 검색어 query atom */
const queryAtom = atom<TBingNewsFilterQueries>({
  ...defaultNewsFilterQueries,
});

/**
 * bing news fetch api hook
 */
function useBingNewsFetchQuery({ maxPage = 1 }: Params) {
  const filterQueries = useAtomValue(queryAtom);

  const queryStates = useSuspenseInfiniteQuery({
    queryKey: [QUERY_KEY.BING_NEWS_SEARCH, filterQueries],
    queryFn: async ({ pageParam = 1 }) => {
      const { keyword } = filterQueries;
      // api 호출
      const fetchResult = await fetchBingNews(keyword, pageParam);
      // 스크랩 목록
      const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST]);
      // 현재 뉴스데이터
      const curNewsItems = getSearchQueryCache(keyword);
      // newsItem형식으로 변환
      const newsItems = fetchResult.value.map((item) => {
        const isScrapped = setIsScrapped(item.name, scrappedNewsList);
        const datePublished = parseDateToFormat(item.datePublished);
        const isDuplicated = isDuplicatedNews(item.name, curNewsItems);
        if (!isDuplicated) {
          return convertToNewsItem(item, datePublished, keyword, isScrapped);
        } else {
          return undefined;
        }
      });

      const filteredNewsItems = newsItems.filter((item) => item !== undefined);
      return filteredNewsItems;
    },
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
  searchQuery: TBingNewsFilterQueries['keyword'],
) {
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
}

const useBingNewsFetch = {
  query: useBingNewsFetchQuery,
  state: useBingNewsFetchState,
};

export default useBingNewsFetch;
// TODO: 추후 제거
// import { fetchBingNews } from '@/api/client';
// import { TBingNewsFilterQueries, TNewsItem } from '@/types';
// import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
// import { AxiosError } from 'axios';
// import {
//   convertToNewsItem,
//   isDuplicatedNews,
//   parseDateToFormat,
//   setIsScrapped,
// } from '@/utils/newsItem';
// import { queryClient } from '@/queries/queryClient';
// import { useMemo } from 'react';
// import { flatMap } from 'lodash-es';
// import QUERY_KEY from '../keys';

// interface Params {
//   query: TBingNewsFilterQueries['keyword'];
//   enabled: boolean;
//   maxPage: number;
// }

// /**
//  * 뉴스 검색 쿼리 캐시 데이터 조회
//  * @param searchQuery: 뉴스 검색 쿼리 (queryKey)
//  * @returns 캐시 데이터
//  */
// export const getSearchQueryCache = (searchQuery: TBingNewsFilterQueries['keyword']) => {
//   const res = queryClient.getQueryData<InfiniteData<TNewsItem[]>>([
//     QUERY_KEY.BING_NEWS_SEARCH,
//     searchQuery,
//   ]);

//   return flatMap(res?.pages, (item) => {
//     return item;
//   });
// };

// /**
//  * 뉴스 검색 쿼리
//  * @param query: 검색어
//  * @param enabled: 쿼리 활성화 여부
//  * @param maxPage: 호출할 최대 페이지
//  * @returns queryStates
//  *
//  * 1. api 호출
//  * 2. 결과 데이터 map으로 돌리면서
//  * 2. 1. 중복요소 걸러냄
//  * 3. 2. isScrapped초기화
//  * 4. 2. dateformat 변경
//  */
// const useBingNewsFetch = ({ query, enabled = true, maxPage = 1 }: Params) => {
//   const queryStates = useInfiniteQuery(
//     {
//       queryKey: [QUERY_KEY.BING_NEWS_SEARCH, query],
//       enabled,
//       queryFn: async ({ pageParam = 1 }) => {
//         // api 호출
//         const fetchResult = await fetchBingNews(query, pageParam);
//         // 스크랩 목록
//         const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>([QUERY_KEY.SCRAP_LIST]);
//         // 현재 뉴스데이터
//         const curNewsItems = getSearchQueryCache(query);
//         // newsItem형식으로 변환
//         const newsItems = fetchResult.value.map((item) => {
//           const isScrapped = setIsScrapped(item.name, scrappedNewsList);
//           const datePublished = parseDateToFormat(item.datePublished);
//           const isDuplicated = isDuplicatedNews(item.name, curNewsItems);
//           if (!isDuplicated) {
//             return convertToNewsItem(item, datePublished, query, isScrapped);
//           } else {
//             return undefined;
//           }
//         });

//         const filteredNewsItems = newsItems.filter((item) => item !== undefined);
//         return filteredNewsItems;
//       },
//       getNextPageParam: (lastPage, pages) => {
//         return pages.length === maxPage ? undefined : pages.length + 1;
//       },
//       initialPageParam: 1,
//     },
//   );
//   // 이중배열 구조 평탄화
//   const flattenData = useMemo(() => {
//     return flatMap(queryStates.data?.pages, (item) => {
//       return item;
//     });
//   }, [queryStates.data?.pages]);

//   return {
//     ...queryStates,
//     isEmpty: queryStates.data?.pages.length === 0,
//     flattenData,
//   };
// };

// /**
//  * 스크랩/언스크랩 시, 뉴스 캐시 데이터 업데이트 수행
//  * @param targetNewsId: 스크랩시추가/삭제 대상 뉴스 아이디
//  * @param isScrapped: true: 추가, false: 삭제
//  * @param query: queryKey = 검색어
//  */
// export const updateNewsSearchQuery = (
//   targetNewsId: TNewsItem['newsId'],
//   isScrapped: TNewsItem['isScrapped'],
//   searchQuery: TBingNewsFilterQueries['keyword'],
// ) => {
//   queryClient.setQueryData<InfiniteData<TNewsItem[]>>(
//     [QUERY_KEY.BING_NEWS_SEARCH, searchQuery],
//     (oldPagesArray) => {
//       if (oldPagesArray) {
//         // 캐시 데이터 존재하는 경우: 캐시 업데이트
//         const newPageArray = oldPagesArray.pages.map((page) => {
//           return page.map((item) => {
//             if (item.newsId === targetNewsId) {
//               return {
//                 ...item,
//                 isScrapped,
//               };
//             }
//             return item;
//           });
//         });

//         return {
//           pages: newPageArray,
//           pageParams: oldPagesArray.pageParams,
//         };
//       }
//     },
//   );
// };

// export default useBingNewsFetch;
