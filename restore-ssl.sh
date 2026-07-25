#!/bin/bash

# Script to restore SSL configuration
# Run this ON your server

set -e

echo "🔒 Restoring SSL configuration..."

# Check if SSL certificates exist
if [ -d "/etc/letsencrypt/live" ]; then
    echo "✅ SSL certificates found"
    ls -la /etc/letsencrypt/live/
    
    # Get the domain name from the certificate (only directories, not files)
    DOMAIN=$(ls -d /etc/letsencrypt/live/*/ 2>/dev/null | head -1 | sed 's|/etc/letsencrypt/live/||' | sed 's|/$||')
    
    if [ -z "$DOMAIN" ] || [ "$DOMAIN" = "" ]; then
        echo "❌ Could not detect domain from certificates"
        echo "   Available certificates:"
        ls -d /etc/letsencrypt/live/*/ 2>/dev/null | sed 's|/etc/letsencrypt/live/||' | sed 's|/$||'
        exit 1
    fi
    
    echo "📋 Detected domain: $DOMAIN"
else
    echo "❌ No SSL certificates found"
    echo "   You may need to run: ./setup-ssl.sh your-domain.com"
    exit 1
fi

# Create nginx config with SSL
echo "📝 Creating nginx config with SSL..."

sudo tee /etc/nginx/sites-available/deanauto > /dev/null << EOF
# HTTP - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    # Redirect all HTTP to HTTPS
    return 301 https://\$server_name\$request_uri;
}

# HTTPS - Main site
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;

    root /var/www/deanauto;
    index index.html;

    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Main location
    location / {
        try_files \$uri \$uri/ \$uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js static files
    location /_next/static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 404 handling
    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
EOF

echo "🧪 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Configuration is valid"
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx
    echo "✅ SSL configuration restored!"
    echo "🌐 Site should be available at: https://$DOMAIN"
else
    echo "❌ Configuration test failed!"
    echo "Check the error above"
    exit 1
fi

