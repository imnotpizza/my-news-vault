import { useInfiniteQuery } from '@tanstack/react-query';

export const scrappedNewsListQueryKey = 'ScrappedNewsList';

// firebase 연동
const useScrappedNewsList = () => {
  const queryStates = useInfiniteQuery<any>(
    [scrappedNewsListQueryKey],
    ({ pageParam = 1 }) => {

    },
    {
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
    },
  );

  return queryStates;
};

export default useScrappedNewsList;
