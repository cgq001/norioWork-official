// 官网仅展示场景和能力说明；实际生成、识别与编辑均在客户端中完成。
const capabilityDetails = {
  word: {
    title: 'Word · 文档创作',
    icon: '/assets/campaign/icons/word.webp',
    summary: '把一份照片、一个想法或已有资料，整理成规范、可继续编辑的 Word 文档。',
    points: ['拍摄或上传清晰的文字资料，识别后整理为标题、段落和清单。', '选中具体段落，让 AI 润色、扩写或调整表达。', '在文档编辑器中检查内容，继续修改段落、表格与排版。'],
    image: '/assets/campaign/scene-photo-word.webp',
    caption: 'AI 生成的拍照转文档场景示意',
    note: '照片识别需要连接支持识图的模型或可用 OCR；请核对姓名、日期、金额等关键信息。'
  },
  excel: {
    title: 'Excel · 数据处理',
    icon: '/assets/campaign/icons/excel.webp',
    summary: '让图片里的数据回到表格，让表格里的数据继续计算、汇总与分析。',
    points: ['上传清晰的图表或纸质表格图片，整理表头、分类和可见数值。', '选定单元格区域，要求 AI 补公式、分类汇总或整理格式。', '核对识别结果，再继续编辑工作表与计算逻辑。'],
    image: '/assets/product/excel-ai.webp',
    caption: '小蓝办公 Excel 编辑器界面 · 内容为演示资料',
    note: '图表识别需使用支持识图的模型；无法确认的数值请对照原图检查。'
  },
  ppt: {
    title: 'PPT · 演示创作',
    icon: '/assets/campaign/icons/ppt.webp',
    summary: '给一个主题，或带上一份参考资料，从内容大纲到页面设计，让小蓝帮你完成第一稿。',
    points: ['用自然语言说明主题、受众和希望表达的重点。', '选择本轮创作风格，或让 AI 根据需求自由设计。', '生成后继续修改文字、图形、图片和页面布局。'],
    image: '/assets/product/ppt-ai.webp',
    caption: '小蓝办公 PPT 编辑器界面 · 内容为演示资料',
    note: '在客户端连接支持所需能力的 AI 模型后使用。'
  },
  smart: {
    title: '智能文档 · 创作与整理',
    icon: '/assets/campaign/icons/smart.webp',
    summary: '把项目笔记、会议结论和长资料放进同一个创作空间，边编辑，边与 AI 一起完善。',
    points: ['通过标题、列表、表格和图片搭建清晰的内容结构。', '整理项目笔记、方案与知识资料，方便持续补充。', '与 AI 对话完善具体章节，保留手动编辑的空间。'],
    image: '/assets/product/smart-ai.webp',
    caption: '小蓝办公智能文档编辑器界面 · 内容为演示资料',
    note: '客户端支持智能文档格式，具体导出能力以编辑器提供的选项为准。'
  },
  knowledge: {
    title: '个人知识库 · 让资料随时可用',
    icon: '/assets/campaign/icons/knowledge.webp',
    summary: '把常用资料、制度和方案统一整理，让 AI 在你的参考资料中查找线索、辅助回答。',
    points: ['按项目或主题管理参考资料，减少反复查找。', '在对话中指定本轮需要使用的资料与知识范围。', '结合来源检查回答，把有用的内容继续整理成文档。'],
    note: '可用的知识检索与问答能力取决于客户端配置、资料内容及所连接的模型。'
  },
  automation: {
    title: '自动化 · 把重复工作交给小蓝',
    icon: '/assets/campaign/icons/automation.webp',
    summary: '结合定时任务和已启用的技能，把经常重复的资料整理与报告生成安排起来。',
    points: ['设置任务目标和执行时间，按需要安排例行工作。', '利用已有技能完成资料整理、内容生成等步骤。', '查看执行结果，检查内容后继续编辑与完善。'],
    note: '需要在客户端中完成模型、技能与任务配置，并保持相关运行条件可用。'
  },
  svg: {
    title: 'SVG · 从草图到清晰表达',
    icon: '/assets/campaign/icons/pencil.svg',
    summary: '拍下手绘草图，说明想表达的结构，让 AI 帮你整理成清晰的 SVG 图形。',
    points: ['上传草图，描述图形结构、配色和希望保留的元素。', '通过对话调整图形的表达与细节，下载 SVG 原文件。', '将生成的图形插入支持图片的文档，在作品中继续使用。'],
    image: '/assets/campaign/scene-sketch-svg.webp',
    caption: 'AI 生成的手绘草图转 SVG 场景示意',
    note: '草图识别需支持识图的模型；生成后请检查图形与文字是否符合原意。'
  }
};

const capabilityDialog = document.querySelector('.capability-dialog');
if (capabilityDialog && typeof capabilityDialog.showModal === 'function') {
  let opener;
  const title = document.getElementById('capability-title');
  const icon = document.getElementById('capability-icon');
  const summary = document.getElementById('capability-summary');
  const points = document.getElementById('capability-points');
  const figure = document.getElementById('capability-figure');
  const preview = document.getElementById('capability-preview');
  const caption = document.getElementById('capability-caption');
  const note = document.getElementById('capability-note');
  document.querySelectorAll('[data-capability]').forEach(button => button.addEventListener('click', () => {
    const detail = capabilityDetails[button.dataset.capability];
    if (!detail) return;
    opener = button;
    title.textContent = detail.title;
    icon.src = detail.icon;
    summary.textContent = detail.summary;
    points.replaceChildren(...detail.points.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
    // 切换到无截图的能力时清除旧地址，避免再次打开弹层时残留上一项画面。
    figure.hidden = !detail.image;
    if (detail.image) {
      preview.src = detail.image;
      preview.alt = detail.caption;
      caption.textContent = detail.caption;
    } else {
      preview.removeAttribute('src');
      preview.alt = '';
      caption.textContent = '';
    }
    note.textContent = detail.note;
    capabilityDialog.showModal();
    capabilityDialog.scrollTop = 0;
  }));
  capabilityDialog.querySelectorAll('.capability-close,.detail-back').forEach(button => {
    button.addEventListener('click', () => capabilityDialog.close());
  });
  capabilityDialog.addEventListener('click', event => {
    if (event.target !== capabilityDialog) return;
    const bounds = capabilityDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) capabilityDialog.close();
  });
  capabilityDialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
}
