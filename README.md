# Teleforce

Bilingual nearshore BPO site for [myteleforce.com](https://myteleforce.com). Static [Astro](https://astro.build) build, published to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`. Pushing `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it with GitHub Actions.
