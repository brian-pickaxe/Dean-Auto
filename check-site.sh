#!/bin/bash

# Script to check why site might be down
# Run this ON your server

echo "🔍 Diagnosing site issues..."

echo ""
echo "1. Checking nginx status:"
sudo systemctl status nginx --no-pager | head -10

echo ""
echo "2. Checking if nginx is listening on port 80:"
sudo netstat -tulpn | grep :80 || sudo ss -tulpn | grep :80

echo ""
echo "3. Checking if site files exist:"
ls -la /var/www/deanauto/ | head -10

echo ""
echo "4. Checking file permissions:"
ls -ld /var/www/deanauto

echo ""
echo "5. Checking nginx error log (last 20 lines):"
sudo tail -20 /var/log/nginx/error.log

echo ""
echo "6. Checking nginx access log (last 10 lines):"
sudo tail -10 /var/log/nginx/access.log

echo ""
echo "7. Testing if we can read index.html:"
if [ -f /var/www/deanauto/index.html ]; then
    echo "✅ index.html exists"
    head -5 /var/www/deanauto/index.html
else
    echo "❌ index.html NOT FOUND!"
fi

echo ""
echo "8. Checking firewall/security groups:"
echo "   (Make sure port 80 is open in AWS Lightsail)"

echo ""
echo "9. Testing local connection:"
curl -I http://localhost 2>&1 | head -5

echo ""
echo "🔧 If nginx is not running, try:"
echo "   sudo systemctl start nginx"
echo "   sudo systemctl enable nginx"

