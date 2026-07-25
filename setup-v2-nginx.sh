#!/bin/bash

# Script to update nginx to serve V2 site at /v2
# Run this ON your server

set -e

echo "🔧 Updating nginx configuration for V2 site..."

# Backup current config
sudo cp /etc/nginx/sites-available/deanauto /etc/nginx/sites-available/deanauto.backup.$(date +%Y%m%d_%H%M%S)

# Create updated config
sudo tee /etc/nginx/sites-available/deanauto > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name _;

    # Main site
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
        try_files $uri $uri/ $uri.html /index.html;
    }

    # V2 site on /v2 path
    location /v2 {
        alias /var/www/deanauto-v2;
        index index.html;
        try_files $uri $uri/ $uri.html /v2/index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js static files for main site
    location /_next/static {
        root /var/www/deanauto;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js static files for V2 site
    location /v2/_next/static {
        alias /var/www/deanauto-v2/_next/static;
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

echo "🧪 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuration is valid"
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx
    echo "✅ Nginx updated successfully!"
    echo "🌐 V2 site should now be available at: http://your-domain/v2"
else
    echo "❌ Configuration test failed. Restoring backup..."
    sudo cp /etc/nginx/sites-available/deanauto.backup.* /etc/nginx/sites-available/deanauto
    echo "Backup restored. Please check the configuration manually."
    exit 1
fi

