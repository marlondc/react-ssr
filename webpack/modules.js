/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const client = {
  production: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: path.join(__dirname, '..', 'src'),
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
  dev: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react',
                'stage-2',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                context: path.join(__dirname, '..', 'src'),
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
};

const server = {
  production: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: { emitFile: false },
            },
          ],
        },
      ],
    },
  },
  dev: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
                'react',
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$|\.otf$|\.eot$|\.ico$/,
          use: [
            {
              loader: 'file-loader',
              options: { emitFile: false },
            },
          ],
        },
      ],
    },
  },
};

module.exports = {
  client,
  server,
};
