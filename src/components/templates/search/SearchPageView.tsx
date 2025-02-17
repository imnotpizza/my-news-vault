import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { Suspense } from 'react';
import SearchPageFallback from './SearchPageFallback';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';

/** news prefech 담당할 컴포넌트
 * TODO: userInfo 상태 받아와 처리하기
 */
async function NewsCardList() {
  await prefetchScrappedNewsList(prefetchedUserInfo.email);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewsSearchGridList />
    </HydrationBoundary>
  );
}

/**
 * 뉴스 검색 필터링+목록 페이지
 */
export default async function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <div className="desktop:w-[30.13rem] tablet:w-[30.13rem] mobile:w-full">
        <FilterQueriesForm />
      </div>
      <Suspense fallback={<SearchPageFallback />}>
        <NewsCardList />
      </Suspense>
    </div>
  );
}
