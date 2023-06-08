import React, { memo } from 'react';
import styled from 'styled-components';
import { TNewsItem } from '@/types';
import NewsItemCard from '../NewsCard';

interface INewsItemListProps {
  newsItems: TNewsItem[];
}

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 231px);
  grid-gap: 36px 20px;
`;

const NewsItemList = ({ newsItems }: INewsItemListProps) => {
  return (
    <Container>
      <GridContainer>
        {newsItems.map((item) => (
          <NewsItemCard key={item.newsId} item={item} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default memo(NewsItemList);
