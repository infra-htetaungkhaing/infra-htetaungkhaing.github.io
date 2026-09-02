# Manual GitHub Pages Deploy Process

Follow these steps whenever you want to publish or update the portfolio.

## Prerequisites

- Node.js 18+ installed
- A GitHub account
- This project pushed to a repository named `USERNAME.github.io` (user/org site) or your project repo

## First-time setup

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Create GitHub repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `infra-htetaungkhaing.github.io` (or `YOUR_USERNAME.github.io`)
3. Visibility: Public (required for free GitHub Pages on personal accounts)
4. Create repository (empty)

### Step 3 — Connect local project and push source

```bash
git init
git add .
git commit -m "Add network engineer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/infra-htetaungkhaing.github.io.git
git push -u origin main
```

### Step 4 — Build production files

```bash
npm run build
```

Output folder: `dist/`

### Step 5 — Install deploy helper (once)

```bash
npm install --save-dev gh-pages
```

### Step 6 — Turn on GitHub Pages (GitHub Actions)

**Required one-time setting for this `*.github.io` user site:**

1. Open [Pages settings](https://github.com/infra-htetaungkhaing/infra-htetaungkhaing.github.io/settings/pages)
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Save

Do **not** use “Deploy from a branch” pointing at `main`. That publishes raw Vite source (`/src/main.jsx`) and the site stays on a white screen.

After this setting, every push to `main` runs **Deploy Portfolio**, builds `dist/`, and updates the live site. No manual deploy command.

### Step 7 — Open the site

```text
https://YOUR_USERNAME.github.io/
```

## Normal user update (GitHub website + Actions)

For a non-technical user who only edits content on GitHub:

1. Open `src/data/portfolio.json` on GitHub (`main` branch).
2. Click the pencil icon to edit.
3. Change the needed fields (example: WhatsApp `"value"` and `"href"`).
4. Click **Commit changes** to `main`.
5. Wait for **Actions → Deploy Portfolio** to show green **Success**, then hard-refresh the live site.

Full walkthrough: see **Normal user update guide** in `README.md`.

## Update process (every content change)

1. Edit content in `src/data/portfolio.json` only (plus assets under `public/assets/` if needed).
2. Test locally:

```bash
npm run dev
```

3. Commit source changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

4. Rebuild and redeploy:

```bash
npm run build
npx gh-pages -d dist
```

5. Hard-refresh the live site (or wait 1–2 minutes for CDN cache).

## Fully manual deploy (no gh-pages package)

Use this if you prefer pure git commands:

```bash
npm run build

# Create / switch to orphan deploy branch
git checkout --orphan gh-pages-temp
git rm -rf .

# Copy build output to repo root
cp -R dist/* .
cp dist/.nojekyll .nojekyll 2>/dev/null || touch .nojekyll

git add .
git commit -m "Deploy portfolio"
git branch -M gh-pages
git push -f origin gh-pages

# Return to source branch
git checkout main
```

Then keep **Settings → Pages → Branch** set to `gh-pages`.

## Checklist before deploy

- [ ] All personal info updated in `src/data/portfolio.json`
- [ ] Profile photo at `public/assets/profile.jpg`
- [ ] Resume PDF at `public/assets/Htet_Aung_Khaing_Resume.pdf`
- [ ] `npm run build` succeeds with no errors
- [ ] `vite.config.js` `base` is `'/'` for a `*.github.io` user/org site
- [ ] GitHub Pages source branch is `gh-pages`

## Troubleshooting

| Issue | Fix |
| --- | --- |
| Blank page / 404 assets | Wrong `base` in `vite.config.js`. User site → `'/'`. Project site → `'/REPO_NAME/'`. Rebuild and redeploy. |
| Old content still showing | Wait 1–2 minutes, hard refresh, or clear browser cache. |
| Pages not enabled | Confirm repo is public and Pages source is `gh-pages` root. |
| CSS/JS 404 | Ensure `.nojekyll` exists in the published branch (included via `public/.nojekyll`). |
