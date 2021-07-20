const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    '@whitespace/storybook-addon-html',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.(js|tsx|ts)?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: path.resolve(__dirname, '../'),
    });
    return config;
  }
}
