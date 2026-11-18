# 首页直接下载调整验收

final result: passed

日期：2026-11-18

## 改动

用户标注来源：`docs/design-evidence/direct-download-user-markup.png`。按箭头移除主导航中的「下载」，保留首页和右侧立即下载按钮。独立下载页及其CSS/脚本移除，旧实现仅内部存档。

首页全部8个可点击下载/系统入口（包括功能详情中的下载）均为原生链接，直接指向 `https://gitcode.com/cgq2100/norioWork/releases/latest`，无中间下载页；FAQ文案同步改为以GitCode发行页为准。旧指南、日志中的下载链接也已更新。

## 验证

- 浏览器实际呈现主导航仅有首页，右侧下载按钮正常；默认视口1280×720无横向溢出。截图 `docs/design-evidence/direct-download-home.jpg` 已查看，页面原有54px页头、字体、颜色、图像与正文布局保持正常。
- 浏览器读取8个入口href，全部为同一分发地址；不存在 `/download/` 首页链接。未触发真实安装包下载。
- HTTP实测 `/download`、`/download/`、`/download.html` 以及带旧平台查询的地址均返回302和正确Location。
- 静态构建不含download目录、download.js或download-page.css，公开HTML不再链接旧下载页。
- `npm run check`、`npm run build`、`git diff --check`通过。
- 本地预览已启动并保留；未部署。

没有新增视觉素材或设计方向。此前完整视觉及页头验收存于 `docs/design-evidence/shared-header-qa.md`。
