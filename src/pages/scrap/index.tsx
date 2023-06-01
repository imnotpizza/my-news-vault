import NewsScrapPage from '@/components/scrap/NewsScrapPage';
import { getPrefetch, getUserInfo, initialPageProps } from '@/utils/serverside';
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

// TODO: 비로그인시 스크랩페이지에 접근 못하게 처리
export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  try {
    // FIXME: 리팩토링 필요
    const res1 = await getUserInfo(context, initialPageProps);
    const res2 = await getPrefetch(context, res1);

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
