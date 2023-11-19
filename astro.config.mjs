import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const site = "https://gptsurl.com";

// https://astro.build/config
export default defineConfig({
  site,
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind(), react()]
});