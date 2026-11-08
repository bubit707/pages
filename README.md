# Mobile app website

A minimal, responsive website built with HTML, CSS, TypeScript, and Vite. No UI framework or runtime dependencies.

## Local development

Requires Node.js 22.12+ (or a supported newer version).

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The build generates `docs/` with four standalone pages: `index.html`, `terms.html`, `privacy.html`, and `faq.html`. Relative asset URLs support both repository GitHub Pages URLs and custom domains. The included `public/.nojekyll` is copied into the output to disable Jekyll processing.

## GitHub Pages

1. Run `npm run build` to generate the publishable files in `docs/`.
2. Commit the source files and generated `docs/` folder, then push to `main`.
3. In the repository settings, open **Pages** and select **Deploy from a branch** as the source.
4. Select branch **main** and folder **/docs**, then click **Save**.

For every update, run `npm run build` again and commit and push the updated source and `docs/` files. GitHub serves the committed output; it does not run the Vite build. Edit the source HTML and `src/` files rather than generated files inside `docs/`.

## Customize

- Replace “App Name”, the app introduction, and the logo initial in the HTML files.
- Replace the clearly marked placeholder content in `terms.html` and `privacy.html` before launch.
- Update colors and layout in `src/style.css`.
- `src/main.ts` loads the stylesheet and updates the copyright year.

## PhotoBitAI template

PhotoBitAI has a separate homepage at `/photobitai/`, with its own FAQ, terms, and privacy pages in `photobitai/`. All navigation stays within the respective app’s pages; there are no links between the two sites. Both use the shared stylesheet and TypeScript entry point.

Preview locally at `http://localhost:5173/photobitai/` after running `npm run dev`. The production URL is `https://bubit707.github.io/pages/photobitai/`.

PhotoBitAI has its own homepage, FAQ, legal policies, logo (`public/photobitai/logo.png`), and support email (`photobitai@gmail.com`). Run `npm run build` to regenerate both sites in `docs/` before committing and pushing.
