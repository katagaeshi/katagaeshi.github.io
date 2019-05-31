const path = require('path');
const Copy = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  plugins: [
    new Copy([
      {
        from: 'static/',
      },
      {
        from: 'src/index.html',
        to: './../index.html'
      },
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'index.bundle.js',
    publicPath: './output/'
  }

};
