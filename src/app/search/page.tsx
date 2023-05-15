'use client';

import NewsSearch from '@/components/search/NewsSearch';

/**
 * 뉴스 검색 카테고리 없는 페이지
 */
const NewsSearchPage = ({ searchParams }) => {
  return <NewsSearch q={searchParams.q} />;
};

export default NewsSearchPage;
