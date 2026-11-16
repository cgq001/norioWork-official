# norioWork 官网设计对照验收

## 最新调整：GitCode 固定最新版入口

Windows 主下载按钮与无 JavaScript 备用入口已统一为 `https://gitcode.com/cgq2100/norioWork/releases/latest`。浏览器实测从官网按钮进入该地址，由 GitCode 定位到当前最新正式版 v0.8.12，并显示安装包；v0.8.15 在发行列表中标为预发布，不计入 latest 正式版。官网移除写死的版本、日期和大小，按钮下说明先进入发行页选择安装包。历史版本仍指向完整发行列表。

DOM 验证覆盖固定链接、不展示旧版本大小、无脚本入口、macOS 未发布状态和切回 Windows；语法与构建检查通过。截图：`docs/design-evidence/download-gitcode-latest.jpg`。不依赖 GitCode API，也不需要凭证。

## 最新微调：纯色渐变首屏

按用户最新要求，仅将首屏颗粒背景替换为 CSS 白色至橘红色的纵向渐变，删除首屏背景图片元素与对应样式。已在浏览器确认渐变生效、图片元素不存在、无横向溢出；布局与交互保持原样。当前截图：`docs/design-evidence/norio-gradient-desktop.jpg`。以下为此前参考设计验收记录。

final result: passed

## 本轮目标

用户重新指定 https://octop.cloud/#overview 及桌面截图，要求参考其设计。已按这次明确的视觉参考调整，不延续上一版灰绿、深色编辑区的设计方向。顶部继续遵守用户已确认的「首页 / 下载」两项导航。

## 设计落地与对照

- 同尺寸对照：`docs/design-evidence/compare-desktop-current.jpg` 与 `compare-mobile-current.jpg`。两张合成图均已打开检查。
- 电脑为 1440×1000，参考与实现均为同尺寸 JPEG；48px / 56px、600 字重标题，80px 品牌角色，36px 徽标，50px 黑白按钮。产品图宽 1148px，两者顶部均约 y=528。
- 手机 CSS 视口 390×844，截图为 390×843（端点取整）；标题 28px / 38px，说明 16px / 24px。参考产品图顶部 y=664，实现 y=666，差异约 2px。
- 2560×1270 宽屏验证：品牌左侧 x=80，产品图 x=706、y≈671，宽 1148，符合用户提供大屏截图的构图比例。
- 暖白至珊瑚橙的颗粒背景、标题中间的小蓝形象、大幅界面和三个白色浮层已实现。PPT、Excel、文档浮层可切换预览。
- 正文保留小蓝的三项特色能力和生成后编辑；改为白色区块、暖色画布，去除上一版深绿编辑背景。最终 CTA 呼应首屏。

## 有意保留的产品差异

1. 标志、吉祥物、客户端和功能说明均使用 norioWork 自有内容。没有复制 Octop 的 Star 数、客户背书、角色和软件界面。
2. 主导航仅有首页和下载；第二个首屏按钮为「了解功能」，跳转本站能力区。
3. 背景复用本项目已有原创 ImageGen V3 资产，颗粒形态和色块分布与参考不同。本轮未生成新图。原始路径、提示词与生成模式保留在 `docs/design-evidence/previous-design-qa.md`。
4. 浮层格式选择是实际可用的客户端预览切换；短屏时适当上移，避免键盘聚焦内容被首屏裁剪。手机隐藏浮层，以完整能力区承接内容。
5. 页面采用原生滚动。没有复制参考站的整屏滚动、公众号弹层或安装命令。

## 验证

- 浮层点击 Excel，End 键切换文档，面板和选择状态一致。
- 图片放大显示正确的 PPT 文件；Escape 关闭并恢复触发器焦点。
- 「了解功能」跳转 `#capabilities`，下载导航进入 `/download/`；Windows 安装包及 GitCode 链接保留。
- 320、390、768、1280、1440、2560px 无横向溢出；1280×720 格式选择卡片底部约 y=699，可完整操作。
- 桌面完整页面、电脑和手机同图对照均已目视检查。浏览器无错误和警告。
- 5 个页面、115 个本地资源和锚点通过检查；ARIA 目标存在，CSS 可解析，首页只有一个 h1。
- `npm run check`、`npm run build`、`git diff --check` 通过。内部设计记录与对照图不进入官网构建。

## 当前证据

- `docs/design-evidence/norio-desktop-current.jpg`
- `docs/design-evidence/norio-mobile-current.jpg`
- `docs/design-evidence/norio-fullpage-current.jpg`
- `docs/design-evidence/octop-desktop-current.jpg`
- `docs/design-evidence/octop-mobile-current.jpg`

以前不带 current 后缀的对照文件为历史版本。图表转换依赖识图模型；文字识别可使用识图模型或可用 OCR。官网展示示例与客户端界面，不执行在线生成。
