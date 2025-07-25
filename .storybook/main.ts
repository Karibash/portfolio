import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  staticDirs: [
    '../public',
  ],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [
        vanillaExtractPlugin(),
      ],
    });
  },
};

export default config;
