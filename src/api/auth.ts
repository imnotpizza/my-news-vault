import { googleProvider, auth } from '@/firebase';
import { TUserInfo } from '@/types';
import { signInWithPopup } from 'firebase/auth';
import APIError from '@/utils/APIError';
import ERRCODE from '@/constants/errCode';
import { queryClient } from '@/queries/queryClient';
import { removeToken, saveToken } from './next-api';

// FIXME: firebase admin 사용으로 변경
export const signinWithFirebaseAuth = async (): Promise<TUserInfo> => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const { displayName, email, photoURL } = res.user;

    // 토큰 획득
    const token = await res.user.getIdToken();
    // 쿠키에 토큰 저장
    saveToken(token);
    if (!displayName || !email || !photoURL) {
      throw new APIError(ERRCODE.AUTH_USER_NOT_FOUND);
    }
    return {
      displayName,
      email,
      photoURL,
    };
  } catch (e) {
    // TODO: 에러 처리 구체화
    throw new APIError(ERRCODE.AUTH_ALREADY_LOGINED);
  }
};

// FIXME: firebase admin 사용으로 변경
export const signoutWithFirebaseAuth = async () => {
  try {
    await auth.signOut();
    removeToken();
    queryClient.clear();
  } catch (e) {
    throw new APIError(ERRCODE.AUTH_USER_NOT_FOUND);
  }
};
