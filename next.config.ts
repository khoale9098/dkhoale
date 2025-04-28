import type { NextConfig } from 'next'

// import WpAutoImport from 'unplugin-auto-import/webpack'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: { unoptimized: true },
  reactStrictMode: true,
}

export default nextConfig
