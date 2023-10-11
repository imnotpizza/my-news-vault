import { COOKIE_CONFIG } from '@/constants';
import { NextApiRequest, NextApiResponse } from 'next';

const setCookieStr = (token: string) => {
  let cookieStr = '';
  cookieStr += `authToken=${token};`;
  cookieStr += ` Path=${COOKIE_CONFIG.path};`;
  cookieStr += `; Max-Age=${COOKIE_CONFIG.maxAge}`;
  cookieStr += COOKIE_CONFIG.httpOnly ? '; HttpOnly' : '';
  cookieStr += COOKIE_CONFIG.secure ? '; Secure' : '';
  return cookieStr;
};

/**
 * 전달받은 토큰 쿠키에 저장
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { authToken } = req.body;
    // 쿠키에 토큰 저장
    // res.setHeader('Set-Cookie', `authToken=${authToken}; path=/; httponly`);
    res.setHeader('Set-Cookie', setCookieStr(authToken));
    res.status(200).json({ message: 'success' });
  } catch (e) {
    res.status(500).json({ message: 'token save failed' });
  }
}
