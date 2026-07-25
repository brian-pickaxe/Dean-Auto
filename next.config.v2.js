/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/v2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

