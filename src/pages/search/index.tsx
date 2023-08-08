import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { GetServerSideProps } from 'next';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import { getUserInfoFromFirebaseAdmin } from '@/utils/serverside';
import { TPageProps } from '@/types';
import { APP_NAME } from '@/constants';
import ErrorPage from 'next/error';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { queryClient } from '@/queries/queryClient';
import { dehydrate } from '@tanstack/react-query';

const NewsSearch = ({ userInfo, query, errCode }) => {
  if (errCode) {
    return <ErrorPage statusCode={errCode} />;
  }

  return (
    <UserInfoProvider initialUserInfo={userInfo || null}>
      <Layout>
        <Meta title={APP_NAME} />
        <NewsSearchPage query={query} />
      </Layout>
    </UserInfoProvider>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  // 유저 정보
  const { authToken } = context.req.cookies;
  const userInfo = await getUserInfoFromFirebaseAdmin(authToken);
  // 스크랩 정보 초기화
  if (userInfo) {
    await prefetchScrappedNewsList(userInfo.email);
  }
  const query = (context.query.query as string) || '';

  return {
    props: {
      userInfo,
      query,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NewsSearch;
