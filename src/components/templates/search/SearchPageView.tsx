import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { Suspense } from 'react';

/**
 * 검색 & 결과 메인페이지
 */
export default function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <div className="desktop:w-[30.13rem] tablet:w-[30.13rem] mobile:w-full">
        <FilterQueriesForm />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsSearchGridList/>π
      </Suspense>
    </div>
  );
}
