import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import { merge } from 'webpack-merge';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: [
    '../public',
  ],
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    return merge(config, {
      plugins: [
        new VanillaExtractPlugin(),
      ],
    });
  },
};

export default config;
