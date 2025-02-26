import React from 'react';
import SearchPageView from '@/components/templates/search/SearchPageView';
import { getUserInfoInServerside } from '@/prefetch/userInfo';
import JotaiHydrateProvider from '@/components/etc/JotaiHydrateProvider';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';

export default async function ScrapPage() {
  // scrap list prefetch 수행
  const prefetchedUserInfo = await getUserInfoInServerside();
  if (prefetchedUserInfo) {
    await prefetchScrappedNewsList(prefetchedUserInfo.email);
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JotaiHydrateProvider prefetchedUserInfo={prefetchedUserInfo}>
        <SearchPageView />
      </JotaiHydrateProvider>
    </HydrationBoundary>
  );
}
