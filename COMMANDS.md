# 🚀 Quick Start Commands

## First Time Setup (Run these once)

# 1. Install Git (if needed)
# Download from: https://git-scm.com/download/win

# 2. Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Initialize repository
git init

# 4. Add all files
git add .

# 5. First commit
git commit -m "Initial commit: Modern portfolio with 3D animations"

# 6. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 7. Push to GitHub
git branch -M main
git push -u origin main

## Daily Development Workflow

# Start development server
npm run dev

# After making changes:
git add .
git commit -m "Description of changes"
git push

## Build and Deploy

# Build for production
npm run build

# Preview production build
npm run preview

## Useful Git Commands

# Check status
git status

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# Create new branch
git checkout -b feature-name

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main
