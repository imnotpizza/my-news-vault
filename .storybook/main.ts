import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  // webpackFinal: async (config) => ({
  //   ...config,
  //   resolve: {
  //     alias: {
  //       ...config.resolve?.alias,
  //       '@': path.resolve(__dirname, '../src'),
  //     },
  //   },
  // }),
};
export default config;
