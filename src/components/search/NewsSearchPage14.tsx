'use client';

import QUERY_KEY from '@/queries/keys';
import { queryClient } from '@/queries/queryClient';
import useBingNewsFetch, { queryFn, useFetchBingNewsList } from '@/queries/useBingNewsFetch';
import { TBingNewsQuery } from '@/types';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface IProps {
  query: TBingNewsQuery['query'];
}

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  .search {
    width: 100%;
    height: 2.5rem;
    margin-top: 1.75rem;
  }
  .news-results {
    margin-top: 3rem;
    padding-bottom: 5rem;
    position: relative;
  }
`;

/** 최대 호출 가능한 페이지 수 */
const MAX_PAGE = 3;

/**
 * 뉴스 리스트 출력 컴포넌트
 */
export default function NewsSearchPage14({ query }: IProps) {
  const [page, setPage] = useState(1);
  const { flattenData } = useFetchBingNewsList({ query, curPage: page, maxPage: MAX_PAGE });

  return (
    <div>
      {flattenData.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}
