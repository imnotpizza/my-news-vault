'use client'

import QueryInput from '@/components/input/QueryInput';
import useBingNewsFetch from '@/hooks/queries/useBingNewsFetch';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .page-title {
    font-size: 2rem;
    font-weight: bold;
  }

  .search-input {
    margin-top: 1rem;
  }

  .news-list {
    margin-top: 1rem;
  }
`

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

const NewsPage = () => {
  const {data, isLoading} = useBingNewsFetch({query: '코로나', pageNum: 1});
  if(isLoading) return <div>로딩중</div>
  console.log(data);
  return (
    <Container>
      <div>
        <p className='page-title'>뉴스 검색</p>
      </div>
      <div className='search-input'>
        <QueryInput />
      </div>
      <div className='news-list'>
        <NewsContainer>
          {data && data!.map((news) => (
            <div key={news.url}>
              <img src={news.image?.thumbnail?.contentUrl} alt={news.name} />
              <div>{news.name}</div>
              <div>{news.description}</div>
            </div>
          ))}
        </NewsContainer>
      </div>
    </Container>
  );
};

export default NewsPage;
