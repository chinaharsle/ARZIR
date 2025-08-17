# ARZIR 工业设备网站

<div align="center">
  <img alt="ARZIR Logo" src="./logo/ARZIR-Original-LOGO.png" width="300">
  
  <h3>工业回收与金属加工机械制造商</h3>
  
  <p>
    <strong>专业的回收设备制造商，专注于金属加工和工业回收解决方案</strong>
  </p>

  <p>
    <a href="#功能特性"><strong>功能特性</strong></a> ·
    <a href="#技术栈"><strong>技术栈</strong></a> ·
    <a href="#快速开始"><strong>快速开始</strong></a> ·
    <a href="#项目结构"><strong>项目结构</strong></a> ·
    <a href="#部署"><strong>部署</strong></a>
  </p>
</div>

## 关于 ARZIR

ARZIR 工业设备有限公司成立于2012年，是一家专业从事工业回收和金属加工机械制造的企业。我们致力于为全球客户提供高质量的回收设备和解决方案。

### 我们的产品
- 回收打包机 (Recycling Baler)
- 废金属剪切机 (Scrap Metal Shear)  
- 破碎机 (Shredder)
- 铝挤压机 (Aluminium Extrusion Press)
- 压块机 (Briquetting Machine)

### 应用行业
- 汽车拆解
- 铝材加工
- 金属制造
- 航空回收
- 电缆回收
- 钢铁厂
- 船舶拆解

## 功能特性

### 🏭 产品展示系统
- 全面的产品目录和详细信息
- 产品图片展示和技术规格
- 应用案例和解决方案

### 📝 内容管理
- 博客文章管理系统
- 媒体文件管理
- 动态内容编辑

### 🧮 工程计算器
- 多种工程计算工具
- 设备参数计算
- 性能评估工具

### 💬 客户互动
- 联系表单和询价系统
- 客户询问管理
- 销售线索跟踪

### 🌍 国际化支持
- 多语言支持
- 地区化内容
- 国际化路由

## 技术栈

### 前端技术
- **[Next.js 15](https://nextjs.org)** - React 全栈框架
- **[React 19](https://reactjs.org)** - 用户界面库
- **[TypeScript](https://www.typescriptlang.org)** - 类型安全的 JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - 实用优先的 CSS 框架
- **[shadcn/ui](https://ui.shadcn.com)** - 现代化 UI 组件库

### 后端服务
- **[Supabase](https://supabase.io)** - 开源 Firebase 替代方案
  - PostgreSQL 数据库
  - 身份认证系统
  - 实时订阅
  - 存储服务
- **[Resend](https://resend.com)** - 邮件发送服务

### 开发工具
- **[ESLint](https://eslint.org)** - 代码质量检查
- **[Prettier](https://prettier.io)** - 代码格式化
- **[Turbopack](https://turbo.build/pack)** - 快速构建工具

### 第三方集成
- **[TinyMCE](https://www.tiny.cloud)** - 富文本编辑器
- **[Lucide React](https://lucide.dev)** - 图标库
- **[React Hook Form](https://react-hook-form.com)** - 表单处理
- **[Zod](https://zod.dev)** - 类型验证

## 快速开始

### 环境要求
- Node.js 18.17 或更高版本
- npm, yarn 或 pnpm
- Supabase 项目

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-org/arzir-website.git
   cd arzir-website
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或者
   yarn install
   # 或者
   pnpm install
   ```

3. **配置环境变量**
   
   创建 `.env.local` 文件并配置以下变量：
   ```env
   # Supabase 配置
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   
   # 邮件服务配置
   RESEND_API_KEY=your_resend_api_key
   
   # 网站配置
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 可用脚本

```bash
npm run dev          # 启动开发服务器（使用 Turbopack）
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 运行 ESLint 检查
npm run typecheck    # TypeScript 类型检查
```

## 项目结构

```
src/
├── app/                          # Next.js App Router
│   ├── (marketing)/             # 营销页面组
│   │   ├── about/              # 关于我们
│   │   ├── applications/       # 应用案例
│   │   ├── blog/              # 博客
│   │   ├── calculator/        # 计算器
│   │   ├── contact/           # 联系我们
│   │   └── products/          # 产品页面
│   ├── api/                    # API 路由
│   ├── auth/                   # 认证相关页面
│   ├── dashboard/              # 管理后台
│   └── protected/              # 受保护的页面
├── components/                  # React 组件
│   ├── ui/                     # 基础 UI 组件
│   ├── forms/                  # 表单组件
│   ├── layout/                 # 布局组件
│   └── dashboard/              # 后台组件
├── config/                     # 配置文件
├── lib/                        # 工具库
│   ├── supabase/              # Supabase 配置
│   ├── email/                 # 邮件服务
│   └── validators/            # 数据验证
├── server/                     # 服务器端代码
├── types/                      # TypeScript 类型定义
└── styles/                     # 样式文件
```

## 部署

### Vercel 部署（推荐）

1. **连接 GitHub 仓库**
   - 登录 [Vercel](https://vercel.com)
   - 导入 GitHub 项目

2. **配置环境变量**
   
   在 Vercel 项目设置中添加环境变量：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

3. **部署**
   - Vercel 会自动构建和部署项目
   - 每次推送到主分支都会触发自动部署

### 其他部署平台

项目支持部署到任何支持 Node.js 的平台：
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 开发指南

### 添加新页面
1. 在 `src/app/(marketing)/` 下创建新目录
2. 添加 `page.tsx` 文件
3. 在 `src/config/site.ts` 中更新导航配置

### 添加新组件
1. 在 `src/components/` 相应目录下创建组件
2. 遵循现有的命名约定
3. 使用 TypeScript 进行类型定义

### 数据库操作
1. 使用 Supabase 客户端进行数据库操作
2. 在 `src/server/` 中编写服务器端查询
3. 在 `src/types/` 中定义数据类型

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

此项目使用 MIT 许可证。查看 [LICENSE](LICENSE) 文件了解详情。

## 联系我们

- **公司**: ARZIR 工业设备有限公司
- **地址**: 中国江苏省南京市溧水区明觉工业园
- **邮箱**: info@arzir.com
- **电话**: +86-25-56200956
- **微信/WhatsApp**: +8618151685977
- **网站**: [www.arzir.com](https://www.arzir.com)

---

<div align="center">
  <p>由 <strong>ARZIR</strong> 团队精心开发 ❤️</p>
</div>
