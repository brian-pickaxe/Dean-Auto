#!/bin/bash

# Script to rollback nginx configuration
# Run this ON your server

set -e

echo "🔄 Rolling back nginx configuration..."

# Find the most recent backup
BACKUP=$(ls -t /etc/nginx/sites-available/deanauto.backup.* 2>/dev/null | head -1)

if [ -z "$BACKUP" ]; then
    echo "❌ No backup found!"
    echo ""
    echo "Creating a simple working config..."
    
    # Create a basic working config
    sudo tee /etc/nginx/sites-available/deanauto > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name _;

    root /var/www/deanauto;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    location /_next/static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
EOF
else
    echo "📦 Found backup: $BACKUP"
    echo "🔄 Restoring from backup..."
    sudo cp "$BACKUP" /etc/nginx/sites-available/deanauto
    echo "✅ Backup restored"
fi

echo "🧪 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuration is valid"
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx
    echo "✅ Nginx rolled back successfully!"
    echo "🌐 Site should be working normally now"
else
    echo "❌ Configuration test failed!"
    echo "Please check the error above and fix manually"
    exit 1
fi

