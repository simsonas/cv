/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const assetPrefix = basePath || undefined;

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

  // Match the GitHub Pages repository path when deploying from a repo site.
  basePath,
  assetPrefix,

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