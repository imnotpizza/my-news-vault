import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import { GetServerSideProps } from 'next';
import React from 'react';

const NewsSearchWithCategory = ({ category }) => {
  return (
    <>
      <Meta title={`ILoveNews-${category}`} />
      <NewsSearchPage category={'All'} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.params;
  return {
    props: {
      category,
    },
  };
};

export default NewsSearchWithCategory;
