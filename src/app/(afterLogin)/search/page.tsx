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

export default async function SearchPage(props: IProps) {
  // TODO: prefetchQuery or getQueryData 호출
  await prefetchScrappedNewsList('email');
  const dehydratedState = dehydrate(queryClient);
  return (
    // @ts-ignore
    <HydrationBoundary queryClient={queryClient} state={dehydratedState}>
      <NewsSearchPage query={props.query} />
    </HydrationBoundary>
  );
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {  
  // FIXME: fetchQuery 호출
  const res = await fetchBingNews('', 0);
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
