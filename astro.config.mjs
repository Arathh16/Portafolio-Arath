// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Reemplaza esto con tu URL de GitHub Pages, ej: 'https://tu-usuario.github.io'
  site: process.env.SITE || 'https://localhost:4321',
  // Si tu repositorio no está en la raíz (ej: username.github.io/repo), 
  // define la subruta aquí o a través de la variable de entorno BASE_PATH
  base: process.env.BASE_PATH || undefined,
});

