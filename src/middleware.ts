import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("📢 Middleware Triggered! Incoming Request:", req.nextUrl.pathname);

  // Rewrite the request to the internal API route (no external backend URL here)
  const internalApiPath = req.nextUrl.pathname; // this will map to your API route

  console.log("🚀 Rewriting Request to Next.js API Route:", internalApiPath);

  // Rewrite the request to the internal Next.js API route (not an external URL)
  return NextResponse.rewrite(new URL(internalApiPath, req.nextUrl.origin));
}

export const config = {
  matcher: ["/api/lead/read/leads-without-actions","/api/auth/user/login",]
};





