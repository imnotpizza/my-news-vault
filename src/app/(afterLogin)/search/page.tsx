import React from 'react';
import SearchPageView from '@/components/templates/search/SearchPageView';
import { initialPageProps } from '@/constants';
import { getDehydratedStateInServerside } from '@/prefetch/scarp';
import { getUserInfoInServerside } from '@/prefetch/userInfo';
import JotaiHydrateProvider from '@/components/etc/JotaiHydrateProvider';

/**
 * 검색 메인페이지
 * TODO: react query prefetch 구현 (스크랩 기능에 필요함)
 */
export default async function SearchPage() {
  // TODO: prefetchQuery or getQueryData 호출
  const prefetchedUser = await getUserInfoInServerside(initialPageProps);
  const prefetchedData = await getDehydratedStateInServerside(prefetchedUser);
  return (
    <JotaiHydrateProvider prefetchedUserInfo={prefetchedUser.userInfo || null}>
      <SearchPageView />
    </JotaiHydrateProvider>
  );
}
