import * as admin from 'firebase-admin';

const config = {
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  privateKey: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY ? process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
};
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(config),
  });
}

/**
 * 쿠키에 저장된 토큰 사용하여 유저정보 획득
 * @param token
 */
export const getDecodedUserInfoByToken = async (token: string) => {
  const data = await admin.auth().verifyIdToken(token);
  return data;
};
