import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
let base;
if (process.env.SITE_URL) {
  const url = new URL(process.env.SITE_URL);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('SITE_URL must be an HTTPS origin, without a path, query or credentials');
  base = url.origin;
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const path of ['index.html', 'download', 'docs', 'assets', '_headers', '_redirects', '404.html']) await cp(resolve(root, path), resolve(output, path), { recursive: true });
const pages = ['/', '/download/', '/docs/'];
if (base) {
  for (const path of pages) {
    const target = resolve(output, '.' + path, 'index.html');
    const html = await readFile(target, 'utf8');
    const url = base + path;
    const metadata = `<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"><meta property="og:image" content="${base}/assets/social-card.png"><meta name="twitter:image" content="${base}/assets/social-card.png">`;
    const data = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'norio', url: base + '/', inLanguage: 'zh-CN', description: 'AI 对话与文档创作' };
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
console.log('Built static site: dist/');
