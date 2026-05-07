# Quick Setup Guide

## Step 1: Install Dependencies
```bash
cd gillax-frontend-only
npm install
```

## Step 2: Configure Contact Form
1. Visit https://web3forms.com
2. Enter your email to get a free access key
3. Open `src/pages/ContactPage.jsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key (line 15)

## Step 3: Update Your Content
Edit these files in `src/data/`:
- `config.json` - Your contact info, services, packages
- `projects.json` - Your portfolio items
- `reviews.json` - Client testimonials

## Step 4: Run Locally
```bash
npm run dev
```
Visit http://localhost:3000

## Step 5: Deploy

### Option A: Netlify (Easiest)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag & drop the `dist` folder
4. Done! Your site is live

### Option B: Vercel
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy automatically

### Option C: GitHub Pages
1. Run `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Updating Content Later

1. Edit JSON files in `src/data/`
2. Run `npm run build`
3. Re-deploy (drag & drop to Netlify or push to GitHub)

That's it! No backend, no database, no complexity.
