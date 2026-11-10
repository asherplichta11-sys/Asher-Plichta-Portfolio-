# Asher Plichta: portfolio

Asher Plichta's personal site: IT intern at Highview Baptist Church (four summers), live sports production, church IT and AV, and podcast and media work. Built with Next.js (App Router), React, TypeScript, Tailwind CSS and Motion.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Checks

Run these before shipping:

```bash
npx tsc --noEmit   # or: npm run typecheck
npm run lint
npm run build
```

## Where things live

- **All the words** are in `src/content/site.ts`: name, email, skills, experience, projects and contact topics. Edit there, not in the pages.
- **Colors** are the Studio Red palette from Coolors: https://coolors.co/0b090a-161a1d-660708-a4161a-ba181b-e5383b-b1a7a6-d3d3d3-f5f3f4-ffffff. They're set as tokens in `src/app/globals.css`. The default is "inverted" (white background, black text, red accents); "original" is the dark version.
- **Icons and share image**: `src/app/icon.svg`, `src/app/apple-icon.png`, `src/app/opengraph-image.png` (and its alt text). `robots.txt` and `sitemap.xml` come from `src/app/robots.ts` and `src/app/sitemap.ts`. `public/llms.txt` is a plain summary for AI assistants.
- **Security headers** are in `next.config.ts`.

## The Look panel (temporary)

There's a small "Look" panel on every page for trying font pairs and the two color schemes. Your pick is saved in the browser. You can also share a look with a link:

- `?font=scoreboard` (or `broadcast`, `control-room`, `tall`, `slab`, `original`)
- `?scheme=light` (inverted) or `?scheme=dark` (original)

For example: `/?font=broadcast&scheme=dark`.

Once Asher picks a look:

1. Set `DEFAULT_FONT` and `DEFAULT_SCHEME` in `src/lib/look.ts`.
2. Remove `<LookPicker />` from `src/app/layout.tsx` and delete the `LookPicker` component.
3. Delete the unused fonts from `src/app/fonts.ts` (and their CSS in `globals.css`), so only the chosen pair downloads.

## Motion

Animations use [Motion](https://motion.dev) (the `motion` package, imported from `motion/react`). They respect the visitor's "reduce motion" setting.

## Deploy

Deploy on [Vercel](https://vercel.com): import the repo, keep the defaults, and deploy. Until there's a custom domain, links and the sitemap use Vercel's production URL automatically. Once there's a domain, add an environment variable `SITE_URL` (for example `https://asherplichta.com`, no trailing slash) in the Vercel project settings and redeploy.
