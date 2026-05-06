import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MyPersonalWebsite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
