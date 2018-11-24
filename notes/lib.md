# 使用するパッケージ一覧

## ReactJS

- react
- react-dom
- react-hot-loader

## Linter

- tslint
- tslint-config-airbnb
  - `tsconfig.json`の extends に airbnb を追記
- tslint-react
  - `tsconfig.json`の extends に react を追記
- tslint-config-prettier
  - `tsconfig.json`の extends に prettier を追記
- prettier

## Debug

- ts-jest
- react-test-renderer
  - スナップショットをする際に必要なライブラリ
  - [JEST スナップショット機能を使用してみた](http://shibe97.hatenablog.com/entry/2017/03/22/092237)

## Webpack

- webpack
- webpack-cli
- webpack-dev-server
- loaders
  - ts-loader
  - tslint-loader
  - style-loader
  - css-loader
  - postcss-loader
    - postcss-flexbox
    - autoprefixer
  - html-loader
  - pug-loader
    - pug
  - sass-loader
    - node-sass
- plugins
  - html-webpack-plugin
  - webpack-obfuscator
    - JavaScript を暗号化させる

## other library

- axios
  - 非同期通信のライブラリ
- lodash
  - 関数系の拡張ライブラリ
- moment
  - 日付の拡張ライブラリ
- cross-env
  - terminal 実行時の引数を追加するライブラリ
- reset-css
  - CSS のリセットライブラリ(SASS 対応)
