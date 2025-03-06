import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  prefetch: true,
  site: "https://observatorio-educacion.vercel.app",
  integrations: [
    react(),
    tailwind({
      config: { path: './tailwind.config.cjs' }
    }),
    mdx()
  ],

});
