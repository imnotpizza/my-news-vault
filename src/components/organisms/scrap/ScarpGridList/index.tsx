'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import React, { useMemo } from 'react';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import useAuth from '@/hooks/useAuth';
import NewsCard from '@/components/organisms/search/NewsCard';

export default function NewsSearchGridList() {
  const { authState } = useAuth();
  const { data } = useScrappedNewsList({
    userId: authState.userInfo.email,
  });
  return (
    <NewsGridList>
      {data.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </NewsGridList>
  );
}
