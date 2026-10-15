# norioWord 官网

开发、部署及维护文档统一放在 `docs/` 下；根目录 `README.md` 由项目负责人维护。

原生 HTML、CSS、JavaScript 静态站点，无前端框架、无第三方运行时依赖。

## 页面与内容

- `/`：产品介绍、四款编辑器切换、滚动展示与 AI 修改示意。首屏无下载按钮，下载入口位于产品窗口之后。
- `/download/`：独立下载页，Windows/macOS/Linux 标签，支持键盘左右箭头、Home、End 切换。
- `/changelog/`：左侧版本目录，右侧更新内容，随滚动高亮当前版本；目前为明确标注的示例日志。
- `/docs/`：独立文档页，包含产品介绍、创作指南和常见问题。
- `404.html`：真正的 404 页面，不使用 SPA 全站回退。

首页界面和 AI 编辑是交互示意，不接入实际 AI。文档为初版内容；发布前根据实际产品核对。支持减少动态效果的系统设置。

## 本地开发

需要 Node.js 22 或以上。没有依赖需要安装，也没有 lockfile。

```sh
npm run dev
```

服务默认监听 3000 端口；可用 `PORT=3001 npm run dev` 调整。

```sh
npm run check       # JavaScript 语法、语义页面与 SEO 元数据检查
npm run build       # 输出 dist/，未设置 SITE_URL 时生成禁止收录的预览构建
npm run preview     # 本地检查 dist/ 构建结果
```

所有脚本都从项目根目录执行；不会修改源文件。`build` 每次重新生成 `dist/`。

## 下载配置

编辑 `assets/download-config.js`：填写真实 `version`、`publishedAt` 和各安装包的 HTTPS `url`。未发布的包保留 `null`，页面会显示“待发布”，不生成无效下载链接。系统标签用于展示未来下载位置，不代表所有平台已发布。

安装包应放在产品的发布平台或 Cloudflare R2 等文件存储，不建议直接提交到网站 Git 仓库。仅使用公开安装包 URL，不要填凭证、私有签名密钥或其他秘密。正式发布前核对平台名称、架构与文件链接。

## Cloudflare Pages：Git 自动部署（推荐）

1. Cloudflare 控制台进入 **Workers & Pages**，创建 Pages 项目，连接本 GitHub 仓库。
2. 生产分支选择 `main`，框架预设选择 **None**，根目录留空。
3. 构建命令填写 `npm run build`，构建输出目录填写 `dist`。
4. 设置构建变量 `NODE_VERSION=22`。设置 `SITE_URL` 为真实生产站点的 HTTPS 根地址（不要带路径、查询或账号信息）。首次可填写实际分配的 Pages 域名；绑定自定义域名后更新它并重新部署。
5. 部署后在项目的 Custom domains 绑定正式域名，检查 `/`、`/download/`、`/docs/`、`/robots.txt`、`/sitemap.xml` 及不存在地址的 404 响应。
6. 后续推送 `main` 即会触发自动构建部署。

无需 Functions、数据库或服务器。`_headers` 和 `_redirects` 会复制到 `dist/`，由 Pages 应用。不要添加 `/* /index.html 200`，否则真实不存在的页面会变成 soft 404。

如果只做测试、不希望收录，保持 `SITE_URL` 未设置；构建会写入 `X-Robots-Tag: noindex, nofollow` 和 robots 禁止收录指令。正式上线必须设置真实 `SITE_URL` 后重新构建。若 Pages 分支预览继承了生产变量，可在预览环境覆盖/移除 `SITE_URL`，同时保留平台自带的预览禁止收录策略。

## Cloudflare Pages：命令行部署（可选）

部署脚本固定使用官方 `wrangler@4.45.0`（通过 npx 下载，需网络）。先创建 Pages 项目并完成官方认证：

```sh
npx --yes wrangler@4.45.0 login
npx --yes wrangler@4.45.0 pages project create norio-official --production-branch main
```

然后设置实际域名和项目名：

```sh
export SITE_URL='https://你的实际域名'
export CLOUDFLARE_PAGES_PROJECT='norio-official'
npm run deploy
```

`deploy` 会先构建，构建失败不上传，成功后执行 `wrangler pages deploy dist --project-name ... --branch main`。CI 可通过安全变量提供 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID`，不要提交 `.env` 或令牌。Git 集成方式不需要这个命令，也无需仓库保存 Cloudflare 令牌。

本项目尚未实际部署到 Cloudflare；首次部署需你的 Cloudflare 项目及授权。

## SEO

每页独立标题、中文描述、语义 HTML、单个 H1、语言标识和 Open Graph 标签。设置 `SITE_URL` 的生产构建生成：

- 各页面 canonical、`og:url` 与社交分享 PNG 图片地址；
- 首页 WebSite JSON-LD；
- 仅包含实际页面的 `sitemap.xml`；
- 指向 sitemap 的 `robots.txt`。

没有编造评分、价格或软件版本结构化数据。更换域名后重新构建；上线后可在搜索引擎站长平台提交 sitemap。`assets/social-card.png` 是默认分享图，可换成正式品牌素材。

## 验证记录

已在 Chromium 验证：首页编辑器与修改示例，独立页面跳转，系统标签键盘切换，未发布包状态和配置真实 URL 后的链接生成；三个页面在 1440、768、390 像素宽度下无横向溢出。Node 检查与预览/生产构建通过。Cloudflare 上传和实际产品安装包尚未验证。

## 更新后仍看到旧样式

构建现在为 CSS 与 JavaScript 生成内容哈希文件名，HTML 使用对应版本地址；HTML 设置 `Cache-Control: no-cache` 以在后续访问时重新验证。无需手工修改资源版本。若首次升级后仍显示旧版，先确认 Pages 最新生产部署提交号，再强制刷新一次。全量缓存规则或自定义域名前的其他代理可能覆盖 Pages 缓存头，应单独检查。
