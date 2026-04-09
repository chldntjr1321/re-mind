import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: 'removeViewBox', active: false },
                  { name: 'convertColors', params: { currentColor: true } },
                ],
              },
            },
          },
        ],
        as: '*.tsx',
      },
    },
  },
};

export default nextConfig;
