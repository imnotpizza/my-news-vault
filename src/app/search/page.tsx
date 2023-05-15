'use client';

import NewsSearch from '@/components/search/NewsSearch';
import { IPageProps } from '@/types';

/**
 * 뉴스 검색 카테고리 없는 페이지
 */
const NewsSearchPage = ({ searchParams }: IPageProps) => {
  return <NewsSearch q={searchParams.q} />;
};

export default NewsSearchPage;
