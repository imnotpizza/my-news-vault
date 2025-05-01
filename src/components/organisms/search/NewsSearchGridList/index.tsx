'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import React, { useMemo, useState } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import useInfiniteScroll, { InfiniteScrollWrapper } from '@/components/atoms/InfiniteScroll';
import NewsCard from '../NewsCard';

export default function NewsSearchGridList() {
  const { filterQueries } = useBingNewsFetch.state();
  // TODO: query 관련코드 제거, useBingNewsFetchQuery hook 안쪽에서 관리
  const query = filterQueries.keyword;
  const isQueryEmpty = useMemo(() => query === '', [query]);
  const { flattenData, fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useBingNewsFetch.query({
      query,
      enabled: !isQueryEmpty,
      maxPage: 3,
    });

  const enabled = hasNextPage && !isFetchingNextPage;
  const ref = useInfiniteScroll({
    enabled,
    onTriggered: fetchNextPage,
    page: data.pages.length || 0,
  });

  return (
    <InfiniteScrollWrapper ref={ref} isLoading={isFetchingNextPage}>
      <NewsGridList>
        {flattenData.map((item) => (
          <NewsCard newsItem={item} key={item.newsId} />
        ))}
      </NewsGridList>
    </InfiniteScrollWrapper>
  );
}
