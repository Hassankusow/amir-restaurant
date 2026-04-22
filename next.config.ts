import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amirsportland.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
