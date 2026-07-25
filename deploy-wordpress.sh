#!/bin/bash

# Deploy Dean Auto WordPress theme to the live server
# Usage (from your LOCAL machine):
#   ./deploy-wordpress.sh [server-ip-or-hostname]
#
# Example:
#   ./deploy-wordpress.sh 44.203.181.228
#
# Optional env vars:
#   SERVER_USER   (default: admin)
#   REMOTE_PATH   (default: /var/www/html/wp-content/themes/deanauto)
#   SSH_KEY       (default: ~/Downloads/Lionheart.pem)

set -e

SERVER="${1:-}"
SERVER_USER="${SERVER_USER:-admin}"
REMOTE_PATH="${REMOTE_PATH:-/var/www/html/wp-content/themes/deanauto}"
SSH_KEY="${SSH_KEY:-$HOME/Downloads/Lionheart.pem}"
THEME_DIR="$(cd "$(dirname "$0")" && pwd)/wordpress/deanauto"

if [ -z "$SERVER" ]; then
  echo "❌ Usage: ./deploy-wordpress.sh [server-ip-or-hostname]"
  echo ""
  echo "Example: ./deploy-wordpress.sh 44.203.181.228"
  exit 1
fi

if [ ! -d "$THEME_DIR" ]; then
  echo "❌ Theme folder not found: $THEME_DIR"
  exit 1
fi

if [ ! -f "$SSH_KEY" ]; then
  echo "❌ SSH key not found at $SSH_KEY"
  echo "Set SSH_KEY if your PEM is elsewhere:"
  echo "  export SSH_KEY=/path/to/your/key.pem"
  exit 1
fi

chmod 600 "$SSH_KEY" 2>/dev/null || true

SSH_OPTS=(-i "$SSH_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new)
SCP_OPTS=(-i "$SSH_KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new)

echo "🚀 Deploying WordPress theme to $SERVER_USER@$SERVER:$REMOTE_PATH"
echo "   From: $THEME_DIR"
echo ""

# Ensure remote theme directory exists
ssh "${SSH_OPTS[@]}" "$SERVER_USER@$SERVER" "mkdir -p '$REMOTE_PATH'"

# Upload theme files (overwrite)
scp "${SCP_OPTS[@]}" -r \
  "$THEME_DIR"/* \
  "$SERVER_USER@$SERVER:$REMOTE_PATH/"

# Fix ownership so WordPress/Apache can read the theme
ssh "${SSH_OPTS[@]}" "$SERVER_USER@$SERVER" \
  "sudo chown -R www-data:www-data '$REMOTE_PATH' 2>/dev/null || true; sudo find '$REMOTE_PATH' -type f -exec chmod 644 {} \; 2>/dev/null || true; sudo find '$REMOTE_PATH' -type d -exec chmod 755 {} \; 2>/dev/null || true"

echo ""
echo "✅ Theme deployed."
echo "   If the site still shows old content, clear any WordPress/page cache and hard-refresh the browser."
echo "   Live site: https://deanauto.net/"
