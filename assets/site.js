// 所有切换只展示固定示例，官网不发送资料、调用模型或伪装执行生成。
function bindTabs(tabs, onSelect) {
  function activate(index, focus = false) {
    const selected = (index + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === selected));
      tab.tabIndex = i === selected ? 0 : -1;
    });
    onSelect(tabs[selected]);
    if (focus) tabs[selected].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      const next = { ArrowLeft: index - 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowDown: index + 1, Home: 0, End: tabs.length - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      activate(next, true);
    });
  });
}

const previewTabs = [...document.querySelectorAll('[data-preview-tab]')];
bindTabs(previewTabs, selected => {
  previewTabs.forEach(tab => { document.getElementById(tab.getAttribute('aria-controls')).hidden = tab !== selected; });
});

const imageDialog = document.querySelector('.image-dialog');
if (imageDialog && typeof imageDialog.showModal === 'function') {
  let opener;
  document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    opener = link;
    const preview = imageDialog.querySelector(':scope > img');
    preview.src = link.href;
    preview.alt = link.querySelector('img').alt;
    imageDialog.querySelector('p').textContent = link.dataset.lightboxLabel || preview.alt;
    imageDialog.showModal();
  }));
  imageDialog.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', event => {
    if (event.target !== imageDialog) return;
    const bounds = imageDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
  });
  // 原生 dialog 提供焦点约束；关闭后回到当前触发器，保持键盘浏览位置。
  imageDialog.addEventListener('close', () => { opener?.focus({ preventScroll: true }); });
}

const releases = [...document.querySelectorAll('[data-release]')];
const versionLinks = [...document.querySelectorAll('[data-version-link]')];
if (releases.length) {
  function updateVersion() {
    let active = releases[0];
    for (const release of releases) if (release.getBoundingClientRect().top <= 125) active = release;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) active = releases.at(-1);
    for (const link of versionLinks) {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  window.addEventListener('scroll', updateVersion, { passive: true });
  window.addEventListener('resize', updateVersion);
  updateVersion();
}
