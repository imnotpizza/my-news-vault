import { GetServerSidePropsContext } from 'next';
import { getDecodedUserInfoByToken } from '@/firebase/admin';
import { TPageProps, TUserInfo } from '@/types';
import { dehydrate } from '@tanstack/react-query';
import { queryClient } from '@/queries/queryClient';
import { prefetchScrappedNewsList } from '@/queries/useScrappedNewsList';

/**
 *
 * @param context: ssr context
 * @param pageProps: page props
 * @returns userInfo 추가된 pageProps
 */
export const getUserInfoInServerside = async (
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

/**
 *
 * @param context: ssr context
 * @param pageProps: page props
 * @returns react query dehydrate 추가된 pageProps
 */
export const getDehydratedStateInServerside = async (
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