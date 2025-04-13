// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure we're not on the Edge runtime

// 1️⃣ Handle preflight CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',               // or your specific origin
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// 2️⃣ Handle the actual POST
export async function POST(request: NextRequest) {
  const formData = await request.json();

  try {
    const googleScriptUrl =
      'https://script.google.com/macros/s/AKfycbxrH_MeY_OcoZPm0skObbTuKtgeF4MTqNBqFuA24Of6RZuqRkUx6G0tbBIU7o9X4Ny9YA/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      // console.error(Google Script Error: ${errorDetail});
      return new NextResponse(
        JSON.stringify({ error: errorDetail }),
        {
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );
    }

    const result = await response.json();
    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (err) {
    console.error('API Error:', err);
    return new NextResponse(
      JSON.stringify({ error: 'An internal error occurred' }),
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
}

