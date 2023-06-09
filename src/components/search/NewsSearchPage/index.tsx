import React from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsCardList';
import styled from 'styled-components';
import { contentLayoutStyle } from '@/styles/responsive';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

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
`;

const SearchResultContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InfiniteScrollThresholdBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: 0;
  z-index: 0;
`;

const NewsSearchPage = ({ query }) => {
  const { ref } = useInfiniteScroll({
    onTriggered: () => {
      // alert('triggered');
    },
  });
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
      <SearchResultContainer>
        <QueryStateWrapper
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          isEmpty={queryStates.flattenData?.length === 0}
        >
          <NewsItemList newsItems={queryStates.flattenData} />
          <InfiniteScrollThresholdBox ref={ref} />
        </QueryStateWrapper>
      </SearchResultContainer>
    </Container>
  );
};

export default NewsSearchPage;
