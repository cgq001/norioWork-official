const config = window.NORIO_DOWNLOADS;
const tabs = [...document.querySelectorAll('[data-platform]')];
const panel = document.getElementById('platform-panel');
function validUrl(value) { try { return new URL(value).protocol === 'https:'; } catch { return false; } }
function downloadLink(item, primary) {
  const el = document.createElement(validUrl(item.url) ? 'a' : 'span');
  el.textContent = primary ? (validUrl(item.url) ? '下载 ' : '') + item.label : (validUrl(item.url) ? '下载' : '待发布');
  if (primary) el.className = 'primary';
  if (validUrl(item.url)) { el.href = item.url; el.rel = 'noopener noreferrer'; }
  else { el.setAttribute('aria-disabled', 'true'); }
  return el;
}
function selectPlatform(key, focus = false) {
  const platform = config.platforms[key];
  tabs.forEach(tab => { const selected = tab.dataset.platform === key; tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; if (selected && focus) tab.focus(); });
  panel.setAttribute('aria-labelledby', 'tab-' + key);
  panel.replaceChildren();
  const main = document.createElement('div'); main.className = 'download-main';
  main.append(downloadLink(platform.packages[0], true));
  if (platform.packages[0].size && validUrl(platform.packages[0].url)) {
    const size = document.createElement('p'); size.className = 'notice';
    size.textContent = platform.packages[0].size + ' · 标准安装包'; main.append(size);
  }
  if (platform.packages[0].note && validUrl(platform.packages[0].url)) {
    const note = document.createElement('p'); note.className = 'notice';
    note.textContent = platform.packages[0].note; main.append(note);
  }
  if (!validUrl(platform.packages[0].url)) { const note = document.createElement('p'); note.className = 'notice'; note.textContent = '安装包尚未发布，敬请期待。'; main.append(note); }
  panel.append(main);
  if (key === 'windows' && validUrl(config.domesticReleases)) {
    const row = document.createElement('div'); row.className = 'download-row';
    const label = document.createElement('span'); label.textContent = '历史版本 · GitCode';
    const link = document.createElement('a'); link.href = config.domesticReleases; link.textContent = '查看全部版本';
    row.append(label, link); panel.append(row);
  }
  platform.packages.slice(1).forEach(item => { const row = document.createElement('div'); row.className = 'download-row'; const label = document.createElement('span'); label.textContent = item.label; row.append(label, downloadLink(item, false)); panel.append(row); });
}
tabs.forEach((tab, index) => { tab.addEventListener('click', () => selectPlatform(tab.dataset.platform)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = (index + 1) % tabs.length; if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1; if (next !== undefined) { event.preventDefault(); selectPlatform(tabs[next].dataset.platform, true); } }); });
// 主下载卡片直接使用同一份配置，未发布的平台打开真实状态说明。
const packagesDialog = document.getElementById('packages-dialog');
const openPackages = document.getElementById('open-packages');
let dialogOpener;
function showPackages(platform, opener) {
  dialogOpener = opener;
  selectPlatform(platform);
  packagesDialog.showModal();
}
for (const key of ['windows', 'macos']) {
  const card = document.getElementById('download-' + key);
  const item = config.platforms[key].packages[0];
  const available = validUrl(item.url);
  card.querySelector('strong').textContent = available ? '下载 ' + config.platforms[key].label + ' 版' : config.platforms[key].label + ' 版 · 待发布';
  if (available) {
    card.href = item.url;
    card.rel = 'noopener noreferrer';
    card.removeAttribute('aria-haspopup');
    card.querySelector('small').textContent = key === 'windows' ? 'Windows · x64 · 最新正式版' : item.label;
  } else {
    card.href = '#download-status';
    card.setAttribute('aria-haspopup', 'dialog');
    card.addEventListener('click', event => { event.preventDefault(); showPackages(key, card); });
  }
}
openPackages.hidden = false;
openPackages.addEventListener('click', () => showPackages('windows', openPackages));
packagesDialog.querySelector('.capability-close').addEventListener('click', () => packagesDialog.close());
packagesDialog.addEventListener('click', event => {
  if (event.target !== packagesDialog) return;
  const bounds = packagesDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) packagesDialog.close();
});
packagesDialog.addEventListener('close', () => dialogOpener?.focus({ preventScroll: true }));
if (config.version) document.getElementById('release-info').textContent = '最新正式版 ' + config.version + (config.publishedAt ? ' · ' + config.publishedAt : '') + ' · 安装包以 GitCode 发行页为准。';
// 首页的平台入口直接选中对应系统；只接受已有平台键，避免无效查询破坏下载页。
const requestedPlatform = new URLSearchParams(location.search).get('platform');
const initialPlatform = Object.hasOwn(config.platforms, requestedPlatform) ? requestedPlatform : 'windows';
selectPlatform(initialPlatform);
if (requestedPlatform && initialPlatform !== 'windows') showPackages(initialPlatform, document.getElementById('download-macos'));
