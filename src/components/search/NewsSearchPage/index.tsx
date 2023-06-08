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
  /* justify-content: center; */
  align-items: center;

  .search {
    width: 100%;
  }

  .search-results {
    width: 100%;
    background-color: yellow;
    display: flex;
    justify-content: center;
  }

  .infinite-scroll-box {
    display: flex;
    justify-content: center;
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
