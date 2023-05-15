'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import NewsItemView from '@/views/news/NewsItemView';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import { userInfoContext } from '@/utils/userInfoProvider';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    height: 10%;
  }

  .search-input {
    height: 10%;
  }

  .news-list {
    min-width: 100%;
    height: auto;
    width: 100%;
    height: 80%;
  }
`;

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  background-color: blue;
`;

const NewsScrapPage = () => {
  const queryStates = useScrappedNewsList();
  const { data } = queryStates;

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 스크랩 목록</p>
      </div>
      <div className="news-list">
        <QueryStateWrapper queryStates={queryStates}>
          <GridContainer>
            {data && data.map((item) => <NewsItemView key={item.newsId} item={item} />)}
          </GridContainer>
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsScrapPage;
