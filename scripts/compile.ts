import {existsSync} from 'fs';
import * as npx from 'libnpx';
import {join, relative} from 'path';
import {ls} from 'shelljs';

const rootDir = join(__dirname, '..');
const pkgDir = join(__dirname, '..', 'packages');

const packages = ls(pkgDir);

const tsPackages = packages.filter(path => {
  const tsconfigPath = join(pkgDir, path, 'tsconfig.json');
  return existsSync(tsconfigPath);
});

const tsRel: string[] = [];
const tsProjects: string[] = [];
tsPackages.forEach(path => {
  const basePath = join(pkgDir, path);
  tsProjects.push(basePath);
  tsRel.push(relative(rootDir, basePath));
});

const args = ['-b'];
if (process.argv.indexOf('--watch') !== -1) {
  args.push('--watch');
}

console.log(
  `$ ${['tsc']
    .concat(args)
    .concat(tsRel)
    .join(' ')}`
);

npx({
  cmdOpts: args.concat(tsProjects),
  command: 'tsc',
  package: []
});
