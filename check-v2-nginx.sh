#!/bin/bash

# Script to check and update nginx for V2 site
# Run this ON your server

echo "🔍 Checking nginx configuration for V2 site..."

# Check if V2 directory exists
if [ -d "/var/www/deanauto-v2" ]; then
    echo "✅ V2 directory exists: /var/www/deanauto-v2"
    echo "   Files: $(ls -la /var/www/deanauto-v2 | head -5)"
else
    echo "❌ V2 directory not found"
fi

echo ""
echo "Current nginx config for deanauto:"
sudo cat /etc/nginx/sites-available/deanauto | grep -A 5 "location /v2" || echo "No /v2 location found"

echo ""
echo "To add V2 support, update nginx config with:"
echo "  location /v2 {"
echo "    alias /var/www/deanauto-v2;"
echo "    index index.html;"
echo "    try_files \$uri \$uri/ \$uri.html /v2/index.html;"
echo "  }"

