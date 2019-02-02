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

function getCfgSource(path) {
  return readJsonConfigFile(join(path, 'tsconfig.json'), p =>
    readFileSync(p, {encoding: 'utf8'})
  );
}

const rootDir = resolve(join(__dirname, '..'));
const pkgDir = resolve(join(__dirname, '..', 'packages'));

const packages = ls(pkgDir);

const tsPackages = packages.filter(path => {
  const tsconfigPath = join(pkgDir, path, 'tsconfig.json');
  return existsSync(tsconfigPath);
});

const tsRel: string[] = [];
const tsProjects: string[] = [];
tsPackages.forEach(path => {
  const basePath = resolve(join(pkgDir, path));
  tsProjects.push(basePath);
  tsRel.push(relative(rootDir, basePath));
});

if (process.argv.indexOf('--watch') !== -1) {
  const args = ['--watch', '-b'];

  console.log(
    `$ ${['tsc']
      .concat(args)
      .concat(tsRel)
      .join(' ')}`
  );

  npx({
    cmdOpts: args.concat(tsProjects),
    command: 'tsc',
    package: ['typescript']
  });
} else {
  const options: Partial<TsickleHost> = {
    googmodule: false
  };
  const graph = new DepGraph<() => void>();

  tsProjects.map(path => {
    const opts = {
      cfg: getCfgSource(path)
    };
    const compilerHost = createCompilerHost(opts);
    const program = createProgram({
      options: opts,
      rootNames: [path]
    });

    graph.addNode(path, () => {
      emitWithTsickle(program, options as TsickleHost, compilerHost, opts);
    });
  });
  tsProjects.map(path => {
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
  for (const pkg of order) {
    const buildFn = graph.getNodeData(pkg);
    console.log(`Building: ${pkg}`);
    buildFn();
  }
}
