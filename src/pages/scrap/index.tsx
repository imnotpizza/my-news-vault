import NewsScrapPage from '@/components/scrap/NewsScrapPage';
import {
  getDehydratedStateInServerside,
  getUserInfoInServerside,
  initialPageProps,
} from '@/utils/serverside';
import React from 'react';
import { GetServerSideProps } from 'next';
import { TPageProps } from '@/types';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import OnlyAuthUserWrapper from '@/wrapper/OnlyAuthUserWrapper';

const NewsScrap = ({ userInfo }) => {
  return (
    <OnlyAuthUserWrapper isSignin={Boolean(userInfo)}>
      <UserInfoProvider initialUserInfo={userInfo || null}>
        <Layout>
          <NewsScrapPage />
        </Layout>
      </UserInfoProvider>
    </OnlyAuthUserWrapper>
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

export default NewsScrap;
