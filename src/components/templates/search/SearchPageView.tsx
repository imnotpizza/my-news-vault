import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { Suspense } from 'react';
import SearchPageFallback from './SearchPageFallback';

/**
 * 뉴스 검색 필터링+목록 페이지
 */
export default function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <div className="desktop:w-[30.13rem] tablet:w-[30.13rem] mobile:w-full">
        <FilterQueriesForm />
      </div>
      <Suspense fallback={<SearchPageFallback />}>
        <NewsSearchGridList />
      </Suspense>
    </div>
  );
}
