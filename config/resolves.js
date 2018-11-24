const path = require('path');

module.exports = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".sass"],
  alias: {
    '~': path.resolve(__dirname, '../src/ts/'),
    'scss': path.resolve(__dirname, '../src/sass')
  }
};
