// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://new-elephant.com",
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-tw',
        locales: {
          en: 'en',
          'zh-tw': 'zh-TW',
        },
      },
    }),
  ],
});
