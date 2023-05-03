import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://stdetailing.us',
  integrations: [tailwind(), critters(), compress({js: false,})]
});