# V2 Site Setup - Adam's Polishes Version

This guide explains how to set up the second version of the site that highlights Adam's Polishes products.

## What's Different in V2?

The V2 version includes:
- **New Products Section** - Showcases Adam's Polishes products we use
- **Updated Services** - Mentions Adam's Polishes in service descriptions
- **Updated About Section** - Highlights our partnership with Adam's Polishes
- **Product Links** - Direct links to Adam's Polishes website

## Deployment Options

### Option 1: Deploy to Subdirectory (/v2)

1. **Deploy the V2 site:**
   ```bash
   ./deploy-v2.sh 98.81.72.23
   ```

2. **Update nginx configuration:**
   ```bash
   # Upload the nginx config
   scp -i ~/Downloads/Deanauto.pem nginx-v2.conf ubuntu@98.81.72.23:/tmp/
   
   # SSH to server
   ssh -i ~/Downloads/Deanauto.pem ubuntu@98.81.72.23
   
   # Backup current config
   sudo cp /etc/nginx/sites-available/deanauto /etc/nginx/sites-available/deanauto.backup
   
   # Update config
   sudo mv /tmp/nginx-v2.conf /etc/nginx/sites-available/deanauto
   
   # Test and reload
   sudo nginx -t
   sudo systemctl reload nginx
   ```

3. **Access the sites:**
   - Main site: `http://98.81.72.23/`
   - V2 site: `http://98.81.72.23/v2`

### Option 2: Deploy to Subdomain (e.g., adams.deanauto.com)

1. **Set up DNS:**
   - Add A record: `adams` → `98.81.72.23`

2. **Create nginx config for subdomain:**
   ```bash
   # On server, create new config
   sudo nano /etc/nginx/sites-available/deanauto-v2
   ```

   Paste this configuration:
   ```nginx
   server {
       listen 80;
       listen [::]:80;
       server_name adams.deanauto.com;

       root /var/www/deanauto-v2;
       index index.html;

       location / {
           try_files $uri $uri/ $uri.html /index.html;
       }

       location /_next/static {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **Enable the site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/deanauto-v2 /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Deploy:**
   ```bash
   ./deploy-v2.sh 98.81.72.23
   ```

## Updating the V2 Site

To update the V2 site after making changes:

```bash
./deploy-v2.sh 98.81.72.23
```

The script automatically:
- Builds the site
- Uploads to `/var/www/deanauto-v2`
- Sets proper permissions
- Reloads nginx

## Features

### Products Section
- Showcases 4 main product categories from Adam's Polishes
- Direct links to product pages
- Professional presentation with icons

### Updated Content
- Services mention Adam's Polishes products
- About section highlights premium products
- Clear branding and partnership messaging

## Notes

- Both sites can run simultaneously
- V2 uses the same codebase, just with different content highlighting
- You can customize which products to feature in `components/Products.tsx`
- All links point to adamspolishes.com

