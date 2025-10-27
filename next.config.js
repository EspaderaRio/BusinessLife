/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ enables static export for GitHub Pages
  basePath: '/BusinessLife', // ✅ repo name (case-sensitive!)
  images: { unoptimized: true }, // ✅ avoid Next image optimization issues
};

export default nextConfig;
