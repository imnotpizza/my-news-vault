'use server';

import { NextResponse } from 'next/server';

// 임시 fetchScrappedList
export async function GET(req: Request) {
  return NextResponse.json(
    { data: 'success' },
    {
      status: 200,
    },
  );
}

// scrapNews
export async function PATCH(req: Request) {
  return NextResponse.json(
    { data: 'success' },
    {
      status: 201,
    },
  );
}

// unscrapNews
export async function DELETE(req: Request) {
  return NextResponse.json(
    { data: 'success' },
    {
      status: 201,
    },
  );
}
