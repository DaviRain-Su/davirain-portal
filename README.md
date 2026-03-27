# DaviRain Portal

Personal portfolio website with modern design and Three.js animations.

![Design](https://img.shields.io/badge/Design-Modern%20Minimalist-blue)
![Tech](https://img.shields.io/badge/Tech-Next.js%20%2B%20Three.js-black)

## ✨ Features

- **Modern Design**: Elegant typography (Cormorant Garamond + Manrope)
- **3D Background**: Interactive Three.js particle animation
- **Parallax Effects**: Mouse-driven content movement
- **Product Showcase**: AI-Cast featured prominently
- **Blog Integration**: Links to Jekyll blog
- **Responsive**: Works on all devices

## 🎨 Design System

| Element | Value |
|---------|-------|
| Background | `#e6e6e8` (Warm Gray) |
| Text Primary | `#141414` (Near Black) |
| Accent | `#0A3A8A` (Deep Blue) |
| Font Serif | Cormorant Garamond |
| Font Sans | Manrope |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Structure

```
app/
├── page.tsx              # Home with hero + AI-Cast
├── products/page.tsx     # Product details
├── blog/page.tsx         # Blog redirect
└── layout.tsx           # Root layout

components/
├── ThreeBackground.tsx   # 3D particle animation
├── GeometricAccent.tsx   # Blue geometric shape
├── Header.tsx           # Navigation
└── Footer.tsx           # Social links

public/                  # Static assets
```

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero + AI-Cast preview |
| `/products` | AI-Cast detailed showcase |
| `/blog` | Redirect to Jekyll blog |

## 🔗 Links

- **Live Site**: https://davirain-portal.vercel.app
- **Blog**: https://davirain-su.github.io/blog
- **GitHub**: https://github.com/DaviRain-Su

## 📝 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **3D**: Three.js with custom shaders
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Manrope)
- **Deploy**: Vercel

---

Built with passion by DaviRain
