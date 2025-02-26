'use server';

import { cookies } from 'next/headers';
import { COOKIE_CONFIG } from '@/constants';

export const saveToken = (authToken: string) => {
  // if (cookies().has(COOKIE_CONFIG.title)) {
  //   return new Error('token already exists');
  // }

  cookies().set({
    name: COOKIE_CONFIG.title,
    value: authToken,
    path: COOKIE_CONFIG.path,
    maxAge: COOKIE_CONFIG.maxAge,
    httpOnly: COOKIE_CONFIG.httpOnly,
    secure: COOKIE_CONFIG.secure,
  });
};

export const removeToken = () => {
  // if (!cookies().has(COOKIE_CONFIG.title)) {
  //   return new Error('token not exists');
  // }
  cookies().delete(COOKIE_CONFIG.title);
};

// export const getAuthToken = () => {
//   const cookie = cookies().get(COOKIE_CONFIG.title);
//   return cookie;
// };
