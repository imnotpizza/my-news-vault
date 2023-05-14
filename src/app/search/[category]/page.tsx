'use client';

import NewsSearch from '@/components/search/NewsSearch';
import React from 'react';

/**
 * 뉴스 검색 카테고리별 페이지
 */

const CategoryNewsSearchPage = ({ params }) => {
  return <NewsSearch category={params.category}/>;
};

export default CategoryNewsSearchPage;
