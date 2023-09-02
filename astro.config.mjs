import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: netlify(),
});
