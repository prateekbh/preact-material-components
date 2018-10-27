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

console.log(`$ ${['ttsc', '-b'].concat(tsRel).join(' ')}`);

const args = ['-b', '-V'];
if ('--watch' in process.argv) {
  args.push('--watch');
}

npx({
  cmdOpts: args.concat(tsProjects),
  command: 'ttsc',
  package: ['ttypescript']
});
