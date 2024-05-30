/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'capstonemusic.ca',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'musictech.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.mos.cms.futurecdn.net',
            port: '',
          },
        ],
      },
};

export default nextConfig;
