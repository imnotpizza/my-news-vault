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
    background-color: orange;
    height: 100%;
  }
`;

const Loading = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  display: flex;
  
`;

const NewsPage = () => {
  const queryStates = useBingNewsFetch({ query: '코로나', pageNum: 1 });
  const { isLoading, data } = queryStates;

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 검색</p>
      </div>
      <div className="search-input">
        <QueryInput />
      </div>
      <div className="news-list">
        <QueryStateWrapper
          queryStates={queryStates}
          LoadingUI={<Loading>로딩중</Loading>}
          ErrorUI={<div>에러</div>}
          EmptyUI={<div>데이터가 없습니다.</div>}
        >
          <GridContainer>
            {data &&
              data!.map((news) => (
                <div key={news.url}>
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
