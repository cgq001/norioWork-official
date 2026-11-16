# norioWork 官网参考设计检查

final result: passed

## 对照目标与证据

- 用户指定参考：<https://octop.cloud/#overview>。按该站的布局、字号、留白、黑色按钮、暖色颗粒画布与大幅界面展示进行产品适配，内容为 norioWork。
- 参考电脑截图：`docs/design-evidence/octop-desktop.jpg`。
- 参考手机截图：`docs/design-evidence/octop-mobile.jpg`。
- 实现电脑截图：`docs/design-evidence/norio-desktop.jpg`。
- 实现手机截图：`docs/design-evidence/norio-mobile.jpg`。
- 完整同图对照：`docs/design-evidence/compare-desktop.jpg`、`docs/design-evidence/compare-mobile.jpg`。
- 局部同图对照：`docs/design-evidence/compare-hero-detail.jpg`，用于检查标题、角色、正文、按钮的字级与位置。
- 电脑 CSS 视口和两张实际截图均为 1280 × 720，像素比约 1。
- 手机 CSS 视口为 390 × 844，两张实际截图均为 390 × 843；对照图统一到 390 × 844，只有截图端点的 1 像素取整差。
- 状态：首屏、菜单关闭、参考站公众号弹层关闭，默认上手步骤和功能项。

## 检查结果

没有遗留的 P0/P1/P2 问题。

1. **字体与层级**：使用参考站同类系统字体栈，电脑主标题 48px / 56px、字重 600，手机主标题 28px / 38px；主体文案 16px / 24px。二级标题、导航、按钮和说明文字的层级已检查。
2. **间距与比例**：居中徽标、标题中穿插品牌形象、双按钮、宽幅实拍和浮动说明卡与参考保持同类构图。电脑按钮顶部约 y=321，参考约 y=318；界面顶部 y=427，参考约 y=423。手机按钮 y=416，参考约 y=415；界面 y=664，参考约 y=665。差异在内容适配和小幅排版范围内。
3. **颜色与材质**：白色导航、黑色文字与主按钮、暖色颗粒背景；没有沿用上一版的浅蓝卡片视觉。背景为自行生成的替代素材，保留接近参考的暖色与颗粒强度。
4. **图像与资产**：小蓝品牌、客户端实拍、文档图标来自产品现有资源；线性图标来自 Lucide，许可证随资产保存。没有使用 Octop 标志、角色、客户背书或软件界面。图片按原比例展示，裁剪区可打开完整图片。
5. **产品内容**：重点为 PPT 创作、图表转 Excel、拍照转 Word、生成后编辑。官网展示与实际生成明确区分；识图模型、OCR、数值核对和实际平台发布状态均有说明。

## 修正记录

- 初次诊断发现暖色背景过于浅淡，手机中心裁剪后接近米白，未达到参考效果。更换为 ImageGen V3 背景，加强下半部珊瑚橙与可见颗粒；最终手机和电脑同图对照已复查。
- 初次截图的内容区被原生滚动条缩窄，手机为 375px、电脑为 1265px。隐藏滚动条外观并保留原生滚动/键盘操作后，内容区与参考保持相同宽度；最终截图尺寸一致。
- 手机初次标题、正文、按钮和界面的间距未对齐。调整标题间距、正文行数和界面上方空间后，按钮和界面位置与参考约相差 1px。
- 新增图标按钮后，放大弹窗的图片选择器改为直属图片，避免误选关闭按钮图标；已实际验证放大的图片和关闭图标各自正确。

## 交互与响应式验证

- 上手步骤切换，键盘 Home / End / 方向键。
- 示例指令复制及可见反馈。
- 电脑功能侧栏切换，键盘上下方向键切换。
- 手机完整显示功能卡片，并采用逐层停靠布局；跨断点保留电脑已选能力。
- 产品图片放大与关闭，关闭后恢复焦点。
- 手机菜单打开、关闭，下载入口跳转。
- Windows 下载指向真实公开 v0.8.12 安装包；Linux 未发布状态正确。
- 产品指南、更新日志、图片和本地锚点链接检查。
- 电脑/手机首屏已截图比较，原生 FAQ 可展开，页面没有横向溢出。

## 有意保留的产品差异与 P3

- 参考站的 GitHub Star 数、安装命令、桌宠和公众号弹层没有复制；替换为小蓝的真实下载、模型连接、PPT 创作与产品说明。
- 普通原生滚动取代参考站的整屏滚动；手机卡片保留叠放观感，同时允许按顺序阅读所有功能。
- 暖色颗粒为原创生成素材，颗粒分布和具体色块不与参考逐像素相同。
- 标题下划线装饰没有照搬。无需为这类 P3 细节继续阻塞交付。

## 生成素材与提示词

- 模式：内置 ImageGen 编辑。
- 最终运行时素材：`D:/work/office/norioWork-official/assets/reference/norio-hero-grain-v3.webp`，1672 × 941，340,960 字节。
- 原始生成 PNG 保留在：`C:/Users/80569/.codex/generated_images/01a1e233-6a1a-7681-8d8d-93dcfa573c19/exec-4d6420ae-c802-4721-896d-a208c69f1496.png`。
- Octop 公开应用仓库的 MIT 不能直接确定独立官网素材的许可，因此没有复制其背景文件，改为生成原创替代。

最终提示词原文：

> Edit Image 1 (the empty wide background) only. Image 2 is a STYLE REFERENCE SCREENSHOT: borrow ONLY the warm background colors and clearly visible halftone grain behind the webpage; do not reproduce any text, logo, mascot, UI, buttons, screenshot, card or QR code. Preserve Image 1's wide 16:9 composition. This revision must be visibly STRONGER and more coral than Image 1. Upper 20% clean near-white (#fffaf7). From 20–40% transition to pale peach. The entire lower HALF must carry substantial warm muted coral/salmon/orange/pink color, including the LOWER CENTER so a narrow mobile center crop still looks warm and coral, not creamy beige. Suggested lower tones: dusty coral #ed9a82 at lower left, soft apricot #f2b784 through lower middle, salmon-pink #eea09a at lower right, with softly shifting peach light areas. The background should visually match the COLOR STRENGTH of the warm orange-coral field in Image 2. Fine regular printed halftone dots must be clearly visible in the middle/lower field: tiny terracotta stippled dots about 1.5–2 pixels diameter with roughly 4–5 pixel spacing at 1672 pixel width, plus subtle fine paper grain, gradually fading away upward. The dots are a refined material texture, not random soft blur. Keep everything light enough behind black lettering; absolutely no dark regions. NO cream-only wash. Absolutely EMPTY BACKGROUND ONLY: no text, no UI, no logos, no QR, no mascot, no cards, no objects, no horizon, no large graphic shapes. Do not alter or output the reference screenshot.

对照截图与开发记录保留在源码中，构建只发布 `/docs/index.html`，不会把竞品证据截图和内部记录放入官网。
