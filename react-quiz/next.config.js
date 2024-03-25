/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
  //   trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/settings',
        source: '/',
        permanent: true,
      },
    ];
  },
};
