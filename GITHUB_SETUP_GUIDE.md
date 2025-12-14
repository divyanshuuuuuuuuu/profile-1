# 📚 GitHub Setup Guide

Follow these steps to push your portfolio to GitHub.

## Prerequisites

### 1. Install Git (if not already installed)

**Download Git:**
- Visit: https://git-scm.com/download/win
- Download and install Git for Windows
- During installation, use default settings

**Verify Installation:**
```bash
git --version
```

### 2. Configure Git (First Time Setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 🚀 Push to GitHub - Step by Step

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "Modern portfolio website with 3D animations"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### Step 2: Initialize Git in Your Project

Open PowerShell/Terminal in your project folder (`c:\Users\himan\Music\coding\anti`) and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Modern portfolio with 3D animations"
```

### Step 3: Connect to GitHub Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Verify remote was added
git remote -v
```

### Step 4: Push to GitHub

```bash
# Push to GitHub (main branch)
git push -u origin main
```

If you get an error about the branch name, try:

```bash
# Rename branch to main (if needed)
git branch -M main

# Then push again
git push -u origin main
```

### Step 5: Verify Upload

1. Go to your GitHub repository URL
2. You should see all your files uploaded
3. The README.md will be displayed on the repository homepage

## 🔄 Making Future Updates

After making changes to your code:

```bash
# Check what files changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Description of what you changed"

# Push to GitHub
git push
```

## 🌐 Deploy Your Portfolio

### Option 1: Netlify (Recommended - Easiest)

1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your portfolio repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"
7. Your site will be live in minutes! 🎉

### Option 2: Vercel

1. Go to https://vercel.com/
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Option 3: GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"

# Deploy
npm run deploy
```

Then enable GitHub Pages in your repository settings (Settings → Pages → Source: gh-pages branch).

## 🆘 Common Issues

### Issue: "git: command not found"
**Solution:** Install Git from https://git-scm.com/download/win and restart your terminal.

### Issue: Authentication failed
**Solution:** Use a Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Use the token as your password when pushing

### Issue: "Updates were rejected"
**Solution:** Pull first, then push:
```bash
git pull origin main --rebase
git push origin main
```

## 📝 Quick Reference

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## 🎯 Next Steps

1. ✅ Push your code to GitHub
2. ✅ Deploy to Netlify/Vercel
3. ✅ Add the live URL to your GitHub repository description
4. ✅ Share your portfolio with the world!

---

**Need Help?** Check out:
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
