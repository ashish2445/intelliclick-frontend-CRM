// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_BASE_URL}/:prefix*/api/:path*`, // Capture any prefix dynamically
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`, // Strip the prefix and call backend API
      },
    ];
  },
};

export default nextConfig;

