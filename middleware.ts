import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Add performance headers for better TTFB
  const response = await updateSession(request);
  
  // Add performance optimization headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
  
  // Enable compression if not already set
  if (!response.headers.get('Content-Encoding')) {
    response.headers.set('Vary', 'Accept-Encoding');
  }
  
  // Set cache headers for static-like pages
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/products/') || pathname.startsWith('/applications/')) {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
