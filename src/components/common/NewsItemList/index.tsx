'use client';

import NewsItemView from '@/views/news/NewsItemView';
import React, { memo } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { INewsItem } from '@/types';

/**
 *  News Item API Fetch 기능 컴포넌트
 */
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
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage();
  //   }
  // }, [inView]);

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

  // return (
  //   <div>
  //     {query === '' ? (
  //       <EmptyQueryView>검색어를 입력해주세요</EmptyQueryView>
  //     ) : (
  //       <InView>
  //         <GridContainer>
  //           {dataList.map((item) => (
  //             <NewsItemView key={item.newsId} item={item} />
  //           ))}
  //         </GridContainer>
  //         <div ref={ref}>loadingview</div>
  //       </InView>
  //     )}
  //   </div>
  // );
};

export default memo(NewsItemList);
