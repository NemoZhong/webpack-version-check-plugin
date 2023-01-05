const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VersionBuildPlugin } = require('./plugins');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VersionBuildPlugin({
      versionDirectory: 'static',
      assetsPath: path.resolve(__dirname, 'dist'),
    }),
  ],
};
