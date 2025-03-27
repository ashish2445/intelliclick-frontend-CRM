// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://crm-660080677559.asia-south1.run.app";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
  
//   async rewrites() {
//     console.log("NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
//     console.log("Rewrites are being processed..."); // Debugging log
//     return [
//       {
//         source: "/:prefix*/api/:path*", // Capture any prefix dynamically
//         destination: `${BASE_URL}/api/:path*`, // Strip the prefix and call backend API
//       },
//     ];
//   },
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/",
//         destination: "/login",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig; // ✅ Ensure this is ES module syntax

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true, // 301 redirect (SEO friendly)
      },
    ];
  },
};

export default nextConfig;




