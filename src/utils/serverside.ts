import { GetServerSidePropsContext } from 'next';
import { getDecodedUserInfoByToken } from '@/firebase/admin';
import { TPageProps, TUserInfo } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';

// FIXME: 네이밍 컨벤션 찾아 함수명 수정
export const getUserInfo = async (
  context: GetServerSidePropsContext,
  pageProps: TPageProps,
): Promise<TPageProps> => {
  const { authToken } = context.req.cookies;
  if (authToken) {
    const verifiedToken = await getDecodedUserInfoByToken(authToken);
    const { name, picture, email } = verifiedToken;
    const userInfo: TUserInfo = {
      displayName: name,
      photoURL: picture,
      email,
    };
    return {
      ...pageProps,
      userInfo,
    };
  } else {
    return {
      ...pageProps,
      userInfo: null,
    };
  }
};

export const getPrefetch = async (
  context: GetServerSidePropsContext,
  pageProps: TPageProps,
): Promise<TPageProps> => {
  if (pageProps.userInfo.email) {
    await prefetchScrappedNewsList(pageProps.userInfo.email);
    return {
      ...pageProps,
      dehydratedState: dehydrate(queryClient),
    };
  } else {
    return {
      ...pageProps,
      dehydratedState: null,
    };
  }
};

export const getKeyword = (
  context: GetServerSidePropsContext,
  pageProps: TPageProps,
): TPageProps => {
  const { keyword } = context.query;
  return {
    ...pageProps,
    keyword,
  };
};
