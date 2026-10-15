import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
let base;
const siteInput = process.env.SITE_URL?.trim();
if (siteInput) {
  let url;
  try {
    url = new URL(siteInput.includes('://') ? siteInput : 'https://' + siteInput);
  } catch {
    throw new Error('Invalid SITE_URL. Use a domain such as work.norio.top or https://work.norio.top.');
  }
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('SITE_URL must be an HTTPS origin, without a path, query or credentials');
  base = url.origin;
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const path of ['index.html', 'download', 'docs', 'changelog', 'assets', '_headers', '_redirects', '404.html']) await cp(resolve(root, path), resolve(output, path), { recursive: true });
const pages = ['/', '/download/', '/docs/', '/changelog/'];
if (base) {
  for (const path of pages) {
    const target = resolve(output, '.' + path, 'index.html');
    const html = await readFile(target, 'utf8');
    const url = base + path;
    const metadata = `<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"><meta property="og:image" content="${base}/assets/social-card.png"><meta name="twitter:image" content="${base}/assets/social-card.png">`;
    const data = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'norioWord', url: base + '/', inLanguage: 'zh-CN', description: 'AI 对话与文档创作' };
    await writeFile(target, html.replace('</head>', metadata + (path === '/' ? `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>` : '') + '</head>'));
  }
  await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(path => `<url><loc>${base + path}</loc></url>`).join('')}</urlset>`);
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
} else {
  // 防止预览域名先被收录；正式部署必须设置 SITE_URL。
  await writeFile(resolve(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  await writeFile(resolve(output, '_headers'), (await readFile(resolve(output, '_headers'), 'utf8')) + '\n/*\n  X-Robots-Tag: noindex, nofollow\n');
  console.warn('SITE_URL unset: preview build has noindex headers and no sitemap. Set SITE_URL for production SEO.');
}
// Content-addressed resources prevent new HTML from reusing a previous release's CSS/JS.
const assetMap = new Map();
for (const name of ['styles.css', 'site.js', 'download.js', 'download-config.js', 'norioWork-horizontal.svg']) {
  const content = await readFile(resolve(output, 'assets', name));
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const dot = name.lastIndexOf('.');
  const versioned = name.slice(0, dot) + '.' + hash + name.slice(dot);
  await writeFile(resolve(output, 'assets', versioned), content);
  assetMap.set('/assets/' + name, '/assets/' + versioned);
}
for (const file of ['index.html', 'download/index.html', 'docs/index.html', 'changelog/index.html', '404.html']) {
  const target = resolve(output, file);
  let html = await readFile(target, 'utf8');
  for (const [original, versioned] of assetMap) html = html.replaceAll(original, versioned);
  await writeFile(target, html);
}
console.log('Built static site: dist/ (versioned CSS/JavaScript)');
