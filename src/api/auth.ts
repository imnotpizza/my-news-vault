import { googleProvider, auth } from '@/firebase';
import { TUserInfo } from '@/types';
import { signInWithPopup } from 'firebase/auth';
import { removeToken, saveToken } from './next-api';

// FIXME: firebase admin 사용으로 변경
export const signinWithFirebaseAuth = async (): Promise<TUserInfo> => {
  const res = await signInWithPopup(auth, googleProvider);
  const { displayName, email, photoURL } = res.user;

  // 토큰 획득
  const token = await res.user.getIdToken();
  // 쿠키에 토큰 저장
  await saveToken(token);

  return {
    displayName,
    email,
    photoURL,
  };
};

// FIXME: firebase admin 사용으로 변경
export const signoutWithFirebaseAuth = async () => {
  await removeToken();
  await auth.signOut();
};
