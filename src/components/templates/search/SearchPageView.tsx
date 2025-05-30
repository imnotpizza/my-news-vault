import FilterQueriesForm from '@/components/organisms/search/FilterQueriesForm';
import NewsSearchGridList from '@/components/organisms/search/NewsSearchGridList';
import React, { cache, Suspense } from 'react';
import ErrorBoundary from '@/components/atoms/ErrorBoundary';
import SearchPageFallback from './SearchPageFallback';
import NewsDetailTemplate from './NewsDetailTemplate';
import axios from 'axios';
import { revalidateTag } from 'next/cache';

const fetchCacheTest = async () => {
  const res = await fetch('http://localhost:4000/api/cache-test', {});
  const data = await res.json();
  console.log('fetchCacheTest res', data);
  return data;
};

const fetchCacheTestAxios = async () => {
  const res = await axios.get('http://localhost:4000/api/cache-test', {
    // adapter: 'fetch',
    // fetchOptions: {
    //   cache: 'force-cache',
    //   next: {
    //     tags: ['cache-test'], // 캐시 태그 설정
    //   },
    // },
  });
  console.log('fetchCacheTest res', res.data);
  return res.data;
};

/**
 * 뉴스 검색 필터링+목록 페이지
 */
export default async function SearchPageView() {
  const cacheRes = await fetchCacheTest();
  const cacheRes2 = await fetchCacheTestAxios();

  // setInterval(() => {
  //   console.log('revalidateTag cache-test');
  //   revalidateTag('cache-test'); // 5초마다 캐시 재검증
  // }, 5000);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-8 bg-background">
      <NewsDetailTemplate />
      <div className="desktop:w-[30.13rem] tablet:w-[30.13rem] mobile:w-full">
        <FilterQueriesForm />
      </div>
      <div>{cacheRes.data}</div>
      <div>{cacheRes2.data}</div>
      <Suspense fallback={<SearchPageFallback />}>
        <ErrorBoundary>
          <NewsSearchGridList />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
