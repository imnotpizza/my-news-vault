import { QueryClient } from '@tanstack/react-query';

// query 캐시 유지기간: 10분
const QUERY_CACHE_TIME = Infinity;

// react query 공통 옵션
export const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false,
    cacheTime: QUERY_CACHE_TIME,
    staleTime: QUERY_CACHE_TIME,
  },
});
