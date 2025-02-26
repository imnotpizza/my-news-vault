'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import useFetchNewsList from '@/hooks/useFetchNewsList';
import React, { useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import NewsCard from '../NewsCard';

export default function NewsSearchGridList() {
  // const { data } = useFetchNewsList.query();
  const { filterQueries } = useFetchNewsList.state();
  const query = filterQueries.keyword;
  const isQueryEmpty = useMemo(() => query === '', [query]);
  const queryStates = useBingNewsFetch({
    query,
    enabled: !isQueryEmpty,
    maxPage: 3,
  });

  return (
    <NewsGridList>
      {queryStates.flattenData.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </NewsGridList>
  );
}
