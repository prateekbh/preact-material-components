/*globals require, __dirname*/

const cp = require("cp");
const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const bundleMapping = require("./componentsList");
const srcPath = path.join(__dirname, "node_modules", "@material");

copyCss();
copySuperCss();

function copyCss() {
  for (let dest in bundleMapping) {
    if (bundleMapping.hasOwnProperty(dest)) {
      const source = bundleMapping[dest];
      const sourcePath = path.join(
        srcPath,
        source,
        "dist",
        "mdc." + source + ".css"
      );
      const destFolderPath = path.join(__dirname, dest);

      //create folder if not already present
      if (!fs.existsSync(destFolderPath)) {
        mkdirp(destFolderPath);
      }
      const destFilePath = path.join(destFolderPath, "style.css");
      //delete already existing file
      if (fs.existsSync(destFilePath)) {
        fs.unlinkSync(destFilePath);
      }
      //copy new file
      cp.sync(sourcePath, destFilePath);
    }
  }
}

function copySuperCss() {
  const sourcePath = path.join(
    __dirname,
    "node_modules",
    "material-components-web",
    "dist",
    "material-components-web.min.css"
  );
  const destFilePath = path.join(__dirname, "style.css");

  //delete already existing file
  if (fs.existsSync(destFilePath)) {
    fs.unlinkSync(destFilePath);
  }

  cp.sync(sourcePath, destFilePath);
}
