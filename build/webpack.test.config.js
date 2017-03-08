// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config.js')

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  // node: {
  //   fs: true,
  // }
  // node: {
  //     __dirname: true,
  //     __filename: true,
  //   fs: true
  // }
})

module.exports = webpackConfig
