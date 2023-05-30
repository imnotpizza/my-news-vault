import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { authToken } = req.body;
    // 쿠키에 토큰 저장
    res.setHeader('Set-Cookie', `authToken=${authToken}; path=/; httponly`);
    res.status(200).json({ message: 'success' });
  } catch (e) {
    res.status(500).json({ message: 'token save failed' });
  }
}
