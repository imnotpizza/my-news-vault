'use server';

import { NextResponse } from 'next/server';

const getRandom = () => Math.random().toString(36).substring(7);

export async function GET(req: Request) {
  let data = getRandom();

  const type = new URL(req.url).searchParams.get('type') || 'default';
  switch (type) {
    case 'a':
      data += ' - Type A';
      break;
    case 'b':
      data += ' - Type B';
      break;
    case 'c':
      data += ' - Type C';
      break;
    default:
      break;
  }
  return NextResponse.json({ data });
}
