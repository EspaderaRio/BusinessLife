/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generate static files
  images: {
    unoptimized: true,
  },
  basePath: '/BusinessLife', // your repo name
  assetPrefix: '/BusinessLife/',
};

export default nextConfig;
