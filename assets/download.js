const config = window.NORIO_DOWNLOADS;
const tabs = [...document.querySelectorAll('[data-platform]')];
const panel = document.getElementById('platform-panel');
function validUrl(value) { try { return new URL(value).protocol === 'https:'; } catch { return false; } }
function downloadLink(item, primary) {
  const el = document.createElement(validUrl(item.url) ? 'a' : 'span');
  el.textContent = primary ? (validUrl(item.url) ? '↓ 下载 ' : '') + item.label : (validUrl(item.url) ? '↓ 下载' : '待发布');
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
    const link = document.createElement('a'); link.href = config.domesticReleases; link.textContent = '查看全部版本 ↗';
    row.append(label, link); panel.append(row);
  }
  platform.packages.slice(1).forEach(item => { const row = document.createElement('div'); row.className = 'download-row'; const label = document.createElement('span'); label.textContent = item.label; row.append(label, downloadLink(item, false)); panel.append(row); });
}
tabs.forEach((tab, index) => { tab.addEventListener('click', () => selectPlatform(tab.dataset.platform)); tab.addEventListener('keydown', event => { let next; if (event.key === 'ArrowRight') next = (index + 1) % tabs.length; if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length - 1; if (next !== undefined) { event.preventDefault(); selectPlatform(tabs[next].dataset.platform, true); } }); });
if (config.version) { document.querySelector('.page-intro h1').textContent = '小蓝办公 ' + config.version; document.getElementById('release-info').textContent = '公开版本' + (config.publishedAt ? ' · ' + config.publishedAt : ''); }
selectPlatform('windows');
