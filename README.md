# Muthu Bala Sudhan M — Portfolio

A terminal/IDE-inspired developer portfolio built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Single accent (phosphor
green) on warm neutrals, smooth light/dark mode, scroll-triggered motion, and a
signature vim/tmux-style status bar with a live "sessions monitored" ticker — a
nod to the real-time telemetry work behind Neo Browser.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

Requires Node 18.17+ (developed on Node 22).

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # root layout, SEO/OpenGraph metadata, theme-flash script
│  ├─ page.tsx          # assembles the sections + footer
│  ├─ globals.css       # design tokens (light/dark) + terminal styling
│  ├─ icon.svg          # favicon
│  ├─ sitemap.ts        # /sitemap.xml
│  └─ robots.ts         # /robots.txt
├─ components/
│  ├─ layout/           # Header (active-aware nav), StatusBar, ThemeToggle
│  ├─ sections/         # Hero, About, Experience, Projects, Skills, Education, Contact
│  └─ ui/               # Section, TerminalWindow, Typewriter, Reveal
└─ lib/
   ├─ data.ts           # ← ALL content lives here (edit this to update the site)
   └─ hooks/            # useTheme, useActiveSection (scroll-spy)
```

**To edit content, you almost always only need `src/lib/data.ts`.**

---

## Things you need to fill in (`TODO`s)

All are grep-able with `TODO` and centralized in `src/lib/data.ts` unless noted:

| What | Where |
| --- | --- |
| Your GitHub profile URL | `socials.github` in `src/lib/data.ts` |
| Résumé PDF | drop a file at `public/resume.pdf` (linked as `/resume.pdf`) |
| Real projects #2 and #3 | `projects[]` in `src/lib/data.ts` (names, tags, links, copy) |
| Formspree endpoint (optional) | `FORMSPREE_ENDPOINT` in `src/lib/data.ts` |
| Deployed domain | `siteUrl` in `layout.tsx`, `baseUrl` in `sitemap.ts` / `robots.ts` |

**Neo Browser** is intentionally shipped without public demo/repo links — it's
proprietary internal work, so the card shows a "not public" note instead.

### Contact form

The form works with **zero configuration** — with no `FORMSPREE_ENDPOINT` set it
opens the visitor's mail client pre-addressed to you. To collect submissions
in-page instead, create a free [Formspree](https://formspree.io) form and paste
its endpoint into `FORMSPREE_ENDPOINT`.

---

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Next.js** — no configuration needed. Click
   **Deploy**.
4. After the first deploy, copy your `*.vercel.app` URL (or a custom domain) and
   update `siteUrl` / `baseUrl` in `layout.tsx`, `sitemap.ts`, and `robots.ts`
   so SEO/OpenGraph metadata points at the live site, then redeploy.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## Design & accessibility notes

- **One accent, two themes.** Colors are CSS custom properties in `globals.css`;
  Tailwind references them, so light/dark is a single `data-theme` swap with no
  duplicated classes. Theme is persisted to `localStorage` and applied before
  paint (no flash).
- **Accessible by default.** Semantic landmarks, a skip link, ARIA labels,
  visible keyboard focus rings, `aria-current` on the active nav item, and
  `prefers-reduced-motion` is honored globally.
- **SEO.** Title/description/OpenGraph/Twitter metadata, `sitemap.xml`, and
  `robots.txt` are generated from your data.
- **Performance.** Fully static output, self-hosted Google fonts via
  `next/font`, ~129 kB first-load JS.

> Tip: run Lighthouse (Chrome DevTools → Lighthouse) against the **production**
> build (`npm run build && npm run start`), not `npm run dev`.
