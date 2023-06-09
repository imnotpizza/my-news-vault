import React, { memo } from 'react';
import styled from 'styled-components';
import { TNewsItem } from '@/types';
import { responsive } from '@/styles/responsive';
import NewsCard from '../NewsCard';

interface INewsCardListProps {
  newsItems: TNewsItem[];
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  margin: 0 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 36px 20px;
  width: 100%;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);

  ${responsive.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${responsive.mobile} {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

const NewsCardList = ({ newsItems }: INewsCardListProps) => {
  return (
    <Container>
      <GridContainer>
        {newsItems?.map((item) => (
          <NewsCard key={item.newsId} item={item} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default memo(NewsCardList);
