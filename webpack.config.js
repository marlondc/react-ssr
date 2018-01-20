const merge = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const plugins = require('./webpack/plugins');
const modules = require('./webpack/modules');

const common = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  target: 'web',
};

const server = {
  entry: path.join(__dirname, 'src/server.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat(['react-dom/server'])
    .reduce((ext, mod) => {
      const external = ext;
      external[mod] = `commonjs ${mod}`;
      return external;
    }, {}),
};

const clientConfig = {
  production: merge(
    plugins.client.production,
    modules.client.production,
    client,
    // eslint-disable-next-line
    common
  ),
  dev: merge(
    plugins.client.dev,
    modules.client.dev,
    client,
    // eslint-disable-next-line
    common
  ),
};

const serverConfig = {
  production: merge(
    plugins.server.production,
    modules.server.production,
    server,
    // eslint-disable-next-line
    common
  ),
  dev: merge(
    plugins.server.dev,
    modules.server.dev,
    server,
    // eslint-disable-next-line
    common
  ),
};

const TARGET = process.env.npm_lifecycle_event;

let config;

switch (TARGET) {
  case 'build:client':
    config = clientConfig.production;
    break;
  case 'build:server':
    config = serverConfig.production;
    break;
  case 'build:client:dev':
    config = clientConfig.dev;
    break;
  case 'build:server:dev':
    config = serverConfig.dev;
    break;
  default:
    config = clientConfig.dev;
}

module.exports = config;
