'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import QueryInput from '@/components/input/QueryInput';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
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
  }

  .search-input {
    height: 200px;
  }

  .news-list {
    min-width: 100%;
    height: auto;
    width: 100%;
    height: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const NewsPage = () => {
  const [query, setQuery] = React.useState('');
  const [pageNum, setPageNum] = React.useState(1);

  const queryStates = useBingNewsFetch({ query, pageNum });
  const { data } = queryStates;

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 검색</p>
      </div>
      <div className="search-input">
        <QueryInput query={query} setQuery={setQuery}/>
      </div>
      <div className="news-list">
        <QueryStateWrapper queryStates={queryStates}>
          <GridContainer>
            {data?.map((news) => (
              <div key={news.url}>
                {/* TODO: 이미지썸네일 없는경우 처리 */}
                <img src={news.image?.thumbnail?.contentUrl} alt={news.name} />
                <div>{news.name}</div>
                <div>{news.description}</div>
              </div>
            ))}
          </GridContainer>
        </QueryStateWrapper>
      </div>
    </Container>
  );
};

export default NewsPage;
