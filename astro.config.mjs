import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://gptsurl.com",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind(), sitemap({
    customPages: ['https://gptsurl.com/gpts-store/convertanything', 'https://gptsurl.com/gpts-store/drawn-to-style', 'https://gptsurl.com/gpts-store/logogpt', 'https://gptsurl.com/gpts-store/twUGxmpHv-visual-weather-artist-gpt', 'https://gptsurl.com/gpts-store/chatprd', 'https://gptsurl.com/gpts-store/universal-primer', 'https://gptsurl.com/gpts-store/nomadgpt', 'https://gptsurl.com/gpts-store/designergpt', 'https://gptsurl.com/gpts-store/aso-buddy']
  }), react()]
});