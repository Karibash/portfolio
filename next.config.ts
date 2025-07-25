import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withVanillaExtractPlugin = createVanillaExtractPlugin();

export default withVanillaExtractPlugin(config);
