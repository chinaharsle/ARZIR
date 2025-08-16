Applications列表页
一、页面目标
• 聚合入口：集中展示 ARZIR 设备可服务的行业与应用场景。
• SEO 引流：覆盖 “{industry} recycling / {industry} metal processing solutions” 等长尾词。
• 转化路径：每个行业卡片进入行业落地页（/applications/[slug]），行业页再导向产品或询盘。
---
二、整体风格与规范
• 字体：标题 Roboto、正文 Hind。
• 图片比例：行业卡片 16:9（更具场景感）；WebP/AVIF，next/image 多规格 sizes + lazy。
• 响应式：移动优先；网格列数：<768px 1 列、≥768px 2 列、≥1024px 3 列。
• 可访问性：卡片可键盘聚焦；图片 alt 语义化（行业 + 设备/场景）；对比度≥4.5:1。
---
三、信息架构（从上到下）
1) Page Hero
• H1：Applications
• 副标题（英文）（≤25 词）：
    Real-world use cases of ARZIR machinery across recycling and metal processing industries.
• 面包屑：Home > Applications
2) 简介段（可选）
• 60–90 英文词，说明“我们如何为不同工况提供合适设备组合与产能规划”。
3) 行业网格（主内容）
• 卡片元素（统一模板）
    ◦ 封面图 16:9（行业现场/设备工作照）
    ◦ 标题（H3）：行业英文名
    ◦ 1 行痛点→收益文案（≤18 词）
    ◦ Explore Solutions 次要按钮 → 对应行业页 /applications/{slug}
• 10 个推荐行业（可按需调整顺序与是否展示）
    a. Scrap Recycling — Maximize recovery value with high-density compaction.
        slug: scrap-recycling
    b. Metal Fabrication — Turn offcuts into value with efficient baling & shearing.
        slug: metal-fabrication
    c. Automotive Dismantling — Faster ELV processing with robust baling & shearing.
        slug: automotive-dismantling
    d. Aluminum Processing — Stable extrusion and compacting for clean aluminum streams.
        slug: aluminum-processing
    e. Steel Mills — Handle mill scrap safely and consistently to feed melting lines.
        slug: steel-mills
    f. Shipbreaking — Heavy sections processing with high-tonnage shears & balers.
        slug: shipbreaking
    g. Construction & Demolition Recycling — Streamline mixed metal recovery on C&D sites.
        slug: construction-demolition-recycling
    h. Railway Scrapping — Process rails, wagons, and components with industrial shears.
        slug: railway-scrapping
    i. Electrical & Electronic Waste Recycling — Size reduction and separation for motors, cables, WEEE.
        slug: ewaste-recycling
    j. Non-Ferrous Metal Recycling — High-value copper, brass, and alloy recovery at scale.
        slug: non-ferrous-recycling
说明：每个行业卡片图片 alt 示例：Scrap recycling yard using ARZIR balers and shears
4) 优势短区块（Why ARZIR，3 点）
• 标题（H2）：Why ARZIR
• 三个简要卖点（图标 + 一句）：
    ◦ Reliability — Heavy-duty frames and long service life.
    ◦ Performance — High bale density and consistent throughput.
    ◦ Global Support — Commissioning, training, and spare parts worldwide.
5) 底部 CTA（轻量）
• 文案（英文）：Not sure which solution fits your industry?
• 按钮：Get a Quote（弹窗表单，成功 Modal + 1.5s Confetti，与全站一致）
---
四、SEO 规范
• Title（≤60）：Applications | ARZIR Recycling & Metal Processing Solutions
• Meta Description（120–160）：
    Explore ARZIR applications across scrap recycling, metal fabrication, automotive dismantling, aluminum processing, and more.
• Heading 层级：H1 单一；行业卡片标题用 H3；优势区块 H2。
• 关键词布局：自然包含 recycling applications, metal processing solutions, industry use cases；卡片标题包含行业名。
• 结构化数据：
    ◦ BreadcrumbList（Home > Applications）
    ◦ ItemList（列出 6–12 个行业卡片，每个 ListItem 的 url 指向 /applications/[slug]）
---
五、交互与动态
• 卡片 hover：轻微缩放（≤1.03）+ 投影增强；按钮边框主色。
• 进入视口：淡入 + 上移（≤0.4s，节制）。
• 移动端：卡片整块可点击，按钮作为显性入口（点击区域 ≥ 44px）。
---
六、性能与缓存
• LCP 目标 < 2.5s；首屏图片使用低分辨率占位（blurDataURL）。
• ISR：export const revalidate = 3600；后台增删行业后 revalidateTag('applications')。
• 图片：Supabase Storage，多规格（640/960/1280/1600）。
Applications单页
一、页面目标
• 解释业务场景：清晰描述该行业的痛点、工艺流程、合规要求与典型工况。
• 方案与选型：给出设备组合（Balers/Shears/Shredders…）、选型规则与关键参数范围。
• 证据与转化：用数据/案例/客户评价证明效果，并引导到产品页或询盘。
---
二、信息架构（从上到下）
1) Page Hero
• H1：行业名称（如 “Scrap Recycling Solutions”）
• 副标题（英文，≤22 词）：一句价值承诺 + 结果导向（如 “Higher recovery rates with high-density compaction and safe workflows.”）
• 元素：面包屑 Home > Applications > [Industry]；Hero 大图（16:9、真实场景）、Primary CTA：Get a Quote（弹窗表单：Name*、Email*、Company、WhatsApp、Message*；提交成功 Modal “Thank you! … We will contact you soon!” + ≈1.5s Confetti）
2) Industry Overview（行业概览）
• 90–140 英文词：核心痛点（安全/效率/合规/成本）+ 典型原料与产能范围 + 环保或法规背景。
• 2–4 个 Key Metrics（小徽章）：Throughput、Recovery Rate、Bale Density、OPEX。
3) Challenges → Outcomes（痛点到结果，对齐价值）
• 两列对照（或网格卡片）：“Pain → Outcome”
    ◦ Mixed scrap streams → Consistent bale density
    ◦ Manual handling risks → Safer automated workflows
    ◦ Irregular throughput → Stable line capacity
• 每条 ≤14 词，直击采购/产线经理关注点。
4) Process Workflow（工艺流程）
• 标题（H2）：Process Workflow
• 内容：流程图/时间线（图标+文案）
    a. Receiving & Sorting
    b. Pre-cutting / Pre-shredding
    c. Baling / Shearing / Briquetting
    d. Quality Check & Dispatch
• 每步 1 句亮点（如安全、自动化、能耗）。
5) Recommended Equipment（推荐设备组合）
• 标题（H2）：Recommended Equipment
• 布局：卡片网格（图片4:3、名称H3、20词内简介、Learn More → 对应产品详情）
    ◦ 例：Scrap Metal Baler / Gantry Shear / Double-Shaft Shredder / Briquetting Machine
• 可选表格（对比 3–5 个关键参数）：Press Force、Bale Size、Cutting Force、Throughput、Power。
6) Sizing & Selection Guide（选型指南）
• 标题（H2）：Sizing & Selection Guide
• 内容：以要点/表格给出参数区间与决策规则
    ◦ Material Mix（% ferrous / non-ferrous）
    ◦ Desired Bale Density（t/m³）
    ◦ Daily Throughput（t/day）
    ◦ Feed Type（Manual/Conveyor/Grab）
    ◦ Electrical Supply（Voltage / Phase）
• 插入按钮：Open Calculator（跳 /calculator/[slug-或相关]）
7) Case Studies（案例）
• 标题（H2）：Case Studies
• 2–3 张项目卡（缩略图4:3、国家/行业、设备组合、量化成果：+X% throughput、−Y% labor、ROI 月数）
• Read Case（可选，进入案例详情或 PDF）
8) KPIs & Compliance（指标与合规）
• 标题（H2）：KPIs & Compliance
• 列出该行业常见 KPI（e.g., Bale Density, Cycle Time, OEE, Energy per ton）
• 合规/规范：安全围栏、应急停机、粉尘/噪声/排放（以“适配本地法规”为措辞）
9) FAQs（3–6 条）
• 问题 H3 + 简短回答：选型、维护周期、备件、交货与安装、培训、能耗。
10) Bottom CTA
• 轻量背景块：
    “Need a tailored configuration for your site?”
    Primary：Get a Quote（弹窗，与 Hero 一致）
    Secondary：Explore Products
---
三、视觉与交互
• 比例：场景图 16:9；设备图 4:3；统一 next/image，WebP/AVIF，多规格 sizes，lazy。
• 风格：白/浅灰背景 + 极细边 + 微阴影；标题黑色；按钮主色 #006EB6。
• 动效：进入视口淡入+上移 ≤0.4s；按钮/卡片 hover 轻微提升；无过度动画。
• 可访问性：Heading 层级规范；按钮/链接可键盘操作；对比度≥4.5:1；流程图需 aria-label 或替代文本。
---
四、SEO 规范
• Title（≤60）：[Industry] Applications & Solutions | ARZIR
• Meta Description（120–160）：包含行业 + 设备类别 + 结果导向（效率/密度/安全/合规）。
• URL：/applications/[slug]（如 /applications/scrap-recycling）
• 关键词策略：自然分布 [industry] recycling/processing, baler/shear/shredder, sizing, throughput, bale density 等。
五、性能与缓存
• LCP < 2.5s、CLS < 0.1；Hero 图可用 priority（仅必要时）；关键 CSS 内联。
• ISR：export const revalidate = 3600；后台更新时 revalidateTag('applications')。
• 图片：Supabase Storage，多档尺寸（640/960/1280/1600）。