// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: 'https://WalterJoelCode.github.io',
  base: '/Portafolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
