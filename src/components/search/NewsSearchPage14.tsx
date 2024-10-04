'use client';

import { queryFn, useFetchBingNewsList } from '@/queries/useBingNewsFetch';
import QueryForm from '@/components/form/NewsSearchForm';
import { TBingNewsQuery } from '@/types';
import { Suspense, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NewsCardList14 from './NewsCardList14';

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

/**
 * 뉴스 리스트 출력 컴포넌트
 */
export default function NewsSearchPage14({ query }: IProps) {
  const [page, setPage] = useState(1);
  console.log('############!1111', query);
  return (
    <Container className="flex-column">
      <div className="search">
        <QueryForm query={query} />
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <NewsCardList14 query={query} page={page} />
      </Suspense>
    </Container>
  );
}