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
    height: 2rem;
    width: 64.63rem;
    margin: 0 auto;
    margin-top: 1.75rem !important;
    color: ${(p) => p.theme.Navy.Navy_80};
    ${responsive.tablet} {
      width: 46.88rem;
      margin: 0 auto;
    }
    ${responsive.mobile} {
      width: 90%;
      height: 1rem;
      box-sizing: border-box;
      margin: 0 1.25rem;
    }
  }

  .scrap-results {
    margin-top: 2rem;
    padding-bottom: 5rem;
    position: relative;
    & > div {
      min-height: 100%;
    }
  }
`;

const NewsScrapPage = () => {
  const { userInfo } = useContext(userInfoContext);
  // const queryStates = useScrappedNewsList({ userId: userInfo?.email });

  return (
    <Container className="flex-column">
      {/* <div className="scrap-count flex-justify-start">
        <ScrapCountView>{queryStates.data?.length}</ScrapCountView>
      </div>
      <div className="scrap-results flex-center">
        <QueryStateWrapper
          isLoading={queryStates.isLoading}
          isError={queryStates.isError}
          isEmpty={queryStates.data?.length === 0}
          EmptyUI={EmptyScrapUI}
        >
          <NewsItemList newsItems={queryStates?.data} />
        </QueryStateWrapper>
      </div> */}
    </Container>
  );
};

export default NewsScrapPage;
