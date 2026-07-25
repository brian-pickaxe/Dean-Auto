# Dean Auto – WordPress Theme

This folder contains the **live WordPress theme** for [deanauto.net](https://deanauto.net).

**How to update the site day-to-day** (admin edits, deploy commands, phone/pricing/SEO): see the root [README.md](../README.md#how-to-update-the-live-site).

Deploy from the project root:

```bash
./deploy-wordpress.sh 44.203.181.228
```

## What’s included

- **Theme: `deanauto`** (inside the `deanauto/` subfolder)
  - `style.css` – theme info and all styles (no Tailwind; plain CSS)
  - `functions.php` – theme setup and Setmore script
  - `header.php` / `footer.php` – global header and footer
  - `front-page.php` – home page (hero, about, services, products, testimonials, gallery)
  - **Page templates** (assign in WordPress Page → Attributes → Template):
    - **About** – About Dean Auto
    - **Pricing** – pricing packages and Book Now
    - **Contact** – email, phone, hours, service-area map
    - **Interior Detailing** – service page
    - **Exterior Detailing** – service page
    - **Ceramic Coating** – service page
    - **Service Area City** – Westminster / Brighton / North Denver landing pages

## Installation

### 1. Install WordPress

- On your server (e.g. Lightsail), install WordPress (e.g. via Bitnami, or manual install).
- Or use any host that supports WordPress (Bluehost, SiteGround, WordPress.com, etc.).

### 2. Install the theme

- Zip the **`deanauto`** folder (the one that contains `style.css`, `functions.php`, etc.). The zip should contain `deanauto/style.css`, `deanauto/functions.php`, etc., not an extra parent folder.
- In WordPress: **Appearance → Themes → Add New → Upload Theme** → upload the zip → **Install** → **Activate**.

### 3. Copy images

The theme expects images in `deanauto/images/` (inside the theme folder).

- From your **Next.js project**, copy everything from `public/images/` into the theme’s `images` folder:
  - On your machine, from the project root:
    ```bash
    cp -r public/images/* wordpress/deanauto/images/
    ```
  - If your hero logo is `deanauto3.jpeg` (not `.png`), either rename it to `deanauto3.png` in `wordpress/deanauto/images/` or edit `front-page.php` and change `deanauto3.png` to `deanauto3.jpeg`.
- Required for the front page:
  - Hero: `deanauto3.png` (or `deanauto3.jpeg` if you change the template)
  - Products: `product-adams-graphene.jpg`, `product-adams-polish.jpg`, `product-adams-shampoo.jpg`, `product-adams-interior.jpg`, `product-koch-wax.jpg`, `product-ps-xpress.jpg`
  - Gallery: `gallery-1.jpg` … `gallery-6.jpg`

If you don’t copy them, the front page will have broken images until you add these files (or replace with your own).

### 4. Create pages and assign templates

Create these **Pages** in WordPress and set the **Template** (in the right sidebar under “Page attributes” or “Template”):

| Page title   | Slug (URL)        | Template              |
|-------------|-------------------|------------------------|
| Home        | (front page)      | Use as “Front page” in Settings → Reading |
| About       | `about`           | About                  |
| Pricing     | `pricing`         | Pricing                |
| Contact     | `contact`         | Contact                |
| Interior Detailing | `services/interior` | Interior Detailing |
| Exterior Detailing | `services/exterior` | Exterior Detailing |
| Ceramic Coating    | `services/ceramic-coating` | Ceramic Coating |
| Westminster        | `westminster`     | Service Area City      |
| Brighton           | `brighton`        | Service Area City      |
| North Denver       | `north-denver`    | Service Area City      |

- **Home:** Create a page titled “Home” (or any title). Go to **Settings → Reading** and set “Your homepage displays” to **A static page**, then choose that page as “Homepage”.
- **Service URLs:** For `/services/interior/`, create a **Page** with slug `interior` and **Parent** page “Services” (create a parent page “Services” with slug `services` if you want that URL structure). Then assign the “Interior Detailing” template to the `interior` page. Repeat for `exterior` and `ceramic-coating` under `services`.
- On the live site, these pages are created automatically by `deanauto_ensure_seo_pages()` in `functions.php` if missing.

### 5. Set the site name

In **Settings → General**, set **Site Title** to **Dean Auto Detailers** so the header matches the business name.

### 6. Permalinks

Go to **Settings → Permalinks** and choose **Post name** (or another structure you prefer), then **Save**. This keeps URLs like `/about/`, `/pricing/`, `/contact/`, `/services/interior/`.

## Booking (Setmore)

The theme loads the Setmore script and links “Book Now” to:

**https://deanautodetailers.setmore.com**

To change this URL, edit `wordpress/deanauto/functions.php` and update the return value of the `deanauto_book_url()` function, then deploy (see root README).

## Phone number

Change both helpers in `functions.php`:

- `deanauto_phone_display()` — e.g. `(720) 532-3072`
- `deanauto_phone_tel()` — e.g. `+17205323072`

Then deploy `functions.php`.

## Differences from the Next.js site

- **No Tailwind** – All layout and styling are in `style.css` (plain CSS).
- **No Framer Motion** – Animations are omitted; layout and content match.
- **Images** – Served from the theme folder (`/wp-content/themes/deanauto/images/`). You can later move them to the Media Library and change the template/image paths if you prefer.
- **SEO** – Theme sets titles/meta via filters that work with **Yoast SEO**; LocalBusiness schema is output from `functions.php`.
- **Footer credit** – “Hosted and SEO by milehighinternet.com” is in `footer.php`; edit that file to change or remove it.

## Migrating from the current (Next.js) site

1. Install WordPress and this theme as above.
2. Create all pages and assign templates.
3. Copy images into `deanauto/images/`.
4. Point your domain to the new WordPress install (e.g. change DNS or server config).
5. Optionally set up redirects from old URLs (e.g. `/v2/`, `/about`) to the new WordPress URLs.

You can keep the Next.js site running on a subdomain or subfolder until you’re ready to switch over.
