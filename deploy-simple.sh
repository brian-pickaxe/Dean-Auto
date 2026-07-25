#!/bin/bash

# Simple deployment script - uploads to temp location then moves with sudo
# Usage: ./deploy-simple.sh [server-ip-or-hostname]

set -e

SERVER="${1:-your-server-ip-or-hostname}"
SERVER_USER="${SERVER_USER:-ubuntu}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/deanauto}"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed or not in PATH"
    echo "This script should be run on your LOCAL machine where you develop the site."
    exit 1
fi

echo "🚀 Building the site..."
npm run build

echo "📦 Creating deployment archive..."
cd out
tar -czf ../deploy.tar.gz .
cd ..

echo "📤 Uploading to server (to /tmp)..."
scp deploy.tar.gz ${SERVER_USER}@${SERVER}:/tmp/deploy.tar.gz

echo "🔧 Extracting and deploying on server..."
ssh ${SERVER_USER}@${SERVER} << 'DEPLOY_SCRIPT'
  REMOTE_PATH="/var/www/deanauto"
  
  # Create directory if it doesn't exist
  sudo mkdir -p ${REMOTE_PATH}
  
  # Extract to temp location
  TEMP_DIR=$(mktemp -d)
  tar -xzf /tmp/deploy.tar.gz -C ${TEMP_DIR}
  
  # Remove old files (keep directory structure)
  sudo rm -rf ${REMOTE_PATH}/*
  
  # Copy new files with sudo
  sudo cp -r ${TEMP_DIR}/* ${REMOTE_PATH}/
  
  # Set proper ownership and permissions
  sudo chown -R www-data:www-data ${REMOTE_PATH}
  sudo chmod -R 755 ${REMOTE_PATH}
  
  # Cleanup
  rm -rf ${TEMP_DIR} /tmp/deploy.tar.gz
  
  # Reload nginx
  sudo systemctl reload nginx
  
  echo "✅ Files deployed successfully"
DEPLOY_SCRIPT

echo "🧹 Cleaning up local files..."
rm deploy.tar.gz

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at http://${SERVER}"

