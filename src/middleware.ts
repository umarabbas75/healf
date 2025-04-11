import { NextResponse } from 'next/server';

export function middleware(request: any) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/order/order-list', request.url));
  }
}

export const config = {
  matcher: '/',
};
