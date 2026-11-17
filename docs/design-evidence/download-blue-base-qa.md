# 蓝白下载页设计验收

final result: passed

日期：2026-11-17。此前首页验收见 `docs/design-evidence/spacious-home-qa.md`。

## 对照目标与证据

- 用户选定参考：`docs/design-evidence/download-blue-reference.png`，1717×916。
- 实现：`http://localhost:3000/download/`；`docs/design-evidence/download-blue-desktop.jpg`，1717×916。
- CSS视口1717×916，截图密度1 CSS像素对应1图像像素，没有设备边框或浏览器栏，不需要密度缩放。
- 状态：下载导航选中、无弹层、页面顶部。
- 全图同尺寸并排：`download-blue-comparison.jpg`；主要下载入口局部：`download-blue-actions-comparison.jpg`，均已打开检查；另存标题局部 `download-blue-heading-comparison.jpg`。
- 补充证据：`download-blue-mobile.jpg`（390×844）、`download-blue-tablet.jpg`（768×1024）、`download-blue-short.jpg`（1280×720）。手机没有专门参考，按相同信息层级适配。

## Findings

同图对照后没有剩余可行动的P0/P1/P2问题。没有用构建或调试次数冒充视觉迭代。

### 五项必检表面

1. **字体与文字层级**：沿用首页的Microsoft YaHei / PingFang SC / 系统字体。桌面主标题56px、字重800；副标题26/40px，下载按钮标题26/35px、说明18/27px。标题、按钮和所有说明均为真实HTML。主体文字粗细、行高和层级与参考接近。手机标题分两行，副标题按句意分行，不在「客户端」中间断开。
2. **间距与布局节奏**：80px导航、标题区顶部158px、主视觉318–628px、两枚108px高下载按钮顶部652px。按钮网格总宽922px、间隔44px，接近参考约650px的按钮顶部和108px按钮高度。页面总高916px。手机改为纵排84px高入口，平板双列；低屏幕高度缩短主视觉及上方留白，1280×720下主按钮完整可见。
3. **颜色与视觉标记**：蓝白背景、深色标题、蓝色Windows入口、白色macOS入口。选中导航蓝色下划线与首页保持一致。波浪背景复用已有ImageGen素材，不用CSS描摹参考图片。Windows/Apple使用Font Awesome品牌SVG，原有注释与许可证保留。
4. **图像与素材质量**：新增透明2:1主视觉，沿用小蓝蓝白机器人身份和N笔记本，W/X/P与文档图标、底座和淡轨道构成完整宣传画面。内置ImageGen生成，原图1774×887，项目WebP1152×576约173KB，alpha有效；已检查实际显示与透明边缘，无背景矩形、截边或拉伸。页面所有图片成功加载。
5. **文案与发布状态**：保持参考的居中下载标题和个人AI客户端介绍。根据现有配置，Windows标x64并指向GitCode最新正式发行页，macOS明确标待发布；不照搬未经验证的系统最低版本或已发布承诺。其他架构与Linux在安装包弹层中显示真实状态。

## 交互验证

- Windows大按钮使用 `https://gitcode.com/cgq2100/norioWork/releases/latest`；不写死版本、发布日期或大小。无JavaScript时也保留相同链接。
- macOS入口打开原生dialog并选择macOS标签，显示尚未发布；未产生虚假的下载URL。
- 「其他版本与平台」可打开Windows安装包详情，保留GitCode主链接、历史版本、便携版与ARM64状态；Linux及macOS状态可查。
- 实测标签ArrowRight从macOS切换Linux；Escape关闭后焦点回到触发入口。原生dialog提供焦点约束。
- 实测 `/download/?platform=macos` 直接打开对应平台说明；非法键 `__proto__` 回退Windows，默认不打开弹层。
- 320/390/768/1280/1717px无全页横向溢出，平台卡片无局部水平越界；320px弹层无横向溢出。
- 控制台错误与警告均为空。静态本地链接、锚点与ARIA引用检查通过。
- `npm run check`、`npm run build`、`git diff --check`通过。构建引用带内容哈希的新下载CSS/JS，主视觉与品牌图标可用，设计证据没有进入dist。

## 有意差异与P3

- 按真实产品品牌保留蓝白机器人，没有更换为参考的人形角色。
- 波浪形状和蓝色按钮渐变没有逐像素复制，沿用既有蓝白品牌背景与主色，属于装饰差异。
- macOS未发布；参考中的macOS直接下载按钮改为可查询状态的入口。发布后填写同一下载配置可自动启用链接。
- 保留小型发行记录与其他平台入口，主页面不展示冗长安装教程。

## 素材记录

新增素材：`assets/campaign/download-hero.webp`，原图`download-hero.png`。内置ImageGen完整提示词、原始输出路径与透明度验收见 `docs/design-evidence/download-hero-imagegen.txt`。Windows/Apple图标源自Font Awesome 6.x品牌SVG，许可证位于 `assets/icons/FONT-AWESOME-LICENSE.txt`。

## 实施清单

- [x] 蓝白下载页、原创小蓝主视觉、双系统大入口。
- [x] 最新版固定地址、未发布平台说明和详情弹层。
- [x] 键盘、焦点恢复、平台深链接及窄屏验证。
- [x] 同图对照和构建；本地预览保留，未部署。
