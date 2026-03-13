# 🔥 YT Trending — YouTube Trending Videos Explorer

A full-featured YouTube Trending page built with **Astro**, featuring:

- 🌍 Region switcher (20 countries, default: India)
- 🏷️ Category filters (Music, Gaming, News, Sports, etc.)
- 🎬 In-app video playback via iframe popup (no redirect!)
- 📊 Visit analytics dashboard
- 🌓 Dark / Light theme
- 📱 Fully responsive
- ⚡ Fast skeleton loading
- 🔢 Trending rank badges
- 📅 Sort by views, likes, comments, or date

---

## Setup

### 1. Get a YouTube Data API v3 Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project → Enable **YouTube Data API v3**
3. Create credentials → **API Key**
4. (Optional) Restrict key to YouTube Data API

### 2. Install & Run

```bash
npm install
npm run dev
```

Open `http://localhost:4321` → enter your API key in the banner → start exploring!

### 3. Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
  layouts/
    Layout.astro         # Header, modals (video + analytics), theme toggle
  pages/
    index.astro          # Main trending page with all filters & logic
  lib/
    analytics.js         # Visit tracking helpers
    data.js              # Region/category constants, formatters
  styles/
    global.css           # CSS variables, dark/light theme
```

## Features

| Feature | Details |
|---|---|
| Regions | 20 countries, default India (IN) |
| Categories | 12 categories via YouTube API |
| Video popup | Embedded iframe, no redirect |
| Analytics | Total visits, today, weekly chart, region/category history |
| Theme | Dark (default) / Light, persisted in localStorage |
| API key | Saved to localStorage, clearable |
| Sort | Trending / Views / Likes / Comments / Newest |
| View | Grid / List toggle |
| Results | 25 or 50 per load |
