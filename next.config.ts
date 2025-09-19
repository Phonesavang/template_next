import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [],
    },
  },
  reactStrictMode: true,
  /* config options here */
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "~": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
