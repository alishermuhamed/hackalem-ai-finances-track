import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Allow production builds to finish even with TypeScript errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
