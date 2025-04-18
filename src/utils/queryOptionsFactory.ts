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

/**
 * queryKey, queryFn을 이용하여 쿼리 옵션을 생성하는 팩토리 함수
 * useQuery Hook, queryClient fn에 다음 옵션 넣어 사용
 */
const queryOptionsFactory = () => ({
  // news api
  news: {
    bing: {
      list: (filterQueries: TBingNewsFilterQueries) => ({
        queryKey: [{ ...filterQueries }],
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
    list: {
      queryKey: null,
      queryFn: (userId: TUserInfo['email']) => fetchScrappedList(userId),
    },
  },
});
