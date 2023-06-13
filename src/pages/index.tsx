import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React from 'react';
import { GetServerSideProps } from 'next';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import { getDehydratedStateInServerside, getUserInfoInServerside } from '@/utils/serverside';
import { TPageProps } from '@/types';
import { APP_NAME, initialPageProps } from '@/constants';
import ErrorPage from 'next/error';
import { queryClient } from '@/queries/queryClient';

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

// FIXME: 구조 개선 필요
export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  // query남아있는 경우 query prefetch 작동 안함
  queryClient.clear();
  const res1 = await getUserInfoInServerside(context, initialPageProps);
  const res2 = await getDehydratedStateInServerside(context, res1);
  const query = (context.query.query as string) || '';
  return {
    props: {
      ...res2,
      query,
    },
  };
};

export default NewsSearch;
