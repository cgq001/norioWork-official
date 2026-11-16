// Windows 使用 GitCode 最新正式版固定入口，发新版后无需修改官网。
// 入口为发行页，不是固定版本安装包；不展示可能过期的版本号、日期和文件大小。
// 其他安装包 URL 为 null 表示未发布。
window.NORIO_DOWNLOADS = {
  version: null,
  publishedAt: null,
  releaseUrl: "https://gitcode.com/cgq2100/norioWork/releases/latest",
  domesticReleases: "https://gitcode.com/cgq2100/norioWork/releases",
  platforms: {
    windows: { label: "Windows", packages: [
      { label: "Windows 标准版 · x64", url: "https://gitcode.com/cgq2100/norioWork/releases/latest", note: "前往 GitCode 最新正式版页面，选择安装包下载。" },
      { label: "Windows 便携版 · x64", url: null },
      { label: "Windows 标准版 · ARM64", url: null }
    ] },
    macos: { label: "macOS", packages: [
      { label: "macOS · Apple Silicon", url: null },
      { label: "macOS · Intel", url: null }
    ] },
    linux: { label: "Linux", packages: [
      { label: "Linux · x64", url: null },
      { label: "Linux · ARM64", url: null }
    ] }
  }
};
