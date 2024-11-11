/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Change back to 'export'
    images: {
      unoptimized: true
    },
    trailingSlash: true,
    distDir: 'out'
  };
  
  module.exports = nextConfig;