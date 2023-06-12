import React, { useMemo } from 'react';
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

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  .search {
    width: 100%;
    height: 40px;
    margin-top: 28px;
    ${responsive.mobile} {
      height: 60px;
    }
  }
  .news-results {
    margin-top: 48px;
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
  const { ref, unobserve } = useInfiniteScroll({
    onTriggered: () => {
      // 다음 페이지 있는 경우 계속 호출, 없으면 observer 해제
      if (queryStates.hasNextPage) {
        queryStates.fetchNextPage();
      } else {
        unobserve();
      }
    },
  });

  return (
    <Container className="flex-column">
      <div className="search">
        <QueryForm query={query} />
      </div>
      <div className="news-results flex-center">
        <QueryStateWrapper
          isLoading={queryStates.isFetching}
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
