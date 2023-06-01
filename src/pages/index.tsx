import Meta from '@/components/common/Meta';
import NewsSearchPage from '@/components/search/NewsSearchPage';
import React, { useMemo } from 'react';
import { GetServerSideProps } from 'next';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import { getPrefetch, getUserInfo, initialPageProps, parseCategory } from '@/utils/serverside';
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
    const res1 = await getUserInfo(context, initialPageProps);
    const res2 = await getPrefetch(context, res1);
    const res3 = parseCategory(context, res2);
    return {
      props: res3,
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
