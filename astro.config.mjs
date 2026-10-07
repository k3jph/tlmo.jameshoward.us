import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tlmo.jameshoward.us',
  integrations: [sitemap()],
  output: 'static'
});
