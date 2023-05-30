import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React, { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { getDecodedUserInfoByToken } from '@/firebase/admin';
import { TUserInfo } from '@/types';
import { queryClient } from '@/queries/queryClient';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { dehydrate } from '@tanstack/react-query';
import { UserInfoProvider, userInfoContext } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';

const NewsSearch = ({ status, userInfo }) => {
  return (
    <UserInfoProvider initialUserInfo={userInfo || null}>
      <Layout>
        <Meta title={'keyword'} />
        <NewsSearchPage category={'All'} />
      </Layout>
    </UserInfoProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { authToken } = context.req.cookies;

    if (authToken) {
      const verifiedToken = await getDecodedUserInfoByToken(authToken);
      const { name, picture, email } = verifiedToken;
      const userInfo: TUserInfo = {
        displayName: name,
        photoURL: picture,
        email,
      };

      // prefetch scrappedNewsList
      await prefetchScrappedNewsList(email);
      return {
        props: {
          status: true,
          dehydratedState: dehydrate(queryClient),
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
