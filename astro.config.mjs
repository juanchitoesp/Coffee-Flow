import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coffeeflow.info',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
