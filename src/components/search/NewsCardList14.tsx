import styled from 'styled-components';
import { TNewsItem } from '@/types';
import { responsive } from '@/styles/responsive';
import dynamic from 'next/dynamic';
import { useFetchBingNewsList } from '@/queries/useBingNewsFetch';
import { memo } from 'react';
import { NEWS_LIST_PAGE_LIMIT } from '@/constants';

const NewsCard = dynamic(() => import('@/components/common/NewsCard'), { ssr: false });

interface INewsCardListProps {
  query: string;
  page: number;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  align-items: center;
  ${responsive.mobile} {
    width: 100%;
    margin: 0 1.25rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.25rem;
  width: 65.63rem;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 1.25rem;
  ${responsive.tablet} {
    grid-template-columns: repeat(3, 1fr);
    width: 46.88rem;
  }
  ${responsive.mobile} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 1.88rem;
`;

const NewsCardList14 = ({ query, page }: INewsCardListProps) => {
  const { flattenData: newsItems } = useFetchBingNewsList({
    query,
    curPage: page,
    maxPage: NEWS_LIST_PAGE_LIMIT,
  });

  return (
    <Container className="flex-column justify-center">
      <GridContainer>
        {newsItems?.map((item) => (
          <NewsCard key={item.name} item={item} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default memo(NewsCardList14);
