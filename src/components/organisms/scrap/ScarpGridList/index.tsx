'use client';

import NewsGridList from '@/components/molecules/NewsGridList';
import React, { useMemo } from 'react';
import useBingNewsFetch from '@/queries/useBingNewsFetch';

export default function NewsSearchGridList() {
  

  return (
    <NewsGridList>
      {queryStates.flattenData.map((item) => (
        <NewsCard newsItem={item} key={item.newsId} />
      ))}
    </NewsGridList>
  );
}
