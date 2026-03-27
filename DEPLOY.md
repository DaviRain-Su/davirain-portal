# 🚀 Deployment Guide

## Quick Deploy (Vercel)

### Option 1: One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DaviRain-Su/davirain-portal)

### Option 2: GitHub + Vercel

1. Push to GitHub (already done)
2. Go to https://vercel.com/new
3. Import `davirain-portal` repository
4. Click Deploy

## Manual Deploy

```bash
# Build locally
npm run build

# Deploy dist/ folder to any static host
```

## Environment Variables

None required - fully static site.

## Custom Domain

1. Buy domain (namecheap.com / cloudflare.com)
2. Add domain in Vercel Dashboard
3. Update DNS records as instructed

## Update Content

Edit `data/products.ts` or components, then:

```bash
git add .
git commit -m "Update content"
git push origin main
# Vercel auto-deploys
```

---

**Status**: ✅ Ready for deployment
