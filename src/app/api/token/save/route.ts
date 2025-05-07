import { COOKIE_CONFIG } from '@/constants';
import { NextResponse } from 'next/server';

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
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 * @param req Fetch API Request
 * @param res Fetch API Response
 */
export async function POST(req: Request, res: Response) {
  try {
    res.headers.append('Set-Cookie', setCookieStr('token'));
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: 500 });
  }
}
