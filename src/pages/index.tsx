import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React, { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import {
  getDehydratedStateInServerside,
  getUserInfoInServerside,
  initialPageProps,
} from '@/utils/serverside';
import { TPageProps } from '@/types';

const NewsSearch = ({ userInfo, category }) => {
  const metaTitle = useMemo(
    () => (category === 'All' ? 'ILoveNews' : `ILoveNews-${category}`),
    [category],
  );
  return (
    <UserInfoProvider initialUserInfo={userInfo || null}>
      <Layout>
        <Meta title={metaTitle} />
        <NewsSearchPage category={category} />
      </Layout>
    </UserInfoProvider>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  try {
    // FIXME: 리팩토링 필요
    const res1 = await getUserInfoInServerside(context, initialPageProps);
    const res2 = await getDehydratedStateInServerside(context, res1);
    return {
      props: res2,
    };
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
