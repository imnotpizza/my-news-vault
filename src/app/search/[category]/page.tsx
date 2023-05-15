'use client';

import NewsSearch from '@/components/search/NewsSearch';
import { IPageProps } from '@/types';
import React from 'react';

/**
 * 뉴스 검색 카테고리별 페이지
 */

const CategoryNewsSearchPage = ({ params, searchParams }: IPageProps) => {
  return <NewsSearch category={params.category} q={searchParams.q} />;
};

export default CategoryNewsSearchPage;
