/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
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
