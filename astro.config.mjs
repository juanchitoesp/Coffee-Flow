import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.coffeeflow.info', // ← agrega esto
  integrations: [sitemap()],
});