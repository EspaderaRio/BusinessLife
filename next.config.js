/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ makes it a static site
  images: {
    unoptimized: true, // ✅ needed for Next/Image when exporting
  },
  basePath: '/BusinessLife', // ✅ your repo name
  assetPrefix: '/BusinessLife/', // ✅ required so assets load correctly
};

export default nextConfig;
