import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { Suspense } from 'react';
import ErrorBoundary from '@/components/atoms/ErrorBoundary';
import SearchPageFallback from './SearchPageFallback';
import NewsDetailTemplate from './NewsDetailTemplate';

/**
 * 뉴스 검색 필터링+목록 페이지
 */
export default async function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8 bg-background">
      <NewsDetailTemplate />
      <div className="desktop:w-[30.13rem] tablet:w-[30.13rem] mobile:w-full">
        <FilterQueriesForm />
      </div>
      <Suspense fallback={<SearchPageFallback />}>
        <ErrorBoundary>
          <NewsSearchGridList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
