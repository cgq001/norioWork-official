import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
if (!process.env.SITE_URL || !process.env.CLOUDFLARE_PAGES_PROJECT) {
  console.error('Set SITE_URL and CLOUDFLARE_PAGES_PROJECT before deploying. See docs/development-and-deployment.md.');
  process.exit(1);
}
let result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
// 官方 Wrangler；固定版本，使用 Cloudflare 已配置认证，不保存令牌。
result = spawnSync('npx', ['--yes', 'wrangler@4.45.0', 'pages', 'deploy', 'dist', '--project-name', process.env.CLOUDFLARE_PAGES_PROJECT, '--branch', 'main'], { cwd: root, stdio: 'inherit' });
process.exit(result.status || (result.error ? 1 : 0));
