# Dean Auto Detailers

Mobile car detailing site for Thornton, CO and the North Denver metro.

**Live site:** [https://deanauto.net](https://deanauto.net)

Built with **Next.js** (static export) and hosted on **GitHub Pages**. Booking uses **Setmore** (`https://deanautodetailers.setmore.com`) — every Book Now / Schedule Appointment button opens that booking app.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → out/
```

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically (`.github/workflows/deploy-pages.yml`).

```bash
git add -A && git commit -m "…" && git push
```

Custom domain is set via `public/CNAME` (`deanauto.net`). DNS is managed in Cloudflare (proxied to GitHub Pages).

## Day-to-day updates

| What | Where |
|------|--------|
| Phone | `components/Navbar.tsx`, `Footer.tsx`, `StructuredData.tsx`, contact/city pages |
| Book Now / Setmore URL | `components/BookNowButton.tsx` (+ script in `app/layout.tsx`) |
| Homepage / gallery | `components/Hero.tsx`, `Gallery.tsx`, `public/images/work-*.jpg` |
| Pricing | `app/pricing/page.tsx` |
| Hours | `app/contact/page.tsx`, `components/StructuredData.tsx` |
| Services / city pages | `app/services/*`, `app/westminster`, `app/brighton`, `app/north-denver` |
| Logo | Put file in `public/images/`, update `components/Hero.tsx` (and `app/layout.tsx` for favicon) |

## Repo layout

```
app/                  # Pages (home, pricing, contact, services, city pages)
components/           # UI (Hero, Gallery, BookNowButton, etc.)
public/               # Static assets + CNAME
.github/workflows/    # GitHub Pages deploy
```
