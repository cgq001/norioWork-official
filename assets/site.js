if (document.getElementById('sheet')) {

const contents={word:`<div style="font-size:9px;color:#99a18f;letter-spacing:2px;margin-bottom:12px">PROJECT / 001</div><h3>品牌官网项目计划</h3><p>用简洁的表达，让产品价值清晰可见。</p><h4>01　项目目标</h4><p>打造一个清晰介绍 norioWord 产品与使用方式的官方网站。</p><table><tr><th>阶段</th><th>主要任务</th><th>交付内容</th></tr><tr><td>内容整理</td><td>产品介绍与信息结构</td><td>内容大纲</td></tr><tr class="highlight"><td>视觉设计</td><td>首页与产品展示</td><td>页面设计稿</td></tr><tr><td>开发上线</td><td>页面实现与验证</td><td>官方网站</td></tr></table>`,excel:`<h3>项目预算</h3><p>把数字整理好，让计划更清晰。</p><table><tr><th></th><th>A · 项目</th><th>B · 数量</th><th>C · 预算</th></tr><tr><td>1</td><td>内容整理</td><td>1</td><td>2,000</td></tr><tr><td>2</td><td>视觉设计</td><td>3</td><td>6,000</td></tr><tr><td>3</td><td>页面开发</td><td>4</td><td>8,000</td></tr><tr class="highlight"><td>4</td><td>合计</td><td></td><td>16,000</td></tr></table><p style="font-size:9px">示例数据 · 用于展示表格界面</p>`,ppt:`<div style="font-size:10px;color:#929c86">演示文稿　/　01</div><div class="slide"><div style="font-size:10px;letter-spacing:4px;color:#6b855c">norioWord</div><h3>让想法，成为文档。</h3><p>从一次对话，到一份作品。</p><div style="width:40px;height:2px;background:#718c65;margin:25px auto"></div></div>`,rich:`<h3>一些正在生长的想法</h3><p>灵感不必等到成形，才值得记录。</p><h4>✳ 关于产品表达</h4><blockquote style="border-left:2px solid #9ab18b;margin:12px 0;padding-left:16px;color:#64785a">好的工具，让注意力回到内容本身。</blockquote><p>☑ 清晰介绍五款产品<br>☑ 用真实场景解释 AI 编辑<br>☐ 让文档入口更容易被找到</p><div class="highlight" style="padding:12px;border-radius:4px">下一步：整理产品使用指南。</div>`};
const prompts={word:'帮我把这份方案整理成项目计划，并更新右侧文档。',excel:'把项目预算整理成表格，并汇总各项费用。',ppt:'根据项目介绍，创建一页简洁的品牌演示。',rich:'把这些零散想法整理成一份结构清晰的笔记。'};
function setTab(type){document.querySelectorAll('[data-tab]').forEach(t=>t.classList.toggle('active',t.dataset.tab===type));document.getElementById('sheet').innerHTML=contents[type];document.getElementById('userprompt').textContent=prompts[type];document.getElementById('reply').textContent='已根据你的需求整理内容，并更新右侧编辑器。你可以继续提出修改需求。'}setTab('word');document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>setTab(b.dataset.tab));document.querySelectorAll('[data-product]').forEach(b=>b.onclick=()=>{setTab(b.dataset.product);document.querySelector('.workspace').scrollIntoView({behavior:'smooth',block:'center'})});
let edited=false;document.getElementById('apply').onclick=()=>{edited=!edited;document.getElementById('demodoc').innerHTML=edited?'<mark>norioWord，让你通过 AI 对话创建和修改文档。</mark>':'norioWord 是一款 AI 客户端，支持 AI 对话以及 Word、Excel、PPT 和富文本内容的创建与编辑。';document.getElementById('apply').textContent=edited?'还原示例 ↶':'试试修改 ↗'};

const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.section-head,.card,.feature,.docsection,.cta').forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('card'))el.style.transitionDelay=(i%4)*70+'ms'});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const storyScreens=['<span class="story-chip">✳ 与 norioWord 对话</span><h3>把你的想法告诉我。</h3><p>帮我写一份品牌官网项目方案，<br>包含目标、阶段安排与交付内容。</p><div style="padding:12px;background:#f7f7fc;border-radius:8px;font-size:11px;color:#9897ac;margin-top:25px">描述你想创建的内容… <span style="float:right;color:#fa343c">↑</span></div>','<span class="story-chip">▤ 项目方案.docx</span><h3>品牌官网项目方案</h3><p>01　项目目标<br>清晰展示产品，让创作自然发生。</p><div class="story-line"></div><div class="story-line short"></div><div class="story-line"></div><p style="color:#e5565c">✓ 已创建文档</p>','<span class="story-chip">✓ 已根据对话更新内容</span><h3>好内容，来自每一次完善。</h3><p style="text-decoration:line-through;color:#b3b2bf">我们提供多种产品工具与内容功能。</p><p style="background:#fff0f0;padding:12px;border-radius:8px;color:#e44c55">一款 AI 客户端，四种创作方式。<br>让想法，成为文档。</p>'];
let activeStory=-1;function updateStory(n){if(activeStory===n)return;activeStory=n;document.getElementById('story-screen').innerHTML=storyScreens[n];document.querySelectorAll('.story-step').forEach((e,i)=>e.classList.toggle('active',i===n));document.querySelectorAll('.story-progress i').forEach((e,i)=>e.classList.toggle('active',i===n))}updateStory(0);
let ticking=false;function scrollEffects(){ticking=false;const y=scrollY;if(!reduceMotion){document.querySelector('.workspace').style.setProperty('--tilt',Math.max(0,5-y/95)+'deg');document.querySelectorAll('.float-card').forEach((e,i)=>e.style.setProperty('--float-y',Math.max(-25,Math.min(25,y*(i===1?-.035:.025)))+'px'))}if(innerWidth>600){let nearest=0,distance=Infinity;document.querySelectorAll('.story-step').forEach((e,i)=>{const d=Math.abs(e.getBoundingClientRect().top-innerHeight*.42);if(d<distance){distance=d;nearest=i}});updateStory(nearest)}}addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(scrollEffects)}},{passive:true});addEventListener('resize',scrollEffects);document.querySelectorAll('.story-step').forEach((e,i)=>e.addEventListener('click',()=>updateStory(i)));document.querySelector('.story-steps').addEventListener('scroll',e=>{if(innerWidth<=600){const box=e.currentTarget;const children=[...box.children];let n=0,d=Infinity;children.forEach((el,i)=>{const delta=Math.abs(el.offsetLeft-box.offsetLeft-box.scrollLeft);if(delta<d){d=delta;n=i}});updateStory(n)}},{passive:true});scrollEffects();

}

// 所有页面共享导航状态，首页演示逻辑独立于此。
const header = document.querySelector('header');
function updateHeader() { header?.classList.toggle('scrolled', window.scrollY > 12); }
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('pageshow', updateHeader);
updateHeader();
const versionLinks = [...document.querySelectorAll('[data-version-link]')];
const releases = [...document.querySelectorAll('[data-release]')];
if (releases.length) {
  let scheduled = false;
  function updateVersion() {
    scheduled = false;
    let active = releases[0];
    const offset = window.innerWidth <= 700 ? 210 : 170;
    for (const release of releases) if (release.getBoundingClientRect().top <= offset) active = release;
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) active = releases.at(-1);
    versionLinks.forEach(link => {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateVersion); } }, { passive: true });
  window.addEventListener('resize', updateVersion);
  updateVersion();
}
