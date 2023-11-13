import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gptsurl.com",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind(), sitemap()]
});