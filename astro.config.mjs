import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Opciones de configuración explícitas
    config: { path: './tailwind.config.cjs' }
  })]
});