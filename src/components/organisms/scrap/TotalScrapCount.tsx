'use client';

import useScrappedNewsList from '@/queries/useScrappedNewsList';
import React from 'react';

/**
 * 총 스크랩 수
 */
export default function TotalScrapCount() {
  const { data } = useScrappedNewsList();
  return <div>스크랩 수: 총 {data.length}</div>;
}
