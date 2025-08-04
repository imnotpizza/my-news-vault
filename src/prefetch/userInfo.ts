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
export const getUserInfoInServerside = async (): Promise<TUserInfo | null> => {
  const authToken = cookies().get(COOKIE_CONFIG.title);
  try {
    if (authToken) {
      const verifiedToken = await getDecodedUserInfoByToken(authToken.value);
      const { name, picture, email } = verifiedToken;
      const userInfo: TUserInfo = {
        displayName: name,
        photoURL: picture || '',
        email: email || '',
      };
      return userInfo;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
