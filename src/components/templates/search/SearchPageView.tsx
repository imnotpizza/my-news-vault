import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import React from 'react';

/**
 * 검색 & 결과 메인페이지
 */
export default function SearchPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <div className="w-[30.13rem]">
        <FilterQueriesForm />
      </div>
      <div className="grid grid-cols-4 gap-4 w-[482px]">
        <div className="bg-gray-100 p-4">Card 1</div>
        <div className="bg-gray-100 p-4">Card 2</div>
        <div className="bg-gray-100 p-4">Card 3</div>
        <div className="bg-gray-100 p-4">Card 4</div>
      </div>
    </div>
  );
}
