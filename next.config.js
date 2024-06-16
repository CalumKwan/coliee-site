const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new NodePolyfillPlugin());
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
};
