import { fetchBingNews } from '@/api/client';
import { TBingNewsFilterQueries } from '@/types';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';
import React from 'react';

const queryAtom = atom<TBingNewsFilterQueries>({
  keyword: '',
});

/**
 * jotai atom+useQuery
 */
function useFetchNewsListQuery() {
  const filterQueries = useAtomValue(queryAtom);
  const queryStates = useSuspenseQuery({
    queryKey: ['news', filterQueries],
    queryFn: async () => await fetchBingNews(filterQueries.keyword, 0),
  });

  return {
    ...queryStates,
  };
}

function useFetchNewsListState() {
  const [filterQueries, _setFilterQueries] = useAtom(queryAtom);
  const setFilterQueries = (newFilterQueries: Partial<TBingNewsFilterQueries>) => {
    _setFilterQueries({
      ...filterQueries,
      ...newFilterQueries,
    });
  };

  return {
    filterQueries,
    setFilterQueries,
  };
};

const useFetchNewsList = {
  query: useFetchNewsListQuery,
  state: useFetchNewsListState,
};

export default useFetchNewsList;
