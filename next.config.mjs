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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.clauze.xyz",
          },
        ],
        destination: "https://clauze.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
