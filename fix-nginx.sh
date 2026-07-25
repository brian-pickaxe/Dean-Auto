#!/bin/bash

# Emergency nginx fix script
# Run this ON your server

set -e

echo "🔧 Emergency nginx fix..."

# Check nginx status
echo "📊 Checking nginx status..."
sudo systemctl status nginx --no-pager | head -10 || true

# Check for syntax errors
echo ""
echo "🧪 Testing current config..."
sudo nginx -t 2>&1 || true

# Create a minimal working config
echo ""
echo "📝 Creating minimal working configuration..."
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

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;
}
EOF

# Test the config
echo ""
echo "🧪 Testing new configuration..."
if sudo nginx -t; then
    echo "✅ Configuration is valid"
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx || sudo systemctl restart nginx
    echo "✅ Nginx should be working now"
    
    # Check status
    echo ""
    echo "📊 Nginx status:"
    sudo systemctl status nginx --no-pager | head -5
else
    echo "❌ Configuration still has errors"
    echo "Checking nginx error log:"
    sudo tail -20 /var/log/nginx/error.log
    exit 1
fi

