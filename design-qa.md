# 首页整体卡片加高验收

final result: passed

日期：2026-11-18

## 目标与证据

用户标注 `docs/design-evidence/taller-home-user-markup.png` 要求整个页面的方块适当加高。此次包含首屏、六项能力快捷栏、四场景、功能、优势、人群、系统下载卡和FAQ，延续既有品牌与内容。

同一1280×720 CSS视口、页面默认状态、无弹层：调整前 `taller-home-before.jpg`（1280×2073全页），调整后 `taller-home-after.jpg`（1280×2509全页），密度约1 CSS像素对应1截图像素。页面加长是本次目标，不缩放两图高度。原像素并排证据 `taller-home-comparison.jpg` 已打开检查。首屏局部 `taller-home-top.jpg`，手机390×844局部 `taller-home-mobile.jpg`。实际高度数据见 `taller-home-metrics.json`，浏览器亚像素舍入使页面高度约2510px。

## 高度调整与五项检查

| 区域 | 原高度 | 新高度（1280px宽） |
| --- | ---: | ---: |
| 首屏 | 360px | 450px |
| 能力快捷栏 | 56px | 80px |
| 场景卡片 | 258px | 307px |
| 功能卡片 | 126px | 158px |
| 优势卡片 | 126px | 160px |
| 人群卡片 | 136px | 172px |
| 下载区 | 176px | 216px |
| 系统下载卡片 | 66px | 82px |
| FAQ | 66px | 82px |

1. **字体**：保持原系统字体、标题层级与大部分字号。场景标题与正文略增字号和行高，利用增加的高度改善阅读；文字自然换行，无截断。
2. **间距**：各卡片增加上下内边距，区块标题、网格与首屏内容同步留白；没有仅拉长外框而把内容贴在上边。页头仍54px，未再次改动导航尺寸。
3. **颜色**：蓝白背景、蓝色按钮、卡片边框与阴影保持既有样式。
4. **图片**：主视觉保持比例并略放大居中，人群图片略放大。场景图片仍按16:9裁剪，没有纵向拉伸。页面现有素材清晰、无新增占位图。
5. **文案**：内容未改；下载仍直达GitCode最新版，不恢复独立下载页。

没有剩余可行动的P0/P1/P2问题。此次为尺寸与留白微调，不新增视觉方案或素材。

## 验证

- 320、390、768、1024、1280px无全页横向溢出；能力条、场景、功能、优势、人群、系统选项和FAQ无局部水平溢出。
- 390px手机和1024px首屏已实际查看；上下结构、标题换行、加高卡片均正常。
- 浏览器核验所有8个下载/系统入口仍直接指向 `https://gitcode.com/cgq2100/norioWork/releases/latest`。
- `npm run check`、`npm run build`、`git diff --check`通过；预览保持运行，未部署。

## 实施清单

- [x] 全页各类卡片、首屏与快捷栏加高。
- [x] 同步内边距、行高与区块留白。
- [x] 手机和平板断点检查，无溢出。
- [x] 前后实际截图比较与构建校验。

## 后续交互修正：红框卡片静态展示（2026-11-18）

来源 `docs/design-evidence/static-home-cards-user-markup.png`。六项能力栏改为静态列表项，四张场景卡片改为article；移除按钮、data-capability、aria-haspopup及悬停反馈。布局、卡片高度、文字和图片保留。范围仅用户标出的区域，下方六项核心能力详情保留。

浏览器实际点击能力栏与场景卡片后，dialog均为关闭状态；标注区域交互按钮及data-capability数量为0，六个静态列表项和四个article均可见，光标为default，无横向溢出。实际截图 `docs/design-evidence/static-home-cards.jpg` 已查看。`npm run check`、`npm run build`、`git diff --check`通过。此为语义及交互调整，无新增素材；final result仍为passed。
