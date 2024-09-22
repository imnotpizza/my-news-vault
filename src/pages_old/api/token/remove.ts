import { NextApiRequest, NextApiResponse } from 'next';

/**
 * 토큰 쿠키 제거
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // authToken 쿠키 제거
    res.setHeader('Set-Cookie', `authToken=; path=/; Max-Age=0;`);
    res.status(200).json({ message: 'success' });
  } catch (e) {
    res.status(500).json({ message: 'token save failed' });
  }
}
