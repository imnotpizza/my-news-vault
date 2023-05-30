import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  if (req.method === 'GET') {
    // save cookie
    res.setHeader('Set-Cookie', `authToken=${token};Max-Age=3600;HttpOnly,Secure`);
  } else if (req.method === 'DELETE') {
    // remove cookie
    res.setHeader('Set-Cookie', `authToken=${token};Max-Age=0;HttpOnly,Secure`);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
