import React from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsCardList';
import InfiniteScrollWrapper from '@/components/common/InfiniteScrollWrapper';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .search {
    width: 100%;
    height: 40px;
    margin-top: 48px;
  }

  .search-results {
    width: 100%;
    margin-top: 52px;
    min-height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .infinite-scroll-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

const NewsSearchPage = ({ query }) => {
  const queryStates = useBingNewsFetch({
    query,
    enabled: true,
    maxPage: 3,
  });

  return (
    <Container>
      <div className="search">
        <QueryForm query={query} />
      </div>
      <div className="search-results">
        <QueryStateWrapper
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          isEmpty={queryStates.flattenData.length === 0}
        >
          <InfiniteScrollWrapper onTriggered={queryStates.fetchNextPage}>
            <NewsItemList newsItems={queryStates.flattenData} />
          </InfiniteScrollWrapper>
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsSearchPage;
