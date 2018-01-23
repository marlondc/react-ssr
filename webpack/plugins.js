/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const client = {
  production: {
    plugins: [
      new CleanWebpackPlugin(['public', 'build'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
      new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
  dev: {
    plugins: [
      new CleanWebpackPlugin(['public'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new Dotenv(),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
      new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};

const server = {
  production: {
    plugins: [
      new CleanWebpackPlugin(['build'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  },
  dev: {
    plugins: [
      new CleanWebpackPlugin(['build'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new Dotenv(),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    ],
  },
};

module.exports = {
  client,
  server,
};
