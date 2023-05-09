'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryInput from '@/components/input/QueryInput';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import NewsItemView from '@/views/news/NewsItemView';
import React from 'react';
import styled from 'styled-components';

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
  max-height: 100%;
`;

const NewsPage = () => {
  const [query, setQuery] = React.useState('');
  const [pageNum, setPageNum] = React.useState(1);

  const queryStates = useBingNewsFetch({ query, pageNum });
  const { data, fetchNextPage } = queryStates;

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 검색</p>
      </div>
      <div className="search-input">
        <QueryInput query={query} setQuery={setQuery} />
      </div>
      <div className="news-list">
        <QueryStateWrapper queryStates={queryStates}>
          <GridContainer>
            {data?.pages.map((page) => {
              return page.map((newsItem) => <NewsItemView key={newsItem.id} item={newsItem} />);
            })}
          </GridContainer>
        </QueryStateWrapper>
        <button
          onClick={() => {
            fetchNextPage();
          }}
        >
          추가호출
        </button>
      </div>
    </Container>
  );
};

export default NewsPage;
