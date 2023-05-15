// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
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

export const signin = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  const credential = GoogleAuthProvider.credentialFromResult(res);

  const { displayName, email, photoURL } = res.user;
  return {
    displayName,
    email,
    photoURL,
  };
};

export const signout = async () => {
  await auth.signOut();
}