import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: [
        'index.html', 'terms.html', 'privacy.html', 'faq.html',
        'photobitai/index.html', 'photobitai/terms.html',
        'photobitai/privacy.html', 'photobitai/faq.html',
      ],
    },
  },
});
