#!/bin/bash
# Quick deploy script

echo "🚀 Deploying DaviRain Portal to Vercel..."

# Build
npm run build

# Deploy
vercel --prod

echo "✅ Deployed!"
echo "Visit: https://your-domain.vercel.app"
