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

The build generates `docs/` with three standalone pages: `index.html`, `terms.html`, and `privacy.html`. Relative asset URLs support both repository GitHub Pages URLs and custom domains. The included `public/.nojekyll` is copied into the output to disable Jekyll processing.

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
