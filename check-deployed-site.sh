#!/bin/bash

# Script to check deployed site files
# Run this ON your server

echo "🔍 Checking deployed site..."

echo ""
echo "1. Checking if index.html exists:"
ls -lh /var/www/deanauto/index.html

echo ""
echo "2. Checking _next/static directory:"
ls -la /var/www/deanauto/_next/static/ 2>/dev/null | head -10 || echo "❌ _next/static not found!"

echo ""
echo "3. Checking file permissions:"
ls -ld /var/www/deanauto
ls -ld /var/www/deanauto/_next 2>/dev/null || echo "❌ _next directory missing!"

echo ""
echo "4. Checking nginx error log for recent errors:"
sudo tail -20 /var/log/nginx/error.log | grep -i error || echo "No recent errors in nginx log"

echo ""
echo "5. Testing if files are accessible:"
curl -I http://localhost/ 2>&1 | head -5
curl -I http://localhost/_next/static/ 2>&1 | head -5

echo ""
echo "6. Checking if Setmore script is in HTML:"
grep -i "setmore" /var/www/deanauto/index.html | head -2 || echo "Setmore script not found in HTML"

