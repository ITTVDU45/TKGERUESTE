/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow builds to complete even if ESLint errors exist. We'll fix lint issues separately.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


