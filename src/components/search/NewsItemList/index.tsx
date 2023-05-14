'use client';

import QueryStateWrapper from '@/components/common/QueryStateWrapper';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import NewsItemView from '@/views/news/NewsItemView';
import React, { memo, useEffect } from 'react';
import styled from 'styled-components';
import { flatMap } from 'lodash-es';
import { InView, useInView } from 'react-intersection-observer';
import useScrappedNewsList from '@/queries/useScrappedNewsList';

/**
 *  News Item API Fetch 기능 컴포넌트
 */

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

const NewsItemList = ({ category, query }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  // FIXME: 리팩토링, scrap 다른데로 이동
  const { isLoading, data: scrapLists } = useScrappedNewsList();
  const queryStates = useBingNewsFetch({ query, category, pageNum: 1, enabled: !isLoading && query !== '' });

  const { data, fetchNextPage } = queryStates;

  // FIXME: 리팩토링
  const dataList = flatMap(data?.pages, (page) => {
    return page.map((newsItem) => {
      const isScrapped = Boolean(
        scrapLists?.find((scrapItem) => scrapItem.newsId === newsItem.newsId),
      );
      return {
        ...newsItem,
        isScrapped,
      };
    });
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      {query === '' ? (
        <EmptyQueryView>검색어를 입력해주세요</EmptyQueryView>
      ) : (
        <QueryStateWrapper queryStates={queryStates}>
          <InView>
            <GridContainer>
              {dataList.map((item) => (
                <NewsItemView key={item.newsId} item={item} />
              ))}
            </GridContainer>
            <div ref={ref}>loadingview</div>
          </InView>
        </QueryStateWrapper>
      )}
      <button
        onClick={() => {
          fetchNextPage();
        }}
      >
        추가호출
      </button>
    </div>
  );
};

export default memo(NewsItemList);
