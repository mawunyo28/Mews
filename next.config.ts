import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
      },
    ],
  },
};

export default nextConfig;
