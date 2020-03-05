/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // TODO: Proxy docker instance
    // proxy: {
    //   '/': 'http://localhost'
    // }
    contentBase: './dist',
    port: '3000'
  },
  devtool: 'inline-source-map'
});