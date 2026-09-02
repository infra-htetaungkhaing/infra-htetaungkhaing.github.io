# Deploy

Publishing is automatic. Push to `main` — no manual deploy command.

## How it works

On every push to `main`, the **Deploy Portfolio** GitHub Action:

1. Builds the Vite app into `dist/`
2. Publishes the production files onto `main` (keeps `src/` and config)
3. GitHub Pages serves the updated site

Live URL: [https://infra-htetaungkhaing.github.io/](https://infra-htetaungkhaing.github.io/)

## Update from GitHub (browser only)

1. Open `src/data/portfolio.json` on the `main` branch.
2. Edit the fields you need, then **Commit changes** to `main`.
3. Open **Actions → Deploy Portfolio** and wait for green **Success**.
4. Hard-refresh the live site.

## Update from your computer

```bash
# Edit content in src/data/portfolio.json (and assets if needed)
npm run dev          # optional local preview
git add .
git commit -m "Update portfolio content"
git push origin main
```

Wait for **Actions → Deploy Portfolio** to succeed, then hard-refresh the live site.

## Checklist

- [ ] Content updated in `src/data/portfolio.json`
- [ ] Profile photo at `public/assets/profile.jpg` (if changed)
- [ ] Resume at `public/assets/Htet_Aung_Khaing_Resume.pdf` (if changed)
- [ ] Pushed to `main`
- [ ] Action shows **Success**
- [ ] Live site checked after hard refresh

## Troubleshooting

| Issue | Fix |
| --- | --- |
| White screen / blank page | Confirm **Deploy Portfolio** succeeded. Hard-refresh. The live `index.html` must load `/assets/index-….js`, not `/src/main.jsx`. |
| Old content still showing | Wait 1–2 minutes, then hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`). |
| Action failed | Open the failed run in **Actions** and check the error log. |
| Local preview looks wrong | Run `npm run dev` (it restores the Vite entry from `index.template.html`). |
