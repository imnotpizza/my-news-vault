import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { GetServerSideProps } from 'next';
import { admin } from '@/firebase/admin';
import { TUserInfo } from '@/types';

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
    const { authToken } = context.req.cookies;

    if (authToken) {
      const verifiedToken = await admin.auth().verifyIdToken(authToken);
      const { name, picture, email } = verifiedToken;
      const userInfo: TUserInfo = {
        displayName: name,
        photoURL: picture,
        email,
      };
      return {
        props: {
          status: true,
          userInfo,
        },
      };
    } else {
      return {
        props: {
          status: false,
          userInfo: null,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        status: false,
        userInfo: null,
      },
    };
  }
};

export default NewsSearch;
