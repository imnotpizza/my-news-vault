import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { queryClient } from '@/queries/queryClient';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import { fetchBingNews } from '@/api/client';
import { createMetadataObj } from '@/app/_lib/metadata';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
interface IProps {
  query: string;
}

// 2
export default async function SearchPage(props: IProps) {
  // TODO: prefetchQuery or getQueryData 호출
  await prefetchScrappedNewsList('email');
  const dehydratedState = dehydrate(queryClient);
  console.log('111111', dehydratedState);
  return (
    <div>12313</div>
    // @ts-ignore
    // <HydrationBoundary queryClient={queryClient} state={dehydratedState}>
    //   <div></div>
    // </HydrationBoundary>
  );
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 1
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  console.log('222222');
  const query = (searchParams.query ?? '') as string;
  // FIXME: fetchQuery 호출
  const res = await fetchBingNews(query, 1);
  const seoVals = res.value.map((item) => {
    return {
      name: item.name,
      description: item.description,
      image: item.image?.thumbnail?.contentUrl,
    };
  });
  const first = seoVals[0];

  // TODO 여기에 seo 데이터 초기화
  return createMetadataObj({
    title: first.name,
    description: first.description,
    openGraph: {
      title: first.name,
      description: first.description,
      images: [{ url: first.image }],
    },
  });
}
