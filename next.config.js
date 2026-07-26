/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required: Export static HTML/CSS/JS files to the ./out folder for GitHub Pages
  output: 'export',

  // Required: Disable Next.js server-side image optimization (GitHub Pages is static)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // Required: Matches your GitHub repository name (https://<username>.github.io/cv/)
  // Omit or set to '' if hosting on a custom domain or root site (<username>.github.io)
  basePath: process.env.NODE_ENV === 'production' ? '/cv' : '',

  // Append trailing slashes to support static page routing on GitHub Pages
  trailingSlash: true,

  // Enable React strict mode for development
  reactStrictMode: true,

  // Compress output assets
  compress: true,

  // Exclude source maps in production build
  productionBrowserSourceMaps: false,

  // Disable X-Powered-By header
  poweredByHeader: false,
};

module.exports = nextConfig;