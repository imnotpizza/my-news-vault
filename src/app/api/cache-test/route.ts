'use server';

import { NextResponse } from 'next/server';

const getRandom = () => Math.random().toString(36).substring(7);

export async function GET(req: Request) {
  const data = getRandom();
  return NextResponse.json({ data });
}
