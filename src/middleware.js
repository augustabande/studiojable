import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Non reindirizzare la pagina coming-soon stessa, le risorse statiche e le API
  if (
    pathname === "/coming-soon" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/img") ||
    pathname.startsWith("/fonts") ||
    pathname.startsWith("/css") ||
    pathname.startsWith("/js") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/coming-soon", request.url));
}
