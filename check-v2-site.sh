#!/bin/bash

# Script to check V2 site files
# Run this ON your server

echo "🔍 Checking V2 site deployment..."

echo ""
echo "1. Checking if V2 index.html exists:"
ls -lh /var/www/deanauto-v2/index.html 2>/dev/null || echo "❌ index.html not found!"

echo ""
echo "2. Checking _next/static directory for V2:"
ls -la /var/www/deanauto-v2/_next/static/ 2>/dev/null | head -10 || echo "❌ _next/static not found!"

echo ""
echo "3. Checking file permissions:"
ls -ld /var/www/deanauto-v2
ls -ld /var/www/deanauto-v2/_next 2>/dev/null || echo "❌ _next directory missing!"

echo ""
echo "4. Checking if Products component is referenced:"
grep -i "products\|adam" /var/www/deanauto-v2/index.html | head -5 || echo "No Products references found"

echo ""
echo "5. Testing V2 site locally:"
curl -I http://localhost/v2 2>&1 | head -5

echo ""
echo "6. Checking nginx V2 location config:"
sudo grep -A 5 "location /v2" /etc/nginx/sites-available/deanauto || echo "❌ No /v2 location found in nginx config!"

echo ""
echo "7. Checking for JavaScript errors in HTML:"
grep -i "script\|error" /var/www/deanauto-v2/index.html | head -3

