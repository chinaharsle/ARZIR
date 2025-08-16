博客BLOG
一、页面目标
1. SEO 引流
    ◦ 覆盖行业相关长尾关键词，让用户通过 Google 搜索进入。
2. 内容聚合
    ◦ 按分类整合文章，帮助用户快速找到相关主题内容。
3. 转化引导
    ◦ 在关键位置插入 CTA，引导用户查看产品或提交询盘。
---
二、整体风格与基础规范
• 风格：延续首页工业现代感，大留白、规整网格、简洁卡片设计。
• 字体：标题 Roboto、正文 Hind。
• 响应式布局：
    ◦ 移动优先（360px 起）
    ◦ 断点 sm=640 / md=768 / lg=1024 / xl=1280
• 图片：
    ◦ 封面比例 16:9
    ◦ WebP 优先
    ◦ 多规格 srcset
    ◦ 懒加载
• 可访问性：图片 alt 包含文章标题关键词；卡片可键盘聚焦。
• 性能：LCP < 2.5s；ISR 缓存（30 分钟）。
---
三、信息架构与布局
1. Page Hero / 顶部横幅
• H1：ARZIR Blog
• 副标题（英文）：
“Insights, guides, and updates on recycling and metal processing machinery.”
• 背景图：工业机械、生产线或金属回收场景（渐变遮罩，保证文字可读）。
• 面包屑导航：Home > Blog
---
2. 搜索与分类导航区
• 搜索框：
    ◦ 站内搜索文章标题和摘要
    ◦ placeholder: Search articles...
• 分类筛选（可多选或下拉）：
    ◦ Industry News
    ◦ Product Guides
    ◦ Buying Tips
    ◦ Applications
    ◦ Maintenance & Service
• 移动端：折叠为横向滑动标签或下拉。
---
3. 文章列表区
• 布局：
    ◦ ≥1024px：3 列
    ◦ 768–1023px：2 列
    ◦ <768px：1 列
• 卡片内容：
    ◦ 封面图（16:9，hover 轻微放大）
    ◦ 标题（H2/H3，≤70 字符，含关键词）
    ◦ 发布时间 + 分类标签
    ◦ 摘要（≤30 英文词）
    ◦ Read More 按钮（次要样式）
• SEO 要求：
    ◦ 标题链接至 /blog/{slug}
    ◦ 图片 alt 格式：{文章标题} - ARZIR Blog
    ◦ 卡片标题使用 H2/H3，分类标题使用 H2
---
4. 分页与加载更多
    ◦ 分页器（带页码、上一页/下一页）
---
四、SEO 与内容规范
• Title（≤60 字符）：
    ARZIR Blog | Recycling & Metal Processing Insights
• Meta Description（120–160 字符）：
    Explore ARZIR's blog for guides, tips, and industry news on recycling balers, metal shears, shredders, and more.
• 关键词布局：
    ◦ 页面简介与文章摘要自然融入目标关键词（如 recycling machinery guide、metal baler maintenance）。
• 结构化数据：
    ◦ Blog（整页）
    ◦ BlogPosting（文章卡片）
    ◦ BreadcrumbList（面包屑）
---
五、交互与动效
• 卡片 Hover：
    ◦ 图片轻微放大 + 阴影增强
    ◦ 按钮颜色变化
• 分类切换：
    ◦ 平滑淡入加载
• 滚动进入视口：
    ◦ 卡片淡入 + 上移（duration ≤ 0.4s）
Blog单页
一、页面目标
• SEO：拿到“信息型/商用前期”流量，覆盖产品与应用相关长尾词，提升内链权重。
• 阅读体验：清晰层级、舒适排版、移动优先、无干扰。
• 转化：在不打断阅读的前提下，嵌入轻量 CTA，引导至产品页/询盘。
---
二、整体风格与规范
• 风格：现代工业风，大留白 + 清晰网格，弱分割线，语义层级明显。
• 字体：标题 Roboto、正文 Hind。
• 图片比例：16:9（封面与文内主图）；WebP/AVIF，提供 srcset/sizes，懒加载。
• 可访问性：对比度≥4.5:1，图片 alt 描述语义化；键盘可达；Heading 有序。
---
三、信息架构（从上到下）
1. Breadcrumb / 面包屑
    Home > Blog > Category > Post Title（可点击，增强上下文与内链）
2. Hero / 首屏
• H1（英文）：文章标题（≤70字符，含目标关键词）
• Meta 行：发布日期、Updated on、作者、阅读时长（5–8 min read）、分类 Tag
• Social share：轻量图标（Top 或文末重复一次）
• 封面图：16:9，高质量、含关键词的 alt
3. Executive Summary / 摘要（可选）
• 2–3 句英文总结或 Key Takeaways 列表（3–5条）
4. Table of Contents / 目录（自动生成）
• 抽取 H2/H3 生成锚点目录；移动端可折叠
5. 正文内容（MDX/富文本）
• 结构建议：
    ◦ 引言（痛点/场景/读者对象）
    ◦ 正文分节（H2/H3，图文结合）
    ◦ 小结/要点回顾
• 文内模块：
    ◦ Data Callout（数据结论高亮）
    ◦ 图表/流程图（设备原理/对比逻辑）
    ◦ 表格（参数对照/工艺对比，带 caption）
    ◦ 代码/公式（如有计算器相关）
• 内链：
    ◦ 至产品分类/产品页、Calculator、案例页；每篇≥3处
6. Product Promo / 轻量产品推广卡（不打断阅读）
• 位置：第1个H2后或文末前一屏
• 内容（英文）：产品名 + 1句价值 + 小图 + 按钮
    ◦ View Product（次要按钮）
    ◦ Get a Quote（主按钮，打开弹窗表单）
7. FAQ（结构化数据）
• 3–6 个常见问题，覆盖“价格/交期/应用/维护/选型”
• 对应 FAQPage JSON-LD
8. Author Box / 作者信息（可选）
• 作者头像、头衔、1–2 句专业背书、相关文章链接
9. Prev/Next 导航
• ← Previous / Next →（同分类优先），增强会话深度
---
四、SEO 规范（英文呈现）
• Title（≤60）：包含主关键词 + 品牌或分类
    ◦ 例：Scrap Metal Baler Maintenance Guide | ARZIR
• Meta Description（120–160）：覆盖主题与关键卖点/场景
• URL：/blog/{slug}，slug 尽量含主关键词
• Heading 层级：1×H1；H2/H3 反映提纲
• 关键词策略：
    ◦ 主关键词：1–2 个；标题、引言、H2 中自然出现
    ◦ 变体/长尾：3–6 个；分布于小节标题与结论
• 结构化数据：
    ◦ Article（或 TechArticle）
    ◦ BreadcrumbList
    ◦ FAQPage（若启用 FAQ）
• OG/Twitter：og:title、og:description、og:image（16:9，≥1200×630）
---
六、性能与可用性
• 性能：
    ◦ LCP < 2.5s；首图使用 priority（仅首屏必要时）
    ◦ 图片 next/image + sizes；文章图片延迟加载
    ◦ ISR：revalidate = 1800（30分钟），更新时触发 tag
• 可用性：
    ◦ 行高：正文 leading-relaxed；最大行宽 ~70–80 字符
    ◦ 表格可横向滚动（移动端）
    ◦ 锚点跳转有平滑滚动与回到顶部
---
七、编辑与写作规范（给内容团队）
• 读者画像：工厂设备采购/工艺工程/回收场负责人
• 语气：专业、客观、可操作；尽量数据化（用数值与案例）
• 篇幅：1500–2500 词为主力；结合搜索意图确定
• 多媒体：每 300–500 词配 1 张图/表/示意图
• 合规：资料引用标注来源；避免夸大承诺
---
八、英文内容骨架（可直接复用）
（以下为页面“展示内容”示例结构与占位文案）
• H1：How to Choose the Right Scrap Metal Baler for Your Yard
• Meta：Updated on 2025-08-10 · 7 min read · Product Guides
• Summary / Key Takeaways
    ◦ Identify your material mix, throughput, and bale density targets.
    ◦ Compare hydraulic power, chamber size, and control systems.
    ◦ Plan for maintenance, spare parts, and operator training.
• H2：What Problems Are We Solving?
• H2：Key Selection Criteria（H3 分节：Press Force / Bale Size / Cycle Time / Energy）
• H2：Process & Workflow（图示/流程）
• H2：Common Mistakes to Avoid
• Promo Card：ARZIR Scrap Metal Baler — High-Density, Reliable, Efficient → View Product / Get a Quote
• H2：FAQs（3–6 条）
• Conclusion + CTA：Ready to optimize your yard? → Get a Quote
