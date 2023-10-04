/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.stack.imgur.com",
        },
      ],
    },
};

module.exports = nextConfig;
