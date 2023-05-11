import { INewsItem } from '@/types';
import React from 'react';
import styled from 'styled-components';
import NewsThumbnailView from '../NewsThumbnailView';

const Container = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .news-title {
    font-size: 20px;
  }

  .news-desc {
    font-size: 15px;
    margin: 15px 0;
  }
`;

const NewsItemView = ({ item }: { item: INewsItem }) => {
  const onClickVisit = () => {
    window.open(item.thumbnail);
  };

  return (
    <Container>
      <p className="news-title">{item.title}</p>
      <NewsThumbnailView src={item.thumbnail} alt={`${item.title} thumbnail`} />
      <p className="news-desc">{item.description}</p>
      <button onClick={onClickVisit}>방문하기</button>
    </Container>
  );
};

export default NewsItemView;
