import React from 'react';
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import { prefetchScrappedNewsList } from '../../../queries/useScrappedNewsList';
import type { Metadata, ResolvingMetadata } from 'next';
import { fetchScrappedList } from '../../../api/client';
import { fetchBingNews } from '../../../api/client';
import { createMetadataObj } from '../../_lib/metadata';

interface IProps {
  query: string;
}

export default async function SearchPage({query}: IProps) {
  const queryClient = new QueryClient();
  await prefetchScrappedNewsList('email');
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      {/* TODO: search 컴포넌트 작성 */}
    </HydrationBoundary>
  )
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({params, searchParams}: Props): Promise<Metadata> {
  const res = await fetchBingNews('', 0);
  // TODO 여기에 seo 데이터 초기화
  // return createMetadataObj({});
}