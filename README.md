# Dean Auto Detailers

Website for **Dean Auto Detailers** — mobile car detailing in Thornton, CO and the North Denver metro (Westminster, Brighton, and surrounding areas).

**Live site:** [https://deanauto.net](https://deanauto.net)

| Stack | Path | Role |
|-------|------|------|
| **Next.js static site (GitHub Pages)** | `app/`, `components/`, `public/` | Production site hosted on GitHub |
| WordPress theme (legacy) | `wordpress/deanauto/` | Previous host — keep as archive / fallback |

**Booking:** All “Book Now” / “Schedule Appointment” buttons open **Setmore** (`https://deanautodetailers.setmore.com`) via the official Setmore script. That booking app does **not** depend on WordPress — it works on GitHub Pages.

---

## Host on GitHub Pages (leave WordPress)

The site builds to a static `out/` folder (`output: "export"`). GitHub Actions deploys it on every push to `main`.

### 1. Enable GitHub Pages on the repo

1. Open https://github.com/brian-pickaxe/Dean-Auto/settings/pages  
2. Under **Build and deployment → Source**, choose **GitHub Actions**  
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually)

Workflow file: `.github/workflows/deploy-pages.yml`

### 2. Point `deanauto.net` DNS at GitHub

In your DNS provider (where the domain is registered), set:

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `brian-pickaxe.github.io` |

`public/CNAME` already contains `deanauto.net` so GitHub serves the custom domain.

After DNS propagates (often minutes, sometimes up to 48h):

1. Repo **Settings → Pages → Custom domain** → confirm `deanauto.net`  
2. Enable **Enforce HTTPS** once the certificate is ready  

### 3. Cut over from WordPress

1. Confirm https://brian-pickaxe.github.io/Dean-Auto/ **or** the custom domain loads and **Book Now** opens Setmore  
2. Switch DNS as above (this is the live cutover)  
3. Keep the old WordPress server running a few days as backup, then shut it down when satisfied  

### 4. Day-to-day updates (after GitHub Pages is live)

| What to change | Where | How it goes live |
|----------------|-------|------------------|
| Phone number | `components/Navbar.tsx`, `Footer.tsx`, `StructuredData.tsx`, contact/city pages | Push to `main` |
| Book Now / Setmore URL | `components/BookNowButton.tsx` (+ `app/layout.tsx` script) | Push to `main` |
| Homepage / gallery | `components/Hero.tsx`, `Gallery.tsx`, `public/images/work-*.jpg` | Push to `main` |
| Pricing | `app/pricing/page.tsx` | Push to `main` |
| Hours | `app/contact/page.tsx`, `components/StructuredData.tsx` | Push to `main` |
| Services / city pages | `app/services/*`, `app/westminster`, `app/brighton`, `app/north-denver` | Push to `main` |

```bash
npm run dev          # local preview http://localhost:3000
npm run build        # writes static site to out/
git add -A && git commit -m "…" && git push
# Actions builds + deploys automatically
```

---

## Legacy: WordPress host updates

> Only needed if you still run the old WordPress server before DNS cutover.

### Quick reference (WordPress)

| What you want to change | Where to edit | How it goes live |
|-------------------------|---------------|------------------|
| Phone number | `wordpress/deanauto/functions.php` → `deanauto_phone_display()` / `deanauto_phone_tel()` | Deploy theme (see below) |
| Book Now / Setmore URL | `wordpress/deanauto/functions.php` → `deanauto_book_url()` | Deploy theme |
| Homepage hero, services, gallery | `wordpress/deanauto/front-page.php` | Deploy theme |
| Pricing packages & prices | WP Admin → **Pricing Packages** | Saves immediately (no deploy) |
| Pricing card header images | WP Admin → **Appearance → Customize → Additional CSS** (or theme `images/` + CSS) | Saves immediately / deploy images |
| About / Contact copy | `page-about.php` / `page-contact.php` **or** WP page content | Deploy theme (for templates) |
| Service pages (interior, exterior, ceramic) | `page-interior.php`, `page-exterior.php`, `page-ceramic-coating.php` | Deploy theme |
| City pages (Westminster, Brighton, North Denver) | `page-service-area.php` | Deploy theme |
| Styles (buttons, layout, colors) | `wordpress/deanauto/style.css` | Deploy theme (bump version in `functions.php` if cached) |
| Images (gallery, products, logos) | `wordpress/deanauto/images/` | Deploy / SCP images to server |
| SEO titles & meta descriptions | `deanauto_seo_meta_for_request()` in `functions.php` (feeds Yoast) | Deploy theme |

### Option A — Update content in WordPress Admin (no code)

1. Log in: [https://deanauto.net/wp-admin/](https://deanauto.net/wp-admin/)
2. Common edits:
   - **Pages** → edit About, Contact, etc. (plain page content)
   - **Pricing Packages** → change titles, “From $…” prices, features, order
   - **Appearance → Customize → Additional CSS** → pricing card background images
   - **Media → Add New** → upload photos, then use them in pages or CSS
3. Click **Update** / **Publish**. Changes are live immediately.

### Option B — Edit the theme in this repo, then deploy

1. Edit files under `wordpress/deanauto/` on your laptop.
2. Deploy to the live server (**AWS Lightsail / EC2**):

```bash
# From the project root
./deploy-wordpress.sh 44.203.181.228
```

Defaults:

- **Server:** `44.203.181.228`
- **SSH user:** `admin`
- **SSH key:** `~/Downloads/Lionheart.pem`
- **Remote theme path:** `/var/www/html/wp-content/themes/deanauto`

If your key or user differs:

```bash
export SSH_KEY=/path/to/your.pem
export SERVER_USER=admin
./deploy-wordpress.sh 44.203.181.228
```

3. Hard-refresh the browser (Cmd+Shift+R) if styles look cached.  
   After CSS changes, bump the style version in `functions.php`:

```php
wp_enqueue_style( 'deanauto-style', get_stylesheet_uri(), array(), '1.3.2' ); // increase this
```

#### Deploy a single file (quick fix)

```bash
SERVER=44.203.181.228
KEY=~/Downloads/Lionheart.pem
THEME=/var/www/html/wp-content/themes/deanauto

scp -i "$KEY" -o IdentitiesOnly=yes wordpress/deanauto/functions.php admin@$SERVER:/tmp/
ssh -i "$KEY" -o IdentitiesOnly=yes admin@$SERVER \
  "sudo cp /tmp/functions.php $THEME/functions.php && sudo chown www-data:www-data $THEME/functions.php"
```

Replace `functions.php` with whatever file you changed (e.g. `style.css`, `front-page.php`).

#### Upload a new image

```bash
SERVER=44.203.181.228
KEY=~/Downloads/Lionheart.pem
IMG=wordpress/deanauto/images/your-new-photo.jpg

scp -i "$KEY" -o IdentitiesOnly=yes "$IMG" admin@$SERVER:/tmp/
ssh -i "$KEY" -o IdentitiesOnly=yes admin@$SERVER \
  "sudo mv /tmp/your-new-photo.jpg /var/www/html/wp-content/themes/deanauto/images/ && \
   sudo chown www-data:www-data /var/www/html/wp-content/themes/deanauto/images/your-new-photo.jpg && \
   sudo chmod 644 /var/www/html/wp-content/themes/deanauto/images/your-new-photo.jpg"
```

Then point CSS/templates at that filename.

---

## Redeploy to another host

Moving the whole site to a **new VPS / Lightsail / shared host** is documented step-by-step here:

**→ [wordpress/README.md](wordpress/README.md#redeploy-to-another-host-exact-steps)**

That guide covers:

1. Installing WordPress on the new server  
2. Deploying the theme (`./deploy-wordpress.sh` or zip upload)  
3. Settings, pages/templates, Pricing Packages, Yoast  
4. SSL + DNS cutover  
5. Optional full DB/media migration from the current host  
6. Pointing future deploys at the new IP/user/key  

Quick theme-only deploy to a new host:

```bash
export SSH_KEY=/path/to/new-host.pem
export SERVER_USER=ubuntu          # or admin / bitnami
export REMOTE_PATH=/var/www/html/wp-content/themes/deanauto
./deploy-wordpress.sh NEW_SERVER_IP
```

Then activate **Dean Auto** under Appearance → Themes and finish the checklist in `wordpress/README.md`.

> Note: [DEPLOYMENT.md](DEPLOYMENT.md) describes the **legacy Next.js static** Lightsail flow. The live site is WordPress — use `deploy-wordpress.sh` + `wordpress/README.md` for production.

---

## Common updates (cheat sheet)

### Change the phone number

Edit **one place** in the theme:

```php
// wordpress/deanauto/functions.php
function deanauto_phone_display() {
	return '(720) 532-3072';
}
function deanauto_phone_tel() {
	return '+17205323072';
}
```

Deploy `functions.php`. Nav, footer, contact, hero CTAs, schema, and SEO meta all use these helpers.

Also update Next.js copies if you keep that stack in sync: `components/Navbar.tsx`, `components/Footer.tsx`, `components/StructuredData.tsx`, city/contact pages under `app/`.

### Change Booking (Setmore) link

```php
// wordpress/deanauto/functions.php
function deanauto_book_url() {
	return 'https://deanautodetailers.setmore.com';
}
```

### Update pricing packages

1. WP Admin → **Pricing Packages**
2. Edit each package (Interior, Exterior, Full Detail, Polish, Ceramic Coating)
3. Update title, price (“From $…”), features, and menu order
4. Save — live immediately

Extra services shown below the cards are defined in `deanauto_get_extra_services()` in `functions.php` (requires theme deploy if you change them).

### Update homepage sections

Edit `wordpress/deanauto/front-page.php`:

- Hero headline / CTAs
- About blurb
- Service cards
- Product list
- Testimonials
- Gallery image alts / paths

### Update SEO titles & descriptions

Edit the map in `deanauto_seo_meta_for_request()` inside `functions.php`.  
Yoast SEO is installed on production; these filters feed Yoast so titles stay correct.

---

## Local development

### WordPress theme

There is no local WP stack required for most edits — change files in `wordpress/deanauto/` and deploy. For a full local WordPress install, copy the `deanauto` theme into a local `wp-content/themes/` folder and activate it. See [wordpress/README.md](wordpress/README.md) for templates and page setup.

### Next.js (optional)

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
```

---

## Project structure

```
DeanAuto/
├── wordpress/
│   ├── README.md                 # Theme + REDEPLOY TO NEW HOST guide
│   └── deanauto/                 # LIVE WordPress theme
│       ├── functions.php         # Phone, booking URL, SEO, schema, pricing CPT
│       ├── style.css
│       ├── header.php / footer.php
│       ├── front-page.php
│       ├── page-*.php            # Pricing, contact, services, city pages
│       └── images/
├── app/                          # Next.js pages (reference)
├── components/                   # Next.js components
├── public/images/                # Next.js static images
├── deploy-wordpress.sh           # Deploy theme via SSH (any host)
├── DEPLOYMENT.md                 # Legacy Next.js static deploy (not live site)
└── deploy.sh                     # Legacy Next.js static deploy script
```

---

## Server & access (current production)

Update this table when you move hosts.

| Item | Value |
|------|--------|
| Live URL | https://deanauto.net |
| WP Admin | https://deanauto.net/wp-admin/ |
| Server IP | `44.203.181.228` |
| SSH | `admin@44.203.181.228` with `~/Downloads/Lionheart.pem` |
| Theme path | `/var/www/html/wp-content/themes/deanauto` |
| Redeploy docs | [wordpress/README.md](wordpress/README.md#redeploy-to-another-host-exact-steps) |

---

## Features (live WordPress site)

- Mobile-first responsive layout
- Homepage with services, products, testimonials, gallery
- Pricing Packages custom post type + extras
- Service pages (interior, exterior, ceramic coating)
- City landing pages for local SEO
- Click-to-call phone links
- Setmore “Book Now” booking
- Yoast-compatible SEO titles/meta + LocalBusiness schema

---

## License

All rights reserved.
