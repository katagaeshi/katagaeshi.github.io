const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/main.js',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'static/',
      },
      {
        from: 'src/index.html',
        to: './../index.html'
      },
    ]),
    new HtmlWebpackPlugin({
      filename: './../index.html',
      title: 'katagaeshi for all',
      template: './src/index.html',
      hash: true,
    }),
    new HtmlWebpackTagsPlugin({
      tags: ['main.css'],
      append: false,
      hash: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.bundle.js',
    publicPath: './public/'
  }

};
