'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import useFetchNewsList from '@/hooks/useFetchNewsList';
import { mockBingNewsRes } from '@/mock';
import { convertToNewsItem } from '@/utils/newsItem';
import React, { useMemo } from 'react';

export default function NewsSearchGridList() {
  // const { data } = useFetchNewsList.query();

  // TNewsItem 타입으로 변환
  const newsCardList = useMemo(() => {
    const data = mockBingNewsRes;
    console.log('', data);
    return data.value.map((item) => convertToNewsItem(item, null, '', false));
  }, [mockBingNewsRes]);

  return <NewsGridList newsList={newsCardList} />;
}
