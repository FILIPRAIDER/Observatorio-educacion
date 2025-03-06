import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx"; // 💡 Agrega esta línea

export default defineConfig({
  site: "https://observatorio-educacion.vercel.app",
  integrations: [
    react(),
    tailwind({
      // Opciones de configuración explícitas
      config: { path: "./tailwind.config.cjs" },
    }),
    mdx(), // 💡 Ahora mdx() está correctamente importado
  ],
});
