/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Suppress warnings from pdfjs-dist if any
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
