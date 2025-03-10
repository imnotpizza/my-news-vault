import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

// react query 공통 옵션
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {

    }
  }),
  mutationCache: new MutationCache({
    onError: (err) => {
      
    }
  }),
});
queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false,
    staleTime: 0,
  },
});
