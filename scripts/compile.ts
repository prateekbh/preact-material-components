import {existsSync, readFileSync} from 'fs';
import * as npx from 'libnpx';
import {join, relative, resolve} from 'path';
import {ls} from 'shelljs';
import {emitWithTsickle, TsickleHost} from 'tsickle';
import {
  createCompilerHost,
  readJsonConfigFile,
  createProgram,
  CompilerOptions
} from 'typescript';
import {DepGraph} from 'dependency-graph';
import * as ProgressBar from 'progress';

function getCfgSource(path) {
  return readJsonConfigFile(join(path, 'tsconfig.json'), p =>
    readFileSync(p, {encoding: 'utf8'})
  );
}

const rootDir = resolve(join(__dirname, '..'));
const pkgDir = resolve(join(__dirname, '..', 'packages'));

const packages = ls(pkgDir);

console.info('Collecting packages...');
const tsPackages = packages.filter(dir => {
  const tsconfigPath = join(pkgDir, dir, 'tsconfig.json');
  return existsSync(tsconfigPath);
});

function project2path(proj) {
  return resolve(join(pkgDir, proj));
}

if (process.argv.includes('--watch')) {
  console.info('Entering watch mode....');
  const args = ['--watch', '-b'];

  const tsProjects: string[] = [];
  tsPackages.forEach(proj => tsProjects.push(project2path(proj)));

  npx({
    cmdOpts: args.concat(tsProjects),
    command: 'tsc',
    package: ['typescript']
  });
} else {
  const options: Partial<TsickleHost> = {
    googmodule: false
  };
  const graph = new DepGraph<{name: string; build: () => void}>();

  console.info('Preparing compilation...');
  tsPackages.forEach(proj => {
    const path = project2path(proj);

    const opts = {
      cfg: getCfgSource(path)
    };
    const compilerHost = createCompilerHost(opts);
    const program = createProgram({
      options: opts,
      rootNames: [path]
    });

    graph.addNode(path, {
      build: () => {
        emitWithTsickle(program, options as TsickleHost, compilerHost, opts);
      },
      name: proj
    });
  });
  tsPackages.forEach(proj => {
    const path = project2path(proj);
    const cfg = getCfgSource(path);

    const jsonCfg: CompilerOptions & {
      references: Array<{path?: string}>;
    } = JSON.parse(cfg.text);

    if (jsonCfg.references) {
      jsonCfg.references.forEach(ref => {
        if (ref.path) {
          graph.addDependency(path, resolve(path, ref.path));
        }
      });
    }
  });

  const order = graph.overallOrder();
  const bar = new ProgressBar('Compiling [:bar] :current/:total :percent', {
    complete: '=',
    incomplete: ' ',
    total: order.length
  });

  bar.render(0);
  for (const pkg of order) {
    const {build, name} = graph.getNodeData(pkg);
    bar.interrupt(`Compiling: ${name}`);
    build();
    bar.tick(1);
    graph.setNodeData(pkg, undefined);
  }
  bar.terminate();
}
