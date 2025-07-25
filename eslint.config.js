import { common } from '@praha/eslint-config-common';
import { define } from '@praha/eslint-config-definer';
import { javascript } from '@praha/eslint-config-javascript';
import { next } from '@praha/eslint-config-next';
import { react } from '@praha/eslint-config-react';
import { style } from '@praha/eslint-config-style';
import { typescript } from '@praha/eslint-config-typescript';
import storybook from 'eslint-plugin-storybook';

const config = define([
  common,
  javascript,
  next,
  react,
  style,
  typescript,
  () => storybook.configs['flat/recommended'],
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
