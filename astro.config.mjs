import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  prefetch: true,
  site: "https://observatorio-educacion.vercel.app",
  integrations: [
    tailwind({
      config: { path: './tailwind.config.cjs' }
    }),
    mdx()
  ],

});
