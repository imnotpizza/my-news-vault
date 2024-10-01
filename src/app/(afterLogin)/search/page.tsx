import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata, ResolvingMetadata } from 'next';
import { fetchBingNews } from '../../../api/client';
import { createMetadataObj } from '../../_lib/metadata';
import { queryClient } from '@/queries/queryClient';
import { prefetchBingNewsFetch, getBingNewsQueryData } from '@/queries/useBingNewsFetch';
import NewsSearchPage from '@/components/search/NewsSearchPage';
interface IProps {
  query: string;
}

export default async function SearchPage(props: IProps) {
  const { query } = props;
  // TODO: prefetchQuery or getQueryData 호출
  await prefetchBingNewsFetch(query);
  const dehydratedState = dehydrate(queryClient);
  console.log('#### 111111', dehydratedState, query);
  return (
    <HydrationBoundary state={dehydratedState}>
      <NewsSearchPage query={query}/>
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
  // 제목, 내용, 썸내일
  console.log('####22222', seoVals);
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
