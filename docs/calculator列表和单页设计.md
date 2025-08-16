Calculator列表页
一、页面目标
• 汇总与导航：集中展示所有计算器工具，让用户快速找到所需内容。
• SEO 引流：承接与计算器相关的长尾关键词，提升工具入口流量。
• 转化引导：引导用户在计算完成后提交询价或联系销售。
---
二、整体风格与基础规范
• 风格：现代工业风，大留白、规则网格、轻描边卡片、微动效（与首页一致）。
• 字体：标题 Roboto、正文 Hind。
• 响应式：移动优先；列数规则：<768px 1 列、≥768px 2 列、≥1024px 3 列。
• 图片/图标：卡片顶部放简图/图标（SVG/WebP，非必需）；懒加载；尺寸统一。
• 可访问性：卡片可键盘聚焦；ARIA 标签；对比度≥4.5:1。
---
三、信息架构与布局（从上到下）
1) Page Hero / 顶部横幅
• H1：Calculators
• 副标题（英文）：
    “Engineer-friendly tools to size, compare, and estimate performance for recycling and metal processing setups.”
• 面包屑：Home > Calculator
• 可选说明行：强调“免费、无需注册、基于工程假设、仅作初步选型”。
---
2) 计算器卡片网格（主内容）
• 卡片信息结构（英文）
    ◦ Title（H3）：计算器名称（含关键词，如 “Scrap Baler Sizing Calculator”）
    ◦ 简介：1–2 行，说明输入/输出与适用场景（≤22 个英文词）。
    ◦ Meta 行：Category、Estimated time（如 “~2 min”）、标签（Sizing/ROI 等）。
    ◦ CTA：Open Calculator（Primary，直达 /calculator/[slug]）
    ◦ 图标/示意：工业线条图/数学符号（可选）。
• 交互：hover 阴影增强 + 轻微上移；焦点态边框主色。
• SEO：图片 alt 语义化；卡片标题用 H3；链接带 aria-label。
---
3) 底部 CTA
• 文案（英文）：
    “Not sure which machine fits your numbers? Our engineers can help.”
• 按钮：
    ◦ Primary：Get a Quote（弹出询价/需求表单)
---
四、SEO 规范
• Title（≤60）：ARZIR Calculators | Sizing, Power & ROI Tools
• Meta Description（120–160）：包含 recycling calculators / metal processing calculators 等短语。
• URL：/calculator（列表页）；详情页 /calculator/[slug]。
• Heading 层级：H1=页面标题；卡片标题 H3。
• 关键词策略：列表页简介中自然出现 calculator, sizing, power, throughput, ROI 等集合词。
• 结构化数据：
    ◦ 列表页：ItemList（items 指向每个计算器 URL）
---
五、性能与可用性
• LCP/TTFB：列表页 LCP < 2.5s；使用 ISR（revalidate=3600）与 Edge 缓存。
• 图片：统一 next/image，多规格 + sizes；图标优先 SVG。
• 可用性：移动端卡片点击区域 ≥ 44px；CTA 在首屏与底部都出现。
Calculator单页
一、页面目标
• 工具功能：用户可在线输入数据 → 即时计算结果。
• SEO 引流：承接与计算器相关的长尾关键词。
• 用户体验：让工程师、采购人员快速获得计算结论。
---
二、整体风格与基础规范
• 风格：现代工业风，大留白，直观表单布局，与全站统一。
• 字体：标题 Roboto、正文 Hind。
• 响应式：移动优先；表单和结果区在移动端上下排列，桌面端左右分栏。
• 可访问性：表单控件有标签 (<label>)，结果区有 aria-live 以便计算结果更新时提示屏幕阅读器。
---
三、信息架构与布局（从上到下）
1) Page Hero
• H1：计算器名称（含关键词，如 “Scrap Baler Sizing Calculator”）。
• 副标题（英文）：简要说明计算器用途与适用场景（≤2 句）。
• 面包屑：Home > Calculator > [Name]。
---
2) 简介与使用说明
• Section 标题（H2）：How to Use
• 内容：分步骤说明（Step 1, Step 2…），解释每个输入的含义、单位及注意事项。
• 配图（可选）：简单示意图（WebP/SVG）帮助理解公式或结构。
---
3) 输入表单区
• 标题（H2）：Input Parameters
• 结构：
    ◦ Label（含单位，如 Material Thickness (mm)）
    ◦ Input（数字/下拉/单选）
    ◦ Placeholder（如 e.g., 5.0）
    ◦ 必填项加 Required 标识
• UI：使用 shadcn/ui 的 Input、Select、RadioGroup 组件。
• 功能：输入变化时自动计算（前端 JS），或通过 Calculate 按钮触发。
• 额外功能：Reset 按钮清空所有字段。
---
4) 结果展示区
• 标题（H2）：Calculation Results
• 内容：
    ◦ 主结果（大号字体、主色突出）
    ◦ 辅助数据（表格或列表，含单位）
    ◦ 状态提示（如 “Recommended machine capacity: …”）
• 状态颜色：绿色=适合，橙色=接近极限，红色=超载。
• 布局：桌面端固定在右侧（sticky），移动端位于表单下方。
---
5) FAQ 区（SEO 加分）
• 标题（H2）：Frequently Asked Questions
• 每个问题用 H3，简短回答。
• 覆盖关键词相关问题，如：
    ◦ What is the formula used in this calculator?
    ◦ Can I use imperial units?
    ◦ Is this calculator suitable for stainless steel?
---
四、SEO 规范
• Title（≤60）：{Calculator Name} | ARZIR Engineering Calculator
• Meta Description（120–160）：概括计算器功能与适用范围。
• Heading 层级：H1=计算器名称；H2=主要区块；FAQ 问题 H3。
• 关键词策略：自然包含 calculator, sizing, estimator, tool, power, throughput 等词。
• 结构化数据：
    ◦ SoftwareApplication（包含 name, applicationCategory, operatingSystem="Web", offers=Free）。
---
五、性能与可用性
• 计算：前端即时反馈（JS）。
• 缓存：静态内容用 ISR（revalidate=86400），计算逻辑走前端。
• 图片：next/image，多规格 + lazy loading。
• 移动端体验：控件点击区域 ≥ 44px；结果区可滚动查看.