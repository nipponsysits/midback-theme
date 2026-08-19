import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { catalog } from '../src/data/catalog';

const root = new URL('../', import.meta.url).pathname.replace(/^\/(.:\/)/, '$1');
const dist = join(root, 'dist');

if (!existsSync(dist)) throw new Error('dist/ is missing. Run the production build first.');

function walk(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(dist);
const sizeFor = (extension: string) =>
  files
    .filter((path) => extname(path) === extension)
    .reduce((total, path) => total + statSync(path).size, 0);

const html = readFileSync(join(dist, 'index.html'), 'utf8');
const javascriptBytes = sizeFor('.js');
const cssBytes = sizeFor('.css');
const fontFiles = files.filter((path) => /\.(?:eot|otf|ttf|woff2?)$/i.test(path));
const expectedBase = process.env.GITHUB_ACTIONS === 'true' ? '/midback-theme/' : '/';

if (!html.includes(`${expectedBase}_astro/`)) {
  throw new Error(`Built assets do not use expected base path: ${expectedBase}`);
}

for (const { id } of catalog.flatMap((group) => group.items)) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Rendered catalog section is missing: ${id}`);
}

if (fontFiles.length) {
  throw new Error(
    `Legacy font assets are not allowed: ${fontFiles.map((path) => relative(root, path)).join(', ')}`,
  );
}

if (javascriptBytes > 150_000) {
  throw new Error(`Client JavaScript budget exceeded: ${javascriptBytes} bytes (budget 150000)`);
}

if (cssBytes > 100_000) {
  throw new Error(`CSS budget exceeded: ${cssBytes} bytes (budget 100000)`);
}

console.log(
  `Verified ${catalog.flatMap((group) => group.items).length} sections, ${javascriptBytes} B JS, ${cssBytes} B CSS, base ${expectedBase}`,
);
