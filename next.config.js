/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.stack.imgur.com'
            }
        ]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
