# Division Flow — Next.js SaaS & Startup Template

Modern **Next.js 16 (App Router)** + **TypeScript** template for SaaS, software, and technology marketing sites. Demo content lives in the `data/` folder so buyers can replace text, URLs, and images without hunting through JSX.

## Requirements

- **Node.js** 20.x or newer (LTS recommended)
- **npm** 10+ (or **pnpm** / **yarn** if you adapt lockfiles)

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.production` to your real domain (see `.env.example`).

## Folder overview

| Path | Purpose |
|------|---------|
| `app/` | Routes, layouts, and `metadata` exports |
| `components/` | UI components (blog, shop, portfolio, header, etc.) |
| `data/` | Demo strings, navigation, blog posts, shop catalog—**edit here first** |
| `public/assets/` | Images, theme CSS, icons |
| `documentation/` | Extra HTML documentation for marketplace reviewers |

## Scripts

- `npm run dev` — development server  
- `npm run build` — optimized production build  
- `npm run start` — run production server locally  
- `npm run lint` — ESLint  

## Replace demo media (important for launch)

Demo **YouTube** and **SoundCloud** URLs are placeholders only. Before publishing your client site or a live preview:

1. Update `videoUrl` / `video.src` in `data/blog.ts` and `data/blog-post-detail.ts` with URLs you have rights to use.  
2. Update `audio.src` in `data/blog-post-detail.ts` with your own track or a properly licensed embed.  
3. Replace images under `public/assets/` if you are not licensed for the bundled stock art.

## Third-party credits (summary)

Bundled libraries include **Next.js**, **React**, **Bootstrap**, **Swiper**, **AOS**, **Isotope Layout**, **imagesLoaded**, **react-player**, **react-inner-image-zoom**, **Sonner**, and **Sass**. See `documentation/index.html` for a longer credits section suitable for marketplace submission.

## License

This item is sold under **Envato Market** license terms. Redistribution of the source files outside those terms is not permitted. Third-party open-source libraries retain their respective licenses (see each package on npm).

## Support

Replace `package.json` → `"author"` with your support contact before publishing. For ThemeForest, point buyers to your profile or support system as required by Envato.
