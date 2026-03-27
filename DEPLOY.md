# 🚀 部署指南

## 快速开始

### 1. 部署到 Vercel (推荐)

```bash
cd ~/DEV/active/davirain-portal

# 安装 Vercel CLI
npm i -g vercel

# 登录并部署
vercel login
vercel --prod
```

### 2. 自动部署 (GitHub + Vercel)

```bash
# 初始化 Git 并推送
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DaviRain-Su/davirain-portal.git
git push -u origin main
```

然后在 Vercel Dashboard 导入该仓库，开启自动部署。

---

## 网站结构

### 主站 (Vercel)
- `/` - 首页，展示 **AI-Cast** 产品
- `/blog` - 跳转到博客
- GitHub、邮箱链接

### 博客 (GitHub Pages)
- URL: https://davirain-su.github.io/blog
- Jekyll + GitHub Pages
- 技术文章、开发工具介绍

---

## 更新内容

### 修改产品信息
编辑 `data/products.ts`:
```typescript
export const products = [
  {
    id: 'ai-cast',
    name: 'AI-Cast',
    description: '你的描述...',
    tags: ['AI', 'Web3'],
    github: 'https://github.com/DaviRain-Su/ai-cast',
    status: 'live'
  }
]
```

### 修改个人信息
```typescript
export const personalInfo = {
  name: 'DaviRain',
  title: 'AI Agent Developer',
  // ...
}
```

### 重新部署
```bash
npm run build
vercel --prod
```

---

## 自定义域名 (可选)

1. 购买域名 (namecheap.com / cloudflare.com)
2. 在 Vercel 添加域名
3. 配置 DNS 记录 (按 Vercel 提示)

---

## 技术栈

- **框架**: Next.js 14 + TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel (免费)
- **博客**: GitHub Pages

---

**当前状态**: ✅ 已配置，可立即部署
