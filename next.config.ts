import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove X-Powered-By header — minor security + response size improvement
  poweredByHeader: false,

  // Serve modern image formats when images are added
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
