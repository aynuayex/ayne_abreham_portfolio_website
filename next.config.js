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
          port: "",
          pathname: "/QwtoI.jpg?s=256&g=1",
        },
      ],
    },
};

module.exports = nextConfig;
