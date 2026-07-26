/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'cv' with your exact repository name if different
  // Omit basePath if deploying to your user root page (YOUR_USERNAME.github.io)
  basePath: process.env.NODE_ENV === 'production' ? '/cv' : '',
};

export default nextConfig;