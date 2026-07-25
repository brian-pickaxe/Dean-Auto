# Deployment Guide for AWS Lightsail

This guide will help you deploy the Dean Auto website to an AWS Lightsail instance.

## Prerequisites

- AWS Lightsail instance running Ubuntu (or similar Linux distribution)
- SSH access to your server
- Domain name (optional, but recommended)

## Step 1: Initial Server Setup

### 1.1 Connect to your Lightsail instance

```bash
ssh ubuntu@your-server-ip
```

### 1.2 Update the system

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Install Nginx

```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 1.4 Create website directory

```bash
sudo mkdir -p /var/www/deanauto
sudo chown -R $USER:$USER /var/www/deanauto
```

## Step 2: Configure Nginx

### 2.1 Copy the nginx configuration

On your local machine, edit `nginx.conf` and replace:
- `your-domain.com` with your actual domain name
- Or use your server's IP address if you don't have a domain

### 2.2 Upload and install the configuration

```bash
# From your local machine
scp nginx.conf ubuntu@your-server-ip:/tmp/deanauto.conf

# On the server
ssh ubuntu@your-server-ip
sudo mv /tmp/deanauto.conf /etc/nginx/sites-available/deanauto
sudo ln -s /etc/nginx/sites-available/deanauto /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Remove default site if desired
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

## Step 3: Deploy the Website

### 3.1 Make the deployment script executable

```bash
chmod +x deploy.sh
```

### 3.2 Edit the deployment script

Open `deploy.sh` and update:
- `SERVER_USER` (default is `ubuntu`, change if different)
- `REMOTE_PATH` (default is `/var/www/deanauto`)

### 3.3 Run the deployment

```bash
./deploy.sh your-server-ip-or-hostname
```

Or set environment variables:

```bash
export SERVER_USER=ubuntu
export REMOTE_PATH=/var/www/deanauto
./deploy.sh your-server-ip
```

## Step 4: Set Up SSL with Let's Encrypt (Free SSL)

### 4.1 Prerequisites

- Your domain must point to your server's IP address (A record)
- Port 80 and 443 must be open in Lightsail firewall

### 4.2 Quick Setup (Automated)

Upload and run the SSL setup script:

```bash
# From your local machine
scp setup-ssl.sh ubuntu@your-server-ip:/home/ubuntu/

# SSH to server
ssh ubuntu@your-server-ip

# Run the setup (replace with your domain)
chmod +x setup-ssl.sh
export SSL_EMAIL=your-email@example.com  # Optional, will prompt if not set
./setup-ssl.sh your-domain.com
```

The script will:
- Install Certbot if needed
- Update nginx configuration
- Obtain SSL certificate from Let's Encrypt
- Configure automatic HTTPS redirect
- Set up auto-renewal

### 4.3 Manual Setup

If you prefer to set it up manually:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will:
# - Ask for your email
# - Ask you to agree to terms
# - Automatically configure nginx for HTTPS
# - Set up automatic renewal
```

### 4.4 Verify SSL

After setup, your site will be available at:
- `https://your-domain.com` (secure)
- `http://your-domain.com` (automatically redirects to HTTPS)

Test the certificate:
```bash
sudo certbot certificates
```

### 4.5 Auto-Renewal

Certbot automatically sets up renewal. Test it:
```bash
sudo certbot renew --dry-run
```

Certificates expire every 90 days, but Certbot renews them automatically.

## Step 5: Configure Firewall

### 5.1 Open ports in Lightsail

In the AWS Lightsail console:
1. Go to your instance
2. Click on "Networking" tab
3. Add firewall rules:
   - HTTP (port 80)
   - HTTPS (port 443) - if using SSL

### 5.2 Configure UFW (if enabled)

```bash
sudo ufw allow 'Nginx Full'
sudo ufw status
```

## Site at root (V2 moved to root)

The main site is now built for the root URL (https://deanauto.net). Deploy with:

```bash
./deploy.sh your-server-ip
```

This builds without a basePath and deploys to `/var/www/deanauto`. To have old `/v2` links redirect to the root (e.g. `/v2/about` → `/about`), use the root-only Nginx config:

```bash
# On your machine: copy the root-only config to the server
scp -i "$HOME/Downloads/Deanauto.pem" nginx-root-only.conf ubuntu@your-server-ip:/tmp/

# On the server
sudo cp /tmp/nginx-root-only.conf /etc/nginx/sites-available/deanauto
sudo nginx -t && sudo systemctl reload nginx
```

The config in `nginx-root-only.conf` serves the site from `/var/www/deanauto` and redirects `/v2` and `/v2/*` to `/` and `/*`.

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Build the site locally
npm run build

# 2. Upload the out folder
scp -r out/* ubuntu@your-server-ip:/var/www/deanauto/

# 3. Set permissions on server
ssh ubuntu@your-server-ip
sudo chown -R www-data:www-data /var/www/deanauto
sudo chmod -R 755 /var/www/deanauto
sudo systemctl reload nginx
```

## Troubleshooting

### Check Nginx status
```bash
sudo systemctl status nginx
```

### Check Nginx error logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### Test Nginx configuration
```bash
sudo nginx -t
```

### Check file permissions
```bash
ls -la /var/www/deanauto
```

## Updating the Site

To update the site after making changes:

1. Make your changes locally
2. Run `./deploy.sh your-server-ip` again
3. The script will rebuild and redeploy automatically

## Domain Configuration

If you're using a domain:

1. Point your domain's A record to your Lightsail instance's static IP
2. Update the `server_name` in the nginx configuration
3. Reload nginx: `sudo systemctl reload nginx`

## Performance Tips

- Enable CloudFlare or similar CDN for better performance
- Consider using AWS CloudFront for global distribution
- Monitor your Lightsail instance's resources

## Backup

Before deploying, consider backing up the current site:

```bash
ssh ubuntu@your-server-ip
sudo tar -czf /tmp/deanauto-backup-$(date +%Y%m%d).tar.gz /var/www/deanauto
```

