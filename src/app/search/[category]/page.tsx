'use client';

import NewsSearch from '@/components/search/NewsSearch';
import { TNewsCategory } from '@/types';
import React from 'react';

/**
 * 뉴스 검색 카테고리별 페이지
 */

const CategoryNewsSearchPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return <NewsSearch category={params.category} query={searchParams.q} />;
};

export default CategoryNewsSearchPage;
