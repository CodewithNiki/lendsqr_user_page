/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cloudflare-ipfs.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
}

module.exports = nextConfig
