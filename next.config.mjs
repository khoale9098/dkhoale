import million from 'million/compiler'

// import WpAutoImport from 'unplugin-auto-import/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const millionConfig = {
  auto: true,
}

export default million.next(nextConfig, millionConfig)
