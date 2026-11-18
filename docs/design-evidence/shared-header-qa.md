# 首页与下载页共享页头修正

final result: passed

日期：2026-11-17

## 目标与证据

用户指出同一网站的首页与下载页页头尺寸不一致，标注见 `docs/design-evidence/shared-header-user-markup.png`。以当前首页页头作为统一视觉标准，而非继续使用下载页参考中独立放大的页头。

同一1717×916 CSS视口、无弹层、页面顶部：

- 首页：`docs/design-evidence/shared-header-home-desktop.jpg`，1717×916。
- 下载页：`docs/design-evidence/shared-header-download-desktop.jpg`，1717×916。
- 同图上下对照：`shared-header-comparison.jpg`，保留相同横向位置与原始像素尺寸；全页面上下文并排：`shared-header-context-comparison.jpg`。均已打开检查。
- 手机同一390×844视口：`shared-header-home-mobile.jpg`与`shared-header-download-mobile.jpg`。
- 密度约1图像像素/CSS像素；Windows CSS坐标有亚像素舍入，两页测量值相同，不做拉伸或单独缩放。截图无浏览器边框。两页正文内容不同，比较范围为共享页头，不把正文布局差异判为缺陷。

## Findings 与修正

- [P2，已解决] 下载页另设80px高、1468px最大宽度的页头，Logo为48px、导航24px；首页页头54px高、最大宽1236px、Logo36px、导航16px。用户标注及旧证据 `download-blue-desktop.jpg`可见此差异。
- 删除下载页CSS中的34条页头专属覆盖规则，直接复用首页 `home.css` 的全部页头与响应式样式。下载页页头DOM与首页一致，只改变当前导航选中项，并补齐右侧「立即下载」。不使用第二套数值去手动逼近首页。
- 修正后的同图对照、桌面和手机DOM尺寸测量一致；不存在剩余P0/P1/P2问题。

## 五项必检表面

1. **字体**：两页Logo中文24px、norioWork23px、导航16px、右侧按钮13px（桌面）；手机同样读取首页响应式规则，测量完全一致。选中导航颜色与字重按当前页面变化。
2. **间距与布局**：两页统一54px页头；桌面导航容器1236px且左右位置完全一致，Logo、导航和按钮的x/y/宽/高一致。390px下容器约360px，两页均为54px高。320px下载页无横向溢出。
3. **颜色**：背景、分隔线、导航蓝色、选中下划线、按钮颜色均直接共享首页样式。
4. **图片**：两页使用同一36px品牌图标，手机同步缩小；没有新增或替换宣传图，也没有拉伸资源。
5. **文案**：品牌名、首页/下载导航和「立即下载」文字一致。页面主内容及GitCode最新版地址保持既有行为。

## 验证

- 浏览器实际点击首页与下载导航切换，确认当前项正确。
- `shared-header-metrics.json`记录两页10个页头元素的边界、字号与显示状态；桌面和手机均逐项相等。
- HTML结构比较忽略aria-current后完全相同；下载页CSS已无site-header/site-nav/brand/simple-nav专属规则。
- `npm run check`、`npm run build`、`git diff --check`通过。
- 这是可逆的样式一致性修正，没有新建测试框架或重复测试未改动的平台下载逻辑。
- 本地预览保留，未部署。此前下载功能完整验收见 `docs/design-evidence/download-blue-base-qa.md`。

## 实施清单

- [x] 复用首页页头DOM和共享样式。
- [x] 删除下载页独立宽高、字号与断点覆盖。
- [x] 同一视口桌面/手机实际对照与尺寸检查。
- [x] 构建验证与本地预览保留。
