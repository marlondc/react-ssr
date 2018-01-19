/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const client = {
  production: {
    plugins: [
      new CleanWebpackPlugin(['public'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
      new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    ],
  },
  dev: {
    plugins: [
      new CleanWebpackPlugin(['public'], {
        root: path.join(__dirname, '..'),
        verbose: true,
      }),
      new Dotenv(),
      new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
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
    ],
  },
};

module.exports = {
  client,
  server,
};
