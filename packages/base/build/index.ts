import {statSync} from 'fs';
import {basename, dirname, join, resolve} from 'path';

function isFile(file: string) {
  try {
    return statSync(file).isFile();
  } catch (e) {
    return false;
  }
}

function isDir(file: string) {
  try {
    return statSync(file).isDirectory();
  } catch (e) {
    return false;
  }
}

function simpleResolveSass(path: string) {
  if (isFile(path)) {
    return path;
  }

  const d = dirname(path);
  const f = basename(path);

  const prefixes = ['', '_'];
  const subPaths = ['', '/index'];
  const extensions = ['.scss', '.css'];
  for (const prefix of prefixes) {
    for (const subPath of subPaths) {
      for (const extension of extensions) {
        const file = join(d, `${prefix}${f}${subPath}${extension}`);
        if (isFile(file)) {
          return file;
        }
      }
    }
  }
}

function findInModules(modsPath: string, url: string) {
  const segments = url.split('/');
  let module = segments[0];
  if (module.startsWith('@')) {
    if (segments.length < 2) {
      return new Error(
        'Module group have to consist of at least 2 segments (e.g. ~@group/module)'
      );
    }
    module = `${segments[0]}/${segments[1]}`;
  }

  const modPath = resolve(modsPath, module);
  if (!isDir(modPath)) {
    return;
  }

  const simplePath = resolve(modsPath, url);
  const simpleRes = simpleResolveSass(simplePath);
  if (simpleRes) {
    return simpleRes;
  }

  if (module === url) {
    const packageJson = require(join(modPath, 'package.json'));
    if (packageJson.sass) {
      return simpleResolveSass(join(modPath, packageJson.sass));
    }
  }
}

function nodeResolveSass(url: string, prev: string) {
  const prevDir = dirname(prev);
  const count = prevDir.split('/').length;
  for (let i = 0; i < count; i++) {
    const pars = Array.from(Array(i).keys())
      .map(() => '..')
      .join('/');
    const searchPath = resolve(prevDir, pars, 'node_modules');
    if (isDir(searchPath)) {
      const result = findInModules(searchPath, url);
      if (result) {
        if (typeof result === 'string') {
          return {file: result};
        } else {
          return result;
        }
      }
    }
  }
  return new Error(`Cannot resolve ~${url}`);
}

/**
 * Resolves a sass import
 *
 * @param {string} url - the path in import as-is, which LibSass encountered
 * @param {string} prev - the previously resolved path
 */
export function sassResolver(url: string, prev: string) {
  const relPath = resolve(dirname(prev), url);
  try {
    if (url.startsWith('.') || url.startsWith('~/') || url.startsWith('/')) {
      const res = simpleResolveSass(relPath);
      if (res) {
        return {file: res};
      } else {
        return new Error(`Cannot resolve ${url}`);
      }
    } else if (url.startsWith('~')) {
      return nodeResolveSass(url.slice(1), prev);
    } else {
      const res = simpleResolveSass(relPath);
      if (res) {
        return {file: res};
      }
      return nodeResolveSass(url, prev);
    }
  } catch (e) {
    return e;
  }
}
