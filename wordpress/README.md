# Dean Auto – WordPress Theme & Host Redeploy Guide

This folder is the **production WordPress theme** for [deanauto.net](https://deanauto.net).

| Path | Purpose |
|------|---------|
| `deanauto/` | Theme source (PHP, CSS, images) — deploy this to WordPress |
| `deanauto.zip` | Optional zip for WP Admin → Upload Theme |

**Day-to-day content updates** (phone, pricing, SEO): see the root [README.md](../README.md#how-to-update-the-live-site).

---

## Redeploy to another host (exact steps)

Use this when moving to a **new VPS / Lightsail / shared host**, not when only updating the existing server.

### What you need

- A server with **WordPress** installed (Apache or Nginx + PHP 8.x + MySQL/MariaDB)
- SSH access **or** WP Admin file upload
- This repo on your laptop (`wordpress/deanauto/`)
- Domain DNS you can change (for cutover)

### Current production reference (old host)

| Item | Value |
|------|--------|
| Domain | `https://deanauto.net` |
| Server IP | `44.203.181.228` |
| SSH | `admin@44.203.181.228` |
| SSH key | `~/Downloads/Lionheart.pem` |
| Theme path | `/var/www/html/wp-content/themes/deanauto` |
| Deploy script | `./deploy-wordpress.sh 44.203.181.228` from repo root |

Replace these values with the **new** host’s IP, user, key, and theme path when you migrate.

---

### Path A — New VPS / Lightsail (recommended)

#### 1. Provision the server

1. Create an Ubuntu (or similar) instance.
2. Open firewall ports **80** and **443**.
3. Install a LAMP/LEMP stack **or** a one-click WordPress image.
4. Confirm WordPress loads at `http://NEW_SERVER_IP/` (or the temporary hostname).

Typical theme directory on a standard Ubuntu install:

```text
/var/www/html/wp-content/themes/deanauto
```

Bitnami WordPress often uses:

```text
/opt/bitnami/wordpress/wp-content/themes/deanauto
# or
/bitnami/wordpress/wp-content/themes/deanauto
```

Find it on the new server:

```bash
ssh -i /path/to/key USER@NEW_SERVER_IP \
  'find /var /opt /home -path "*/wp-content/themes" -type d 2>/dev/null | head'
```

#### 2. Deploy the theme from this repo

From the **project root** on your laptop:

```bash
# Required: new host IP/hostname
export SSH_KEY=/path/to/new-server.pem   # or .pem for Lightsail
export SERVER_USER=ubuntu                # or admin / bitnami — match your image
export REMOTE_PATH=/var/www/html/wp-content/themes/deanauto

./deploy-wordpress.sh NEW_SERVER_IP
```

What the script does:

1. Creates `$REMOTE_PATH` if missing  
2. Uploads everything from `wordpress/deanauto/` (PHP, CSS, `images/`)  
3. Sets ownership/permissions (`www-data` when available)

If `scp` fails with “Permission denied” on the theme folder, upload to `/tmp` then move with `sudo`:

```bash
KEY=~/Downloads/your-key.pem
USER=ubuntu
HOST=NEW_SERVER_IP
THEME=/var/www/html/wp-content/themes/deanauto

scp -i "$KEY" -o IdentitiesOnly=yes -r wordpress/deanauto "$USER@$HOST:/tmp/deanauto-theme"
ssh -i "$KEY" -o IdentitiesOnly=yes "$USER@$HOST" "
  sudo mkdir -p '$THEME'
  sudo rsync -a /tmp/deanauto-theme/ '$THEME/'
  sudo chown -R www-data:www-data '$THEME'
  sudo find '$THEME' -type f -exec chmod 644 {} \;
  sudo find '$THEME' -type d -exec chmod 755 {} \;
"
```

#### 3. Activate the theme in WordPress

1. Open `https://NEW_SERVER_IP/wp-admin/` (or the temp domain).
2. **Appearance → Themes** → activate **Dean Auto**.
3. If it doesn’t appear, confirm files exist under `wp-content/themes/deanauto/style.css`.

#### 4. WordPress settings checklist

| Setting | Value |
|---------|--------|
| **Settings → General → Site Title** | `Dean Auto Detailers` |
| **Settings → General → WordPress Address / Site Address** | Your real domain once DNS points here (e.g. `https://deanauto.net`) |
| **Settings → Reading** | Static page → Homepage = **Home** |
| **Settings → Permalinks** | **Post name** → Save |

#### 5. Pages & templates

Create (or confirm) these pages. After theme activation, `deanauto_ensure_seo_pages()` in `functions.php` will auto-create Services + city pages if missing — reload any admin page once to trigger it, or visit the site front-end.

| Page title | Slug / URL | Template |
|------------|------------|----------|
| Home | (front page) | Front page via Settings → Reading |
| About | `/about/` | About |
| Pricing | `/pricing/` | Pricing |
| Contact | `/contact/` | Contact |
| Services (parent) | `/services/` | Default |
| Interior Detailing | `/services/interior/` | Interior Detailing |
| Exterior Detailing | `/services/exterior/` | Exterior Detailing |
| Ceramic Coating | `/services/ceramic-coating/` | Ceramic Coating |
| Westminster | `/westminster/` | Service Area City |
| Brighton | `/brighton/` | Service Area City |
| North Denver | `/north-denver/` | Service Area City |

Assign templates under **Page → Template** (right sidebar).

#### 6. Pricing packages

1. In WP Admin, open **Pricing Packages** (custom post type from the theme).
2. If empty, use the admin notice **Create default packages** / **Reset packages to current pricing**,  
   **or** visit:  
   `wp-admin/edit.php?post_type=deanauto_package` and use the seeded link.
3. Confirm packages: Interior, Exterior, Full Detail, Polish, Ceramic Coating with “From $…” prices.

#### 7. Recommended plugins

| Plugin | Why |
|--------|-----|
| **Yoast SEO** (or Rank Math) | Theme feeds titles/descriptions via `wpseo_*` filters |
| **Really Simple SSL** (optional) | Forces HTTPS after certs |
| Backup plugin (optional) | Snapshots before big changes |

Install Yoast, then hard-refresh the homepage and confirm `<title>` looks like:  
`Mobile Car Detailing Thornton CO | Dean Auto Detailers`.

#### 8. SSL certificate

On the new server (example with Certbot + Nginx):

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y   # or certbot python3-certbot-apache
sudo certbot --nginx -d deanauto.net -d www.deanauto.net
```

Use Apache’s plugin if that’s your stack. Confirm https:// loads without warnings.

#### 9. Point DNS at the new host

At your DNS provider:

| Record | Name | Value |
|--------|------|--------|
| A | `@` | `NEW_SERVER_IP` |
| A | `www` | `NEW_SERVER_IP` (or CNAME → `@`) |

Wait for DNS (often minutes; up to 48h). Then in WP Admin set **Settings → General** URLs to `https://deanauto.net`.

#### 10. Smoke test after cutover

- [ ] Homepage hero + “Schedule Appointment” button readable  
- [ ] Phone shows **(720) 532-3072** and `tel:+17205323072` works  
- [ ] Book Now opens Setmore  
- [ ] `/pricing/` shows packages  
- [ ] `/services/interior/`, `/exterior/`, `/ceramic-coating/` load  
- [ ] `/westminster/`, `/brighton/`, `/north-denver/` load  
- [ ] `/contact/` shows map + phone  
- [ ] View source: LocalBusiness / `AutomotiveBusiness` JSON-LD present  
- [ ] Mobile nav shows click-to-call  

#### 11. Point future deploys at the new host

Update how you deploy from the laptop:

```bash
export SSH_KEY=/path/to/new-key.pem
export SERVER_USER=ubuntu          # new host user
export REMOTE_PATH=/var/www/html/wp-content/themes/deanauto

./deploy-wordpress.sh NEW_SERVER_IP
```

Optionally edit defaults in `deploy-wordpress.sh` (comments at top) so you don’t need exports every time. Also update the “Server & access” table in the root [README.md](../README.md).

---

### Path B — Shared hosting / cPanel (no SSH)

1. Zip the theme folder **from inside** `wordpress/` so the archive root is `deanauto/`:

```bash
cd wordpress
zip -r deanauto.zip deanauto -x "*.DS_Store"
```

2. WP Admin → **Appearance → Themes → Add New → Upload Theme** → upload `deanauto.zip` → Install → Activate.  
3. Follow steps **4–10** above (settings, pages, pricing, Yoast, SSL via host panel, DNS).  
4. Later theme updates: re-zip and upload again, or use SFTP into `wp-content/themes/deanauto/`.

---

### Path C — Move the whole existing site (database + files)

Use this to clone **content and Pricing Packages** from the current host instead of rebuilding pages.

1. On the **old** server (or via a backup plugin), export:
   - Full database (phpMyAdmin / `wp db export` / host backup)
   - `wp-content/uploads/` (media)
   - Confirm theme is already in this git repo (`wordpress/deanauto/`)
2. On the **new** host, install WordPress, import the database, copy `uploads/`.
3. Deploy the latest theme from git (Path A step 2) so code is current.
4. Update URLs in the database (old domain → new, or IP → domain):

```bash
# On new server, if WP-CLI is available:
sudo -u www-data wp --path=/var/www/html search-replace \
  'https://deanauto.net' 'https://NEW_DOMAIN_OR_TEMP_URL' --all-tables
```

Or use the **Better Search Replace** plugin carefully.
5. Complete SSL + DNS (Path A steps 8–10).

---

## Theme contents

- `style.css` – theme header + all styles  
- `functions.php` – phone, Setmore URL, SEO/Yoast filters, LocalBusiness schema, Pricing Packages CPT, auto page seeding  
- `header.php` / `footer.php` – nav (with click-to-call) and footer  
- `front-page.php` – homepage  
- Page templates: About, Pricing, Contact, Interior, Exterior, Ceramic Coating, Service Area City  
- `images/` – logos, gallery, products, pricing card assets  

### Booking (Setmore)

```php
// functions.php
function deanauto_book_url() {
	return 'https://deanautodetailers.setmore.com';
}
```

### Phone number

```php
function deanauto_phone_display() { return '(720) 532-3072'; }
function deanauto_phone_tel()     { return '+17205323072'; }
```

Deploy `functions.php` after changes.

### Images checklist

Theme expects files under `deanauto/images/`:

- Hero: `deanauto3.png`  
- Products: `product-adams-graphene.jpg`, `product-adams-polish.jpg`, `product-adams-shampoo.jpg`, `product-adams-interior.jpg`, `product-koch-wax.jpg`, `product-ps-xpress.jpg`  
- Gallery: `gallery-1.jpg` … `gallery-6.jpg`  
- Interior pricing card: `interior-glistening-dash.jpg` (and others referenced in Customizer CSS)

Sync from Next.js assets if needed:

```bash
cp -r public/images/* wordpress/deanauto/images/
```

### Pricing card header images (Additional CSS)

On production, card backgrounds may live in **Appearance → Customize → Additional CSS** (URLs under `/wp-content/themes/deanauto/images/...`). After a host move, either:

- Re-paste that CSS in Customizer on the new site, or  
- Rely on theme templates if you migrate fully to `page-pricing.php` media helpers  

---

## Fresh install only (no migration)

1. Install WordPress on the host.  
2. Deploy/upload theme (`./deploy-wordpress.sh` or zip).  
3. Activate theme → set Site Title, Reading, Permalinks.  
4. Let SEO page seeder create service/city pages; create Home/About/Pricing/Contact if needed.  
5. Seed Pricing Packages.  
6. Install Yoast.  
7. SSL + DNS.  

---

## Differences from the Next.js app

- Live site is **WordPress**, not the Next.js `out/` export.  
- Styles are plain CSS in `style.css` (no Tailwind).  
- SEO titles/meta are theme + Yoast; schema is in `functions.php`.  
- Next.js under `app/` / `components/` is optional for local preview; do **not** use `./deploy.sh` for the live WordPress site.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Theme missing after deploy | Check `REMOTE_PATH`; confirm `style.css` exists; fix ownership `www-data` |
| White Schedule Appointment button | Ensure latest `style.css` deployed; hard-refresh; bump style version in `functions.php` |
| Wrong titles (`Home - Dean Auto…`) | Install/activate Yoast; theme uses `wpseo_title` filters |
| 404 on `/services/interior/` | Settings → Permalinks → Save; confirm parent **Services** page exists |
| Permission denied on scp | Upload to `/tmp`, `sudo` copy into theme path (see Path A step 2) |
| Old phone/email still showing | Grep theme for helpers; clear any page cache / Cloudflare cache |

---

## Related files in this repo

| File | Role |
|------|------|
| [../README.md](../README.md) | Day-to-day updates + current production SSH details |
| [../deploy-wordpress.sh](../deploy-wordpress.sh) | Theme deploy script (SSH/SCP) |
| [../DEPLOYMENT.md](../DEPLOYMENT.md) | Legacy Next.js/Lightsail static deploy — **not** the live WordPress path |
