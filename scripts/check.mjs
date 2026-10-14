import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
for (const path of ['assets/site.js', 'assets/download.js', 'assets/download-config.js', 'scripts/build.mjs', 'scripts/serve.mjs', 'scripts/deploy.mjs']) {
  const result = spawnSync(process.execPath, ['--check', path], { cwd: root, stdio: 'inherit' });
  if (result.status !== 0) process.exit(1);
}
for (const path of ['index.html', 'download/index.html', 'docs/index.html', 'changelog/index.html']) {
  const html = await readFile(new URL('../' + path, import.meta.url), 'utf8');
  for (const pattern of [/<html lang="zh-CN">/, /<title>[^<]+<\/title>/, /name="description"/, /<main[ >]/]) if (!pattern.test(html)) throw new Error(`${path}: missing semantic or SEO metadata`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) throw new Error(`${path}: expected one h1`);
}
console.log('Syntax and page metadata checks passed.');
