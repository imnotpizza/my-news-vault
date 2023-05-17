import NewsItemView from '@/views/news/NewsItemView';
import React, { memo } from 'react';
import styled from 'styled-components';
import { INewsItem } from '@/types';

interface INewsItemListProps {
  newsItems: INewsItem[];
}

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  background-color: blue;
`;

const EmptyQueryView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsItemList = ({ newsItems }: INewsItemListProps) => {
  return (
    <GridContainer>
      {newsItems.length === 0 ? (
        <EmptyQueryView>결과가 없습니다.</EmptyQueryView>
      ) : (
        <>
          {newsItems.map((item) => (
            <NewsItemView key={item.newsId} item={item} />
          ))}
        </>
      )}
    </GridContainer>
  );
};

export default memo(NewsItemList);
