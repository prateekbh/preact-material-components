import {existsSync} from 'fs';
import {join, resolve} from 'path';
import {ls, exec} from 'shelljs';

const rootDir = resolve(join(__dirname, '..'));
const pkgDir = join(rootDir, 'packages');

function project2path(proj: string, tsconfigName: string) {
  if (tsconfigName === 'tsconfig.json') {
    return resolve(join(pkgDir, proj));
  } else {
    return resolve(join(pkgDir, proj, tsconfigName));
  }
}

async function compile(tsconfigName: string) {
  const packages = ls(pkgDir);

  console.log(`Building with ${tsconfigName}`);

  const tsPackages = packages.filter(dir => {
    const tsconfigPath = join(pkgDir, dir, tsconfigName);
    return existsSync(tsconfigPath);
  });

  const args = ['--build'];
  if (process.argv.includes('--watch')) {
    args.push('--watch');
  }

  const tsProjects: string[] = tsPackages.map(proj =>
    project2path(proj, tsconfigName)
  );

  const res = exec(
    ['tsc']
      .concat(args)
      .concat(tsProjects)
      .join(' ')
  );
  if (res.code) {
    console.error('tsc failed');
    process.exit(1);
  }
}

if (require.main === module) {
  const posArgv = process.argv.filter(v => !v.startsWith('--')).slice(2);
  // noinspection JSIgnoredPromiseFromCall
  compile(posArgv.length ? `tsconfig.${posArgv[0]}.json` : 'tsconfig.json');
}
