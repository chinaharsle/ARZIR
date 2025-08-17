产品总分类页面PRODUCTS
一、整体风格与基础规范
• 风格：延续首页和 About 页的现代工业风，突出坚固、可靠、专业感。
• 字体：标题 Roboto、正文 Hind。
• 响应式：
    ◦ 移动优先
    ◦ ≥1280px 三列卡片
    ◦ 768–1279px 两列
    ◦ <768px 一列
• 图片规范：统一 4:3 比例，WebP 优先，多规格 srcset/sizes，lazy loading。
• 可访问性：所有卡片图片 alt 中包含分类名+产品名；卡片可键盘聚焦。
---
二、信息架构与布局
1. Page Hero / 顶部横幅
• H1：Our Products
• 副标题（英文）：
“Explore ARZIR's complete range of high-performance recycling and metal processing machinery.”
• 背景：全宽工业机械或生产线图片（加浅渐变遮罩，保证文字可读）。
• 面包屑导航：Home > Products
---
2. 分类分块展示（按产品类别分区）
每个分类模块 包含标题 + 简短介绍 + 产品卡片网格，卡片点击进入详情页。
---
A. Recycling Baler
• 简介（英文）：
“High-density balers for efficient recycling of ferrous and non-ferrous metals.”
• 卡片布局：四列（lg），两列（md），一列（sm）。
• 四个产品卡片：
    a. Scrap Metal Baler
        图片（4:3）、简述（≤25 词）、Learn More 按钮
    b. Car Body Baler
        图片（4:3）、简述、Learn More
    c. Vertical Baler
        图片（4:3）、简述、Learn More
    d. Horizontal Baler
        图片（4:3）、简述、Learn More
---
B. Scrap Metal Shear
• 简介：
“Heavy-duty shearing solutions for scrap yards, demolition, and recycling facilities.”
• 卡片：
    a. Container Shear
    b. Gantry Shear
    c. Alligator Shear
---
C. Shredder
• 简介：
“Powerful shredders designed to handle various scrap materials with precision.”
• 卡片：
    a. Single-Shaft Shredder
    b. Double-Shaft Shredder
    c. Four-Shaft Shredder
    d. Hammer Shredder
---
D. Aluminium Extrusion Press
• 简介：
“Precision extrusion presses for high-quality aluminium profiles.”
• 卡片：
    a. Aluminium Extrusion Press（单个）
---
E. Briquetting Machine
• 简介：
“Efficient briquetting systems for compacting metal chips and turnings.”
• 卡片：
    a. Briquetting Machine（单个）
---
三、卡片样式（统一规范）
• 图片：4:3 比例，hover 轻微缩放（3–5%）。
• 标题（H3）：产品英文名。
• 文本：简述产品主要用途或优势（≤25 个英文单词）。
• 按钮：Learn More（次要样式，靠底对齐）。
• SEO：
    ◦ 图片 alt 示例：Scrap Metal Baler - Recycling Baler
    ◦ URL：/products/{slug}
---
四、底部 CTA
• 浅色背景块
• 文案（英文）：
“Need expert advice? Let our team guide you to the right solution.”
• 询盘表单，和之前的内容项目一样
---
五、SEO 与结构化数据
• Title（≤60 字符）：
    ARZIR | Recycling Balers, Shears, Shredders & More
• Meta Description（120–160 字符）：
    Browse ARZIR's range of recycling balers, scrap metal shears, shredders, aluminium extrusion presses, and briquetting machines.
• Heading 层级：
    ◦ H1：Our Products
    ◦ H2：分类标题（Recycling Baler, Scrap Metal Shear, …）
    ◦ H3：卡片产品名
• 结构化数据：
    ◦ ItemList（每个分类对应一组）
    ◦ Product（每个卡片）
    ◦ BreadcrumbList（面包屑）
---
六、交互与动效
• 滚动进入视口：模块淡入+轻微上移。
• 卡片 Hover：图片轻微放大，阴影增强；按钮边框加亮。
• 移动端：分类模块上下堆叠，卡片单列滑动。
一级产品分类页
包含Recycling Baler 分类页和Scrap Metal Shear和Shredder
一、页面目标
• 信息聚合：聚合 “Recycling Baler” 下的 4 个子产品，快速对比与分流到详情页。
• SEO：覆盖 “recycling baler / scrap baler / vertical / horizontal / car body” 等关键词与长尾词。
• 转化：顶部与底部提供 “Get a Quote” 入口（弹窗表单 + 成功 Modal + Confetti）。
---
二、信息架构（从上到下）
1) Page Hero
• H1：Recycling Balers
• 副标题（英文）（≤25 词）：
    High-density balers engineered for ferrous and non-ferrous scrap with reliable compaction and throughput.
• 元素：
    ◦ 面包屑：Home > Products > Recycling Balers
    ◦ Primary CTA：Get a Quote（弹窗表单：Name*、Email*、Company、WhatsApp、Message*；成功后 Modal「Thank you!/Your message has been sent, We will contact you soon!」+ 1.5s Confetti）
• 背景图：工业场景或生产线；亮度处理+渐变遮罩确保可读性。
2) Category Intro（简述）
• 80–120 英文词，说明适用材料/吨位范围/典型行业（Scrap Yards、Automotive Dismantling、Foundries、Metal Fabrication）。
3) Product Grid（4 张卡片）
• 网格：lg:4列 / md:2列 / sm:1列；卡片一致高度。
• 卡片元素：
    ◦ 主图（4:3，WebP/AVIF，hover 轻微缩放，alt 语义化）
    ◦ 标题（H3）
    ◦ 简介（≤25 英文词）
    ◦ 次要按钮：Learn More → 对应详情页
• 四个子产品（英文展示+建议 slug）
    a. Scrap Metal Baler → /products/scrap-metal-baler
        Heavy-duty baler for mixed ferrous and non-ferrous scrap with high bale density.
        alt：Scrap Metal Baler compressing mixed scrap
    b. Car Body Baler → /products/car-body-baler
        Designed for ELV processing with robust compression chambers and faster cycles.
        alt：Car Body Baler compacting end-of-life vehicles
    c. Vertical Baler → /products/vertical-baler
        Space-saving vertical baler for low-to-medium throughput operations.
        alt：Vertical Baler for compact operations
    d. Horizontal Baler → /products/horizontal-baler
        Continuous horizontal baler for high throughput and consistent bale sizes.
        alt：Horizontal Baler for continuous compaction
4) At-a-Glance Comparison（一眼对比表）
• 标题（H2）：Compare Models
• 表头字段（示例，可按真实参数替换）：
    ◦ Press Force / Bale Density / Bale Size / Cycle Time / Feed Type（Manual/Conveyor/Loader）/ Footprint
• 可用性：移动端横向滚动；表格 caption 与 th/td 语义正确。
5) Applications（应用场景）
• 标题（H2）：Applications
• 3–4 张场景卡（小图 + 一句 pain→gain 文案）：Scrap Yards / Automotive Dismantling / Metal Fabrication / Foundries。
• 每卡 Explore Solutions 链接到 Solutions（或 Industries）页面相应锚点。
6) FAQ（分类页维度）
• 标题（H2）：FAQs（3–5 条，H3 为问题）
    ◦ How to choose between vertical and horizontal balers?
    ◦ What press force do I need for mixed scrap?
    ◦ What is the typical cycle time and maintenance interval?
7) Bottom CTA
• 背景浅灰块；文案：
    “Not sure which baler fits your yard? Our engineers can help.”
• Primary：Get a Quote（同上弹窗）
---
三、SEO 与结构化数据
• Title（≤60）：Recycling Balers | Scrap, Vertical & Horizontal | ARZIR
• Meta Description（120–160）：
    Explore ARZIR recycling balers: scrap metal balers, car body balers, vertical and horizontal models for high-density compaction.
• Heading：页面唯一 H1；模块 H2；卡片标题 H3。
• 关键词：recycling baler, scrap metal baler, car body baler, vertical baler, horizontal baler，以及长尾如 bale density, press force, throughput。
• JSON-LD：
    ◦ BreadcrumbList（Home > Products > Recycling Balers）
    ◦ ItemList（4 个 ListItem 指向各产品详情页）
    ◦ 可为当页展示的精选卡使用 Product 片段（name/image/brand/description/url）。
---
四、UI/交互与可访问性
• 卡片：hover 阴影+缩放≤1.03；按钮 hover 主色加深；focus 有可见轮廓。
• 图像：统一 next/image + 多规格 sizes；lazy。
• 键盘可达：卡片与按钮 tabindex 顺序正确；菜单/弹窗 ARIA 完整。
• “Get a Quote” 弹窗：ESC 可关、初始焦点在 Name，提交成功后显示成功 Modal + Confetti ~1.5s。
---
五、性能与缓存
• LCP 目标 < 2.5s；Hero 图启用优先加载（仅首页首屏需要，分类页可视情况）。
• ISR：revalidate = 3600；后台发布/更新触发 revalidateTag('products')。
• 图片：存 Supabase Storage，提供 3–4 档尺寸（例如 640/960/1280/1600）。
• 预取：prefetch={true} 到 4 个详情页链接（Next.js 默认 hover 预取）。
---
六、内容与文案规范
• 卡片简介：≤25 英文词，强调用途/优势，不堆砌关键词。
• 对比表：仅展示 5–6 个最关键参数；细节放到详情页。
• FAQ：覆盖选型、维护、交付与售后（与销售 Q&A 对齐）。