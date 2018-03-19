/*globals require, __dirname, module*/
const cp = require('cp');
const globCopy = require('glob-copy');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const bundleMapping = require('./componentsList');
const srcPath = path.join(__dirname, 'node_modules', '@material');

class CssMigrationWebpackPlugin {
  copySuperCss() {
    const sourceCssPath = path.join(
      __dirname,
      'node_modules',
      'material-components-web',
      'dist',
      'material-components-web.min.css'
    );
    const sourceScssPath = path.join(
      __dirname,
      'node_modules',
      'material-components-web',
      'material-components-web.scss'
    );
    const destCssFilePath = path.join(__dirname, 'style.css');
    const destScssFilePath = path.join(__dirname);

    //delete already existing file
    if (fs.existsSync(destCssFilePath)) {
      fs.unlinkSync(destCssFilePath);
    }
    cp.sync(sourceCssPath, destCssFilePath);
    globCopy.sync(sourceScssPath, destScssFilePath);
  }
  copyIndividualCss(component, destFolder) {
    const sourcePath = path.join(srcPath, component);
    const sourceCssPath = path.join(
      sourcePath,
      'dist',
      'mdc.' + component + '.css'
    );
    const sourceScssPath = path.join(sourcePath, '*.scss');
    const destCssFilePath = path.join(destFolder, 'style.css');
    const destScssFilePath = path.join(destFolder);
    //delete already existing file
    if (fs.existsSync(destCssFilePath)) {
      fs.unlinkSync(destCssFilePath);
    }

    //copy new file
    cp.sync(sourceCssPath, destCssFilePath);
    globCopy.sync(sourceScssPath, destScssFilePath);

    //get nested folders with .scss files
    const isDirectory = source => fs.lstatSync(source).isDirectory();
    const getSubDirectories = source => {
      if (isDirectory(source)) {
        return fs
          .readdirSync(source)
          .filter(fd => isDirectory(path.join(source, fd)) && fd !== 'dist');
      }
      return [];
    };
    const hasScss = source => {
      if (isDirectory(source)) {
        return (
          fs.readdirSync(source).filter(fd => fd.match(/.*\.scss/gi)).length > 0
        );
      }
      return false;
    };

    const subDirectoriesWithScss = getSubDirectories(sourcePath).filter(dir =>
      hasScss(path.join(sourcePath, dir))
    );
    if (!subDirectoriesWithScss.length) return;

    //create new directories in dest and copy over files
    subDirectoriesWithScss.forEach(subdir => {
      const destSubFolder = path.join(destFolder, subdir);
      const srcSubPath = path.join(sourcePath, subdir, '*.scss');
      if (!fs.existsSync(destSubFolder)) fs.mkdirSync(destSubFolder);
      globCopy.sync(srcSubPath, destSubFolder);
    });
  }
  apply(compiler) {
    compiler.plugin('after-emit', (compilation, callback) => {
      for (let dest in bundleMapping) {
        if (bundleMapping.hasOwnProperty(dest)) {
          const source = bundleMapping[dest];
          const destFolderPath = path.join(__dirname, dest);
          try {
            //create folder if not already present
            if (!fs.existsSync(destFolderPath)) {
              mkdirp.sync(destFolderPath);
            }

            this.copyIndividualCss(source, destFolderPath);
          } catch (err) {
            return callback(err);
          }
        }
      }
      this.copySuperCss();
      callback();
    });
  }
}

module.exports = CssMigrationWebpackPlugin;
