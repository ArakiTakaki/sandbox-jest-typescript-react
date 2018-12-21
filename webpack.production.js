const resolves = require('./config/resolves');
const loaders = require('./config/loaders');
const plugins = require('./config/plugins');
const path = require('path');

const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  entry: ['./src/ts/index.tsx'],
  module: {
    rules: loaders,
  },
  resolve: resolves,
  plugins: [...plugins, new WebpackObfuscator({ rotateUnicodeArray: true })],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};
