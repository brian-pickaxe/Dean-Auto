#!/bin/bash

# Deployment script for Dean Auto website to AWS Lightsail
# Usage: ./deploy.sh [server-ip-or-hostname]
# This script should be run from your LOCAL machine, not on the server

set -e

SERVER="${1:-your-server-ip-or-hostname}"
SERVER_USER="${SERVER_USER:-ubuntu}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/deanauto}"
SSH_KEY="${SSH_KEY:-$HOME/Downloads/Deanauto.pem}"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed or not in PATH"
    echo ""
    echo "This script should be run on your LOCAL machine where you develop the site."
    echo "It will build the site locally and then upload to your server."
    echo ""
    echo "If you're on macOS, install Node.js from: https://nodejs.org/"
    echo "Or use Homebrew: brew install node"
    exit 1
fi

# Check if SSH key exists
if [ ! -f "$SSH_KEY" ]; then
    echo "❌ Error: SSH key not found at $SSH_KEY"
    echo ""
    echo "Please ensure your PEM file exists, or set SSH_KEY environment variable:"
    echo "  export SSH_KEY=/path/to/your/key.pem"
    exit 1
fi

# Set proper permissions on SSH key
chmod 600 "$SSH_KEY" 2>/dev/null || true

echo "🚀 Building the site..."
npm run build

echo "📦 Creating deployment archive..."
cd out
tar -czf ../deploy.tar.gz .
cd ..

echo "📤 Uploading to server..."
scp -i "$SSH_KEY" deploy.tar.gz ${SERVER_USER}@${SERVER}:/tmp/

echo "🔧 Extracting and deploying on server..."
ssh -i "$SSH_KEY" ${SERVER_USER}@${SERVER} << EOF
  # Create directory with proper permissions
  sudo mkdir -p ${REMOTE_PATH}
  sudo chown -R ${SERVER_USER}:${SERVER_USER} ${REMOTE_PATH}
  
  # Extract to a temp location first
  mkdir -p /tmp/deanauto-deploy
  tar -xzf /tmp/deploy.tar.gz -C /tmp/deanauto-deploy
  
  # Move files with sudo
  sudo cp -r /tmp/deanauto-deploy/* ${REMOTE_PATH}/
  
  # Set proper ownership and permissions
  sudo chown -R www-data:www-data ${REMOTE_PATH}
  sudo chmod -R 755 ${REMOTE_PATH}
  
  # Remove conflicting directories (Next.js creates both .html and dirs; avoid 403 on /about, /contact, /pricing)
  sudo rm -rf ${REMOTE_PATH}/about ${REMOTE_PATH}/contact ${REMOTE_PATH}/pricing
  
  # Cleanup
  rm -rf /tmp/deanauto-deploy /tmp/deploy.tar.gz
  
  # Reload nginx
  sudo systemctl reload nginx
EOF

echo "🧹 Cleaning up..."
rm deploy.tar.gz

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at http://${SERVER}"
