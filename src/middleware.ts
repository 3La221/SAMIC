// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token'); 

  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/auth/signin', request.url);
    return NextResponse.redirect(loginUrl);
  }

 
  return NextResponse.next();
}


export const config = {
  matcher: ['/dashboard/:path*'], 
};
