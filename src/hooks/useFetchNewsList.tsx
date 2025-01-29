import { fetchBingNews } from '@/api/client';
import { TBingNewsFilterQueries } from '@/types';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';

const queryFn = async (filterQueries: TBingNewsFilterQueries) => {
  const res = await fetchBingNews(filterQueries.keyword, 0);
  return res.data;
};

const queryAtom = atom<TBingNewsFilterQueries>({
  keyword: '',
});

/**
 * jotai atom+useQuery
 */
function useFetchNewsListQuery() {
  const [filterQueries, setFilterQueries] = useAtom(queryAtom);
  const queryStates = useSuspenseQuery({
    queryKey: ['news', filterQueries],
    queryFn: () => queryFn(filterQueries),
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
