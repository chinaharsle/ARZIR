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
11) 指标与报表
• 内容生产：产出数、平均审核时间、退回率、版本数
• 效果：阅读量（pageview）、平均阅读时长、跳出率、转化率（点击产品/询价）
• SEO：索引覆盖数、Top Keywords、排名分布（集成 GSC）
询盘收集查看区域
1) 目标与范围
• 目标：让销售与管理端在后台高效查看/筛选/分配/跟进询盘，减少遗漏，提升转化。
• 范围：列表视图、详情视图、筛选与批量操作、分配与备注、附件管理、导出、去重合并、审计与权限、SLA 提醒、自动化对接。
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
用户管理
1) 目标与范围
• 目标：集中管理后台用户与权限（Admin/Manager/Sales/Support/Editor/Author 等），满足最小权限原则、可审计、可扩展。
• 范围：用户目录、角色与权限、组织与分组、登录与会话、安全策略（MFA/IP/设备）、邀请与停用、审计日志、批量导入导出、API Token（可选）。
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