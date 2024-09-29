// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token'); 
  
  const { pathname } = request.nextUrl;

  // Redirect to login page if not logged in and trying to access protected routes
  if (!token && (pathname.startsWith('/dashboard') || pathname.startsWith('/auth/register'))) {
    const loginUrl = new URL('/auth/signin', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If logged in and trying to access the sign-in page, redirect to the dashboard
  if (token && pathname.startsWith('/auth/signin')) {
    const dashboardUrl = new URL('/dashboard', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth/register', '/auth/signin'], // Add /auth/signin to matcher
};
