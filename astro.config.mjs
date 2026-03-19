// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danendral.github.io',
  integrations: [react(), mdx(), sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
