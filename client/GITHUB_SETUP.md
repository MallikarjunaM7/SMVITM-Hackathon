# How to Push Your Project to GitHub

## ✅ Already Completed:
1. ✓ Git repository initialized
2. ✓ Files added and committed

## Next Steps:

### Step 1: Create a GitHub Repository
1. Go to https://github.com
2. Click the "+" icon in the top right → "New repository"
3. Enter repository name (e.g., "SMVITM")
4. Choose Public or Private
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click "Create repository"

### Step 2: Connect Your Local Repo to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Replace 'YOUR_USERNAME' with your actual GitHub username
# Replace 'REPO_NAME' with your repository name (e.g., 'SMVITM')

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename the default branch to 'main' (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**If you're using SSH instead of HTTPS:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Verify
After pushing, refresh your GitHub repository page - you should see all your files!

---

## Troubleshooting:

### Authentication Issues:
If you get authentication errors, you have two options:

1. **Use Personal Access Token (HTTPS):**
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with `repo` permissions
   - Use the token as your password when pushing

2. **Use SSH (Recommended):**
   - Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
   - Add to GitHub: Settings → SSH and GPG keys → New SSH key
   - Use SSH URL for remote (git@github.com:...)

### Branch Name:
If your default branch is named `master` instead of `main`, run:
```bash
git branch -M main
```

Then push:
```bash
git push -u origin main
```

---

## Quick Command Reference:

```bash
# Check current status
git status

# Check remote connection
git remote -v

# View commit history
git log --oneline

# If you need to change the remote URL
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

