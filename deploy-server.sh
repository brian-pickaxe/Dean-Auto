#!/bin/bash

# Server-side deployment script
# This script is for deploying when you've already uploaded the code to the server
# Run this ON the server after uploading the project files

set -e

REMOTE_PATH="${REMOTE_PATH:-/var/www/deanauto}"

# Check Node.js version
NODE_VERSION=$(node -v 2>/dev/null | cut -d'v' -f2 | cut -d'.' -f1 || echo "0")
REQUIRED_VERSION=20

if ! command -v node &> /dev/null || [ "$NODE_VERSION" -lt "$REQUIRED_VERSION" ]; then
    echo "❌ Node.js version 20+ is required (current: $(node -v 2>/dev/null || echo 'not installed'))"
    echo "Installing Node.js 20.x..."
    
    # Remove old Node.js if exists
    sudo apt-get remove -y nodejs npm 2>/dev/null || true
    
    # Install Node.js 20.x (required for Next.js 16)
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    
    echo "✅ Node.js $(node -v) and npm $(npm -v) installed"
fi

echo "🚀 Installing dependencies..."
npm install

echo "🚀 Building the site..."
npm run build

echo "🔧 Deploying files..."
sudo mkdir -p ${REMOTE_PATH}
sudo cp -r out/* ${REMOTE_PATH}/
sudo chown -R www-data:www-data ${REMOTE_PATH}
sudo chmod -R 755 ${REMOTE_PATH}

echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Your site should be live"

