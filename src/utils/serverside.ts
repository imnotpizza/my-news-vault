import { getDecodedUserInfoByToken } from '@/firebase/admin';
import { TUserInfo } from '@/types';

/**
 * cookie에 저장된 토큰 사용하여 서버사이드에서 user 정보 획득
 * @param authToken: cookie에 저장된 authToken
 */
export const getUserInfoFromFirebaseAdmin = async (authToken): Promise<TUserInfo | null> => {
  if (authToken) {
    const verifiedToken = await getDecodedUserInfoByToken(authToken);
    const { name, picture, email } = verifiedToken;
    return {
      displayName: name,
      photoURL: picture,
      email,
    } as TUserInfo;
  } else {
    return null;
  }
};
