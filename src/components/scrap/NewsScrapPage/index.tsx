import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsCardList';
import React, { useContext } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';
import styled from 'styled-components';
import EmptyScrapUI from '@/views/searchStatus/EmptyScrapUI';
import ScrapCountView from '@/views/newsScrap/ScrapCountView';
import { responsive } from '@/styles/responsive';

const Container = styled.div`
  width: 100%;
  height: 100%;

  .scrap-count {
    width: 100%;
    height: 2.5rem;
    margin-top: 1.75rem;
  }

  .scrap-results {
    margin-top: 3rem;
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
