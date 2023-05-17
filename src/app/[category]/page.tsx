import NewsSearchPage from '@/components/search/NewsSearchPage';
import { IPageProps } from '@/types';
import React from 'react';

/**
 * 뉴스 검색 카테고리별 페이지
 */

const NewsCategorySearchPage = ({ params, searchParams }: IPageProps) => {
  return <NewsSearchPage category={params.category}/>;
};

export default NewsCategorySearchPage;
