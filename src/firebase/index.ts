// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_AUTH_APP_ID,
});
// db 인스턴스 생성
export const database = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
