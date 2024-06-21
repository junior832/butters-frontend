const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      eslintPath: 'eslint/use-at-your-own-risk',
      configType: 'flat',
      exclude: ['/node_modules/'],
      extensions: [`js`, `jsx`],
    }),
    // new BundleAnalyzerPlugin()
  ],
};
