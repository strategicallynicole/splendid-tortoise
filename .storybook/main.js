module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      sourceLoaderOptions: {
        injectStoryParameters: false,
      },
    },
  }, '@storybook/preset-scss', '@storybook/addon-essentials', '@storybook/addon-a11y'],
};
