import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsCardList';
import React, { useContext } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';
import styled from 'styled-components';
import EmptyScrapUI from '@/views/searchStatus/EmptyScrapUI';
import ScrapCountView from '@/views/newsScrap/ScrapCountView';

const Container = styled.div`
  width: 100%;
  height: 100%;

  .search {
    width: 100%;
    height: 40px;
    margin-top: 48px;
  }

  .scrap-results {
    width: 100%;
    margin-top: 52px;
  }
`;

const NewsScrapPage = () => {
  const { userInfo } = useContext(userInfoContext);
  const queryStates = useScrappedNewsList({ userId: userInfo?.email });

  return (
    <Container className="flex-column align-center">
      <div className="search">
        <ScrapCountView>{queryStates?.data?.length}</ScrapCountView>
      </div>
      <div className="scrap-results className='flex-column align-center'">
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
