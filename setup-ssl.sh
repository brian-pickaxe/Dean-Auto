#!/bin/bash

# Script to set up SSL/HTTPS with Let's Encrypt
# Usage: ./setup-ssl.sh your-domain.com
# Run this ON your server

set -e

if [ -z "$1" ]; then
    echo "❌ Error: Domain name required"
    echo "Usage: ./setup-ssl.sh your-domain.com"
    exit 1
fi

DOMAIN="$1"
EMAIL="${SSL_EMAIL:-your-email@example.com}"

echo "🔒 Setting up SSL for $DOMAIN..."

# Install Certbot if not already installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    sudo apt-get update
    sudo apt-get install -y certbot python3-certbot-nginx
fi

# Update nginx config to include domain name
echo "📝 Updating nginx configuration..."
sudo tee /etc/nginx/sites-available/deanauto > /dev/null << EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    root /var/www/deanauto;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Main location
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js static files
    location /_next/static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 404 handling
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
EOF

# Test nginx config
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Get SSL certificate
echo "🔐 Obtaining SSL certificate from Let's Encrypt..."
echo "📧 Using email: $EMAIL"
echo ""

sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL --redirect

echo ""
echo "✅ SSL certificate installed successfully!"
echo "🌐 Your site is now available at:"
echo "   https://$DOMAIN"
echo "   https://www.$DOMAIN"
echo ""
echo "📋 Certificate will auto-renew. To test renewal:"
echo "   sudo certbot renew --dry-run"

