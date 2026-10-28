/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (and any static host)
  output: "export",
  // Trailing slashes avoid GitHub Pages 404s on nested routes like /pricing/
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "adamspolishes.com", pathname: "/cdn/shop/**" },
      { protocol: "https", hostname: "theragcompany.com", pathname: "/cdn/shop/**" },
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;

