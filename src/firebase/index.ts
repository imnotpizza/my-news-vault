// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { TUserInfo } from '@/types';
import { removeToken, saveToken } from '@/api/next-api';
import { fetchScrappedNewsList, removeQueryCache } from '@/queries/useScrappedNewsList';
import firebaseJson from '../../firebase.json';

// Initialize Firebase
const app = initializeApp({
  ...firebaseJson.config,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
});
// db 인스턴스 생성
export const database = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signin = async (): Promise<TUserInfo> => {
  const res = await signInWithPopup(auth, googleProvider);
  const { displayName, email, photoURL } = res.user;

  // 토큰 획득
  const token = await res.user.getIdToken();
  // 쿠키에 토큰 저장
  await saveToken(token);
  // 스크랩 데이터 호출
  await fetchScrappedNewsList(email);

  return {
    displayName,
    email,
    photoURL,
  };
};

export const signout = async () => {
  await removeToken();
  await auth.signOut();
  removeQueryCache();
};
