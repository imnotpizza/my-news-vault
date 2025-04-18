import { fetchBingNews, fetchScrappedList } from '@/api/client';
import { TBingNewsFilterQueries, TNewsItem, TUserInfo } from '@/types';
import APIError from './APIError';
import ERRCODE from '@/constants/errCode';
import { queryClient } from '@/queries/queryClient';
import { SCRAP_QUERY_KEYS } from '@/queries/useScrappedNewsList';
import { getSearchQueryCache } from '@/queries/useBingNewsFetch';
import {
  convertToNewsItem,
  isDuplicatedNews,
  parseDateToFormat,
  setIsScrapped,
} from './newsItem';

// private queries (인증없이 호출 불가F)
export const QK_PRIVATE = 'PRIVATE';
// public queries (인증없이도 호출가능)
export const QK_PUBLIC = 'PUBLIC';

/** query key: 뉴스 api */
export const QK_NEWS = 'NEWS';
/** query key: bing news */
export const QK_BING = 'BING';
/** query key: scrap api */
export const QK_SCRAP = 'SCRAP';

/**
 * queryKey, queryFn을 이용하여 쿼리 옵션을 생성하는 팩토리 함수
 * useQuery Hook, queryClient fn에 다음 옵션 넣어 사용
 */
const queryOptionsFactory = () => ({
  // news api
  news: {
    bing: {
      list: (filterQueries: TBingNewsFilterQueries) => ({
        queryKey: [QK_PUBLIC, QK_NEWS, QK_BING, 'LIST', { ...filterQueries }],
        // FIXME: 나중에 api결과 처리하는 부분 어디에 둘지 결정 필요(전부 애매함)
        queryFn: async ({ pageParam = 1 }) => {
          const { keyword } = filterQueries;
          // api 호출
          const fetchResult = await fetchBingNews(keyword, pageParam);

          // 검색결과 없으면 not found 에러
          if (fetchResult.value.length === 0) {
            throw new APIError(ERRCODE.NEWS_FETCH_NOT_FOUND);
          }
          // 스크랩 목록
          const scrappedNewsList = queryClient.getQueryData<TNewsItem[]>(
            SCRAP_QUERY_KEYS.SCRAP.LIST.queryKey,
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
        },
      }),
    },
  },
  // scrap api
  scrap: {
    list: (userId: TUserInfo['email']) => ({
      queryKey: [QK_PRIVATE, QK_SCRAP, 'LIST', userId],
      queryFn: () => fetchScrappedList(userId),
    }),
  },
});
