'use client';

import QueryInput from '@/components/input/QueryInput';
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import NewsItemList from '../NewsItemList';

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

const NewsSearch = ({ category }) => {
  const [query, setQuery] = React.useState('');

  return (
    <Container>
      <div>
        <p className="page-title">뉴스 검색</p>
      </div>
      <div className="search-input">
        <QueryInput setQuery={setQuery} />
      </div>
      <div className="news-list">
        <NewsItemList category={category} query={query} />
      </div>
    </Container>
  );
};

export default memo(NewsSearch);
