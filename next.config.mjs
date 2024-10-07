/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'resources.premierleague.com',
                port: '',
                pathname: '/premierleague/**',
            },
        ],
        domains: ['resources.premierleague.com',"dzmb9yzus0ibn.cloudfront.net"], 
    },
      }

export default nextConfig;
