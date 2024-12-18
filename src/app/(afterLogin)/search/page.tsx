import React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { queryClient } from '@/queries/queryClient';
import { prefetchBingNewsFetch } from '@/queries/useBingNewsFetch';
import { fetchBingNews } from '@/api/client';
import { createMetadataObj } from '@/app/_lib/metadata';
import NewsSearchPage14 from '@/components/search/NewsSearchPage14';
import axios from 'axios';

const fetchValues = async () => {
  const res = await axios.get('http://localhost:3000/api/cache-test');
  console.log('### res', res.data);
  return res.data;
};

// 2
export default async function SearchPage(props) {
  const { query } = props;
  // TODO: prefetchQuery or getQueryData 호출
  await prefetchBingNewsFetch(query);
  const dehydratedState = dehydrate(queryClient);
  const apiRes = await fetchValues();
  console.log('### props', apiRes);
  return (
    <HydrationBoundary state={dehydratedState}>
      <NewsSearchPage14 query={query} />
    </HydrationBoundary>
  );
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  // FIXME: fetchQuery 호출
  const res = await fetchBingNews(searchParams.query as string, 0);
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
