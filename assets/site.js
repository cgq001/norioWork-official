const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const tabs = [...carousel.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  const slides = carousel.querySelector('[data-carousel-slides]');
  const counter = carousel.querySelector('[data-slide-count]');
  const toggle = carousel.querySelector('[data-carousel-toggle]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let playing = !reducedMotion.matches;
  let inView = false;
  let pointerOver = false;
  let timer;

  function updateTimer() {
    clearTimeout(timer);
    const rotate = playing && !reducedMotion.matches && inView && !pointerOver && !document.hidden && !carousel.contains(document.activeElement);
    slides.setAttribute('aria-live', playing ? 'off' : 'polite');
    toggle.disabled = reducedMotion.matches;
    const active = playing && !reducedMotion.matches;
    const label = active ? '暂停自动切换' : '开始自动切换';
    toggle.textContent = active ? 'Ⅱ' : '▶';
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    if (rotate) timer = setTimeout(() => selectSlide(current + 1), 7800);
  }

  function selectSlide(index, manual = false, focus = false) {
    current = (index + tabs.length) % tabs.length;
    if (manual) playing = false;
    tabs.forEach((tab, i) => {
      const active = i === current;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
    });
    counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(tabs.length).padStart(2, '0');
    if (focus) tabs[current].focus();
    updateTimer();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectSlide(i, true));
    tab.addEventListener('keydown', event => {
      const next = { ArrowLeft: i - 1, ArrowRight: i + 1, Home: 0, End: tabs.length - 1 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      selectSlide(next, true, true);
    });
  });
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => selectSlide(current - 1, true));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => selectSlide(current + 1, true));
  toggle.addEventListener('click', () => { playing = !playing; updateTimer(); });
  carousel.addEventListener('focusin', updateTimer);
  carousel.addEventListener('focusout', () => queueMicrotask(updateTimer));
  carousel.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') pointerOver = true; updateTimer(); });
  carousel.addEventListener('pointerleave', () => { pointerOver = false; updateTimer(); });
  document.addEventListener('visibilitychange', updateTimer);
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) playing = false;
    updateTimer();
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; updateTimer(); }, { threshold: .2 });
    observer.observe(carousel);
  } else {
    inView = true;
  }
  updateTimer();
}

const releases = [...document.querySelectorAll('[data-release]')];
const versionLinks = [...document.querySelectorAll('[data-version-link]')];
if (releases.length) {
  function updateVersion() {
    let active = releases[0];
    for (const release of releases) {
      if (release.getBoundingClientRect().top <= 125) active = release;
    }
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
