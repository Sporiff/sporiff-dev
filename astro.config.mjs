import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    sitemap(),
    compress(),
  ],
  output: "static",
  site: "https://sporiff.dev",
  markdown: {
    syntaxHighlight: "prism",
  },
  vite: {
    ssr: {
      noExternal: [/@astro-/],
    },
  },
});
