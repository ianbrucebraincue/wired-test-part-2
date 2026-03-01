/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'dist', 
  images: { 
    unoptimized: true 
  },
  devIndicators: false,
};

export default nextConfig;
