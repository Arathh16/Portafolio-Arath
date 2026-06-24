# Portafolio Minimalista - Astro

Este es un portafolio web minimalista, ultra-rápido y elegante desarrollado con **Astro** y **CSS Vanilla**. Está completamente optimizado para compilarse como un sitio estático listo para alojarse en **GitHub Pages**.

## 🎨 Características principales

- **Diseño Premium Minimalista:** Centrado en una tipografía elegante, espacios limpios, y colores refinados en base a HSL.
- **Modo Oscuro/Claro Automático:** Selector de tema manual que respeta y guarda la preferencia del usuario en `localStorage` (sin destellos visuales al recargar).
- **Proyectos Dinámicos:** Páginas individuales autogeneradas para cada proyecto utilizando rutas dinámicas estáticas de Astro.
- **Carga Instantánea:** Optimizado para SEO y rendimiento con metatags completos y CSS optimizado.
- **Listos para Modificar:** Estructura modular que permite cambiar el contenido en segundos.

---

## 🛠️ Cómo cambiar los proyectos por los tuyos reales

Todo el contenido de los proyectos está centralizado en un único archivo TypeScript para que te sea extremadamente fácil editarlos o agregar nuevos.

1. Abre el archivo [`src/data/projects.ts`](file:///c:/Users/slije/Desktop/Portafolio%20Arath/src/data/projects.ts).
2. Edita los objetos en el array `projects` con tu información:
   - **`slug`**: El identificador de la URL (ej: `mi-proyecto-web`).
   - **`title`**: El título visible.
   - **`shortDescription`**: Una descripción breve para la tarjeta principal.
   - **`longDescription`**: Explicación detallada para la página interna del proyecto.
   - **`tags`**: Tecnologías usadas (se mostrarán como etiquetas).
   - **`image`**: Ruta de la imagen en tu carpeta `public/images/`.
   - **`githubUrl`**: Enlace al repositorio.
   - **`demoUrl`**: Enlace al sitio web en vivo.
   - **`completionDate`**: Fecha de finalización.
3. Guarda tus nuevas imágenes de proyecto en la carpeta [`public/images/`](file:///c:/Users/slije/Desktop/Portafolio%20Arath/public/images/).

---

## 🚀 Despliegue en GitHub Pages

Dado que Astro compila el sitio de manera estática por defecto, su publicación en GitHub Pages es sencilla. Sigue uno de estos métodos:

### Método 1: Usando GitHub Actions (Recomendado & Automático)

Puedes configurar una acción de GitHub para compilar y desplegar automáticamente cada vez que hagas `git push`.

1. En tu repositorio, ve a **Settings** > **Pages**.
2. Bajo **Build and deployment** > **Source**, selecciona **GitHub Actions**.
3. Crea un archivo en tu proyecto con la ruta `.github/workflows/deploy.yml` y añade la configuración oficial de Astro para despliegue en Pages ([Guía Oficial de Despliegue de Astro](https://docs.astro.build/es/guides/deploy/github/)).

### Método 2: Despliegue Manual con Variable de Entorno

Si tu portafolio no estará en el dominio principal (ej: estará en `tu-usuario.github.io/portafolio` en vez de `tu-usuario.github.io`), debes definir el path base al compilar:

1. Ejecuta el comando de compilación pasando tu ruta base:
   ```bash
   $env:BASE_PATH="/nombre-de-tu-repositorio"; npm run build
   ```
   *(En Linux/macOS usa: `BASE_PATH="/nombre-de-tu-repositorio" npm run build`)*
2. Sube el contenido de la carpeta `/dist` generada a la rama `gh-pages` de tu repositorio.

---

## 💻 Comandos Locales

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila el sitio web estático optimizado en la carpeta `/dist` |
| `npm run preview` | Previsualiza localmente la compilación de producción |
| `npm run astro -- --help` | Obtén ayuda sobre la CLI de Astro |
