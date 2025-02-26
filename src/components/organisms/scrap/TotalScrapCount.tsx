import useAuth from '@/hooks/useAuth';
import useScrappedNewsList from '@/queries/useScrappedNewsList';
import React from 'react';

/**
 * 총 스크랩 수
 */
export default function TotalScrapCount() {
  const { authState } = useAuth();
  const { data } = useScrappedNewsList({
    userId: authState.userInfo.email,
  });
  return <div>스크랩 수: 총 {data.length}</div>;
}
