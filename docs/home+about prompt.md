首页HOME
一、整体风格与基础规范
• 设计风格：现代化工业风（大留白、网格布局、清晰层级、几何线条与微交互），突出坚固、可靠、专业。
• 字体：全站默认标题 Roboto字体，文本使用hind字体。
• 响应式：移动优先，适配 360–1440+ px；网格断点：sm 640 / md 768 / lg 1024 / xl 1280。
• 图像规范：产品图统一 4:3，支持 WebP/AVIF，提供 srcset/sizes，懒加载。
• 可访问性：对比度≥4.5:1，键盘可达，按钮/链接有焦点态与 ARIA 标签。
• 性能：LCP < 2.5s、CLS < 0.1、TTFB < 0.8s；关键 CSS 内联、延迟非关键脚本、开启 HTTP/2、CDN 与缓存策略。
二、首页信息架构（从上到下）
1. Hero 首屏，修复弹窗表单点击提交后收不到邮件的问题。
2. 关于我们区块，包含图片和文字介绍部分，链接到about页面，显示一些优势特点内容区块，设计保持和整体设计一致协调。
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
• 表单提交后同时发送邮件到指定邮箱，邮件标题为New Inquiry from Arzir, 邮件内容包括表单内容，来源页面地址，国家（根据ip地址识别），英文版。
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
    ◦ 背景浅色块（primary 的浅色调），左侧标题+简介，右侧表单，包含的选项和首页表单一致
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