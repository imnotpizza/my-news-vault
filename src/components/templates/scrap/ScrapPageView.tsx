import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { Suspense } from 'react';
import TotalScrapCount from '@/components/organisms/scrap/TotalScrapCount';
import ScrapPageFallback from './ScrapPageFallback';

/**
 * 뉴스 검색 필터링+목록 페이지
 */
export default async function ScrapPageView() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8">
      <Suspense fallback={<ScrapPageFallback />}>
        <div className="w-full px-10">
          <TotalScrapCount />
        </div>
        <NewsSearchGridList />
      </Suspense>
    </div>
  );
}
