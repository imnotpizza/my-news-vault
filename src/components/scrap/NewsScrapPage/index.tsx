import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsCardList';
import React, { useContext } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';
import styled from 'styled-components';
import EmptyScrapUI from '@/views/searchStatus/EmptyScrapUI';

const Container = styled.div`
  width: 100%;
  height: 100%;

  .scrap-results {
    margin-top: 7rem;
    padding-bottom: 5rem;
    position: relative;
    & > div {
      min-height: 100%;
    }
  }
`;

const NewsScrapPage = () => {
  const { userInfo } = useContext(userInfoContext);
  const queryStates = useScrappedNewsList({ userId: userInfo?.email });

  return (
    <Container className="flex-column">
      <div className="scrap-results flex-center">
        <QueryStateWrapper
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          isEmpty={queryStates.data?.length === 0}
          EmptyUI={EmptyScrapUI}
        >
          <NewsItemList newsItems={queryStates?.data} />
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsScrapPage;
