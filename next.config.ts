import type { NextConfig } from "next";

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const nextConfig: NextConfig = {
  images: {
    domains: [
    'img.freepik.com',
    'images.pexels.com'
    ],
  }
}

// export default withBundleAnalyzer(nextConfig);
export default nextConfig