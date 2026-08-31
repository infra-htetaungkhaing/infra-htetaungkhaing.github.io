# Htet Aung Khaing — Network Engineer Portfolio

Premium React portfolio for a network / infrastructure engineer. All personal and career content is loaded from a single JSON file.

## Content source (edit here)

Update your information in:

```text
src/data/portfolio.json
```

That file drives the hero, about, experience, expertise, soft skills, achievements, certifications, education, contact details, navigation, and footer. Do not hardcode personal data in components.

Assets:

- Profile photo: `public/assets/profile.jpg`
- Resume PDF: `public/assets/Htet_Aung_Khaing_Resume.pdf`

## Normal user update guide (GitHub website only)

This guide is for a non-technical user. You only need a browser — no computer install, no coding tools.

**Example task:** change the phone / WhatsApp number, then deploy with GitHub Actions.

### One-time setup (admin does this once)

Before the normal user can click Deploy, a repo admin must:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Save.
5. Confirm the workflow file exists: `.github/workflows/deploy.yml`.

After that, day-to-day updates use the steps below.

### Step 1 — Open the repository on GitHub

1. Sign in to GitHub.
2. Open the portfolio repository (example: `infra-htetaungkhaing.github.io`).
3. Make sure you are on the **`main`** branch (branch dropdown near the top left of the file list).

### Step 2 — Open the content file

1. Click the folder **`src`**.
2. Click the folder **`data`**.
3. Click the file **`portfolio.json`**.

### Step 3 — Start editing

1. Click the pencil icon (**Edit this file**) near the top right of the file view.
2. Press `Ctrl + F` (Windows) or `Cmd + F` (Mac) to search.
3. Search for: `WhatsApp`

You should find a block like this:

```json
{
  "type": "phone",
  "label": "WhatsApp",
  "value": "+95 9 984 472 801",
  "href": "https://wa.me/959984472801"
}
```

### Step 4 — Update the phone number

Change **both** lines:

1. **`value`** — the number shown on the website  
   Example: `"+95 9 123 456 789"`
2. **`href`** — the WhatsApp link (digits only after `wa.me/`, country code included, no `+` and no spaces)  
   Example: `"https://wa.me/95123456789"`

Important:

- Keep the double quotes `"..."`.
- Do not delete commas `,` at the end of lines.
- Do not change `"type"` or `"label"` unless you know you need to.

### Step 5 — Commit (save) the change

1. Scroll to the top or bottom of the page.
2. Find **Commit changes**.
3. In the commit message box, write something simple, for example:  
   `Update WhatsApp phone number`
4. Choose **Commit directly to the `main` branch**.
5. Click the green **Commit changes** button.

### Step 6 — Deploy with GitHub Actions

1. At the top of the repository, click the **Actions** tab.
2. In the left sidebar, click **Deploy Portfolio**.
3. On the right, click **Run workflow**.
4. Make sure the branch is **`main`**.
5. Click the green **Run workflow** button.
6. Wait until the newest run shows a green check mark (**Success**).  
   This usually takes about 1–3 minutes.

If the run is red (**Failed**), click the failed run and send the error log to the technical person who manages the site.

### Step 7 — Check the live website

1. Open the live site (example: `https://infra-htetaungkhaing.github.io/`).
2. Hard refresh the page:
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`
3. Go to the **Contact** section.
4. Confirm the new phone number is shown.
5. Click the WhatsApp card and confirm it opens the correct chat.

### Normal user quick checklist

- [ ] Opened `src/data/portfolio.json` on GitHub
- [ ] Updated both `"value"` and `"href"` for WhatsApp
- [ ] Clicked **Commit changes** on `main`
- [ ] Opened **Actions → Deploy Portfolio → Run workflow**
- [ ] Waited for green **Success**
- [ ] Hard-refreshed the live site and checked Contact

### Same method for other small text updates

You can update email, LinkedIn, job text, or other fields the same way:

1. Edit `src/data/portfolio.json` on GitHub.
2. Commit to `main`.
3. Go to **Actions → Deploy Portfolio → Run workflow**.
4. Wait for success, then check the live site.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The static site is written to `dist/`.

## Manual GitHub Pages deploy

This project is set up for a **user or organization site** named like `infra-htetaungkhaing.github.io` (`base: '/'` in `vite.config.js`).

### 1. Create the GitHub repository

1. Sign in to GitHub.
2. Create a new repository named exactly:
   - `infra-htetaungkhaing.github.io`  
     (or your GitHub username: `YOUR_USERNAME.github.io`)
3. Leave it empty (no README/license if you already have local files).

### 2. Push the project

From this folder:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/infra-htetaungkhaing.github.io.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username (or org).

### 3. Build the site locally

```bash
npm install
npm run build
```

Confirm `dist/` contains `index.html`, assets, and `.nojekyll`.

### 4. Publish the `dist` folder to the `gh-pages` branch

**Option A — `gh-pages` package (recommended)**

```bash
npm install --save-dev gh-pages
npx gh-pages -d dist
```

This pushes the contents of `dist/` to a `gh-pages` branch.

**Option B — manual git worktree**

```bash
npm run build
git checkout --orphan gh-pages
git rm -rf .
cp -R dist/* .
touch .nojekyll
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push -u origin gh-pages
git checkout main
```

### 5. Enable GitHub Pages in the repo settings

**Recommended (matches the Normal user update guide):**

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Save.
5. Run **Actions → Deploy Portfolio → Run workflow** once.

**Alternative (manual `gh-pages` branch):**

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`gh-pages`**
   - Folder: **`/ (root)`**
4. Save.

### 6. Visit the live site

After a minute or two:

```text
https://YOUR_USERNAME.github.io/
```

If the repo name is `infra-htetaungkhaing.github.io` and the account is `infra-htetaungkhaing`, the URL is:

```text
https://infra-htetaungkhaing.github.io/
```

## Step-by-step update guide

Use this whenever you need to change text, jobs, skills, contact links, photo, or resume.

### Step 1 — Open the content file

All site text and links live in one place:

```text
src/data/portfolio.json
```

Open that file in your editor. Do **not** edit personal information inside React components.

### Step 2 — Edit the section you need

| What to change | Where in `portfolio.json` |
| --- | --- |
| Name, role, hero buttons, metrics | `hero` |
| Profile photo path / alt text | `profile` |
| About / career objective | `about` |
| Jobs and responsibilities | `experience.jobs` |
| Skills / platforms | `expertise.categories` |
| Soft skills | `softSkills.items` |
| Achievements | `achievements.items` |
| Certifications, education, notice period | `certifications` |
| WhatsApp, email, LinkedIn, location, resume | `contact.channels` |
| Footer text | `footer` |
| Menu labels | `nav` |

Tips:

- Keep valid JSON (commas, quotes, brackets).
- For a new contact item, copy an existing channel object and change `type`, `label`, `value`, and `href`.
- Set `"href": null` for non-clickable items (for example location).

### Step 3 — Replace photo or resume (optional)

1. Replace the files (keep the same names, or update paths in JSON):
   - Photo → `public/assets/profile.jpg`
   - Resume → `public/assets/Htet_Aung_Khaing_Resume.pdf`
2. If you rename a file, update the matching path in `portfolio.json`
   (`profile.image`, resume channel `href`, and/or `hero.ctaSecondary.href`).

### Step 4 — Preview locally

From the project folder:

```bash
npm install
npm run dev
```

1. Open the URL shown in the terminal (usually `http://localhost:5173`).
2. Hard refresh the browser (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows) if old content still appears.
3. Check every section you changed (hero, experience, contact, etc.).

Stop the local server with `Ctrl + C` when finished.

### Step 5 — Save your source changes to GitHub (`main`)

```bash
git status
git add src/data/portfolio.json public/assets
git commit -m "Update portfolio content"
git push origin main
```

Add any other edited files if needed (for example CSS or components).

### Step 6 — Rebuild the production site

```bash
npm run build
```

Optional local check of the production build:

```bash
npm run preview
```

Open the preview URL, confirm the updates, then stop it with `Ctrl + C`.

### Step 7 — Deploy the update to GitHub Pages

```bash
npm run deploy
```

This runs `build` and publishes `dist/` to the `gh-pages` branch.

If `npm run deploy` is unavailable, use:

```bash
npm run build
npx gh-pages -d dist
```

### Step 8 — Verify the live website

1. Wait 1–2 minutes for GitHub Pages to update.
2. Open your live URL (example: `https://infra-htetaungkhaing.github.io/`).
3. Hard refresh the page.
4. Confirm the new text, links, photo, and resume download.

### Quick update checklist

- [ ] Edited `src/data/portfolio.json` (or assets)
- [ ] Previewed with `npm run dev`
- [ ] Committed and pushed to `main`
- [ ] Ran `npm run deploy`
- [ ] Verified live site after hard refresh

## Project site note (optional)

If you deploy as a **project** site (`https://USERNAME.github.io/REPO_NAME/`), change `vite.config.js`:

```js
base: '/REPO_NAME/',
```

Then rebuild and redeploy.

## Stack

- React + Vite
- Centralized content: `src/data/portfolio.json`
- Static hosting: GitHub Pages
