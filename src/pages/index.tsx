import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { random } from 'lodash-es';

const NewsSearch = ({ keyword }) => {
  return (
    <>
      <Meta title={keyword} />
      <NewsSearchPage category={'All'} />
    </>
  );
};

export default NewsSearch;
