# 蓝白首页原创配图与提示词

2026-11-17，按用户选定的首页参考图制作。全部七张新配图使用**内置 ImageGen**生成，未使用 CLI 或自备 API Key；没有调用模型处理用户私有业务资料。人物为虚构场景，图片用于产品功能说明，不是客户实拍或在线执行结果。

| 用途 | 最终项目文件 | 提示词、模式与原图路径 |
| --- | --- | --- |
| 首屏笔记本与小蓝机器人 | [hero-office.webp](../../assets/campaign/hero-office.webp) | [完整记录](hero-imagegen.txt) |
| 拍照转 Word | [scene-photo-word.webp](../../assets/campaign/scene-photo-word.webp) | [完整记录](scene-word-imagegen.txt) |
| 一句话生成 PPT | [scene-prompt-ppt.webp](../../assets/campaign/scene-prompt-ppt.webp) | [完整记录](scene-ppt-imagegen.txt) |
| 纸质表格转 Excel | [scene-photo-excel.webp](../../assets/campaign/scene-photo-excel.webp) | [完整记录](scene-excel-imagegen.txt) |
| 草图转 SVG | [scene-sketch-svg.webp](../../assets/campaign/scene-sketch-svg.webp) | [完整记录](scene-svg-imagegen.txt) |
| 页脚小蓝机器人 | [mascot-footer.webp](../../assets/campaign/mascot-footer.webp) | [完整记录](footer-imagegen.txt) |
| 蓝白流动背景 | [blue-waves.webp](../../assets/campaign/blue-waves.webp) | [完整记录](waves-imagegen.txt) |

完整提示词集合在下文，原始输出保存在各记录列出的 Codex generated_images 路径。项目使用 WebP 优化体积，透明插画保留 alpha；页脚角色仅裁去透明留白以适配展示尺寸。所有最终素材均已复制到当前项目，不依赖外部临时路径。

产品的 logo 和六类能力图标沿用既有品牌资产；线性相机、屏幕、表格、绘图、箭头、检查图标来自现有 Lucide 图标库，许可证见 assets/icons/LICENSE.txt。未手绘 SVG 或用网页元素替代照片、角色和产品插画。


## hero-imagegen.txt

Asset: hero-office
Mode: built-in ImageGen generation with reference images; transparent_background=true
Original: C:/Users/80569/.codex/generated_images/01a1e99b-a3d7-7651-a345-59954778d91c/exec-9e9ea238-fd45-4b24-aa81-8068fdd17d0d.png
Workspace PNG: D:/work/office/norioWork-official/assets/campaign/hero-office.png
Workspace WebP: D:/work/office/norioWork-official/assets/campaign/hero-office.webp
Final prompt:
Use case: ads-marketing.
Asset type: one original transparent hero illustration for the right half of the norioWork Chinese AI office website, not a whole webpage.
Input images: Image 1 is a style/composition reference only (the blue website screenshot). Image 2 is our existing blue-and-white robot brand mascot and its laptop; use ONLY its character identity, not the Chinese wordmark to its right. Image 3 is our real norioWork desktop client PPT editor screenshot; use it as the content of the large laptop screen.
Primary request: create a sophisticated polished 3D commercial product illustration in an isolated wide landscape composition around 2.2:1. A slim open silver and dark-blue laptop in attractive slight three-quarter perspective, screen facing the viewer, showing the supplied norioWork PPT editor (retain the supplied UI structure, recognizable tiny Chinese interface, no invented extra claims). To the lower right of the big laptop is the adorable round blue robot with white face, shiny dark eyes and small friendly smile from Image 2, using its smaller blue-and-silver laptop. Keep it as a robot, not a human child. A blue translucent glass oval plinth supports both. Float four attractive glossy 3D rounded document tiles to upper-left of big laptop: a blue W, a green X, an orange P, and a purple 智. Bright cobalt and sky blue, white and silver, crisp soft studio illumination, tasteful smooth rounded surfaces, subtle natural shadows.
Composition: the entire object group must be completely visible and comfortably inside the canvas, including all corners of the large laptop, all floating tiles, small robot, small laptop and oval plinth. Wide hero slot about 720x300 CSS pixels; maximize legibility at that display size. Transparent empty background with genuine alpha, no colored rectangular backdrop, no sky, no scenery, no large surrounding glow rectangle. Leave small safety margins around the group. Do not create a second webpage or website headings/buttons. No border, no watermark, no unrelated text or logo. Screen content may be tiny and softly detailed; keep the client look professional and faithful. Transparent background.


## scene-word-imagegen.txt

Asset: Photo document to editable Word document scenario
Mode: built-in image_gen, generate (original image; screenshot used as visual composition guidance, not an edit target)
Original preserved: C:/Users/80569/.codex/generated_images/01a1e99b-cd2a-7720-9f1d-ade67313b60c/exec-ad453a64-d9a7-4ec9-af4e-8555beffac2a.png
Original dimensions: 1828 x 860
Final: D:/work/office/norioWork-official/assets/campaign/scene-photo-word.webp
Final dimensions: 1024 x 480
Final size: 101466 bytes
Processing: centered aspect-ratio crop of less than 0.4 percent vertical extent, resampled and encoded as WebP; no compositional or semantic editing
Visual QA: fictional adult woman, phone, paper, blue arrow and editable W document all visible; blue/white palette, natural daylight and crisp hands; no title, caption, exterior white margins or watermark

Exact prompt:
Generate ONE original polished website scenario-card photograph, landscape aspect ratio 2.15:1 (ideally 1536x720 or 1024x480). Use-case photorealistic-natural with product UI composite. This is ONLY the image inside the first feature card of a Chinese blue AI office software homepage, NOT a webpage or full card. Composition reference already shown: the FIRST small photo strip in the supplied homepage screenshot, but create an original fictional model and arrangement. A young adult East Asian office woman, natural long dark hair, soft light blue ribbed knit top, in left-facing three-quarter side profile occupying left 43 percent, holding a slim silver smartphone upright with realistic fingers and looking at its screen as she photographs a paper document. The setting is bright soft daylight, pale cream stone wall with soft green foliage above, background gently defocused. At center-right, an upright off-white document sheet with tiny realistic neutral grey paragraphs (dense text need not be legible). A small crisp blue right arrow leads from the paper to a floating polished white rounded editable-document result panel at far right, with subtle light blue border, blue text-line strokes, and a glossy cobalt-blue square tile with the single white letter W in the panel upper-right corner. Natural believable skin, face and hands; premium commercial photography, friendly elegant and understated. Cool airy blue highlights, realistic lighting, high detail, no plastic skin. Keep every important object comfortably within frame for a 1024x480 crop and legible at 324x151. No top headings, no title, no footer, no card caption, no UI outside the document result, no large Chinese text, no watermark, no logo except the W symbol. Entire image has photographic background, no exterior white margins.


## scene-ppt-imagegen.txt

Asset: scene-prompt-ppt.webp
Mode: built-in image_gen, generate with reference image for art direction only
Original: C:/Users/80569/.codex/generated_images/01a1e99c-229e-72b2-935b-5efb4285d092/exec-aba091a2-5db2-4ed2-a073-a1326bd7c7ec.png
Final: D:/work/office/norioWork-official/assets/campaign/scene-prompt-ppt.webp
Final dimensions: 1024 x 480
Transport optimization: @napi-rs/canvas center cover resize, WebP quality 88; original retained.
Reference: C:/Users/80569/AppData/Local/Temp/codex-clipboard-dba73377-1e92-42e5-9d24-6a55a8bb13a3.png
Validation: smiling fictional adult woman, clean hand gesture, accurate bubble text, blue arrow and presentation card/P graphic all inside raster. No outer webpage or watermark.

Final prompt:
Create ONE original raster marketing scene, not a webpage or screenshot. Use case: bright photorealistic lifestyle photography combined with polished floating office graphics. Image 1 is REFERENCE ONLY for the art direction of the SECOND SMALL PHOTO CARD in the four-card row; do not reproduce the overall website or typography. Output composition: landscape 2.15:1, suitable for cropping to 1024x480, edge-to-edge scene with no rounded frame. Subject on left 45%: a fictional adult East Asian office woman age 26-30, long dark brown softly wavy hair, light-blue fine knit top, smiling naturally at the camera, upper torso visible, one hand pointing upward and slightly right. Behind her: outdoors in soft daylight, blurred green hedge along top, pale cream stone wall below, clean optimistic blue commercial photography. Above her pointing finger near center: small white rounded speech bubble, precisely readable short Chinese text ONLY: “生成一份 PPT” in dark blue, single or two lines. On the right third: a floating crisp white presentation slide preview with small orange header line and beautifully minimal pale-blue/royal-blue abstract mountain/chart shapes plus one tiny peach accent. A glossy orange square tile with a white capital P floats over the slide's top-right corner. Between pointing gesture and slide, a clear small bright-blue right arrow conveys converting an idea to presentation. All speech bubble, arrow, P tile and preview graphics should be naturally composited inside the generated photo. Keep the woman, speech bubble and full slide inside generous 5% safe margins; no text except bubble and P tile. Soft natural skin texture, attractive but believable real photo, no cartoon face, no excess fingers, no artificial plastic skin, no dense slide text, no logos, no watermark, no card caption or outside UI.



## scene-excel-imagegen.txt

Asset: Printed table report to editable Excel spreadsheet scenario
Mode: built-in image_gen, edit variant using the original Word scenario as identity/style continuity reference
Reference/edit target: D:/work/office/norioWork-official/assets/campaign/scene-photo-word.webp
Original generated output preserved: C:/Users/80569/.codex/generated_images/01a1e99b-cd2a-7720-9f1d-ade67313b60c/exec-5d490634-377c-4bbd-a7fc-0b0194ebc332.png
Final: D:/work/office/norioWork-official/assets/campaign/scene-photo-excel.webp
Final dimensions: 1024 x 480
Processing: centered aspect-ratio fit and crop, resampled and encoded as WebP; no semantic editing
Visual QA: matching fictional adult woman and sweater, front-facing smile, printed rows/numbers, correct Chinese title, realistic hands, visible blue arrow and green editable X spreadsheet, no heading or caption outside the graphic

Exact prompt:
Edit the supplied generated photo into the matching SECOND scenario in the same commercial photography series. Reference role: supplied image is the edit target for continuity of the SAME FICTIONAL adult woman's identity, long natural dark hair, light-blue ribbed knit sweater, soft daylight, pale cream stone wall and greenery. Preserve her recognizable facial appearance, outfit, bright photographic quality and polished cool palette. Change her pose and scene task: she now faces the camera front-on with a relaxed friendly smile, occupying left 43 percent, holding an upright printed report sheet at center-left with both realistic hands at its lower edges; no phone. The sheet is a clean report with title 项目明细 and a simple dark grey table of short numbers and neutral rows, no personal data, no readable names. To the right of the paper add a small cobalt blue right arrow, then at far right a polished floating editable spreadsheet card: white softly rounded rectangle with a light green title bar, realistic green/grey grid, a few grey numbers and green selected cells, and glossy green square tile with single white letter X in the upper-right corner. Entire graphic is integrated into the photograph. Wide landscape 2.15:1 suitable for 1024x480 crop and ultimately 324x151 card image, all important objects within safe frame. Natural hands, crisp face, gentle background bokeh, friendly premium optimistic office productivity advertising. No webpage, no exterior white margin, no card title/caption, no top headings, no footer, no watermark, no extra logo. Preserve enough greenery at top and pale wall behind result. Make this an original second composition, not merely recoloring the W result.


## scene-svg-imagegen.txt

Asset: scene-sketch-svg.webp
Mode: built-in image_gen, generate with reference images for art direction and subject continuity
Original: C:/Users/80569/.codex/generated_images/01a1e99c-229e-72b2-935b-5efb4285d092/exec-7ee23adc-7fb5-4000-93e4-ee5fd52c1333.png
Final: D:/work/office/norioWork-official/assets/campaign/scene-sketch-svg.webp
Final dimensions: 1024 x 480
Transport optimization: @napi-rs/canvas center cover resize, WebP quality 88; original retained.
Reference 1: D:/work/office/norioWork-official/assets/campaign/scene-prompt-ppt.webp
Reference 2: C:/Users/80569/AppData/Local/Temp/codex-clipboard-dba73377-1e92-42e5-9d24-6a55a8bb13a3.png
Validation: same fictional adult woman styling, natural two hands supporting pad and pen, clear sketched bulb, blue arrow and selected yellow vector bulb all inside raster. No outer webpage or watermark.

Final prompt:
Generate ONE original landscape marketing photo asset, edge-to-edge 2.15:1 ratio suitable for 1024x480. Input Image 1 is continuity REFERENCE ONLY: use the same fictional adult East Asian woman with the same long dark brown softly wavy hair, light blue fine-knit top, clean natural smile, and same bright outdoors art direction with blurred green hedge above pale cream stone wall. Input Image 2 is REFERENCE ONLY for the FOURTH small photo card showing sketch converted to editable vector; do not recreate the whole webpage. Create a new pose and composition: woman occupies left 40%, facing camera and smiling warmly; she holds a white top-spiral sketchpad upright in front of the right side of her torso, around image center. Sketchpad displays a large simple black hand-drawn lightbulb, clearly pencil/pen linework with a filament and small rays. Her hands are natural with correct anatomy; one hand holds a dark pen, the other supports the pad. To the right of pad, a compact bright-blue arrow points right toward a floating crisp white design canvas occupying rightmost 30%. The design canvas displays a polished flat yellow lightbulb vector illustration, dark gray bulb socket, small yellow rays. The bulb is selected with a vivid blue rectangular bounding box, blue square corner/edge control handles and small selection nodes; all selection controls are clean, legible and completely inside the white canvas. This visually communicates sketch to editable SVG. Keep face, full sketchpad and full floating canvas within generous 5% safe margins. Bright professional lifestyle commercial photography, soft blue optimistic feel, realistic skin texture and fabric details, soft daylight, subtle floating card shadow. All graphics composited inside photo itself. Absolutely no title, caption, dense text, letters, logos, watermark, outside webpage, browser frame, extra fingers, distorted sketchpad or P/Word/Excel tiles. Preserve original fictional woman's identity from continuity reference, but create a fresh scene with pad.



## footer-imagegen.txt

Asset: mascot-footer
Mode: built-in ImageGen generation, referenced hero-office.png and supplied mascot-source.png; transparent_background=true
Original: C:/Users/80569/.codex/generated_images/01a1e99b-a3d7-7651-a345-59954778d91c/exec-0b83efda-4c38-44b7-b341-5b033158d812.png
Workspace PNG: D:/work/office/norioWork-official/assets/campaign/mascot-footer.png
Workspace optimized WebP: D:/work/office/norioWork-official/assets/campaign/mascot-footer.webp
Final prompt:
Use case: ads-marketing.
Asset type: one transparent footer mascot illustration for a Chinese AI office website.
Input image roles: Image 1 is the approved hero illustration; borrow ONLY the blue-and-white round robot identity at the lower-right and its glossy professional 3D rendering style. Do NOT include the big laptop, screen, plinth, floating tiles or whole scene. Image 2 is the original supplied mascot reference; borrow only its blue round robot with white face identity, not any Chinese lettering.
Create a single adorable compact blue-and-white AI robot behind a small blue laptop, facing the viewer at a slight three-quarter angle. Its face is a smooth white rounded oval inset, bright dark-blue glass eyes with small catchlights, a little smiling mouth; shiny cobalt-blue round body and head, short rounded robot arms. One small hand is raised in a friendly wave hello, the other rests at the laptop. The laptop lid has ONLY one simple large white uppercase N, no other text. Keep the same charming robot proportions and clean blue/white palette as the approved hero asset. Attractive soft studio light, crisp rounded surfaces and subtle soft shadow under the laptop.
Composition: isolated object group, horizontal canvas around 1.5:1, robot and laptop fill the useful center of canvas with small safety margins. Entire laptop and waving hand remain fully inside the frame. Intended display size around 150×120 CSS pixels, so keep the silhouette simple and face legible. Genuine transparent alpha background. NO platform or plinth, no landscape, no colored rectangle, no badge, no backdrop, no human child, no extra logo, no Chinese wordmark, no watermark.


## waves-imagegen.txt

Asset: blue-wave background
Mode: built-in ImageGen generation; supplied screenshot used only as style reference
Original: C:/Users/80569/.codex/generated_images/01a1e1a9-ce74-7a83-afe9-b26f5ed306da/exec-8d2726da-99fd-44d1-9e6f-36e199803e16.png
Final: D:/work/office/norioWork-official/assets/campaign/blue-waves.webp
Original dimensions: 2172×724; final: 1920×640, same 3:1 ratio
Prompt:
Use case: background-plate. Asset type: empty blue-white website banner background, wide 3:1 landscape, 2304 x 768. The supplied screenshot is ONLY a palette and subtle flowing-wave style reference. Generate ONLY the EMPTY background: very pale ice-blue and white luminous studio background, smooth translucent flowing ribbon-like waves along bottom edge and rising at far right, a thin graceful white curved light trail, soft airy blue glow strongest upper right and lower left, plenty of very light almost white negative space across center and left for dark text. Elegant professional Chinese AI office software promotional art direction, tasteful clean optimistic Microsoft/enterprise blue palette. Keep it refined and simple, not cosmic or neon. NO laptops, NO people, NO robots, NO icons, NO words, NO logos, NO UI, NO buttons, NO cards, NO text, NO objects. Pure empty wave background only.
