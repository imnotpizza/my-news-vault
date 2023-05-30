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

export { admin };
