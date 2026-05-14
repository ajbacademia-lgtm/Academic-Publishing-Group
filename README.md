<div align="center">
  <h1>🎓 Academic Publishing Group</h1>
  <p>A modern, full-featured open-access academic journal platform built with React, TypeScript, Vite & Tailwind CSS.</p>
</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
```bash
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY
```

### 3. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

---

## 🏗️ Build Commands

| Command | Output | Use Case |
|---------|--------|----------|
| `npm run build` | `dist/` (relative paths `./`) | cPanel / shared hosting |
| `npm run build:cpanel` | `dist/` (relative paths `./`) | cPanel explicitly |
| `npm run build:root` | `dist/` (absolute paths `/`) | Netlify, Vercel, VPS |
| `npm run build:github` | `dist/` (`/repo-name/` paths) | GitHub Pages |
| `./deploy.sh cpanel` | Full guided deploy | cPanel |
| `./deploy.sh github` | Full guided deploy | GitHub Pages |
| `./deploy.sh netlify` | Full guided deploy | Netlify |

---

## 🌐 Deployment Guide

### cPanel (Shared Hosting)
1. Run `npm run build` (or `./deploy.sh cpanel`)
2. Upload all files from `dist/` to `public_html/` via File Manager or FTP
3. The `.htaccess` is already included in `dist/` — it handles SPA routing

### Netlify
1. Connect your Git repo to Netlify
2. Build command: `npm run build:root`
3. Publish directory: `dist`
4. Add `GEMINI_API_KEY` in Site Settings → Environment Variables
5. The `netlify.toml` handles redirects automatically

### Vercel
1. Import your repo to Vercel
2. Framework: Vite (auto-detected)
3. Add `GEMINI_API_KEY` in Project Settings → Environment Variables
4. The `vercel.json` handles routing automatically

### GitHub Pages
1. Enable GitHub Pages in repo Settings → Pages → Source: GitHub Actions
2. Push to `main` — the workflow auto-builds and deploys
3. Add `GEMINI_API_KEY` in repo Settings → Secrets → Actions

### GitLab Pages
1. Push to `main` — `.gitlab-ci.yml` auto-builds and deploys to Pages

---

## 🔑 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | For AI features | Google Gemini API key from [AI Studio](https://aistudio.google.com) |
| `VITE_BASE_PATH` | No (default `./`) | Base URL path — `./` for cPanel, `/` for Netlify/Vercel |

---

## 📁 Project Structure

```
academic-publishing-group/
├── public/
│   ├── .htaccess          # Apache/cPanel SPA routing + security
│   ├── favicon.svg        # Site icon
│   └── robots.txt         # SEO crawler instructions
├── components/
│   ├── Layout.tsx         # Nav, footer, search
│   ├── AIChatBox.tsx      # Gemini AI chat widget
│   └── ErrorBoundary.tsx  # Global error handler
├── context/
│   ├── AuthContext.tsx    # User auth state
│   └── ConfigurationContext.tsx  # Site settings / CMS
├── pages/                 # All route pages (40+ pages)
│   └── guidelines/        # Author guideline sub-pages
├── services/
│   ├── geminiService.ts   # Gemini AI integration
│   └── mockDb.ts          # Mock database / demo data
├── index.html             # Entry HTML with SEO meta tags
├── index.tsx              # React entry point
├── App.tsx                # Router & all routes
├── types.ts               # TypeScript interfaces
├── utils.ts               # Utility functions (cn)
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── netlify.toml           # Netlify deploy config
├── vercel.json            # Vercel deploy config
├── .gitlab-ci.yml         # GitLab CI/CD pipeline
└── .github/workflows/     # GitHub Actions pipelines
```

---

## 🔧 Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite 6** — lightning-fast dev & build
- **Tailwind CSS 3** — utility-first styling
- **React Router 7** — client-side routing (HashRouter for max compatibility)
- **Recharts 3** — data visualisations
- **Motion 12** — animations
- **Lucide React** — icons
- **Google Gemini AI** — AI summarisation, keyword suggestion, search
