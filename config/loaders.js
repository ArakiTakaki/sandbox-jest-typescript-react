const isSourceMaps = {
  development: true,
  production: false
};
console.log(process.env.MODE);
const isSourceMap = isSourceMaps[process.env.MODE] || false;

module.exports = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: ["ts-loader"]
  },
  {
    enforce: "pre",
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: "tslint-loader"
  },
  {
    test: /\.pug$/,
    use: [{ loader: "pug-loader" }]
  },
  {
    test: /\.(sass|scss)$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          sourceMap: isSourceMap,
          importLoader: 2,
          modules: true,
          localIdentName: "[path][name]__[local]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: isSourceMap,
          plugins: [require("autoprefixer")({ grid: true })]
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: isSourceMap
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    use: [
      { loader: "babel-loader" },
      {
        loader: "react-svg-loader",
        options: {
          jsx: true
        }
      }
    ]
  }
];
