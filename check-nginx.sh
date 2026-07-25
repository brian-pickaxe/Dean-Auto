#!/bin/bash

# Script to check and fix nginx configuration
# Run this ON your server

echo "🔍 Checking nginx configuration..."

echo ""
echo "1. Checking if site files exist:"
ls -la /var/www/deanauto/ | head -10

echo ""
echo "2. Checking nginx sites:"
ls -la /etc/nginx/sites-enabled/

echo ""
echo "3. Checking nginx configuration:"
sudo nginx -t

echo ""
echo "4. Current nginx status:"
sudo systemctl status nginx --no-pager | head -10

echo ""
echo "5. Checking default site (if exists):"
if [ -f /etc/nginx/sites-enabled/default ]; then
    echo "⚠️  Default site is still enabled!"
    echo "   You may want to disable it: sudo rm /etc/nginx/sites-enabled/default"
else
    echo "✅ Default site is disabled"
fi

