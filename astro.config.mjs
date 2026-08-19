import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://nipponsysits.github.io',
  base: isGitHubPages ? '/midback-theme' : '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
