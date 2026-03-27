# DaviRain Portal

Personal portfolio website showcasing AI products and blockchain projects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is configured for static export and can be deployed to Vercel:

```bash
npm run build
# Upload 'dist' folder to Vercel
```

## Structure

- `/` - Home page with hero section and product showcase
- `/blog` - Link to Jekyll blog
- All data is in `data/products.ts`

## Customization

Edit `data/products.ts` to:
- Update personal information
- Add/remove products
- Change social links


## 🚀 快速部署

```bash
# 部署到 Vercel
vercel --prod

# 查看完整部署指南
cat DEPLOY.md
```

## 🔗 相关链接

- **博客**: https://davirain-su.github.io/blog
- **GitHub**: https://github.com/DaviRain-Su
