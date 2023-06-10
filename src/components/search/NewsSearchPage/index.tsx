import React from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryForm from '@/components/form/NewsSearchForm';
import NewsItemList from '@/components/common/NewsCardList';
import styled from 'styled-components';
import { responsive } from '@/styles/responsive';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import InfiniteScrollThresholdBox from '@/views/common/InfiniteScrollThresholdBox';

const Container = styled.div`
  width: 100%;
  height: 100%;
  .search {
    width: 100%;
    height: 40px;
    margin-top: 28px;
    ${responsive.mobile} {
      height: 60px;
    }
  }
`;

const SearchResultContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 48px;
  position: relative;
  ${responsive.mobile} {
    margin-top: 30px;
  }
`;

const NewsSearchPage = ({ query }) => {
  const queryStates = useBingNewsFetch({
    query,
    enabled: true,
    maxPage: 3,
  });
  const { ref } = useInfiniteScroll({
    onTriggered: () => {
      // alert('triggered');
      if (queryStates.hasNextPage) {
        queryStates.fetchNextPage();
      }
    },
  });

  return (
    <Container className='flex-column'>
      <div className="search">
        <QueryForm query={query} />
      </div>
      <SearchResultContainer className='flex-center'>
        <QueryStateWrapper
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          isEmpty={queryStates.flattenData?.length === 0}
        >
          <NewsItemList newsItems={queryStates.flattenData} />
          <InfiniteScrollThresholdBox ref={ref} isLoading={queryStates.isLoading} />
        </QueryStateWrapper>
      </SearchResultContainer>
    </Container>
  );
};

export default NewsSearchPage;
