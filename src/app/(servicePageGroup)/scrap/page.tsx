import React from 'react';
import { getUserInfoInServerside } from '@/prefetch/userInfo';
import JotaiHydrateProvider from '@/components/etc/JotaiHydrateProvider';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';
import ScrapPageView from '@/components/templates/scrap/ScrapPageView';

export default async function ScrapPage() {
  // scrap list prefetch 수행
  const prefetchedUserInfo = await getUserInfoInServerside();
  if (prefetchedUserInfo) {
    await prefetchScrappedNewsList(prefetchedUserInfo?.email);
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JotaiHydrateProvider prefetchedUserInfo={prefetchedUserInfo}>
        <ScrapPageView />
      </JotaiHydrateProvider>
    </HydrationBoundary>
  );
}

/**
 * 강제로 동적 페이지로 설정 (미설정시 정적페이지로 처리하여 에러발생)
 */
export const dynamic = 'force-dynamic';
