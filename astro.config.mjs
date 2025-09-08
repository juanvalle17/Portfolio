// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Deshabilitar la barra de herramientas de desarrollo
  devToolbar: {
    enabled: false
  }
});