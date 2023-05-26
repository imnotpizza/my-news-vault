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

export const getServerSideProps = async () => {
  return {
    props: {
      keyword: `ILoveNews-검색:${random(1, 5)}`,
    },
  };
};

export default NewsSearch;
