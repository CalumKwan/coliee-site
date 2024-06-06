/* config-overrides.js */
const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    buffer: require.resolve('buffer/'),
    crypto: require.resolve('crypto-browserify'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    os: require.resolve('os-browserify/browser'),
    path: require.resolve('path-browserify'),
    stream: require.resolve('stream-browserify'),
    url: require.resolve('url/'),
    querystring: require.resolve('querystring-es3'),
    fs: false, // or a suitable polyfill if needed
    child_process: false, // or a suitable polyfill if needed
    net: false, // or a suitable polyfill if needed
    tls: false, // or a suitable polyfill if needed
    vm: require.resolve('vm-browserify'),
    assert: require.resolve('assert/'),
    process: require.resolve('process/browser')
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    })
  );
  return config;
};
