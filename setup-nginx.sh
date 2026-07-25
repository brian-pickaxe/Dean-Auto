#!/bin/bash

# Script to set up nginx configuration on the server
# Run this ON your server: bash setup-nginx.sh

set -e

echo "🔧 Setting up nginx configuration..."

# Create the nginx config file
sudo tee /etc/nginx/sites-available/deanauto > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name _;

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

# Enable the site
sudo ln -sf /etc/nginx/sites-available/deanauto /etc/nginx/sites-enabled/

# Disable default site if it exists
if [ -f /etc/nginx/sites-enabled/default ]; then
    sudo rm /etc/nginx/sites-enabled/default
    echo "✅ Disabled default nginx site"
fi

# Test configuration
echo "🧪 Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Nginx configured successfully!"
echo "🌐 Your site should now be live at http://98.81.72.23"

