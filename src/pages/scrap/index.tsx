import NewsScrapPage from '@/components/scrap/NewsScrapPage';
import {
  getDehydratedStateInServerside,
  getUserInfoFromFirebaseAdmin,
  getUserInfoInServerside,
} from '@/utils/serverside';
import React from 'react';
import { GetServerSideProps } from 'next';
import { TPageProps } from '@/types';
import { UserInfoProvider } from '@/utils/userInfoProvider';
import Layout from '@/components/layout';
import OnlyAuthUserWrapper from '@/wrapper/OnlyAuthUserWrapper';
import { APP_NAME, initialPageProps } from '@/constants';
import ErrorPage from 'next/error';
import Meta from '@/components/common/Meta';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';

const NewsScrap = ({ userInfo, errCode }) => {
  if (errCode) {
    return <ErrorPage statusCode={errCode} />;
  }
  return (
    <OnlyAuthUserWrapper isSignin={Boolean(userInfo)}>
      <UserInfoProvider initialUserInfo={userInfo || null}>
        <Layout>
          <Meta title={`${APP_NAME}: 스크랩 목록`} />
          <NewsScrapPage />
        </Layout>
      </UserInfoProvider>
    </OnlyAuthUserWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<TPageProps> = async (context) => {
  try {
    // 유저 정보
    const { authToken } = context.req.cookies;
    const userInfo = await getUserInfoFromFirebaseAdmin(authToken);
    // 스크랩 정보 초기화
    if (userInfo) {
      await prefetchScrappedNewsList(userInfo.email);
    }

    return {
      props: {
        userInfo,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return {
      props: {
        ...initialPageProps,
        errCode: e.status,
      },
    };
  }
};

export default NewsScrap;
