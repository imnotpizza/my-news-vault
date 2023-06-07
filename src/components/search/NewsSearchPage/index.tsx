import React from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsItemList';
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
    margin-top: 300px;
  }
`;

const NewsSearchPage = ({ query }) => {
  const queryStates = useBingNewsFetch({
    query,
    enabled: query !== '',
    maxPage: 3,
  });

  return (
    <Container>
      <div className="search">
        <QueryForm query={query} />
      </div>
      <div className="search-results">
        <QueryStateWrapper queryStates={queryStates}>
          <InfiniteScrollWrapper onTriggered={queryStates.fetchNextPage}>
            <NewsItemList newsItems={queryStates.flattenData} />
          </InfiniteScrollWrapper>
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsSearchPage;
