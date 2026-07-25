#!/usr/bin/env node

/**
 * Post-build script to fix favicon paths in HTML files for V2 site
 * This ensures favicon paths include the /v2 basePath
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, 'out');

function fixFaviconPaths(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixFaviconPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace favicon paths that don't start with /v2
      content = content.replace(
        /href="\/images\/deanauto\.png"/g,
        'href="/v2/images/deanauto.png"'
      );
      
      // Also fix apple-touch-icon
      content = content.replace(
        /href="\/images\/deanauto\.png"/g,
        'href="/v2/images/deanauto.png"'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed favicon paths in: ${filePath}`);
    }
  }
}

if (fs.existsSync(outDir)) {
  console.log('Fixing favicon paths for V2 site...');
  fixFaviconPaths(outDir);
  console.log('✅ Favicon paths fixed!');
} else {
  console.error('❌ out directory not found. Run npm run build first.');
  process.exit(1);
}

