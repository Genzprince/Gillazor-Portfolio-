# Quick Reference Card

## 🚀 Commands

```bash
# Setup
cd gillax-frontend-only
npm install

# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build for production (creates 'dist' folder)
npm run preview      # Preview production build
```

## 📝 Update Content

| What to Update | File to Edit |
|----------------|--------------|
| Contact info | `src/data/config.json` |
| Services | `src/data/config.json` |
| Pricing packages | `src/data/config.json` |
| Portfolio items | `src/data/projects.json` |
| Client reviews | `src/data/reviews.json` |
| Site name/tagline | `src/data/config.json` |

## 🌐 Deploy

### Netlify (Easiest)
1. `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist` folder
4. Done!

### Vercel
1. Push to GitHub
2. Import on vercel.com
3. Auto-deploys

### GitHub Pages
1. `npm run build`
2. Push `dist` to `gh-pages` branch
3. Enable in settings

## 🔧 Contact Form Setup

1. Visit https://web3forms.com
2. Get free access key
3. Edit `src/pages/ContactPage.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` (line 15)

## 📁 Project Structure

```
src/
├── data/           ← Edit these JSON files
│   ├── config.json
│   ├── projects.json
│   └── reviews.json
├── pages/          ← Page components
├── components/     ← Reusable components
└── App.jsx         ← Main app
```

## 💡 Tips

- Always validate JSON at jsonlint.com
- Test locally before deploying
- Keep backups of JSON files
- Use high-quality images (1920x1080)
- YouTube thumbnails: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`

## 🆘 Help

- Full docs: `README.md`
- Setup guide: `SETUP.md`
- Content guide: `CONTENT-GUIDE.md`
- Comparison: `COMPARISON.md`

## 📧 Contact

Email: gillaxediting@gmail.com
Instagram: @gilla_edit
