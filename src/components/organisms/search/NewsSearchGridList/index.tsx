'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import useFetchNewsList from '@/hooks/useFetchNewsList';
import { mockBingNewsRes } from '@/mock';
import { convertToNewsItem } from '@/utils/newsItem';
import React, { useMemo } from 'react';
import NewsCard from '../NewsCard';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import InfiniteScrollThresholdBox from '@/views/common/InfiniteScrollThresholdBox';

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

  // TNewsItem 타입으로 변환
  // const newsCardList = useMemo(() => {
  //   return data.map((item) => convertToNewsItem(item, null, '', false));
  // }, [data]);

  return (
    <NewsGridList>
      {queryStates.flattenData.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </NewsGridList>
  );
}
