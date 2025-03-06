import { fetchScrappedList } from '@/api/client';
import { TBingNewsFilterQueries, TUserInfo } from '@/types';
import { createQueryKeyStore } from '@lukemorales/query-key-factory';

/**
 * bing new query key
 */
export const bingNewsQueryKeys = createQueryKeyStore({
  search: {
    list: (filterQueries: TBingNewsFilterQueries) => ({
      queryKey: ['BING_NEWS_SEARCH', { ...filterQueries }],
    }),
  },
});

/**
 * scrap news query key
 */
export const scrapNewsQueryKeys = createQueryKeyStore({
  scrap: null,
  unscrap: null,
  list: {
    all: {
      queryKey: ['SCRAP_LIST'],
      queryFn: (userId: TUserInfo['email']) => fetchScrappedList(userId),
    },
  },
  users: {
    all: null,
    detail: (userId: string) => ({
      queryKey: [userId],
      queryFn: () => userId,
    }),
  },
});
