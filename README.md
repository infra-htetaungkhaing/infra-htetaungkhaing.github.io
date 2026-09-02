# Htet Aung Khaing — Network Engineer Portfolio

React portfolio for a network / infrastructure engineer. All personal and career content is loaded from a single JSON file.

Live site: [https://infra-htetaungkhaing.github.io/](https://infra-htetaungkhaing.github.io/)

## Content source

Edit your information in:

```text
src/data/portfolio.json
```

That file drives the hero, about, experience, expertise, soft skills, achievements, certifications, education, contact, navigation, and footer. Do not hardcode personal data in components.

Assets:

- Profile photo: `public/assets/profile.jpg`
- Resume PDF: `public/assets/Htet_Aung_Khaing_Resume.pdf`

## Deploy (automatic)

Push to `main`. GitHub Actions builds and publishes the site. No manual deploy.

Details: see [DEPLOY.md](./DEPLOY.md).

## Update content on GitHub (browser only)

Example: change the WhatsApp number.

1. Sign in to GitHub and open this repository on the **`main`** branch.
2. Open `src/data/portfolio.json`.
3. Click the pencil icon (**Edit this file**).
4. Search for `WhatsApp` and update **both**:
   - `"value"` — number shown on the site (example: `"+95 9 123 456 789"`)
   - `"href"` — WhatsApp link with digits only (example: `"https://wa.me/95123456789"`)
5. Keep the JSON quotes and commas intact.
6. **Commit changes** directly to `main`.
7. Open **Actions → Deploy Portfolio** and wait for green **Success** (usually 1–3 minutes).
8. Hard-refresh the live site and check **Contact**.

The same flow works for email, LinkedIn, jobs, skills, and other JSON fields: edit → commit to `main` → wait for the Action → verify the site.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## What to edit in `portfolio.json`

| What to change | Where |
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

## Replace photo or resume

1. Replace the files (keep the same names, or update paths in JSON):
   - Photo → `public/assets/profile.jpg`
   - Resume → `public/assets/Htet_Aung_Khaing_Resume.pdf`
2. If you rename a file, update the matching path in `portfolio.json`.
3. Commit, push to `main`, and wait for **Deploy Portfolio** to succeed.

## Stack

- React + Vite
- Content: `src/data/portfolio.json`
- Hosting: GitHub Pages (auto-deploy via GitHub Actions)
