var path = require('path');

module.exports = function override(config, env) {
  if (config.optimization) {
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks.cacheGroups = {
        default: false,
      };
    }
    if (config.optimization.runtimeChunk) {
      config.optimization.runtimeChunk = false;
    }
  }
  if (config.resolve && config.resolve.alias) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['~'] = path.resolve(__dirname, '');
  }
  return config;
};
