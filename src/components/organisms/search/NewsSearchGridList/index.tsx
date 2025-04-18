'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import React, { useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import NewsCard from '../NewsCard';

export default function NewsSearchGridList() {
  const { filterQueries } = useBingNewsFetch.state();
  // TODO: query 관련코드 제거, useBingNewsFetchQuery hook 안쪽에서 관리
  const query = filterQueries.keyword;
  const isQueryEmpty = useMemo(() => query === '', [query]);
  const queryStates = useBingNewsFetch.query({
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
