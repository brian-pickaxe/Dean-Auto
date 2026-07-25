#!/bin/bash

# Manual deployment script - builds locally, you upload manually
# Usage: ./deploy-manual.sh

set -e

echo "🚀 Building the site..."
npm run build

echo "📦 Creating deployment archive..."
cd out
tar -czf ../deploy.tar.gz .
cd ..

echo ""
echo "✅ Build complete!"
echo ""
echo "📤 To deploy, run these commands:"
echo ""
echo "1. Upload the archive:"
echo "   scp deploy.tar.gz ubuntu@98.81.72.23:/tmp/"
echo ""
echo "2. SSH to server and extract:"
echo "   ssh ubuntu@98.81.72.23"
echo "   sudo mkdir -p /var/www/deanauto"
echo "   sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/deanauto"
echo "   sudo chown -R www-data:www-data /var/www/deanauto"
echo "   sudo chmod -R 755 /var/www/deanauto"
echo "   sudo systemctl reload nginx"
echo "   rm /tmp/deploy.tar.gz"
echo ""
echo "Or use SFTP/FTP client to upload the contents of the 'out' folder to /var/www/deanauto/"

