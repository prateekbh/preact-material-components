const {sassResolver} = require('@preact-material-components/base');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
module.exports = function(config, env, helpers) {
  for (const {loader} of helpers.getLoadersByName(config, 'proxy-loader')) {
    if (loader.options && loader.options.options && loader.options.loader) {
      if (loader.options.loader === 'sass-loader') {
        loader.options.options.importer = sassResolver;
      }
    }
  }
  for (const {loader} of helpers.getLoadersByName(config, 'sass-loader')) {
    if (!loader.options) {
      loader.options = {};
    }
    loader.options.importer = sassResolver;
  }
};
