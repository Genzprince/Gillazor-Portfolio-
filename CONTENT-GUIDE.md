# Content Management Guide

## How to Update Your Website Content

All website content is stored in JSON files in the `src/data/` folder. Simply edit these files and rebuild to update your site.

---

## 1. Update Contact Information

**File:** `src/data/config.json`

```json
{
  "contact": {
    "email": "your-email@example.com",
    "phone": "+919646028153",
    "instagram": "your_instagram",
    "youtube": "@your_channel",
    "website": "https://yoursite.com/",
    "whatsappMessage": "Hi! I'm interested in your services."
  }
}
```

---

## 2. Add/Edit Services

**File:** `src/data/config.json`

```json
{
  "services": [
    {
      "id": 1,
      "title": "Service Name",
      "description": "Brief description",
      "icon": "🎮",
      "features": ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]
}
```

**Available Emojis:** 🎮 📚 ✨ 🎬 🎨 💡 🚀 ⚡ 🔥 💎

---

## 3. Update Pricing Packages

**File:** `src/data/config.json`

```json
{
  "packages": [
    {
      "id": 1,
      "name": "Basic",
      "price": "₹999",
      "duration": "Up to 5 min video",
      "features": ["Feature 1", "Feature 2"],
      "popular": false
    }
  ]
}
```

Set `"popular": true` to highlight a package.

---

## 4. Add Portfolio Projects

**File:** `src/data/projects.json`

```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "category": "gaming",
    "youtubeLink": "https://www.youtube.com/embed/VIDEO_ID",
    "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg"
  }
]
```

**Categories:** gaming, education, motion, 3d, commercial, music

**Get YouTube Thumbnail:**
- Format: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Replace VIDEO_ID with your video's ID

---

## 5. Add Client Reviews

**File:** `src/data/reviews.json`

```json
[
  {
    "id": 1,
    "name": "Client Name",
    "role": "Their Role/Title",
    "review": "Their testimonial text here",
    "rating": 5,
    "platform": "YouTube",
    "avatar": "CN"
  }
]
```

**Avatar:** Use 2-letter initials (e.g., "JD" for John Doe)

---

## 6. Update Site Information

**File:** `src/data/config.json`

```json
{
  "site": {
    "name": "GillaX",
    "tagline": "Professional Video Editing Services",
    "description": "Transform your content with professional video editing"
  }
}
```

---

## After Making Changes

1. Save all JSON files
2. Run: `npm run build`
3. Deploy the new `dist` folder

**For Netlify:** Just drag & drop the new `dist` folder
**For Vercel/GitHub:** Push changes and it auto-deploys

---

## Tips

✅ Always validate JSON syntax (use jsonlint.com)
✅ Keep IDs unique and sequential
✅ Use high-quality images (1920x1080 recommended)
✅ Test locally with `npm run dev` before deploying
✅ Keep backups of your JSON files

---

## Need Help?

- JSON Validator: https://jsonlint.com
- Image Hosting: https://imgur.com or https://cloudinary.com
- YouTube Embed: Replace `watch?v=` with `embed/` in URL
