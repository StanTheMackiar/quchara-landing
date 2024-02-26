/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
