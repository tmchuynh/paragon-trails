import type { NextConfig } from "next";

const imageHosts = [
  "images.unsplash.com",
  "tailwindcss.com",
  "plus.unsplash.com",
  "img.freepik.com",
  "rainn.org",
  "media.istockphoto.com",
  "cdn.pixabay.com",
  "lh3.googleusercontent.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
