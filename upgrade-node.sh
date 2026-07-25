#!/bin/bash

# Script to upgrade Node.js to version 20 on the server
# Run this ON your server: bash upgrade-node.sh

set -e

echo "🔄 Upgrading Node.js to version 20..."

# Remove old Node.js
sudo apt-get remove -y nodejs npm 2>/dev/null || true

# Clean up
sudo apt-get autoremove -y

# Install Node.js 20.x (required for Next.js 16)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "✅ Node.js $(node -v) and npm $(npm -v) installed"
echo ""
echo "You can now run: ./deploy-server.sh"

