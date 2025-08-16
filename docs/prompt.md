技术方案
1) 目录结构树（App Router 路由 + 组件/服务/配置）
/src
├─ app
│  ├─ (marketing)
│  │  ├─ page.tsx                      # 首页
│  │  ├─ about/page.tsx
│  │  ├─ products/page.tsx             # 产品列表（支持分类筛选）
│  │  ├─ products/[slug]/page.tsx      # 产品详情
│  │  ├─ applications/page.tsx         # 行业应用列表
│  │  ├─ applications/[slug]/page.tsx  # 行业应用单页
│  │  ├─ blog/page.tsx                 # 博客目录
│  │  ├─ blog/[slug]/page.tsx          # 博客单页
│  │  ├─ calculator/page.tsx           # 计算器列表（固定 /calculator）
│  │  ├─ calculator/[slug]/page.tsx    # 计算器单页
│  │  ├─ contact/page.tsx
│  │  └─ layout.tsx                    # 公共 Header/Footer、<html lang> 等
│  ├─ api
│  │  ├─ lead/route.ts                 # 提交询盘/联系表单（Turnstile 验证+入库+触发revalidate）
│  │  ├─ revalidate/route.ts           # 受保护的 ISR 再验证（tag/path）
│  │  ├─ preview/route.ts              # 草稿/预览口（签名token）
│  │  └─ geo/route.ts                  # （可选）服务端IP→国家解析
│  └─ robots.txt/route.ts              # robots/sitemap 动态（可选）
│
├─ components
│  ├─ layout/SiteHeader.tsx
│  ├─ layout/SiteFooter.tsx
│  ├─ nav/MainMenu.tsx                 # PRODUCTS 下拉、RESOURCES 下拉
│  ├─ common/Section.tsx               # 容器/网格/标题组件
│  ├─ cards/ProductCard.tsx            # 4:3 主图、标题、简介、CTA
│  ├─ cards/PostCard.tsx               # 16:9 封面
│  ├─ cards/ApplicationCard.tsx        # 16:9 行业卡
│  ├─ tables/CompareTable.tsx          # 一眼对比表（横向滚动）
│  ├─ forms/QuoteDialog.tsx            # Get a Quote 弹窗（Name*,Email*,Company,WhatsApp,Message*）
│  ├─ forms/ContactForm.tsx            # Contact 页表单（同字段）
│  ├─ forms/Turnstile.tsx              # Turnstile 小组件（SSR/CSR安全接入）
│  ├─ mdx/Prose.tsx                    # 博客正文/TOC/代码块
│  └─ jsonld/JsonLd.tsx                # 注入 JSON-LD 的通用组件
│
├─ lib
│  ├─ supabase/server.ts               # server-side client（使用匿名key+RLS）
│  ├─ supabase/admin.ts                # service-role 仅限后台/受控API
│  ├─ i18n/config.ts                   # next-intl 配置（默认en，预留pt-BR/es）
│  ├─ seo/meta.ts                      # generateMetadata helpers（title/desc/OG）
│  ├─ seo/jsonld.ts                    # 结构化数据生成器（Org/Product/Blog/FAQ/ItemList）
│  ├─ cache/revalidate.ts              # revalidateTag/Path 封装
│  ├─ validators/lead.ts               # zod schema（Name/Email/Message 等）
│  ├─ security/turnstile.ts            # 服务器端二次验证
│  ├─ security/rate-limit.ts           # （可选）Upstash 限流
│  ├─ image/loader.ts                  # next/image → Supabase Storage domain config
│  └─ utils.ts                         # 常用工具（cls, currency, slugify 等）
│
├─ server                              # Server Actions / 查询与写入封装
│  ├─ actions/submitLead.ts            # 提交询盘（校验、Turnstile、入库、触发邮件/ISR）
│  ├─ queries/products.ts              # 列表/详情查询（RSC）
│  ├─ queries/posts.ts
│  ├─ queries/applications.ts
│  └─ queries/calculators.ts
│
├─ config
│  ├─ site.ts                          # 站点常量（品牌、导航、社交、公司信息）
│  ├─ theme.ts                         # 色板/间距/阴影/圆角 token（供Tailwind/shadcn使用）
│  ├─ routes.ts                        # 路由常量与面包屑映射
│  └─ i18n.ts                          # 语言列表/默认语言
│
├─ styles
│  ├─ globals.css
│  └─ prose.css                        # 博客/文案版式
│
├─ types
│  ├─ db.ts                            # Supabase Row 类型（生成或手写）
│  └─ content.ts                       # Product/Post/Application/Calculator DTO
│
└─ middleware.ts                       # i18n重定向、Geo header、（可选）限流
---
2) 关键依赖清单与理由
• next@latest（App Router / RSC / ISR / Edge Runtime）
• react / react-dom / typescript / eslint / prettier（基础工程）
• tailwindcss / @tailwindcss/typography（工业风排版；Prose）
• shadcn/ui + radix-ui（可访问的基础组件，Dialog/Dropdown/Tabs/Table）
• zod + @hookform/resolvers + react-hook-form（表单输入校验）
• @supabase/supabase-js（Postgres/Storage 访问；RLS 读，Service-Role 仅服务端写）
• next-intl（App Router 友好的 i18n；默认 en，预留 pt-BR/es）
• canvas-confetti（表单成功撒花）
• @vercel/og（可选：动态 OG 图，提升分享点击率）
• (可选) @upstash/ratelimit + ioredis（全站动作限流）
• (可选) @react-email/components + resend（邮件通知/询盘转发到销售邮箱）
说明：坚持最少依赖，每个库都与非功能需求一一对应（SEO/i18n/安全/性能/可访问性）。
---
3) 命名规范（文件、路由、API、env）
• 文件/目录：kebab-case，组件用 PascalCase.tsx（如 ProductCard.tsx）
• 路由：英文短小、语义化
    ◦ 列表：/products、/applications、/blog、/calculator
    ◦ 详情：/[resource]/[slug]（如 /products/scrap-metal-baler）
• API 路由：/api/{noun}（/api/lead、/api/revalidate）
• DB 表：snake_case（products, posts, applications, calculators, leads）
• 环境变量（全部大写 + 前缀）
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY             # 仅服务端使用
TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
RESEND_API_KEY                        # 可选
UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN  # 可选
DEFAULT_LOCALE=en
SUPPORTED_LOCALES=en,pt-BR,es
• 组件前缀：复用型组件按域前缀：ProductCard, ApplicationCard, CompareTable
• 缓存标签：products, product:{slug}, blog, post:{slug}, applications, application:{slug}, calculators
---
4) 数据流设计（页面取数、缓存策略、revalidate）
4.1 读取（RSC 优先）
• 列表/详情页在 Server Component 中调用 server/queries/* → 查询 Supabase（匿名 key + RLS 只读，status='published'）。
• 图片统一 next/image，域名允许 *.supabase.co；sizes 按断点提供（如 100vw/(min-width:1024px) 33vw）。
4.2 缓存与 ISR
• 列表页：export const revalidate = 1800/3600（博客30min，产品/应用/计算器60min）
• 详情页：revalidate = 3600
• 写入（表单不缓存）：revalidateTag('products'|'blog'|'applications'|'calculators') + revalidatePath('/[resource]/[slug]')
• CDN：设置 s-maxage + stale-while-revalidate（Next 自动处理）
4.3 写入（Server Actions / API）
• /api/lead：POST → zod 校验 → Turnstile 二次验证 → insert leads → （可选）Resend 邮件 → 返回 {ok:true}
• admin 内容更新（如有）：使用 SUPABASE_SERVICE_ROLE_KEY 在服务端执行，并触发 revalidate tag/path
• 速率限制：对 /api/lead 或敏感操作用 Upstash：IP+route，1m/3次（可配）
4.4 RLS（阅读安全）
• 公共读取策略：仅 status='published' 可 select
• 写入策略：仅服务端 API（服务角色）可 insert/update/delete（或后台登录用户 RBAC）
---
公司介绍
ARZIR is a leading manufacturer of advanced recycling and metal processing equipment, headquartered in Nanjing, China. With over 12 years of industry experience, we specialize in designing and producing a full range of machines, including Recycling Balers (Scrap Metal Balers, Car Body Balers, Vertical and Horizontal Balers), Scrap Metal Shears (Container Shears, Gantry Shears, Alligator Shears), Shredders (Single-Shaft, Double-Shaft, Four-Shaft, and Hammer Shredders), Aluminium Extrusion Presses, and Briquetting Machines.
Equipped with modern production facilities and implementing strict 6S management, ARZIR ensures every machine meets the highest standards of precision, durability, and efficiency. Our engineering team adopts innovative designs and advanced manufacturing techniques to deliver solutions that maximize productivity and reduce operational costs for our clients.
Over the years, our products have been exported to more than 100 countries and regions, earning a strong reputation for quality and reliability in global markets. We serve a wide range of industries, from metal recycling and waste management to aluminum processing and manufacturing.
At ARZIR, we are committed to sustainable development, offering machinery that supports efficient recycling and environmental protection. Our mission is to deliver equipment that empowers our customers to achieve higher efficiency, safety, and profitability.
公司主打产品
Recycling Baler(回收打包机)
• Scrap Metal Baler (废金属打包机)
• Car Body Baler (汽车车身打包机)
• Vertical Baler (立式打包机)
• Horizontal Baler (卧式打包机)
Scrap Metal Shear(废金属剪切机)
• Container Shear (集装箱剪切机)
• Gantry Shear (龙门剪)
• Alligator Shear (鳄鱼剪)
Shredder (撕碎机)
• Single‑Shaft Shredder单轴破碎机
• Double‑Shaft Shredder双轴破碎机
• Four-Shaft Shredder四轴撕碎机
• Hammer Shredder锤式破碎机
Aluminium Extrusion Press (铝型材挤压机)
Briquetting Machine (压块机)
网站配色
1️⃣ 整体配色策略
区域
建议颜色
说明

主色（Primary）
#006EB6
品牌核心识别色，只在 CTA 按钮、选中状态、重要链接等地方用，避免大面积铺色

主黑（Text & 强调）
#000000
标题、主文案、深色背景上的浅色文字，给人力量感和高级感

中性色（背景/分割）
#F9FAFB（极浅灰）+ #F3F4F6（浅灰）
大面积背景用浅灰替代纯白，避免刺眼，保持工业质感

深灰（次级文本）
#4B5563（Tailwind slate-600）
用于次要信息、说明文字，减少层级冲突

浅灰（边框/分隔线）
#E5E7EB（slate-200）
卡片边框、模块分隔，保持干净

强调色（辅助）
Success #16A34A / Warning #D97706 / Danger #DC2626
用于状态提示，不参与主题配色

---
2️⃣ Apple / Tesla 风格特点（落地执行）
🌟 共性：
• 留白：Apple 追求大留白 + 居中布局，Tesla 则留白配合工业感大图
• 少色：全站最多 2-3 个主色系，避免彩虹化
• 极简组件：按钮、卡片、表单都用极细边框和干净背景
• 高清大图：图片是视觉核心，背景干净，光影细腻
• 字体克制：标题加粗但不夸张，正文极简 sans-serif（Roboto/Hind）
---
3️⃣ ARZIR 网站配色落地建议
Header / 导航栏
• 背景：白色（#FFFFFF）或透明（首页 Hero 区）
• Logo 左侧：全彩（蓝 + 黑）,选择ARZIR-Original-LOGO
• 文字：黑色（#000000）
• Hover 状态：文字颜色变为 #006EB6 + 下划线（细线）
Hero 区
• 背景：超高清金属工业场景图 / 大型设备实拍
• 文案颜色：黑色（浅色背景）或白色（深色背景）
• 主按钮（Primary CTA）：蓝底白字（#006EB6 / #FFFFFF）
• 次按钮（Secondary CTA）：透明背景 + 黑色文字 + 1px 黑色边框
内容区（About、Products、Blog）
• 背景交替：白色 #FFFFFF / 浅灰 #F9FAFB
• 模块卡片：白色背景 + 浅灰边框（#E5E7EB）+ 投影极弱（Apple 风）
• 标题：黑色（#000000），加粗
• 说明文字：中灰（#4B5563）
Footer
• 背景：黑色（#000000）
• 文字：白色（#FFFFFF）
• 链接 Hover：蓝色（#006EB6）
---
4️⃣ 色彩比例参考
• 中性色（白+灰）：80%
• 黑色文字：15%
• 品牌蓝（#006EB6）：5%（主要出现在按钮、链接、图标）
页头页脚
Header & Footer 设计与实现
1) 视觉与品牌（与全站一致）
• 主色：#006EB6（primary），黑色 #000000（文本与深色背景）
• 中性色：白 #FFFFFF、分隔/边框 slate-200、次级文本 slate-600
• 字体：标题 Roboto，正文 Hind
• 导航高度：64–72px；PC 下 Logo 高 28–32px
• Header 背景：默认白底；滚动后保持白底 + 1px 边框（border-slate-200）
---
2) Header 信息架构
• 左：Logo（点击返回首页 /）
• 中：主菜单（居中）
    ◦ HOME → /
    ◦ ABOUT → /about
    ◦ PRODUCTS（可点击进入列表页 /products；悬停/点击展开下拉显示各产品分类）
    ◦ RESOURCES（无独立链接，仅下拉：BLOG → /blog，Calculator → /calculator，Applications → /applications）
    ◦ CONTACT → /contact
• 右：Primary CTA 按钮 “Get a Quote”（点击弹出询盘表单）
PRODUCTS 下拉菜单（示例）
• Recycling Baler
• Scrap Metal Shear
• Shredder
• Aluminium Extrusion Press
• Briquetting Machine
    （点击下拉项进入对应分类列表或锚点；图片/图标可选，移动端转为手风琴）
RESOURCES 下拉菜单
• Blog → /blog
• Calculator → /calculator
    （RESOURCES 本身不跳转，仅作为触发器）
---
3) 询盘表单（弹窗）
• 触发：点击 “Get a Quote” → 打开 Modal（Dialog）
• 字段（与你约定一致）
    a. 第一行：表单标题（如 Get a Quote）
    b. 第二行：Name*、Email*
    c. 第三行：Company、WhatsApp
    d. 第四行：Message*
    e. 第五行：Submit 按钮
• 校验：Name≥2、Email 合法、Message≥10；WhatsApp 可选（建议 E.164）
• 提交成功反馈：
    ◦ 弹出 Modal：标题 “Thank you!”；正文 “Your message has been sent, We will contact you soon!”
    ◦ 同时触发撒花（Confetti） 动效（≈1.5s）
• 可选：Turnstile + 速率限制（后端）
---
4) 可访问性与交互细节
• 键盘可达：Tab 顺序、焦点环、ESC 关闭 Dialog、Enter 提交
• 下拉菜单：aria-haspopup="menu"；方向键在菜单项间流转；点击外部关闭
• 移动端：右侧使用 汉堡菜单 打开全屏 Sheet / Drawer，含导航与 CTA 按钮
---
5) Footer 信息架构（与首页一致）
• 左列：Logo (ARZIR-LOGO-white)+ 一句标语不同颜色突出（Powering the Future of Recycling）+一句英文品牌描述（可选，≤80 chars）
• 中列：快速导航Products( Recycling Baler| Scrap Metal Shear| Shredder| Aluminium Extrusion Press| Briquetting Machine) , Company(About| Applications | Blog| Calculator| Contact)
• 右列：联系方式
    ◦ Address：Mingjue Industrial Park, Lishui, Nanjing, Jiangsu, China.
    ◦ Email：info@arzir.com
    ◦ Phone：+86-25-56200956
    ◦ WhatsApp：+8618151685977
• 上面三列整体高度保持基本一致
• 社媒图标：YouTube / Facebook / Instagram / TikTok（hover 主色）
• 底部版权行：© {year} ARZIR. All rights reserved.
网站页面
首页HOME
一、整体风格与基础规范
• 设计风格：现代化工业风（大留白、网格布局、清晰层级、几何线条与微交互），突出坚固、可靠、专业。
• 字体：全站默认标题 Roboto字体，文本使用hind字体。
• 响应式：移动优先，适配 360–1440+ px；网格断点：sm 640 / md 768 / lg 1024 / xl 1280。
• 图像规范：产品图统一 4:3，支持 WebP/AVIF，提供 srcset/sizes，懒加载。
• 可访问性：对比度≥4.5:1，键盘可达，按钮/链接有焦点态与 ARIA 标签。
• 性能：LCP < 2.5s、CLS < 0.1、TTFB < 0.8s；关键 CSS 内联、延迟非关键脚本、开启 HTTP/2、CDN 与缓存策略。
二、首页信息架构（从上到下）
1. Hero 首屏（关键信息 + 强 CTA）
    ◦ 标题（H1）：清晰行业定位，例如 “Industrial Recycling & Metal Processing Machinery Manufacturer”。
    ◦ 副文案（1–2 句价值承诺）。
    ◦ CTA：Primary “Get a Quote”。
    ◦ 背景：图像（占满整个屏幕），性能优先, 图片显示金属废品回收行业相关的内容，或者金属打包机生产线车间的照片。
2. 关于我们区块，包含图片和文字介绍部分，链接到about页面，设计保持和整体设计一致协调。
3. 产品分类交互模块（两列结构，核心区域）
    ◦ 左列：产品标题选择（垂直列表）
        ▪ 类目（可折叠/手风琴）：
            • Recycling Baler
            • Scrap Metal Shear
            • Shredder
            • Aluminium Extrusion Press
            • Briquetting Machine
        ▪ 交互：悬停或点击激活高亮，右列内容同步切换；移动端为水平 Tabs + 折叠子类目。适当增加一些文本使其整体高度和右列一致。
    ◦ 右列：产品展示卡（对应左侧选中项）
        ▪ 顶部：主图 16:9（含放大/悬停微动效）。
        ▪ 下方：简短英文简介（≤40 词）。
        ▪ 按钮：Learn More（次要样式，下方对齐），点击进入对应产品落地页。
    ◦ SEO 细节：左列标题用 H2/H3，右列卡片标题用 H3；每张图含 alt 描述。
4. 解决方案 / 行业应用（Applications）
    ◦ 6 个行业卡片（Scrap Recycling / Metal Fabrication / Automotive Dismantling / Aluminum Processing /Steel Mills），每行三个，两行显示。
    ◦ 每卡片：图片＋一句 Pain→Gain 文案＋Explore Solutions 链接，按钮不要太大。
5. 精选案例 / 客户见证
    ◦ 3 个代表项目（缩略图 4:3、地点、产品/产能提升数据）一行显示；
6. 底部大 CTA 区
    ◦ 左侧为文案部分，右侧为表单提交部分。表单包括第一行表单标题，第二行Name(必填)，Email(必填)；第三行：Company，WhatsApp，第四行：Message(必填)。第五行：提交表单。文案部分和表单部分高度基本一致
7. Footer
    ◦ logo，快速导航、联系信息、底部为版权
三、SEO 与内容规范（英文呈现）
• Title（≤60 字符）：含品牌与主关键词（e.g., “ARZIR | Industrial Recycling & Metal Processing Machinery”）。
• Meta Description（120–160 字符）：覆盖产品谱系与优势（质量/全球/6S）。
• Heading 层级：1×H1（首页唯一），分区使用 H2/H3；避免空标签。
• 关键词布局：自然融入首屏、产品模块、优势与案例；避免堆砌。
• 结构化数据：Organization、Product（精选）、BreadcrumbList、
• 图像与文件：语义化 alt、文件名含简要关键词；提供图像站点地图。
四、交互与动效建议
• 左侧产品列表悬停/点击高亮，右侧卡片平滑淡入；移动端切为 Tabs + 滑动。
• 按钮态（默认/悬停/按下/禁用）明确；Hero CTA 具吸附/波纹微交互。
• 重要元素进入视口时轻微上移与透明度过渡（降低动效时长，避免性能损耗）。
• 所有Get A Quote按钮点击后是弹窗，弹窗内容包括第一行表单标题，第二行Name(必填)，Email(必填)；第三行：Company，WhatsApp，第四行：Message(必填)。第五行：提交表单
• 表单提交后同时通过resend发送邮件到指定邮箱，邮件标题为New Inquiry from Arzir, 邮件内容包括表单内容，来源页面地址，国家（根据ip地址识别），英文版。
关于我们ABOUT
一、整体风格与基础规范
• 设计风格：延续首页的现代化工业风（大留白、网格布局、清晰层级、几何线条与微交互），视觉上保持坚固、可靠、专业的品牌印象。
• 字体：标题使用 Roboto，正文使用 Hind。
• 响应式布局：移动优先，适配范围 360–1440+ px；断点 sm=640 / md=768 / lg=1024 / xl=1280。
• 图像规范：团队照片、设备图片统一用 4:3，支持 WebP/AVIF，提供多规格 srcset/sizes，懒加载。
• 可访问性：对比度≥4.5:1、支持键盘导航、按钮和链接有焦点态，重要图片和图标有 ARIA 标签。
• 性能：页面 LCP < 2.5s，关键 CSS 内联，非关键脚本延迟加载，启用 HTTP/2 和 CDN 缓存。
---
二、About 页面信息架构（从上到下）
1. Page Hero / 顶部横幅
    ◦ 标题（H1）：About ARZIR
    ◦ 副标题（1–2 句英文简介）：简述 ARZIR 的核心定位与使命，例如：
“Engineering high-performance recycling machinery for a sustainable future.”
    ◦ 背景图：全屏横幅（工厂环境、设备生产线、团队合影等工业相关场景）。
    ◦ 面包屑导航：Home > About（提升可用性与 SEO）。
2. Company Overview / 公司概览
    ◦ 布局：左右双列，左侧大图（生产现场或展会合影），右侧文字介绍。
    ◦ 文字内容（英文展示，约 150–200 词）：
        ▪ 成立时间与发展历程
        ▪ 核心产品线（Balers, Shears, Shredders, etc.）
        ▪ 服务的全球市场
        ▪ 对质量与创新的承诺
    ◦ CTA 按钮：“Explore Our Products” → 跳转到 /products
3. Mission, Vision & Values / 愿景与价值观
    ◦ 三列卡片布局：
        ▪ Mission：简述使命
        ▪ Vision：未来目标
        ▪ Core Values：3–4 个核心价值词（如 Innovation, Reliability, Sustainability）
    ◦ 每列卡片包含：图标（lucide 图标库）、标题（H3）、一句话解释。
4. Our History / 发展历程
    ◦ 时间轴布局（Timeline）：6个重要年份节点（2014成立、首次出口、获得认证、海外办事处设立，2015年成立新工厂3万平）。
    ◦ 每个节点包含年份、简短描述、相关小图（如证书、展会、生产线照片）。
5. Our Team / 团队展示
    ◦ 布局：6 列卡片，团队主要成员（领导层、技术负责人、销售负责人）。
    ◦ 每张卡片：成员头像（4:3）、姓名（H4）、职位（灰色小字）、一句职业背景简介。
    ◦ 图片需保持统一风格（背景、光线一致）。
6. Global Presence / 全球布局
    ◦ 世界地图背景，标注主要出口市场和合作伙伴国家（例如 Brazil, USA, Mexico, UAE, Saudi Arabia, Germany, Italy）。
    ◦ 列出部分合作伙伴 Logo（灰阶处理，悬停时彩色）。
7. Certifications & Awards / 资质与奖项
    ◦ 横向滑动展示：ISO 证书、CE 认证、行业奖项。
    ◦ 每个证书卡片：缩略图、名称、颁发机构、年份。
8. Bottom CTA / 底部大号行动区
    ◦ 背景浅色块（primary 的浅色调），左侧标题+简介，右侧按钮：
        ▪ Primary Button：“Get a Quote”
        ▪ Secondary Button：“Contact Us”
    ◦ 点击 Get a Quote 弹出询价表单（与首页弹窗交互一致）。
9. 
---
三、SEO 与内容规范（英文呈现）
• Title（≤60 字符）：
    About ARZIR | Industrial Recycling & Metal Processing Machinery
• Meta Description（120–160 字符）：
    Learn about ARZIR's mission, history, and expertise in manufacturing high-performance recycling and metal processing machinery for global industries.
• Heading 层级：
    ◦ 页面唯一 H1（About ARZIR）
    ◦ 二级标题（H2）对应各分区（Overview, Mission & Vision, History, Team, Global Presence, Certifications）
• 关键词布局：
    ◦ 自然融入 “industrial recycling machinery”, “metal processing equipment manufacturer”, “global presence”, “high-performance balers & shears” 等。
• 结构化数据：
    ◦ 使用 Organization（公司信息）
    ◦ BreadcrumbList（面包屑）
    ◦ Person（团队成员可选）
• 图像 alt：
    ◦ 公司、团队、设备照片必须有语义化 alt，包含关键词和描述。
---
四、交互与动效建议
• 滚动进入视口动画：轻微淡入+上移过渡（duration ≤ 0.6s）。
• 时间轴：节点悬停放大或高亮，移动端为纵向单列。
• 团队卡片：悬停时显示更多背景介绍（overlay 或下滑文字）。
• 地图交互：悬停/点击国家标记显示市场数据或合作案例简述。
• 按钮与链接：Primary 按钮悬停变浅色，Secondary 按钮边框加亮。
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
---
七、样式与组件（Tailwind / shadcn/ui）
• 色板：Primary #006EB6；文本黑 #000000；分割线/边框 slate-200；次级文本 slate-600。
• 卡片：rounded-2xl border border-slate-200 bg-white shadow-sm；hover 阴影增强。
• 按钮：Primary 蓝底白字；Secondary 透明边框黑字。
• 表格：min-w-[720px]（移动端滚动），text-sm，斑马纹可选。
---
八、URL & 数据结构（CMS/Supabase）
• 分类页：/products/recycling-baler
• 子产品页：
    ◦ /products/scrap-metal-baler
    ◦ /products/car-body-baler
    ◦ /products/vertical-baler
    ◦ /products/horizontal-baler
• 列表数据：可由 categories + products 两表或 JSON 配置驱动；为卡片提供：name, slug, cover_url, excerpt.
---
九、可复用组件/逻辑
• Quote Dialog：沿用你现有的 Get a Quote 组件（Name*、Email*、Company、WhatsApp、Message*；成功 Modal + Confetti）。
• ItemList JSON-LD：在分类页面根据 4 个子产品动态渲染。
• 对比表：独立组件 BalerCompareTable，接收参数字段数组以便未来扩展（更多型号/更多列）。
---
十、英文占位文案（可直接嵌入）
• Hero
    ◦ Title：Recycling Balers
    ◦ Subtitle：High-density balers engineered for ferrous and non-ferrous scrap with reliable compaction and throughput.
    ◦ CTA：Get a Quote
• Card Descriptions
    ◦ Scrap Metal Baler：Heavy-duty baler for mixed scrap with high bale density and robust structure.
    ◦ Car Body Baler：Engineered for ELV processing with reinforced chambers and faster cycle time.
    ◦ Vertical Baler：Compact footprint for low-to-medium throughput and simple operation.
    ◦ Horizontal Baler：Continuous compaction for high throughput and consistent bale sizes.
产品单页（例如Scrap Metal Baler）
一、页面目标
• SEO：覆盖核心产品关键词及长尾词，匹配行业搜索意图（买家查询 → 进入页面）。
• 转化：让用户了解产品优势、规格和应用场景，降低疑虑并引导提交询盘表单。
• 用户体验：快速加载（LCP < 2.5s）、信息层级清晰、移动端友好。
---
二、信息架构（从上到下）
1. Page Hero / 首屏吸引区
• 标题（H1）：包含核心关键词（产品名 + 类别），例如：
Scrap Metal Baler | High-Density Recycling Machine
• 副标题（英文）：一句价值承诺（≤20 词），突出主要卖点。
• 主图：高清产品图（4:3 或 16:9），WebP 优先，含 alt（关键词 + 型号）。
• 快速参数栏（可选）：吨位 / 压力 / 尺寸 / 适用材料。
• Primary CTA 按钮：Get a Quote，使用同一个弹窗表单
---
2. 产品概述（Overview）
• 关键词覆盖：自然融入主关键词 + 相关变体，例如：
    ◦ 主关键词：Scrap Metal Baler
    ◦ 变体：Metal Baling Machine, Recycling Baler for Ferrous and Non-Ferrous Metals
• 内容：
    ◦ 功能描述（3–4 句）
    ◦ 适用材料（carbon steel, aluminum, copper, stainless steel 等）
    ◦ 目标用户（scrap yards, recycling plants, metal processing facilities）
---
3. 产品优势（Key Features & Benefits）
• 标题（H2）：Why Choose ARZIR [Product Name]
• 布局：两列图文交错
• 内容示例：
    a. High-Density Baling — Up to XX tons of pressure for maximum compaction.
    b. Robust Build — Heavy-duty steel frame for long-term reliability.
    c. Easy Operation — PLC control with touchscreen interface.
    d. Low Maintenance — Optimized hydraulic system for reduced downtime.
    e. Energy Efficiency — Reduced power consumption with high output.
---
4. 技术规格（Technical Specifications）
• 标题（H2）：Technical Specifications
• 内容：表格形式，包含主要参数：
    ◦ Model / Press Force / Bale Size / Cycle Time / Motor Power / Machine Dimensions / Weight
• SEO：表格 caption 与 alt 中包含关键词。
---
5. 工作原理（How It Works）
• 标题（H2）：How the [Product Name] Works
• 内容：
    ◦ 流程图（Loading → Compressing → Tying → Discharging）
    ◦ 简述每个步骤的技术亮点
• 关键词覆盖：metal baling process, scrap compression system
---
6. 应用领域（Applications）
• 标题（H2）：Applications
• 布局：行业卡片网格（Scrap Recycling, Automotive Dismantling, Foundries, Metal Fabrication）
• 每卡片：行业图片 + 简述应用场景 + CTA 链接到相关案例。
---
7. 对比区（Comparison with Other Models）
• 标题（H2）：Compare Models
• 内容：横向对比表（本型号 vs 其他型号参数）
• 目的：帮助用户快速选择，减少跳出率。
---
8. 客户案例（Case Studies / Testimonials）
• 标题（H2）：Customer Success Stories
• 内容：
    ◦ 2–3 个项目卡片（图片 + 地区 + 成效数据）
    ◦ 引用客户反馈（短句，英文）
---
9. FAQ（常见问题）
• 标题（H2）：Frequently Asked Questions
• 内容：
    ◦ 价格与付款方式
    ◦ 交货周期
    ◦ 安装与培训
    ◦ 质保与售后
    ◦ 备件供应
---
10. 询盘表单（Lead Form）
• 标题（H2）：Request a Quote
• 字段：
    ◦ Name（必填）
    ◦ Company Name
    ◦ Email（必填）
    ◦ WhatsApp / Phone
    ◦ Country
    ◦ Requirements / Message（必填）
    ◦ 文件上传（选填，支持 PDF/DWG）
• 功能：
    ◦ Turnstile 人机验证
    ◦ 提交后显示成功提示 & 邮件确认
• 转化元素：
    ◦ 左侧提示文案：
“Our experts will respond within 24 hours with a tailored solution.”
---
11. 底部强化 CTA
• 背景主色块
• 文案（英文）：
“Looking for a custom solution? Contact ARZIR today.”
• 按钮：Get a Quote
---
三、SEO 细节要求
• Title（≤60 字符）：
    [Product Name] | ARZIR [Category Keyword]
例：Scrap Metal Baler | ARZIR Recycling Baler Machine
• Meta Description（120–160 字符）：
    覆盖主要卖点和应用行业。
• URL：
    /products/scrap-metal-baler
• Heading 层级：
    ◦ H1：产品名 + 类别
    ◦ H2：各区块标题
    ◦ H3：功能点、小节标题
• 关键词覆盖策略：
    ◦ 主关键词（每页聚焦 1–2 个）
    ◦ 变体关键词（3–5 个）
    ◦ 长尾关键词（客户搜索问句类）
• 结构化数据：
    ◦ Product（包含 name, image, description, brand, offers, aggregateRating）
    ◦ BreadcrumbList
    ◦ FAQPage（FAQ 部分）
---
四、转化优化建议
• 首屏立即可见 CTA（桌面端和移动端都显示）
• 规格表附近放置 CTA 按钮（技术人员读到规格时转化率高）
• 案例区证明（降低决策风险）
• FAQ 覆盖交易型问题（如价格、交货、售后）
• 全程保持询盘路径 ≤ 2 步（点按钮 → 填表）
Applications列表页
一、页面目标
• 聚合入口：集中展示 ARZIR 设备可服务的行业与应用场景。
• SEO 引流：覆盖 “{industry} recycling / {industry} metal processing solutions” 等长尾词。
• 转化路径：每个行业卡片进入行业落地页（/applications/[slug]），行业页再导向产品或询盘。
---
二、整体风格与规范
• 配色：背景白或极浅灰（#F9FAFB），标题黑（#000），说明文字 slate-600，边框 slate-200；强调与交互使用 #006EB6。
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
• 按钮：Contact Us（→ /contact）或 Get a Quote（弹窗表单，成功 Modal + 1.5s Confetti，与全站一致）
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
---
七、数据与路由（Next.js App Router）
• 列表页：/applications/page.tsx
• 行业详情页：/applications/[slug]/page.tsx（每个行业独立落地页：行业痛点、工艺流程、推荐设备、案例、FAQ）
• 数据结构（CMS / Supabase 表 applications）建议字段：
    ◦ id, slug, name, excerpt, cover_url, priority, status('published')
---
八、组件与样式（Tailwind + shadcn/ui）
• IndustryCard（复用）：
    ◦ 容器：rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition
    ◦ 图片：next/image（16:9，className="rounded-xl"）
    ◦ 标题：text-lg font-semibold
    ◦ 描述：text-sm text-slate-600
    ◦ 按钮：shadcn Button（variant=outline，border-slate-300 hover:border-primary hover:text-primary）
• Grid：grid gap-6 md:grid-cols-2 xl:grid-cols-3
• 优势区：3 列卡片，图标用 lucide-react（Shield, Gauge, Globe）
---
九、英文占位文案（可直接使用）
• Hero
    ◦ Title：Applications
    ◦ Subtitle：Real-world use cases of ARZIR machinery across recycling and metal processing industries.
• Card CTA：Explore Solutions
• Why ARZIR
    ◦ Reliability — Heavy-duty frames and long service life.
    ◦ Performance — High bale density and consistent throughput.
    ◦ Global Support — Commissioning, training, and spare parts worldwide.
• Bottom CTA：Get a Quote弹窗
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
• 结构化数据（JSON-LD）：
    ◦ BreadcrumbList（Home > Applications > [Industry]）
    ◦ Article 或 TechArticle（name, description, image, author=Organization, inLanguage, datePublished/Modified）
    ◦ 若使用 FAQ：追加 FAQPage 片段
    ◦ 页面含设备列表时可补充 ItemList（指向具体产品 URL）
JSON-LD 示例（片段）：
{
  "@context":"https://schema.org",
  "@type":"Article",
  "headline":"Scrap Recycling Solutions",
  "description":"Higher recovery rates with high-density compaction and safe workflows.",
  "image":"https://www.arzir.com/images/applications/scrap-recycling-hero.webp",
  "author":{"@type":"Organization","name":"ARZIR"},
  "inLanguage":"en",
  "dateModified":"2025-08-15"
}
---
五、性能与缓存
• LCP < 2.5s、CLS < 0.1；Hero 图可用 priority（仅必要时）；关键 CSS 内联。
• ISR：export const revalidate = 3600；后台更新时 revalidateTag('applications')。
• 图片：Supabase Storage，多档尺寸（640/960/1280/1600）。
---
六、数据模型（Supabase 建议）
applications 表（驱动单页渲染）：
• id, slug, name, hero_url, overview, pains jsonb[], outcomes jsonb[], workflow jsonb[], recommended_products text[] (slugs), sizing jsonb, kpis jsonb, faqs jsonb[], case_studies jsonb[], status, updated_at
recommended_products 用产品 slug 关联到 /products/[slug]，前端映射显示名称与封面。
---
七、Next.js 落地要点
• 路由：/app/(marketing)/applications/[slug]/page.tsx
• 取数：RSC 从 Supabase 读取该 slug 的应用数据；错误回退 404。
• 组件：
    ◦ Hero（Title/Subtitle/CTA）
    ◦ PainOutcomeList
    ◦ WorkflowTimeline
    ◦ EquipmentGrid（从产品 slugs 组装卡片）
    ◦ SizingGuide（参数区间 + 按钮 Open Calculator）
    ◦ CaseStudyCards
    ◦ KPICards
    ◦ FAQAccordion
    ◦ BottomCTA（Get a Quote 弹窗，可复用全站 QuoteForm）
• 元信息：generateMetadata 动态输出 Title/Description/OG/Twitter；注入 JSON-LD <script type="application/ld+json">。
---
八、英文占位文案（可直接填充）
• Hero Title：Scrap Recycling Solutions
• Hero Subtitle：Higher recovery rates with high-density compaction and safe workflows.
• Section Titles：Industry Overview · Challenges & Outcomes · Process Workflow · Recommended Equipment · Sizing & Selection Guide · Case Studies · KPIs & Compliance · FAQs
• Buttons：Get a Quote · Learn More · Open Calculator · Read Case
---
九、QA 清单
[ ]  H1 唯一、H2/H3 层级清晰；图片 alt 语义化
[ ]  CTA 弹窗表单字段与全站一致；提交成功弹窗 + Confetti 正常
[ ]  设备卡链接正确（产品详情页）
[ ]  JSON-LD 验证通过（含 FAQ 时输出 FAQPage）
[ ]  移动端流程图与对比表可横向滚动，无溢出
[ ]  Lighthouse（性能/可达性/最佳实践/SEO）≥90
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
8. Conclusion / 结论与下一步
• 1 段落总结，附 CTA：
    ◦ Primary：Get a Quote（弹窗 Turnstile + 限流）
    ◦ Secondary：Explore Products
9. Author Box / 作者信息（可选）
• 作者头像、头衔、1–2 句专业背书、相关文章链接
10. Prev/Next 导航
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
---
九、Next.js（App Router）落地要点
• 路由：/app/(content)/blog/[slug]/page.tsx
• 缓存：export const revalidate = 1800；查询打 blog tag，发布后 revalidateTag('blog')
• Metadata：generateMetadata 动态填充 title/description/OG
• JSON-LD：Article + BreadcrumbList + FAQPage 注入
• MDX：支持 next-mdx-remote 或 Contentlayer；自定义 prose.css
• 目录：扫描 H2/H3 生成 TOC（客户端或构建期）
• 图像：next/image + Supabase Storage 公网 URL（已在 next.config.mjs 配置）
• 表单：Turnstile 校验 + Upstash 限流（评论/订阅/询盘）
---
十、上线检查清单（QA）
[ ]  标题/H1/URL 含主关键词，且自然
[ ]  Meta/OG/Twitter 完整，og:image 清晰
[ ]  目录正确锚点，跳转正常
[ ]  图片 alt 语义化；表格有 caption
[ ]  内链≥3；外链加 noopener
[ ]  FAQ 正确输出 FAQPage JSON-LD
[ ]  CTA 按钮可见、可点击；表单成功回执
[ ]  移动端阅读无溢出；表格可横向滚动
[ ]  Lighthouse：性能/可达性/SEO ≥ 90
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
    ◦ Primary：Get a Quote（弹出询价/需求表单，带 Turnstile）
    ◦ Secondary：Explore Products
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
---
六、数据埋点与统计
• 事件：
    ◦ calculator_card.open（slug, position）
    ◦ cta.get_quote.click（from=list/footer）
• 指标：卡片 CTR、进入计算器后的询盘转化率。
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
• 移动端体验：控件点击区域 ≥ 44px；结果区可滚动查看。
---
六、数据埋点
• calculator.input.change（field, value）
• calculator.result.generated（values, result）
---
七、英文示例
H1：Scrap Baler Sizing Calculator
Intro：Estimate the required press force and bale size based on material type, thickness, and daily throughput.
Input Parameters：
• Material Type — Select from dropdown
• Material Thickness (mm)
• Daily Throughput (tons)
    Results：
• Required Press Force: 450 Tons
• Recommended Capacity: HB-450
联系我们CONTACT
一、页面结构（从上到下）
1. Page Hero
    ◦ H1：Contact ARZIR
    ◦ 副标题（英文）：Tell us about your project. Our engineers will respond within 24 hours.
    ◦ 面包屑：Home > Contact
2. 双栏布局（桌面端），单列（移动端）
    ◦ 左侧：表单（只含 5 个字段 + Submit 按钮）
    ◦ 右侧：联系方式卡片（顶部简短英文文案 + 地址/邮箱/座机/WhatsApp + 社媒图标链接）
3. 提交成功反馈
    ◦ 成功后弹出 Modal：标题“Thank you!”、正文“Your message has been sent, We will contact you soon!”
    ◦ 同时触发 撒花（Confetti） 动效（~1.5s）
---
二、表单（英文 UI）
• 字段顺序
    ◦ Name*（Full name）
    ◦ Company（Company name）
    ◦ Email*（name@company.com）
    ◦ WhatsApp（+861… / with country code）
    ◦ Message*（Your message…）
• 按钮：Submit
• 校验规则（zod）
    ◦ name：≥2 字符
    ◦ email：合法邮箱
    ◦ message：≥10 字符
    ◦ whatsapp：可选；若填入建议以 “+ 国家码 …”
• 交互：loading 态、禁用态、错误就地提示；成功后清空或保留均可（推荐保留并弹窗）
• 表单提交后同时通过resend发送邮件到指定邮箱，邮件标题为New Inquiry from Arzir, 邮件内容包括表单内容，来源页面地址，国家（根据ip地址识别），英文版。
---
三、联系方式卡片（英文内容示例）
标题：Global Contacts
开头文案（英文）：
Sales & technical support for recycling and metal processing projects. We reply within 24 hours.
联系方式（固定内容）
• Address：Mingjue Industrial Park, Lishui, Nanjing, Jiangsu, China.
• Email：info@arzir.com
• Phone（Landline）：+86-25-56200956
• WhatsApp：+8618151685977
社媒图标（链接自填）
• YouTube / Facebook / Instagram / TikTok（使用圆形图标，hover 变主色；链接占位 #）
---
四、SEO & 可访问性
• Title：Contact ARZIR | Sales & Technical Support
• Meta Description：Get in touch for quotes or technical advice on recycling and metal processing machinery.
• 语义：表单控件有 <label>，错误文本通过 aria-describedby 关联；按钮可键盘操作；对比度≥4.5:1。
管理后台
Blog编辑区域
1) 目标 & 范围
• 目标：为英文主站（预留 pt-BR/es）提供稳定、高效、低心智成本的博客内容生产与发布能力，保障 SEO 与转化。
• 范围：文章内容管理、分类与标签、媒体管理、i18n、多稿件协作与审核、定时发布、草稿预览、SEO 字段、结构化数据、自动化再验证（ISR）。
---
2) 角色与权限（RBAC）
• admin：全权（用户与角色、策略、删除内容、站点配置）。
• editor：审核/发布/回退版本，可编辑任何稿件。
• author：创建/编辑自己的稿件，提交审核；不可发布。
• contributor（可选）：草稿撰写，需 editor 接手。
• anonymous：无后台访问，仅公开 API/站点读取。
行为限制：
author/contributor 仅能 select/update/delete 自己的 posts（未发布或退回的）
editor/admin 可跨作者操作
所有写操作写入 audit_logs
---
3) 内容模型（数据结构）
主表：posts
字段
类型
说明

id
uuid pk


slug
text unique not null
URL 片段（自动生成，可手改）

title
text not null
英文标题

excerpt
text
摘要（≤160 chars）

body_html
text
富文本渲染产物（或 MDX 渲染产物）

body_mdx
text
原始 MDX（推荐）

cover_url
text
封面图 Storage URL

category
text
主分类（枚举）

tags
text[]
标签

status
text
draft/review/published/rejected/scheduled/archived

scheduled_at
timestamptz
定时发布时间

published_at
timestamptz
实际发布时间

updated_at
timestamptz
默认 now()

author_id
uuid
作者 uid

editor_id
uuid
审核通过者 uid（可空）

locale
text
en/pt-BR/es

seo_title
text
SEO 标题（可为空，fallback 到 title）

seo_description
text
Meta 描述

og_image
text
OG 图覆盖

reading_time
int
估算阅读时长（分钟）

word_count
int
字数（写入时计算）

canonical_url
text
规范链接

noindex
boolean
是否 noindex

schema_json
jsonb
结构化数据（可覆盖默认）

version
int
版本号

附表
• post_revisions(id, post_id, version, body_mdx, diff, created_at, author_id)
• post_localizations(id, post_id, locale, title, excerpt, body_mdx, seo_title, seo_description)（若采用“单表多语言”也可直接在 posts 扩列）
• categories(id, slug, name, locale)
• tags(id, slug, name, locale)
• media_assets(id, bucket, path, url, alt, width, height, created_by, created_at)
• audit_logs(id, actor_id, action, entity, entity_id, diff, created_at)
• authors(id, name, role, avatar_url, bio, email)
---
4) 编辑与发布流程（工作流）
1. 草稿（draft）：作者撰写，自动保存版本；可发起“提交审核”。
2. 审核中（review）：编辑审阅，给出评论/修改意见；可退回（rejected）或通过进入发布/排期。
3. 定时发布（scheduled）：到 scheduled_at 自动发布（Supabase 任务或 CRON + Webhook）。
4. 已发布（published）：触发 ISR 再验证（revalidateTag('blog') + 指定 slug path）。
5. 归档（archived）：旧文封存；可回滚版本、再发布。
审核动作需要 审计记录（谁 → 何时 → 做了什么 → 变更内容）。
---
5) 后台 UI/UX 要求
• 文章列表：按状态/作者/分类/标签/时间筛选；批量操作（改状态、改分类、加标签）。
• 编辑器：MDX 支持（Heading、列表、表格、引文、代码、图片、提示块）；支持拖拽上传图片（自动上传 Supabase Storage + 写入 alt）。
• 右侧栏：SEO 字段（Title/Description/OG image/Canonical/noindex）、分类/标签、封面、阅读时长与字数（自动计算显示）、语言、定时发布、状态切换、作者/编辑。
• 预览：点击“预览”生成带 token 的草稿预览 URL（生存期可配置），前台 draft 渲染隔离。
• 版本：显示版本列表、差异（Diff），可一键回滚。
• 评论（可选）：审核意见/内部批注。
• 快捷模版：常用文章框架（Buying Guide、Maintenance、Applications、Case Study）。
• 内链建议（可选）：根据段落关键词，建议链接到产品/计算器/相关文章。
• 字数与可读性：字数统计、H2/H3 结构检查、空标题校验。
---
6) SEO / i18n / 结构化数据
• SEO：必填/校验规则
    ◦ seo_title ≤ 60 chars；seo_description 120–160 chars；禁止空/全重复；建议差异化首句
• 结构化数据：默认 Article + BreadcrumbList，可在 schema_json 覆盖/追加。
• i18n：
    ◦ 模式 A：每条 posts 记录代表一个 locale（建议简单可靠）
    ◦ 模式 B：post_localizations 存其他语言版本，主键关联
• hreflang：发布时生成（或 sitemap 动态输出）
---
7) 媒体与图片规范（与前台一致）
• 封面：16:9（建议 1200×675+），WebP 优先；自动生成多规格（w=640/960/1200）
• 文内图：16:9 优先，允许 4:3；必须填写 alt；可选 caption
• 存储：Supabase Storage → media/blog/{YYYY}/{slug}/file.webp
• 上传策略：限制类型与大小；后台压缩与自动 WebP；MDX 内插入时写入 width/height/alt
---
8) 校验与安全
• 输入校验：zod schema（标题/摘要/slug/分类/标签/SEO 字段）
• 防刷：后台仅登录用户可用；写操作限流（IP+UID+Route）；审计日志
• 权限：RLS（见下文），前端再做一次 UI 级屏蔽
• 预览 Token：一次性/短期有效（JWT 或随机字符串），仅拉取该 post_id 的 draft 内容
• CSP/Headers：后台同前台统一安全头
• 文件清理：删除文章时可选“清理未引用媒体”（后台异步任务）
---
9) 预览、发布、定时与缓存
• 实时预览：Editor 保存即写入 post_revisions，点“预览”创建 preview_token，前台路由 /blog/preview/[token] 服务端读取最新版本渲染。
• 当即发布：status → published 写 published_at=now() → 触发 /api/revalidate?tag=blog 与 /api/revalidate?path=/blog/[slug]。
• 定时发布：Supabase 任务（pg_cron 或外部 n8n）每分钟扫描 scheduled_at<=now() and status='scheduled' → 执行发布 → 触发 revalidate。
• 缓存：Blog 列表 revalidate=1800；详情页 revalidate=3600；命中标签 blog + post:{id}。
---
10) 自动化与集成（可选但推荐）
• Webhook：发布/更新/下线时向搜索引擎或外部系统（n8n、CRM、Slack）推送消息。
• Sitemap 自动刷新：发布后触发 sitemap 重新生成/通知。
• 邮件订阅：新文发布邮件（Resend/SES）。
• AB 测试（后续）：标题变体/封面变体，自动记录 CTR。
---
11) 指标与报表
• 内容生产：产出数、平均审核时间、退回率、版本数
• 效果：阅读量（pageview）、平均阅读时长、跳出率、转化率（点击产品/询价）
• SEO：索引覆盖数、Top Keywords、排名分布（集成 GSC）
---
13) 后台路由与实现（Next.js App Router）
• 路由结构
/app/(admin)/admin/
  ├─ login/page.tsx           # 登录（Supabase Auth）
  ├─ posts/page.tsx           # 列表 + 筛选 + 批量
  ├─ posts/new/page.tsx       # 新建
  ├─ posts/[id]/edit/page.tsx # 编辑器（MDX）
  ├─ media/page.tsx           # 媒体库
  ├─ settings/page.tsx        # SEO 默认、分类/标签管理
  └─ api/*                    # Server Actions / route handlers
• 守卫：middleware.ts 拦截 /admin/* 未登录跳转到 /admin/login；基于角色显示/隐藏按钮。
• Server Actions：saveDraft, submitForReview, approveAndPublish, schedule, revoke, uploadMedia, createPreviewToken（全部做 zod 校验 + 限流）。
• 预览：/blog/preview/[token]（服务器读取 token → post → 渲染最新 body_mdx）。
---
14) 缓存与再验证（ISR）
• 列表：revalidate = 1800（30min） + tag blog
• 详情：revalidate = 3600（60min） + tag post:{id}
• 发布/更新/下线：
    ◦ 调 revalidateTag('blog')
    ◦ revalidatePath('/blog/[slug]')
• CDN：响应头 s-maxage 与 stale-while-revalidate（GET 接口/Feed/预览除外）
---
15) QA 清单（上线必查）
• 字段校验：标题/H1/slug/SEO 字段非空 & 长度达标
• 预览链接可用并自动过期
• 媒体压缩与 alt/caption 完整
• 结构化数据有效（Rich Results Test）
• 定时发布触发成功且自动再验证
• 审计日志完整记录关键操作
• RLS 策略覆盖所有写/读路径，未授权操作被拒绝
• Lighthouse（性能/可达性/SEO/最佳实践）≥ 90
---
16) 路线图（可选增强）
• 内容模板 & AI 辅助：根据标题自动生成大纲/摘要/FAQ 草稿（人工审核后发布）。
• 内链智能推荐：基于 TF-IDF/向量搜索推荐相关产品与文章。
• 版本 AB 测试：标题/封面自动实验与归因。
• 跨语言工作流：主语言发布后创建翻译任务卡，追踪完成度与一致性。
询盘收集查看区域
1) 目标与范围
• 目标：让销售与管理端在后台高效查看/筛选/分配/跟进询盘，减少遗漏，提升转化。
• 范围：列表视图、详情视图、筛选与批量操作、分配与备注、附件管理、导出、去重合并、审计与权限、SLA 提醒、自动化对接。
---
2) 路由与信息架构（Next.js App Router）
/app/(admin)/admin/leads/
  ├─ page.tsx                 # 列表视图（带筛选、排序、批量操作）
  ├─ [id]/page.tsx            # 详情视图（时间线、备注、附件、操作）
  ├─ actions.ts               # Server Actions（assign、update-status、export、merge 等）
  └─ api/                     # 如需独立 route handlers
---
3) 数据模型（Supabase 表）
3.1 主表：leads
字段
类型
说明

id
uuid pk
询盘ID

created_at
timestamptz
创建时间

source
text
渠道：website, blog, calculator, landing, trade-show, manual, api

utm_source / medium / campaign
text
UTM

referrer
text
引荐页

locale
text
语言：en/pt-BR/es

product_slug
text
关联产品

category
text
产品大类

name
text
客户名

company
text
公司

email
text
邮箱（索引 & 去重依据）

phone
text
电话/WhatsApp（E.164）

country
text
国家

message
text
询盘内容

attachments
jsonb
文件数组（Storage URL、文件名、尺寸）

priority
text
low/normal/high/urgent

score
int
询盘评分（0–5，自动或人工）

status
text
new/assigned/in-progress/waiting/customer-late/qualified/won/lost/invalid

owner_id
uuid
责任销售

due_at
timestamptz
下一次跟进时间/SLA 目标

last_contacted_at
timestamptz
上次联系时间

ip
inet
提交IP（可脱敏）

meta
jsonb
设备/浏览器/路径等

tags
text[]
标签

gdpr_consent
boolean
合规同意

deleted
boolean
软删除

索引建议
• create index on leads (status, created_at desc);
• create index on leads (owner_id, status);
• create unique index on leads (email, product_slug) where status <> 'invalid';（按需放宽）
3.2 附表
• lead_notes(id, lead_id, author_id, body, created_at) —— 内部备注/沟通纪要
• lead_events(id, lead_id, type, payload jsonb, created_at, actor_id) —— 时间线（分配/状态变更/邮件发送/导出等）
• audit_logs —— 复用全局审计表
---
4) 权限与 RLS（核心）
• 角色：admin、manager、sales、support、anonymous
• 可见性：
    ◦ sales：仅可见自己 owner_id = auth.uid() 的 lead + 未分配 status='new'
    ◦ manager/admin：可见所有
• 写权限：
    ◦ sales：仅能修改自己负责的 lead 的 status/priority/due_at/notes/attachments
    ◦ manager/admin：可编辑所有，允许分配、合并、导出、删除（软删）
示例策略（节选）
alter table leads enable row level security;

create policy "public insert from website" on leads
for insert to anon, authenticated using (true) with check (true); -- 前台表单

create policy "sales read own + new" on leads
for select to authenticated
using (owner_id = auth.uid() or status = 'new');

create policy "sales update own" on leads
for update to authenticated
using (owner_id = auth.uid());

create policy "manager read all" on leads for select to authenticated
using ( exists(select 1 from authors a where a.id=auth.uid() and a.role in ('manager','admin')) );

create policy "manager update all" on leads for update to authenticated
using ( exists(select 1 from authors a where a.id=auth.uid() and a.role in ('manager','admin')) );
---
5) 列表视图（UI/UX）
5.1 顶部工具条
• 搜索：支持 name/company/email/phone、message 全文（tsvector）
• 筛选：多选/下拉
    ◦ Status（多选）
    ◦ Owner（多选）
    ◦ Priority（Low/Normal/High/Urgent）
    ◦ Source（website/blog/calculator/…）
    ◦ Category/Product
    ◦ Country（多选）
    ◦ Date Range（created_at / last_contacted_at）
    ◦ Score（0–5）
• 排序：created_at、priority、score、last_contacted_at、due_at
• 批量操作（复选框选择后启用）：
    ◦ Assign to…（1 人）
    ◦ Update status…
    ◦ Update priority…
    ◦ Add tags…
    ◦ Export CSV（仅 manager/admin）
    ◦ Merge leads（仅 manager/admin）
5.2 列表表格字段（可配置列）
• Checkbox（批量）
• Created（相对时间 + tooltip 绝对时间）
• Source / UTM
• Product / Category
• Name / Company
• Email / Phone
• Country
• Score（0–5，颜色编码）
• Priority（chip）
• Status（chip，状态机颜色）
• Owner（头像+姓名）
• Due（SLA 倒计时/日期）
• Actions：View、Assign、Change Status、Delete(soft)
5.3 交互细节
• 行点击进入详情；操作列提供快捷操作（不离开列表）
• 高亮规则：urgent 或 SLA 已超时 用醒目边框/背景
• 快捷键：/ 聚焦搜索，A 分配，S 改状态
---
6) 详情视图
6.1 顶部概要卡
• 客户基础信息（name/company/email/phone/country）
• 产品与分类、来源、UTM、创建时间
• Score、Priority、Status、Owner、Due/SLA
• 主按钮：
    ◦ Assign（选择销售）
    ◦ Change Status（有状态机校验）
    ◦ Set Priority
    ◦ Schedule Follow-up（设定 due_at）
    ◦ Export PDF（可选）
6.2 时间线（Timeline）
• 列出 lead_events：创建、分配、状态变更、备注、附件上传、发送邮件（模板名）、导出、合并等
• 每条带时间、操作者、事件类型、Payload 关键信息
6.3 备注（Notes）
• 富文本/Markdown 简易编辑（@提及 同事，可选）
• 支持上传内部截图（走 Storage，自动写入 attachments 或 lead_notes_files）
6.4 附件（Attachments）
• 文件列表（文件名/大小/类型/上传人/时间）
• 允许下载/预览；权限受 RLS 控制
6.5 去重提示（Dedup）
• 基于 email/phone 的相似项提示（展示可能重复的 leads，支持“合并”）
• 合并（Merge）：选择主记录，附记录的备注/附件/时间线并入；保留最早创建时间与最高优先级；事件写入审计
---
7) 状态机与 SLA
• 状态机（只允许合法流转）
    new → assigned → in-progress → qualified → (won | lost)
    任意阶段可以转 waiting（等客户）或 invalid（垃圾/重复）
• SLA
    ◦ 新线索在 24h 内必须被首次联系（last_contacted_at/lead_events）
    ◦ 近到期/超时提醒：表格中标识 + 顶部提醒条 + 可选邮件/Slack
---
8) 导出与集成
• 导出 CSV（筛选结果/勾选项）
    字段：核心字段 + 扁平化 UTM + 状态 + Owner 名称 + 标签
• Webhook/CRM 集成（n8n/HubSpot/Pipedrive）
    ◦ event：lead.created / lead.assigned / lead.status_changed / lead.won / lead.lost
    ◦ 重试与签名验证（HMAC）
• 邮件触达（可选）
    ◦ 在详情页直接触发模板邮件（存 lead_events）
---
9) 安全与合规
• RLS：严格控制销售仅见/可改自己负责的线索
• PII 保护：导出需 manager/admin；API 返回默认脱敏（如部分邮箱/电话）
• 审计日志：所有分配/状态/删除/导出/合并写入 audit_logs
• 速率限制：对 /admin/leads/actions 进行 Upstash 限流（防误操作/脚本）
• 日志留存：audit_logs ≥ 365 天
---
10) Server Actions（关键接口）
• assignLead(leadId, ownerId)：分配
• updateStatus(leadId, nextStatus)：状态流转（带校验）
• updatePriority(leadId, priority)
• scheduleFollowup(leadId, dueAt)
• addNote(leadId, body, files[])
• mergeLeads(primaryId, secondaryIds[])
• exportLeadsCSV(filters)：生成 CSV（后台任务，完成后给下载链接）
每个 Action：zod 校验 + 权限验证 + 记录 lead_events + 写 audit_logs
---
11) UI 组件与交互（shadcn/ui）
• DataTable：可排序、可选择、粘性表头、虚拟滚动（大数据量）
• Command/Search：快速跳转到指定 lead
• Dialog/Sheet：分配/改状态/批量操作弹窗
• Badge：status/priority/source/tag
• Toast：操作反馈
• Skeleton：加载占位
• Empty State：无数据时给出搜索建议/清空筛选按钮
---
12) 性能与缓存
• 列表默认分页 pageSize=20；服务端分页查询（RSC）
• 支持导出任务异步化（避免长请求）
• ISR 不应用于后台；使用 server actions + 直连数据库
• 针对常用筛选条件（如 status=new）可做只读缓存层（1–5 分钟）给管理者概览（非强一致）
---
13) 示例 SQL 片段（补充）
-- 常见状态/优先级约束
alter table leads add constraint leads_status_chk
check (status in ('new','assigned','in-progress','waiting','customer-late','qualified','won','lost','invalid'));

alter table leads add constraint leads_priority_chk
check (priority in ('low','normal','high','urgent'));

-- 去重索引（可在 email/phone 任一存在时触发）
create index on leads (lower(email));
create index on leads (phone);
---
14) QA/验收清单
[ ]  角色与 RLS 覆盖全部读写路径
[ ]  列表筛选/排序/分页性能达标（P95 < 300ms）
[ ]  批量操作（≥100 条）稳定，失败可回滚/重试
[ ]  合并功能正确迁移备注/附件/时间线
[ ]  导出文件字段完整，PII 合规，权限校验
[ ]  SLA 提醒准确、可配置
[ ]  审计日志记录齐全且可追溯
[ ]  前端可访问性：键盘可操作、ARIA、对比度合规
用户管理
1) 目标与范围
• 目标：集中管理后台用户与权限（Admin/Manager/Sales/Support/Editor/Author 等），满足最小权限原则、可审计、可扩展。
• 范围：用户目录、角色与权限、组织与分组、登录与会话、安全策略（MFA/IP/设备）、邀请与停用、审计日志、批量导入导出、API Token（可选）。
---
2) 角色模型与权限（RBAC）
2.1 预设角色（可配置）
• admin：系统全权；管理用户/角色/策略；查看导出审计。
• manager：团队与数据管理；跨用户分配/查看；导出。
• sales：仅销售业务（Leads）可见/可改自己的数据；可读公开资源。
• support：售后/服务单读写；只读 Leads/Posts。
• editor：内容审核发布；读写 Posts/Media；只读 Leads。
• author：仅写自己的 Posts/Media；提交审核。
• viewer（可选）：只读公开后台视图。
支持自定义权限点（见 2.2）映射到角色。
2.2 权限点（建议最小集合）
• users.read, users.write, users.delete, users.invite, users.roles.manage
• roles.read, roles.write
• leads.read.all, leads.assign, leads.export
• posts.publish, posts.review, posts.write.own
• media.upload, media.delete
• audit.read
• settings.write
角色 → 权限点（多对多），允许日后精细化授权。
---
3) 数据模型（Supabase / Postgres）
Supabase 自带 auth.users 作为账号主体；业务档案与 RBAC 放在自建表。
3.1 表结构
-- 用户扩展档案
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  avatar_url text,
  title text,                 -- 职位
  phone text,
  locale text default 'en',   -- 后台UI语言
  timezone text default 'UTC',
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 角色
create table if not exists roles (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,          -- admin/manager/...
  name text not null,
  description text
);

-- 用户-角色 多对多
create table if not exists user_roles (
  user_id uuid references auth.users(id) on delete cascade,
  role_id uuid references roles(id) on delete cascade,
  primary key(user_id, role_id)
);

-- 权限点
create table if not exists permissions (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,          -- users.read ...
  description text
);

-- 角色-权限 多对多
create table if not exists role_permissions (
  role_id uuid references roles(id) on delete cascade,
  permission_id uuid references permissions(id) on delete cascade,
  primary key(role_id, permission_id)
);

-- 审计日志
create table if not exists audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id),
  action text not null,               -- 'user.invite' | 'user.update' | ...
  entity text not null,               -- 'user' | 'role' | ...
  entity_id uuid,
  diff jsonb,                         -- 变更前后
  ip inet,
  user_agent text,
  created_at timestamptz default now()
);

-- API Tokens（可选）
create table if not exists api_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  token_hash text not null,           -- 只存hash
  scopes text[] default '{}',         -- 权限作用域
  last_used_at timestamptz,
  created_at timestamptz default now(),
  revoked boolean default false
);
3.2 RLS 策略（关键）
alter table profiles enable row level security;
alter table user_roles enable row level security;
alter table roles enable row level security;
alter table permissions enable row level security;
alter table role_permissions enable row level security;
alter table audit_logs enable row level security;
alter table api_tokens enable row level security;

-- 所有人可读自己档案
create policy "profiles self read" on profiles
for select to authenticated
using (id = auth.uid());

-- admin/manager 可读全部档案
create policy "profiles staff read" on profiles
for select to authenticated
using (exists(
  select 1 from user_roles ur join roles r on r.id=ur.role_id
  where ur.user_id = auth.uid() and r.code in ('admin','manager')
));

-- admin 可写任何档案；用户可写自己的基本字段
create policy "profiles self update" on profiles
for update to authenticated
using (id = auth.uid())
with check (id = auth.uid());

create policy "profiles admin update" on profiles
for update to authenticated
using (exists(
  select 1 from user_roles ur join roles r on r.id=ur.role_id
  where ur.user_id = auth.uid() and r.code='admin'
))
with check (true);

-- roles/permissions/role_permissions/user_roles：仅 admin 可读写
create policy "rbac admin read" on roles for select to authenticated
using (exists(select 1 from user_roles ur join roles r on r.id=ur.role_id
  where ur.user_id=auth.uid() and r.code='admin'));
create policy "rbac admin write" on roles for all to authenticated
using (exists(select 1 from user_roles ur join roles r on r.id=ur.role_id
  where ur.user_id=auth.uid() and r.code='admin')) with check (true);

-- 其余 RBAC 表同理设置 admin-only 策略

-- 审计日志：admin/manager 可读，其他不可读；任何写通过服务端
create policy "audit read staff" on audit_logs for select to authenticated
using (exists(select 1 from user_roles ur join roles r on r.id=ur.role_id
  where ur.user_id=auth.uid() and r.code in ('admin','manager')));
---
4) 后台路由与信息架构（Next.js App Router）
/app/(admin)/admin/users/
  ├─ page.tsx              # 用户列表（筛选、批量）
  ├─ new/page.tsx          # 创建/邀请用户
  ├─ [id]/page.tsx         # 用户详情（档案、角色、活动、会话、令牌）
  ├─ actions.ts            # Server Actions：invite/update/assign-role/suspend...
  └─ sessions/[id].tsx     # 设备/会话管理（可选独立页）
---
5) UI/UX 规范
5.1 用户列表（DataTable）
• 列：Avatar/Name/Email/Role(s)/Status(Active/Suspended)/Last Sign-in/Created/Actions
• 过滤：角色、状态、创建时间范围、关键字（name/email）
• 排序：Name、Role、Last Sign-in、Created
• 批量操作：Add to Role、Remove from Role、Suspend、Activate、Delete(soft)
• 空状态：引导“Invite User”
5.2 用户详情
• Profile：姓名、头像、职位、电话、时区、语言、状态切换（Active/Suspended）
• Roles & Permissions：显示角色列表；可添加/移除角色；展开查看角色对应的权限点
• Security：MFA 状态、最近登录、密码重置、强制登出全部会话（Invalidate sessions）
• Sessions/Devices：最近设备、IP、位置（近似）、最后活动时间；支持单个登出
• API Tokens（可选）：创建/吊销/查看最后使用时间；只显示 token 前缀，创建时一次性展示明文
• Activity：最近 20 条审计事件（创建、角色变化、停用/启用、MFA 变更等）
5.3 创建/邀请流程
• Invite User：输入 email、name、role(s)；发送邀请邮件（魔法链接/设置密码）
• Create User（手动）：仅 admin；设置初始密码（一次性展示），强制下次登录修改
• 批量导入：CSV（email,name,role）；导入预检 → 映射 → 执行 → 结果报告
---
6) Server Actions & 校验
所有动作 zod 校验 + 权限检查 + Upstash 限流 + 写入 audit_logs
• inviteUser({email,name,roles})
• createUser({email,name,roles,password?})
• updateProfile({id, ...fields})
• assignRoles({id, roleIds[]}) / removeRoles(...)
• suspendUser({id}) / activateUser({id})
• resetPassword({id})（发邮件或强制下次修改）
• revokeSessions({id})
• createApiToken({id,name,scopes[]}) / revokeApiToken({tokenId})
---
7) 安全策略
• MFA：启用邮件/OTP/TOTP；强制 admin/manager 开启；存储在 Supabase Auth MFA。
• 密码策略：最少 10 位、复杂度校验、密码重用限制、定期到期（对高权限）。
• 会话管理：显示活跃设备；可远程登出；登录异常（新设备/国家）通知。
• IP/国家限制（可选）：admin/manager 限定公司网段或国家白名单。
• 速率限制：对 actions.ts 中所有敏感动作按 IP+UID 1m/5 次 或更严格。
• CSP/Headers：与前台一致；禁用内联脚本（或 nonce）；SameSite/Lax Cookies。
• 审计：所有用户/角色/权限变更写 audit_logs；导出/删除需二次确认与审计原因。
---
8) 合规与隐私
• 最小化展示：列表默认不展示敏感信息（如完整电话），详情可查看。
• 导出：仅 admin/manager 可导出用户清单（脱敏/全量两档）。
• 删除：软删除用户档案；与 auth.users 的停用区分（防误删历史记录）。
• 日志保留：audit_logs ≥ 365 天；下载记录写入审计。
---
9) 性能与可用性
• 列表分页（服务端）：默认 pageSize=20，可到 100；排序走索引（created_at, last_sign_in_at）
• 查询延迟目标：P95 < 300ms（内网）
• 大量导入：后台任务化，完成后通知 + 成功/失败报告 CSV
---
11) QA/验收清单
[ ]  非 
admin 无法读取 RBAC 基础表
[ ] 
sales 无法看到其他人的个人信息与 Sessions
[ ]  邀请/创建/停用/角色变更均记录审计
[ ]  批量导入回滚机制与错误报告正确
[ ]  速率限制生效；暴力尝试被阻断
[ ]  MFA 对高权限强制启用并验证
[ ]  导出权限校验、文件可追溯
[ ]  Lighthouse（可达性/SEO/最佳实践）≥90（后台页无需 SEO，但可达性/最佳实践要高分）
---
12) 前端实现要点（shadcn/ui）
• DataTable：可排序列、列显示控制、粘性表头、行内操作
• Dialog/Sheet：邀请、角色分配、停用、重置密码、创建 Token
• Badge/Avatar：角色/状态/用户头像
• Command（快速搜索用户）
• Form + zod：严格校验输入
• Toast：操作反馈；Skeleton：加载占位
---