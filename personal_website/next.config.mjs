const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If you're deploying to a subdirectory (like username.github.io/portfolio)
  // uncomment the line below and replace 'portfolio' with your repo name
  // basePath: '/portfolio',
};

export default nextConfig;
