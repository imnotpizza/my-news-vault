import NewsSearchPage from '@/components/search/NewsSearchPage';
import { TPageProps } from '@/types';
import React from 'react';

/**
 * 뉴스 검색 카테고리별 페이지
 */

const NewsCategorySearchPage = ({ params }: TPageProps) => {
  return <NewsSearchPage category={params.category}/>;
};

export default NewsCategorySearchPage;
