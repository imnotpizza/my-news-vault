import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import NewsItemList from '@/components/common/NewsCardList';
import React, { useContext } from 'react';
import { userInfoContext } from '@/utils/userInfoProvider';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .scrap-results {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 52px;
  }
`;

const NewsScrapPage = () => {
  const { userInfo } = useContext(userInfoContext);
  const queryStates = useScrappedNewsList({ userId: userInfo?.email });

  return (
    <Container>
      <div className='scrap-results'>
      <QueryStateWrapper
        isLoading={queryStates.isLoading}
        isError={queryStates.isError}
        isEmpty={queryStates.data?.length === 0}
      >
        <NewsItemList newsItems={queryStates.data} />
      </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsScrapPage;
