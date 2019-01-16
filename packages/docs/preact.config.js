import {resolve} from 'path';
import {readdirSync, existsSync} from 'fs';

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function(config, env, helpers) {
  // TODO: Build custom resolver
  const includeDirs = readdirSync('..', {withFileTypes: true})
    .filter(file => file.isDirectory())
    .map(dir => resolve('..', dir.name, 'node_modules'))
    .filter(full => existsSync(full));

  for (const {loader} of helpers.getLoadersByName(config, 'proxy-loader')) {
    if (loader.options && loader.options.options && loader.options.loader) {
      if (loader.options.loader === 'sass-loader') {
        loader.options.options.includePaths.push(...includeDirs);
      }
    }
  }
}
