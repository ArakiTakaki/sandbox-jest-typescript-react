const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devModes = {
  development: true,
  production: false,
};
console.log(process.env.MODE);
const isSourceMap = devModes[process.env.MODE] || false;
const devMode = devModes[process.env.MODE] || false;

module.exports = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ['ts-loader'],
  },
  // {
  //   test: /\.(json)$/,
  //   loader: 'file-loader',
  //   options: {
  //     name: '[name].[ext]',
  //   },
  // },
  {
    enforce: 'pre',
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'tslint-loader',
  },
  {
    test: /\.pug$/,
    use: [{ loader: 'pug-loader' }],
  },
  {
    test: /\.(sass|scss)$/,
    use: [
      { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isSourceMap,
          importLoader: 2,
          modules: true,
          localIdentName: '[path][name]__[local]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isSourceMap,
          plugins: [require('autoprefixer')({ grid: true })],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isSourceMap,
        },
      },
    ],
  },
  {
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-svg-loader',
        options: {
          jsx: true,
        },
      },
    ],
  },
];
