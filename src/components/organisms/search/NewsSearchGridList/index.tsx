import NewsGridList from '@/components/molecules/NewsGridList';
import useFetchNewsList from '@/hooks/useFetchNewsList';
import React from 'react';

export default function NewsSearchGridList() {
  const { data } = useFetchNewsList.query();
  return <NewsGridList newsList={data.data} />;
}
