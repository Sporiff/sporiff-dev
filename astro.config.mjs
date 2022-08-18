import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  site: 'https://sporiff.dev',
  markdown: {
    syntaxHighlight: 'prism'
  },
  vite: {
    ssr: {
      noExternal: [/@astro-/]
    }
  }
});