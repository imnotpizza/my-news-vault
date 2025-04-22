import { fetchScrappedList } from '@/api/client';
import { TBingNewsFilterQueries, TUserInfo } from '@/types';
import { fetchNewsListAndConvert } from '@/utils/newsItem';

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
export const queryOptionsFactory = {
  // news api
  news: {
    bing: {
      list: (filterQueries: TBingNewsFilterQueries) => ({
        queryKey: [QK_PUBLIC, QK_NEWS, QK_BING, 'LIST', { ...filterQueries }],

        queryFn: ({ pageParam = 1 }) => fetchNewsListAndConvert(filterQueries, pageParam),
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
};
