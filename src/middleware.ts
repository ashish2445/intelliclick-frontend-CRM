// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//     const { pathname, search } = req.nextUrl;
//     console.log("middleware......")

//     // If the URL contains `/dashboard/table`, remove it
//     if (pathname.startsWith("/dashboard/table")) {
//         const modifiedUrl = new URL(req.url);
//         modifiedUrl.pathname = pathname.replace("/dashboard/table", "/dashboard"); // Redirect to `/dashboard`
//         return NextResponse.rewrite(modifiedUrl);
//     }

//     return NextResponse.next();
// }

// // Apply middleware only to relevant routes
// export const config = {
//     matcher: ["/dashboard/:path*"],
// };

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//     const { pathname } = req.nextUrl;
//     const response = NextResponse.next();
//     response.headers.set("X-Middleware-Log", "Middleware executed");

//     if (pathname.startsWith("/dashboard/table")) {
//         const modifiedUrl = new URL(req.url);
//         modifiedUrl.pathname = pathname.replace("/dashboard/table", "/dashboard");
//         return NextResponse.rewrite(modifiedUrl);
//     }

//     return response;
// }

// // Apply middleware to relevant routes
// export const config = {
//     matcher: ["/api/:path*"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   let url = req.nextUrl.clone();
//   let pathname = url.pathname;

//   console.log("📢 Middleware Triggered! Incoming Request:", pathname);

//   // Match any path before "/api" and remove it
//   const fixedPathname = pathname.replace(/^\/[^\/]+(\/api\/.*)$/, "$1");

//   if (fixedPathname !== pathname) {
//     url.pathname = fixedPathname;
//     url.hostname = "crm-660080677559.asia-south1.run.app"; // Rewrite to backend
//     return NextResponse.rewrite(url);
//   }

//   return NextResponse.next();
// }
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  console.log("📢 Middleware Triggered! Incoming Request:", pathname);

  if (pathname === '/dashboard/table'){
    console.log("urlllll",url);
  }

  // Match any path before "/api" and remove it
  // const fixedPathname = pathname.replace(/^\/[^\/]+(\/api\/.*)$/, "$1");

  // if (fixedPathname !== pathname) {
  //   url.pathname = fixedPathname;
  //   url.hostname = "crm-660080677559.asia-south1.run.app"; // Rewrite to backend
  //   console.log("url dashboard",url);
  //   return NextResponse.rewrite(url);
  // }
  url.pathname = "/"; // Set the pathname to root "/"
  url.hostname = "crm-660080677559.asia-south1.run.app"; // Backend URL

  console.log("🚀 Rewriting Request to Backend:", url.href);

  return NextResponse.rewrite(url);

  // return NextResponse.next();
}


// Apply middleware to all requests containing "/api"
export const config = {
//   matcher: "/:path*/api/:path*",
  matcher: "/:path*", // Apply middleware to all requests
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   console.log("📢 Middleware Triggered! Path:", req.nextUrl.pathname);
//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/:path*", // ✅ Apply middleware to ALL requests
// };




