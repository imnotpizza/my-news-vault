'use client';

import NewsGridList from '@/components/atoms/NewsGridList';
import React, { useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';
import useInfiniteScroll, { InfiniteScrollWrapper } from '@/components/atoms/InfiniteScroll';
import NewsCard from '../NewsCard';
import SearchPageFallback from '@/components/templates/search/SearchPageFallback';
import SearchErrorIcon from '@/assets/search-error-icon.svg';

export default function NewsSearchGridList() {
  const { filterQueries } = useBingNewsFetch.state();
  const { flattenData, isFetching, isError } = useBingNewsFetch.query();

  if (!filterQueries.keyword) {
    return (
      <section
        role="status"
        className="w-full h-[70dvh] flex justify-center items-center grow"
      >
        <div className="flex flex-col items-center gap-6">
          <SearchErrorIcon />
          <span>검색어를 입력해주세요</span>
        </div>
      </section>
    );
  }

  if (isFetching) return <SearchPageFallback />;
  // FIXME: 에러 UI 관련 처리 boundary랑 공통화
  if (isError)
    return (
      <section
        role="status"
        className="w-full h-[70dvh] flex justify-center items-center grow"
      >
        <div className="flex flex-col items-center gap-6">
          <SearchErrorIcon />
          <span>앗! 문제가 발생했어요 😢</span>
        </div>
      </section>
    );

  return (
    <NewsGridList>
      {flattenData.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </NewsGridList>
  );
}
