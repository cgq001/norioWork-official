# 扩展首页新增人物素材

生成方式：内置 ImageGen；透明背景生成，未使用 CLI/API Key。四张均为虚构宣传角色，用于首页「适合哪些人使用」。原始输出保留，站点采用320×320 WebP，透明通道保留。

此前主视觉、场景与背景素材记录见 [blue-home-assets.md](blue-home-assets.md)。

## student

```text
Asset: audience-student
Mode: built-in ImageGen generation, transparent_background=true; user screenshot as bottom audience-row style reference
Original preserved: C:/Users/80569/.codex/generated_images/01a1e99b-a3d7-7651-a345-59954778d91c/exec-75bd36e2-53c9-46d6-a577-046b17baf153.png
Runtime asset: D:/work/office/norioWork-official/assets/campaign/audience-student.webp
Final prompt:
Use case: ads-marketing.
Asset type: one standalone student audience avatar for an AI office website.
Input image: the supplied website screenshot is a STYLE REFERENCE ONLY. Look specifically at the small STUDENT avatar in the bottom audience row. Do not generate a website, collage, text card, surrounding circle or other avatars.
Create one fictional young adult East Asian college woman, upper-body bust portrait, in a friendly polished stylized 3D commercial illustration style. She has a neat dark bob with a little tied-back section, round thin dark glasses, expressive friendly eyes, a gentle cheerful smile, and a pale warm-yellow casual top with subtle light-blue detail. She holds an open vivid blue textbook with one hand and a simple pen with the other, as if studying or writing notes. The face, glasses, book and hands must be clearly legible when reduced to 80×80 pixels. Sophisticated rounded 3D forms, soft studio illumination, smooth clean materials, blue-white palette with pale yellow accent, matching the visual language of the reference's bottom-row audience illustrations.
Composition: square 1:1 canvas, single centered upper-body portrait, snug but safe margins; whole head, hair, shoulders, hands, blue book and pen comfortably inside canvas. Genuine fully transparent alpha background. No separate surrounding circle, no pedestal, no scenery, no glow rectangle, no white card, no writing on book, no letters, no logos, no caption, no watermark. Adult college student, not a child.
```

## office

```text
Asset: Office worker transparent audience avatar
Mode: built-in image_gen, generate with transparent_background=true
Original preserved: C:/Users/80569/.codex/generated_images/01a1e99b-cd2a-7720-9f1d-ade67313b60c/exec-6ca2e161-aa88-4a69-9593-e181b0e63c90.png
Final: D:/work/office/norioWork-official/assets/campaign/audience-office.webp
Final dimensions: 320 x 320
Processing: resampled to 320 x 320 and encoded as WebP, preserving genuine generated alpha; no semantic editing
Visual QA: blue-clad fictional adult office woman, friendly polished rounded 3D style, face/laptop fill frame, no text/logos/captions/enclosing circle. Alpha verified with transparent corner pixels.

Exact prompt:
Create ONE premium stylized 3D office-worker avatar asset on a genuinely transparent background, square1:1 composition. This is a small audience icon for a blue-white AI office software homepage, displayed at80x80. Fictional young adult East Asian woman with shoulder-length dark navy-black hair with a tidy side part, warm friendly face, bright dark eyes, subtle smile, blue professional casual top with a simple pale-blue collar. Upper-body portrait seated and working at a small open silver-blue laptop in front of her, both hands placed naturally at its keyboard, a little of her blue sleeves visible around laptop edges. Three-quarter front view, eyes gently looking toward viewer, approachable competent office professional. Polished soft rounded stylized 3D illustration with smooth tactile materials, soft studio lighting, restrained blue-white palette and pale skin, large readable facial features. Fill the square with head, torso and laptop, about5percent safety margin, readable as a tiny icon. Isolated cutout only with genuine alpha; no background, no white panel, no enclosing circle, no floor platform, no words, no captions, no logos, no watermark, no extra accessories. Original character; the supplied screenshot audience row is only stylistic inspiration.
```

## freelance

```text
Asset: audience-freelance.webp
Mode: built-in image_gen, generate transparent original 3D character using reference for art direction only
Original: C:/Users/80569/.codex/generated_images/01a1e99c-229e-72b2-935b-5efb4285d092/exec-17a331ac-3106-4e46-9b4f-1523c68ba6b2.png
Final: D:/work/office/norioWork-official/assets/campaign/audience-freelance.webp
Final dimensions: 320 x 320
Transport optimization: @napi-rs/canvas contain resize, WebP quality 90; source alpha preserved, original retained.
Reference: C:/Users/80569/AppData/Local/Temp/codex-clipboard-a06bed94-3256-4761-a065-0d4baf357d4f.png
Validation: original adult male avatar with dark hair, round glasses, pale blue shirt and blue laptop; clean silhouette, no logos, text, frame or background. True transparent pixels verified.

Final prompt:
Create ONE original premium stylized 3D commercial avatar illustration with a genuinely TRANSPARENT alpha background. Image 1 is REFERENCE ONLY for the third tiny audience avatar in the row near bottom: freelance worker with round glasses and laptop. Do not reproduce any webpage, card, text, or surrounding layout. Subject: fictional adult East Asian young man, age 25-32, tidy short dark navy-black hair with side part, round dark blue thin glasses, warm friendly smile, pale blue casual collared shirt. Waist-up, centered frontal with subtle three-quarter turn, large clear face and friendly rounded proportions. Both hands are typing on a small open blue laptop, laptop lid facing viewer, completely plain with no logo or letters. Friendly high quality 3D character with soft sculpted toy/clay/Pixar-like commercial rendering, smooth but tasteful surfaces, clean blue-white palette, soft studio lighting, subtle pale blue rim light. Frame a complete waist-up character and laptop in a square 1:1 composition with 8% safety margin, hands and laptop fully inside canvas. Should remain instantly legible when displayed at 80x80 pixels. Transparent background only, no colored square, no circle, no pedestal, no scenery, no surrounding icons, no caption, no watermark, no text, no logos. Natural two hands, no extra fingers. The main shirt and laptop are blue but face warm natural skin. Original avatar, recognizable professional freelancer persona.
```

## everyday

```text
Asset: Personal everyday-use transparent audience avatar
Mode: built-in image_gen, generate with transparent_background=true
Original preserved: C:/Users/80569/.codex/generated_images/01a1e99b-cd2a-7720-9f1d-ade67313b60c/exec-4c1c91bb-09e2-4bd7-b545-6e4c26dc7a0c.png
Final: D:/work/office/norioWork-official/assets/campaign/audience-everyday.webp
Final dimensions: 320 x 320
Processing: resampled to 320 x 320 and encoded as WebP, preserving genuine generated alpha; no semantic editing
Visual QA: yellow casual top, fictional adult woman, shoulder-length dark hair, smartphone and blank note card, rounded 3D style matching audience-office, no text/logos/captions/enclosing circle. Transparent corner pixels verified.

Exact prompt:
Create ONE personal everyday-use audience avatar on genuine transparent alpha background, square1:1 composition, for a blue-white AI office homepage. Visual style: same premium polished stylized 3D campaign icon series as the already shown office-woman avatar, with rounded friendly face, large expressive dark eyes, smooth soft tactile materials, neat navy-black shoulder-length hair, believable stylized hands, soft studio lighting. Make a distinct fictional young adult East Asian woman, warm cheerful smile, warm yellow casual short-sleeve top, waist-up portrait. She holds a slim pale-blue smartphone upright in one hand, tilted slightly toward her but clearly recognizable to viewer, and a small blank ivory note card in the other hand near her torso. The note card has no words; phone has no visible brand/logo or text. Three-quarter front orientation, friendly approachable everyday planning feeling, large readable face and phone, fill canvas with upper body, small 5 percent safety margins, optimized to remain recognizable at80x80. Palette primarily soft navy hair, warm yellow top, pale-blue phone, light natural skin. Asset is a clean isolated cutout, genuinely transparent background, no background panel, no enclosing circle, no floor/platform, no laptop, no extra objects, no captions, no words, no logos or watermark.
```
