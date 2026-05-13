import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coffeeflow.co',
  integrations: [sitemap()],
  server: {
    allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev'],
  },
});
