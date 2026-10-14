// 仅填写真实版本和已发布的 HTTPS 安装包 URL；null 表示未发布。
window.NORIO_DOWNLOADS = {
  version: null,
  publishedAt: null,
  platforms: {
    windows: { label: "Windows", packages: [
      { label: "Windows 标准版 · x64", url: null },
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
