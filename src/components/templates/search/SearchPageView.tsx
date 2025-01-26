import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import useFetchNewsList from '@/hooks/useFetchNewsList';
import { TNewsItem } from '@/types';
import React, { Suspense } from 'react';

/**
 * 검색 & 결과 메인페이지
 */
export default function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <div className="w-[30.13rem]">
        <FilterQueriesForm />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsSearchGridList/>
      </Suspense>
    </div>
  );
}
