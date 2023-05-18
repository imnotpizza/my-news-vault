import React, { memo } from 'react';
import styled from 'styled-components';
import { TNewsItem } from '@/types';
import NewsItemCard from '../NewsItemCard';

interface INewsItemListProps {
  newsItems: TNewsItem[];
}

const GridContainer = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
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
            <NewsItemCard key={item.newsId} item={item} />
          ))}
        </>
      )}
    </GridContainer>
  );
};

export default memo(NewsItemList);
