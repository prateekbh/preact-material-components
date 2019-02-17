import {existsSync} from 'fs';
import * as npx from 'libnpx';
import {join, resolve} from 'path';
import {ls} from 'shelljs';

if (require.main === module) {
  const rootDir = resolve(join(__dirname, '..'));
  const pkgDir = join(rootDir, 'packages');

  function project2path(proj) {
    return resolve(join(pkgDir, proj));
  }

  const packages = ls(pkgDir);

  console.info('Collecting packages...');
  const tsPackages = packages.filter(dir => {
    const tsconfigPath = join(pkgDir, dir, 'tsconfig.json');
    return existsSync(tsconfigPath);
  });

  const args = ['--build'];
  if (process.argv.includes('--watch')) {
    args.push('--watch');
  }

  const tsProjects: string[] = [];
  tsPackages.forEach(proj => tsProjects.push(project2path(proj)));

  npx({
    cmdOpts: args.concat(tsProjects),
    command: 'tsc',
    package: ['typescript']
  });
}
