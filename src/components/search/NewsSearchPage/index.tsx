import React, { useEffect, useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsCardList';
import styled from 'styled-components';
import { responsive } from '@/styles/responsive';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import InfiniteScrollThresholdBox from '@/views/common/InfiniteScrollThresholdBox';
import { TBingNewsQuery } from '@/types';
import NewsQueryEmptyUI from '@/views/searchStatus/NewsQueryEmptyUI';
import DefaultLoadingUI from '@/views/searchStatus/DefaultLoadingUI';
import DefaultErrorUI from '@/views/searchStatus/DefaultErrorUI';

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
  }
`;

interface INewsSearchPageProps {
  query: TBingNewsQuery['query'];
}

const NewsSearchPage = ({ query }: INewsSearchPageProps) => {
  const isQueryEmpty = useMemo(() => query === '', [query]);
  const queryStates = useBingNewsFetch({
    query,
    enabled: !isQueryEmpty,
    maxPage: 3,
  });
  const { ref, unobserve, isIntersecting } = useInfiniteScroll({});

  useEffect(() => {
    if (queryStates.hasNextPage && isIntersecting) {
      queryStates.fetchNextPage();
    } else if (!queryStates.hasNextPage && isIntersecting) {
      unobserve();
    }
  }, [isIntersecting, queryStates.hasNextPage]);

  console.log(queryStates.isLoading,  !isQueryEmpty)

  return (
    <Container className="flex-column">
      <div className="search">
        <QueryForm query={query} />
      </div>
      <div className="news-results flex-center">
        <QueryStateWrapper
          // 검색어 입력되지 않은경우도 
          isLoading={queryStates.isLoading && !isQueryEmpty}
          isError={queryStates.isError}
          isEmpty={queryStates.flattenData?.length === 0}
          isDisabled={isQueryEmpty}
          DisabledUI={NewsQueryEmptyUI}
        >
          <NewsItemList newsItems={queryStates.flattenData} />
          <InfiniteScrollThresholdBox ref={ref} isLoading={queryStates.isLoading} />
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsSearchPage;
