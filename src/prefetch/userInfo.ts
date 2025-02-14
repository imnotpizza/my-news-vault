'use server';

import { GetServerSidePropsContext } from 'next';
import { getDecodedUserInfoByToken } from '@/firebase/admin';
import { TPageProps, TUserInfo } from '@/types';
import ERRCODE from '@/constants/errCode';
import { cookies } from 'next/headers';
import { COOKIE_CONFIG } from '@/constants';

/**
 *
 * @param context: ssr context
 * @param pageProps: page props
 * @returns userInfo 추가된 pageProps
 */
export const getUserInfoInServerside = async (pageProps: TPageProps): Promise<TPageProps> => {
  const authToken = cookies().get(COOKIE_CONFIG.title);
  if (authToken) {
    const verifiedToken = await getDecodedUserInfoByToken(authToken.value);
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
