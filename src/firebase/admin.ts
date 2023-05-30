import * as admin from 'firebase-admin';
import firebaseAdminConfig from '../../firebase.admin.json';

const config = {
  privateKey: firebaseAdminConfig.private_key,
  clientEmail: firebaseAdminConfig.client_email,
  projectId: firebaseAdminConfig.project_id,
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
