# Dean Auto Detailers

Website for **Dean Auto Detailers** — mobile car detailing in Thornton, CO and the North Denver metro (Westminster, Brighton, and surrounding areas).

**Live site:** [https://deanauto.net](https://deanauto.net)

The production site runs on **WordPress**. This repo also includes a Next.js version used as a design/content reference.

| Stack | Path | Role |
|-------|------|------|
| **WordPress theme (live)** | `wordpress/deanauto/` | What powers [deanauto.net](https://deanauto.net) |
| Next.js (optional / reference) | `app/`, `components/` | Local preview & content parity |

---

## How to update the live site

### Quick reference

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
│   ├── README.md                 # Theme install & page templates
│   └── deanauto/                 # LIVE WordPress theme
│       ├── functions.php         # Phone, booking URL, SEO, schema, pricing CPT
│       ├── style.css
│       ├── header.php / footer.php
│       ├── front-page.php
│       ├── page-pricing.php
│       ├── page-contact.php
│       ├── page-about.php
│       ├── page-interior.php
│       ├── page-exterior.php
│       ├── page-ceramic-coating.php
│       ├── page-service-area.php # Westminster / Brighton / North Denver
│       └── images/
├── app/                          # Next.js pages (reference)
├── components/                   # Next.js components
├── public/images/                # Next.js static images
├── deploy-wordpress.sh           # Deploy theme → 44.203.181.228
└── deploy.sh                     # Legacy Next.js static deploy (not primary)
```

---

## Server & access

| Item | Value |
|------|--------|
| Live URL | https://deanauto.net |
| WP Admin | https://deanauto.net/wp-admin/ |
| Server IP | `44.203.181.228` |
| SSH | `admin@44.203.181.228` with `~/Downloads/Lionheart.pem` |
| Theme path | `/var/www/html/wp-content/themes/deanauto` |

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
