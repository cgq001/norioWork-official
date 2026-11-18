# 小蓝办公（norioWork）官网

开发、部署及维护文档统一放在 `docs/` 下；根目录 `README.md` 由项目负责人维护。

原生 HTML、CSS、JavaScript 静态站点，无前端框架、无第三方运行时依赖。

## 当前下载方式（2026-11-18）

用户已取消独立下载页和导航中的「下载」。首页所有下载入口直接前往 `https://gitcode.com/cgq2100/norioWork/releases/latest`。顶部右侧、首屏、系统提示、底部与功能详情中的入口使用同一公开地址，无需JavaScript，也不写死版本。旧 `/download`、`/download/`、`/download.html` 通过302跳转兼容；本地服务与生产 `_redirects` 使用相同规则。下文2026-11-17的下载页设计章节仅为历史记录。

## 页面与内容

- `/`：按 2026-11-17 用户选定的蓝白参考图实现：左文右图首屏、六项能力快捷条、四个办公灵感场景、六项核心能力、四项产品优势、四类适用人群、系统下载区和常见问题。场景卡片和能力按钮打开功能详情弹层；FAQ 使用原生 details，支持键盘展开。
- `/download/`：旧地址兼容跳转，不再存在独立页面，也不进入站点地图。
- `/changelog/`：左侧版本目录，右侧更新内容，随滚动高亮当前版本；以公开发布记录为准。
- `/docs/`：独立文档页，包含模型配置、编辑器、资料管理、技能、通道、定时任务和常见问题。
- `404.html`：真正的 404 页面，不使用 SPA 全站回退。

当前首页以用户 2026-11-17 新增内容的图片为视觉基准，参考存于 `docs/design-evidence/extended-home-reference.png`。采用蓝白配色和紧凑布局，后续按用户反馈增大下半页高度与留白，1024px 宽时整页约2112px高；平板与手机调整为上下主视觉、两列场景和三列或两列能力。之前的 Octop 与暖色方案仅保留历史记录。

首页加载 `assets/home.css`，不再加载运行时JavaScript；独立下载页及其CSS、脚本已移除，原实现存于内部 `docs/design-evidence/retired-download/`，其他内页保留已有样式。构建为新旧页面使用的 CSS 和 JavaScript 生成内容哈希，避免更新后使用旧代码。七张原创宣传与场景配图位于 `assets/campaign/`，完整提示词、模式与原图路径见 `docs/design-evidence/blue-home-assets.md`。图标沿用既有产品资产与 Lucide，照片和插画为 AI 功能示意，实际识别、生成与编辑在客户端完成。

新增四个人群角色位于 `assets/campaign/audience-*.webp`，完整提示词、生成模式与原始路径见 `docs/design-evidence/extended-home-assets.md`。首页所有可点击的下载和系统入口均直达GitCode最新正式版。macOS 尚未发布，首页与下载页明确显示待发布。

完整同图对照、字体与响应式验收见项目根目录 `design-qa.md`。静态官网不调用模型、不上传用户材料；能力卡片只展示说明。导航只保留首页；所有下载按钮直接进入固定的GitCode latest发行页获取最新正式版。

下载入口已经改为 GitCode 固定 latest 正式版发行页，不在官网写死版本号、日期或大小；具体说明见下文「下载配置」。更新日志保留已公开发布的历史记录。

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

## 下载入口维护

当前分发地址固定为 `https://gitcode.com/cgq2100/norioWork/releases/latest`。由GitCode选择最新正式版，官网不展示可能过期的版本号、日期和文件大小；发布新版无需改链接。预发布是否纳入latest由GitCode控制。

首页、产品指南与更新日志中的下载链接均为原生HTTPS链接。没有接口凭证或运行时解析；不再使用已移除的 `assets/download-config.js`。若未来更换分发平台，需要同步修改公开HTML和 `_redirects` 中的目标地址。macOS/Linux尚未发布的提示保留，以实际发行页为准。

旧下载页、样式及脚本仅在 `docs/design-evidence/retired-download/` 存档，不进入构建。生产构建不再复制下载页面，也不生成其canonical或站点地图条目。本地服务支持 `_redirects` 中的精确路径规则，修改规则后需重启服务。

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

## 下载页蓝白改版（2026-11-17）

按用户提供的1717×916参考实现。新主视觉为 `assets/campaign/download-hero.webp`，完整生成记录见 `docs/design-evidence/download-hero-imagegen.txt`。保留真实机器人品牌，未发布的macOS显示待发布，Windows固定latest地址不变；其他安装包信息保留在原生dialog内，支持键盘与深链接。下载页对照及响应式证据以 `download-blue-` 命名，验收见根目录 `design-qa.md`。

## 页头统一修正（2026-11-17）

首页和下载页现在直接使用同一套页头HTML结构与 `home.css` 规则，只切换 `aria-current`。下载页CSS仅定义正文，不再覆盖页头。统一54px高度、1236px最大容器宽度、36px品牌图标、16px桌面导航以及右侧立即下载按钮；所有断点复用首页设置。桌面与手机实际测量一致，完整证据见 `docs/design-evidence/shared-header-metrics.json` 与根目录验收报告。

## 首页整体加高（2026-11-18）

按用户最新反馈，整个首页首屏与卡片统一增加高度和上下留白：首屏450px，能力快捷栏80px；1280px下场景卡片约307px、功能158px、优势160px、人群172px、下载区216px、系统卡片与FAQ82px。手机使用对应较高尺寸并保持自然换行。页头与下载行为不变。验收见根目录 `design-qa.md`，截图和高度记录使用 `taller-home-` 前缀。

## 指定区域取消点击（2026-11-18）

用户红框内的六项能力栏和四张场景卡片已改为静态HTML（列表项与article），移除data-capability、弹层属性、按钮焦点、手型光标与悬停浮动。下方核心能力的原有详情交互不受影响。点击实测不再打开dialog，截图 `docs/design-evidence/static-home-cards.jpg`。

## 核心能力卡片取消点击（2026-11-18）

六张核心能力卡片改为静态article，移除点击、箭头、手型光标与悬停浮动。至此首页所有功能介绍区都为静态展示，详情dialog及其脚本、CSS一并移除。原脚本保存在内部证据 `retired-capability-details.js`，不进入站点构建；原生FAQ仍可展开。验证截图 `docs/design-evidence/static-core-cards.jpg`。
