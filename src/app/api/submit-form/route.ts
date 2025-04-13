// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// 1️⃣ Preflight handler
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',               // or your front‑end domain
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// 2️⃣ Actual POST handler
export async function POST(request: NextRequest) {
  const formData = await request.json();

  try {
    const googleScriptUrl =
      'https://script.google.com/macros/s/AKfycbxrH_MeY_OcoZPm0skObbTuKtgeF4MTqNBqFuA24Of6RZuqRkUx6G0tbBIU7o9X4Ny9YA/exec';

    const upstream = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const payload = upstream.ok
      ? await upstream.json()
      : await upstream.text();

    return new NextResponse(
      upstream.ok
        ? JSON.stringify(payload)
        : JSON.stringify({ error: payload }),
      {
        status: upstream.ok ? 200 : 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
}


