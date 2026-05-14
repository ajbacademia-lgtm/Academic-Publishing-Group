#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# Academic Publishing Group — Deployment Script
# Usage: ./deploy.sh [cpanel|github|netlify|vercel|root]
# ═══════════════════════════════════════════════════════════════
set -e

TARGET=${1:-cpanel}
echo "🚀 Building for: $TARGET"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
  echo "⚠️  Warning: .env.local not found. AI features won't work."
  echo "   Create .env.local and set GEMINI_API_KEY=your_key"
fi

npm ci

case $TARGET in
  cpanel)
    echo "Building for cPanel (relative paths)..."
    VITE_BASE_PATH="./" npm run build
    echo "✅ Done! Upload the 'dist/' folder contents to your public_html directory."
    ;;
  github)
    REPO=$(basename $(git rev-parse --show-toplevel))
    echo "Building for GitHub Pages (/$REPO/)..."
    VITE_BASE_PATH="/$REPO/" npm run build
    echo "✅ Done! Push to main and GitHub Actions will deploy."
    ;;
  netlify|vercel)
    echo "Building for $TARGET (root path)..."
    VITE_BASE_PATH="/" npm run build
    echo "✅ Done! Connect your repo to $TARGET and it will auto-deploy."
    ;;
  root)
    echo "Building for root domain..."
    VITE_BASE_PATH="/" npm run build
    echo "✅ Done! Upload 'dist/' contents to your web root."
    ;;
  *)
    echo "❌ Unknown target: $TARGET"
    echo "Usage: ./deploy.sh [cpanel|github|netlify|vercel|root]"
    exit 1
    ;;
esac

echo ""
echo "📦 Build output: dist/"
echo "📁 Files:"
ls -lh dist/
