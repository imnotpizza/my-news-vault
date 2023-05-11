// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import Auth from 'firebase-auth-lite';
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
} from 'firebase/firestore/lite';
import firebaseJson from '../../firebase.json';

// Initialize Firebase
const app = initializeApp({
  ...firebaseJson.config,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
});
// db 인스턴스 생성
export const database = getFirestore(app);

// create
export async function createArticle(newArticle: INews) {
  const articleCollection = collection(database, 'scrap');
  await addDoc(articleCollection, newArticle);
}

// get
export async function getArticles() {
  const userRef = doc(database, 'scrap', 'CQI5GWRMKYGDdL11Pbgn');
  const target = await getDoc(userRef);
  console.log(target.data(), target.exists());

  const articleCollection = collection(database, 'scrap');
  const articleDocs = await getDocs(articleCollection);
  const articleList = articleDocs.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return articleList;
}

// update
export async function updateArticle(id: string, newArticle: any) {
  const articleDoc = doc(database, 'scrap', id);
  await updateDoc(articleDoc, newArticle);
}
// delete
export async function deleteArticle(id: string) {
  const articleDoc = doc(database, 'scrap', id);
  await deleteDoc(articleDoc);
}
