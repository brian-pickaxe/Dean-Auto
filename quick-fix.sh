#!/bin/bash

# Quick fix script - run on server

echo "🔧 Quick nginx fix..."

# 1. Check nginx status
echo "1. Checking nginx status..."
if ! sudo systemctl is-active --quiet nginx; then
    echo "   ⚠️  Nginx is not running. Starting it..."
    sudo systemctl start nginx
    sudo systemctl enable nginx
else
    echo "   ✅ Nginx is running"
fi

# 2. Restart nginx to apply any config changes
echo "2. Restarting nginx..."
sudo systemctl restart nginx

# 3. Check status
echo "3. Nginx status:"
sudo systemctl status nginx --no-pager | head -10

# 4. Test HTTP (port 80)
echo ""
echo "4. Testing HTTP on port 80:"
curl -I http://localhost 2>&1 | head -5

# 5. Check if files exist
echo ""
echo "5. Checking site files:"
if [ -f /var/www/deanauto/index.html ]; then
    echo "   ✅ index.html exists"
    echo "   File size: $(du -h /var/www/deanauto/index.html | cut -f1)"
else
    echo "   ❌ index.html NOT FOUND!"
    echo "   Run: ./deploy.sh 98.81.72.23"
fi

# 6. Check what's listening on port 80
echo ""
echo "6. Checking port 80:"
sudo netstat -tulpn | grep :80 || sudo ss -tulpn | grep :80

echo ""
echo "✅ Done! If nginx is running and files exist, site should work."
echo "   Test from browser: http://98.81.72.23"

