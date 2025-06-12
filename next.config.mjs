/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export', // Required for static export in Next.js 13+
  assetPrefix: isProd ? `/${process.env.NEXT_APP_BASE_PATH}/` : '',
  basePath: isProd ? `/${process.env.NEXT_APP_BASE_PATH}` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
