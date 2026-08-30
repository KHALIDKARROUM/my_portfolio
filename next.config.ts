import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep the Vercel build separate from Vinext's local preview artifacts.
  distDir: '.next-vercel',
};

export default nextConfig;
