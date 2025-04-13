// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Allow credentials if you need them
  res.headers.set('Access-Control-Allow-Credentials', 'true');

  // Either allow all origins:
  res.headers.set('Access-Control-Allow-Origin', '*');
  // —or echo the incoming origin for stricter control:
  // res.headers.set('Access-Control-Allow-Origin', req.headers.get('origin') || '*');

  // Allowed HTTP methods
  res.headers.set(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
  );

  // Allowed headers
  res.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With'
  );

  return res;
}

export const config = {
  // run on all API routes
  matcher: ['/api/:path*'],
};


