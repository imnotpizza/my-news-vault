import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { random } from 'lodash-es';
import { GetServerSideProps } from 'next';
import { admin } from '@/firebase/admin';

const NewsSearch = ({ keyword }) => {
  return (
    <>
      <Meta title={keyword} />
      <NewsSearchPage category={'All'} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { token } = context.req.cookies;

    if (token) {
      const verifiedToken = await admin.auth().verifyIdToken(token);
      const { uid, email } = verifiedToken;
      return {
        props: {
          status: true,
          uid,
          email,
        },
      };
    } else {
      return {
        props: {
          status: false,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        status: false,
      },
    };
  }
};

export default NewsSearch;
