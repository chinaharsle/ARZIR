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
• 表单提交后同时发送邮件到指定邮箱，邮件标题为New Inquiry from Arzir, 邮件内容包括表单内容，来源页面地址，国家（根据ip地址识别），英文版。
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