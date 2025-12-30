import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Disable to reduce double renders in dev
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Reduce memory usage
  experimental: {
    optimizeCss: true,
  },
  // Disable Turbopack if causing issues (uncomment if needed)
  // webpack: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   }
  //   return config
  // },
};

export default nextConfig;
