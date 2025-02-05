import { fetchBingNews } from '@/api/client';
import { defaultNewsFilterQueries } from '@/constants';
import { mockBingNewsRes } from '@/mock';
import { TBingNewsFilterQueries } from '@/types';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const queryFn = async (filterQueries: TBingNewsFilterQueries) => {
  const res = await fetchBingNews(filterQueries.keyword, 0);
  return res;
};

const queryAtom = atom<TBingNewsFilterQueries>({
  ...defaultNewsFilterQueries,
});

/**
 * jotai atom+useQuery
 */
function useFetchNewsListQuery() {
  const filterQueries = useAtomValue(queryAtom);

  const queryStates = useSuspenseQuery({
    queryKey: ['news', filterQueries],
    queryFn: () => queryFn(filterQueries),
  });

  return {
    ...queryStates,
  };
}

function useFetchNewsListState() {
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

const useFetchNewsList = {
  query: useFetchNewsListQuery,
  state: useFetchNewsListState,
};

export default useFetchNewsList;
