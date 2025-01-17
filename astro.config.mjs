import { defineConfig } from "astro/config";

// astro integrations imports
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    node({
      mode: "standalone",
    }),
    image({
      logLevel: "info",
    }),
  ],
  output: "server",
});
