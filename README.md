# dkubanyi.github.io

Personal portfolio site for Daniel Kubányi, built with Angular and deployed to
GitHub Pages.

## Stack

- Angular 20 (standalone components, no router — single scrolling page)
- SCSS
- GitHub Actions → GitHub Pages deployment

## Local development

```bash
npm install
npm start
```

The app is served at `http://localhost:4200/`.

## Build

```bash
npm run build
```

Output is written to `dist/portfolio/browser`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and
publishes it to GitHub Pages via GitHub Actions. Live at
[dkubanyi.github.io](https://dkubanyi.github.io).

## Content

Section content lives in `src/app/data/` (experience, skills, projects,
testimonials) — edit those files to update the site without touching component
logic. The `projects` and `testimonials` sections currently contain placeholder
entries pending real content.
