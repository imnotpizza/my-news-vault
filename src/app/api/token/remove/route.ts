'use server';

import { NextResponse } from 'next/server';

/**
 * 쿠키 제거 next api
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 * @param req Fetch API Request
 * @param res Fetch API Response
 */
export async function DELETE(req: Request, res: Response) {
  try {
    // authToken 쿠키 제거
    res.headers.append('Set-Cookie', 'authToken=; Path=/; HttpOnly; Max-Age=0');
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
