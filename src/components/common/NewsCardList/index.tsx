import React, { memo } from 'react';
import styled from 'styled-components';
import { TNewsItem } from '@/types';
import { contentLayoutStyle, responsive } from '@/styles/responsive';
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
  ${responsive.mobile} {
    width: 100%;
    margin: 0 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 1050px;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 20px;
  background-color: green;
  ${responsive.tablet} {
    grid-template-columns: repeat(3, 1fr);
    width: 750px;
  }
  ${responsive.mobile} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 30px;
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
