import NewsScrapPage from '@/components/scrap/NewsScrapPage';
import { getDehydratedStateInServerside, getUserInfoInServerside } from '@/utils/serverside';
import React from 'react';
import { GetServerSideProps } from 'next';
import { TPageProps } from '@/types';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import OnlyAuthUserWrapper from '@/wrapper/OnlyAuthUserWrapper';
import { APP_NAME, initialPageProps } from '@/constants';
import ErrorPage from 'next/error';
import { queryClient } from '@/queries/queryClient';
import Head from 'next/head';

const NewsScrap = ({ userInfo, errCode }) => {
  if (errCode) {
    return <ErrorPage statusCode={errCode} />;
  }
  return (
    <OnlyAuthUserWrapper isSignin={Boolean(userInfo)}>
      <UserInfoProvider initialUserInfo={userInfo || null}>
        <Layout>
          <Head>
            <title>{APP_NAME}: 스크랩 목록</title>
          </Head>
          <NewsScrapPage />
        </Layout>
      </UserInfoProvider>
    </OnlyAuthUserWrapper>
  );
};
// FIXME: 구조 개선 필요
export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  queryClient.clear();
  const res1 = await getUserInfoInServerside(context, initialPageProps);
  const res2 = await getDehydratedStateInServerside(context, res1);

  return {
    props: res2,
  };
};

export default NewsScrap;
