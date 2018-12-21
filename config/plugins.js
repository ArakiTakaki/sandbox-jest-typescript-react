const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const manifestOptions = {
  writeToFileEmit: true,
  seed: {
    name: 'TodoApp-Araki',
    short_name: 'Todo',
    theme_color: '#2196f3',
    background_color: '#2196f3',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
  },
};

const path = require('path');
const devModes = {
  development: true,
  production: false,
};
const devMode = devModes[process.env.MODE] || false;
module.exports = [
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),
  new ManifestPlugin(manifestOptions),
  new HtmlWebpackPlugin({
    inject: true,
    hash: true,
    template: path.resolve(__dirname, '../src/pug/index.pug'),
  }),
];
