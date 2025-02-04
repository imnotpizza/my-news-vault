'use client';

import React, { useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsCardList';
import styled from 'styled-components';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import InfiniteScrollThresholdBox from '@/views/common/InfiniteScrollThresholdBox';
import { TBingNewsFilterQueries } from '@/types';
import NewsQueryEmptyUI from '@/views/searchStatus/NewsQueryEmptyUI';

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

interface INewsSearchPageProps {
  query: TBingNewsFilterQueries['query'];
}

const NewsSearchPage = ({ query }: INewsSearchPageProps) => {
  const isQueryEmpty = useMemo(() => query === '', [query]);
  const queryStates = useBingNewsFetch({
    query,
    enabled: !isQueryEmpty,
    maxPage: 3,
  });
  const { ref } = useInfiniteScroll({
    // @ts-ignore
    onTriggered: queryStates.fetchNextPage,
    maxPage: 3,
  });

  return (
    <Container className="flex-column">
      <div className="search">
        <QueryForm query={query} />
      </div>
      <div className="news-results flex-center">
        <QueryStateWrapper
          // 검색어 입력되지 않은경우도 false로 처리
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          // @ts-ignore
          isEmpty={queryStates.flattenData?.length === 0}
          isDisabled={isQueryEmpty}
          DisabledUI={NewsQueryEmptyUI}
        >
          {/* @ts-ignore */}
          <NewsItemList newsItems={queryStates.flattenData} />
          <InfiniteScrollThresholdBox ref={ref} isLoading={queryStates.isFetching} />
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsSearchPage;
