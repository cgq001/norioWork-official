# 小蓝办公（norioWork）官网

开发、部署及维护文档统一放在 `docs/` 下；根目录 `README.md` 由项目负责人维护。

原生 HTML、CSS、JavaScript 静态站点，无前端框架、无第三方运行时依赖。

## 页面与内容

- `/`：按用户指定 Octop 参考适配的居中首屏、暖色颗粒、大幅真实界面、三步上手、功能侧栏切换、创作风格、FAQ 与下载入口。
- `/download/`：独立下载页，Windows/macOS/Linux 标签，支持键盘左右箭头、Home、End 切换。
- `/changelog/`：左侧版本目录，右侧更新内容，随滚动高亮当前版本；以公开发布记录为准。
- `/docs/`：独立文档页，包含模型配置、编辑器、资料管理、技能、通道、定时任务和常见问题。
- `404.html`：真正的 404 页面，不使用 SPA 全站回退。

首页以 https://octop.cloud/ 的实际电脑/手机截图为当前视觉基准，采用居中标题与品牌形象、黑色按钮、暖色颗粒背景和大幅真实客户端界面。中段包括三步上手标签切换、PPT 专题、电脑功能侧栏和手机叠放卡片，保留复制指令、放大图片和原生 FAQ。用户明确选择了这一参考，前面的配色探索不再作为当前视觉方向。

首页仅加载 `assets/official.css`，完整替换旧首页样式。内页保留 `assets/styles.css` 的文档与下载内容布局，并用 `official.css` 统一品牌、导航与页脚；构建为样式和脚本生成内容哈希。`assets/styles/` 保存客户端内置 PPT 风格预览；`assets/demos/` 保存图表、文字照片演示素材及 AI 生成的 PPT 封面配图。演示图表与网页表格的数据保持一致，照片的原文与整理结果保留一致事实。

当前视觉参考（2026-11-16）：https://octop.cloud/ 。实现只借鉴版式与呈现方式；小蓝的角色、图标、截图、功能与下载均使用自己的素材和真实内容。没有复制对方的 Star 数、开源承诺、桌宠功能或安装命令。完整对照与功能 QA 见项目根目录 design-qa.md。

下载配置与更新日志已按 2026-11-16 查询的 GitHub 最新公开发行版 `v0.8.12` 更新（2026-11-12 发布），保留国内 GitCode 入口。客户端源码的开发版本不直接用作官网公开下载版本。发布来源：<https://github.com/cgq001/norioWork/releases/tag/v0.8.12>。

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

当前 Windows 主按钮固定指向 `https://gitcode.com/cgq2100/norioWork/releases/latest`，由 GitCode 跳转到最新正式发行版页面，访客在该页面选择安装包。以后发布新的正式版本无需改官网链接。预发布不视为最新正式版；2026-11-16 实测入口跳转到 v0.8.12，v0.8.15 在 GitCode 中标为预发布。

当前不在官网写死版本号、发布日期和文件大小，避免新版本发布后信息过期。`version`、`publishedAt` 保留 `null`，Windows 配置使用固定 latest 地址与发行页下载说明；无 JavaScript 时也指向同一 GitCode 入口。下方的历史版本链接仍指向完整发行列表。无需凭证、浏览器请求 API 或服务端解析。

下载配置位于 `assets/download-config.js`。当前 latest 模式无需填写版本号、日期和大小；仅在需要固定某个已验证版本时填写这些元数据及安装包 HTTPS 直链。未发布的包保留 `null`，页面会显示“待发布”，不生成无效下载链接。系统标签用于展示未来下载位置，不代表所有平台已发布。

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

没有编造评分、价格或软件版本结构化数据。更换域名后重新构建；上线后可在搜索引擎站长平台提交 sitemap。`assets/social-card.png` 与 `assets/social-card.svg` 已同步小蓝办公品牌、首页主张和 PPT 成果示意。

## 当前首页调整（2026-11-16，Octop 明确参考版）

最新微调：用户指定首屏使用白色到橘红色的平滑渐变。首屏现使用 CSS `linear-gradient`，已删除 `.intro-backdrop` 图片与样式；下述颗粒首屏说明为此前版本记录。其他区块的素材不变，分享截图已同步。

按用户最新提供的 Octop 链接与截图，恢复暖色颗粒首屏、48px 居中标题、80px 标题角色、黑白双按钮和浮层产品界面。导航继续仅保留首页、下载；「了解功能」跳转首页能力区。产品预览图宽 1148px，并适配高屏底部对齐；2560×1270 下界面顶部约 671px。手机 390×844 下产品图顶部约 666px，浮层隐藏。

正文继续介绍 PPT、图表转 Excel、拍照转 Word 和生成后编辑，采用白底与暖色展示图，移除上一版深绿色区域。原有 ImageGen V3 颗粒背景复用，未新增生成图；完整生成记录见 previous-design-qa.md，最新视觉与交互检查见项目根目录 design-qa.md。社交分享图已改为本版真实页面截图。

## 上一版首页调整（2026-11-16，精简导航版）

以下为上一版历史记录。顶部与页脚只展示「首页」「下载」，所有首页下载入口均跳转 `/download/`。旧指南与日志路径保留兼容，不再从主站导航推广。

首页叙事顺序：产品首屏 → PPT、图表转 Excel、拍照转 Word 三个特色场景 → 生成后继续编辑 → 下载。采用暖白、灰绿、深绿编辑区；移除颗粒背景、标题吉祥物、浮动说明卡、安装教程、完整风格图库及 FAQ。品牌图标与已有客户端截图保留。PPT、Excel、文档预览支持点击与方向键切换，图片可放大并用 Escape 关闭。手机顶部直接显示首页和下载，无折叠菜单。

本轮没有新生成图像。此前的 AI 海岸摄影与颗粒背景作为历史素材保留，当前首页不引用。历史生成记录存于本文件与 `docs/design-evidence/previous-design-qa.md`。当前验收见根目录 `design-qa.md`。

## 历史验证记录

2026-11-16：新版已在 1280×720 和 390×844 视口与参考同图比较；主标题 48px/28px，与参考同类系统字体栈；首屏按钮和界面位置已对齐。验证上手步骤、上下方向键功能切换、指令复制、图片放大/Escape、手机菜单及下载、FAQ 单项展开。320px、768px 无横向溢出，浏览器控制台无错误或警告。源码中的对照截图与开发记录不进入官网构建。

## 更新后仍看到旧样式

构建现在为 CSS 与 JavaScript 生成内容哈希文件名，HTML 使用对应版本地址；HTML 设置 `Cache-Control: no-cache` 以在后续访问时重新验证。无需手工修改资源版本。若首次升级后仍显示旧版，先确认 Pages 最新生产部署提交号，再强制刷新一次。全量缓存规则或自定义域名前的其他代理可能覆盖 Pages 缓存头，应单独检查。

### SITE_URL 格式

建议填写 `https://work.norio.top`。构建也接受纯域名 `work.norio.top`，自动补全 `https://` 并去除首尾空白。不要填写页面路径或 HTTP 地址。Cloudflare 修改变量后需要重新部署。

## 本次设计与配图记录

- 设计：明亮白底、蓝色主按钮、浅紫/浅绿/浅蓝能力卡片，以及 PPT/Excel/Word 成果组合。首页独立使用 `assets/official.css`。
- 最终配图：`D:/work/office/norioWork-official/assets/demos/coastal-architecture.webp`。用于示例 PPT 的封面摄影区域，属于 AI 生成素材，不是真实地点或客户案例。源 PNG 保留在 Codex 生成图片目录，项目使用 WebP 优化传输。
- 生成方式：ImageGen 内置工具；未使用 CLI 或自备 API Key。
- 最终生成提示词（原文）：

> Use case: photorealistic-natural. Asset type: a landscape photograph used inside an example presentation cover on a refined AI office software website. Create an exceptionally beautiful high-end editorial architecture photograph, wide 3:2 composition: a sculptural contemporary white concrete art museum on a rocky Mediterranean coast, calm turquoise sea, a few deep green umbrella pine trees, warm ivory stone, clear very pale blue sky. The building has elegantly curved arches and long horizontal terraces, photographed from slightly elevated perspective, small in frame on the right half, with richly textured sea and cliff in the foreground. Quiet, optimistic, sophisticated natural daylight, sophisticated soft warm color grading, realistic architectural photography, pristine fine detail. No people, no letters, no captions, no logos, no UI, no watermarks. This will be cropped as a presentation's right-side photographic panel, so make the whole scene beautifully composed without relying on text.

## 上一版参考还原与背景素材

- 视觉验收：项目根目录 `design-qa.md`，`final result: passed`。同图对照在 `docs/design-evidence/`。
- 上一版背景：`assets/reference/norio-hero-grain-v3.webp`，1672 × 941。通过内置 ImageGen 生成/编辑，没有直接复制 Octop 官网背景；完整最终提示词和原始文件位置在 QA 报告中。
- 上一版首页直接展示真实 PPT 客户端截图，配合产品已有品牌形象和文档图标。`assets/icons/` 的线性图标来自 Lucide，许可证一并保留。
- 上一版使用海岸建筑 AI 配图展示 PPT 场景。前节保留该素材的生成记录。
- 构建只发布 `docs/index.html`，不复制 `docs/design-evidence/`、开发说明或项目根目录的 QA 报告。
