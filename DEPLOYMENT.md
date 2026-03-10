# GitHub Pages Deployment Guide

This personal resume website is optimized for GitHub Pages deployment.

## Quick Deployment Steps

### 1. Prepare Your Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Personal resume website"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

### 2. Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This will create a `dist` folder with optimized static files.

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose the branch containing your built files (typically `main` or `gh-pages`)
5. Select the `/dist` folder (or root if you've moved files)
6. Click **Save**

### 4. Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Customization

### Update Personal Information

Edit the following components in `/src/app/components/`:

- **Hero.tsx** - Name, title, tagline, and CTA links
- **About.tsx** - Professional summary
- **Skills.tsx** - Technical skills and technologies
- **Experience.tsx** - Work experience and achievements
- **Projects.tsx** - Portfolio projects
- **Education.tsx** - Educational background and certifications
- **Awards.tsx** - Awards and publications
- **Contact.tsx** - Contact information and social links

### Modify Theme Colors

Update `/src/styles/theme.css` to customize:
- Python blue: `--python-blue: #3776ab;`
- Soft green: `--soft-green: #10b981;`

### Configure Base URL

If deploying to a subdirectory, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

## Testing Locally

```bash
# Development server
npm run dev

# Build and preview production
npm run build
npm run preview
```

## Domain Configuration

To use a custom domain:

1. Add a `CNAME` file to `/public/` with your domain
2. Configure DNS settings at your domain provider
3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

- **404 Errors**: Ensure base URL is correctly set in Vite config
- **Blank Page**: Check browser console for errors
- **CSS Not Loading**: Verify build output and paths
- **Routing Issues**: This is a single-page app, no routing config needed

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons
- Vite

## License

MIT License - Feel free to use this template for your own resume website!
