export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  completionDate: string;
}

export const projects: Project[] = [
  {
    slug: "nova-wallet",
    title: "Nova Wallet",
    shortDescription: "Billetera descentralizada de criptomonedas enfocada en diseño minimalista y micro-interacciones.",
    longDescription: "Nova Wallet es una billetera conceptual de criptomonedas diseñada para simplificar la interacción con activos digitales. Cuenta con gráficos en tiempo real, transacciones simuladas, cambio rápido de tokens y una interfaz ultra minimalista con soporte para temas oscuros y claros con transiciones fluidas. Desarrollada para demostrar el uso de estados complejos en frontend y animaciones de alto rendimiento.",
    tags: ["Astro", "TypeScript", "Vanilla CSS", "Chart.js"],
    image: "/images/nova-wallet.png",
    githubUrl: "https://github.com/tu-usuario/nova-wallet",
    demoUrl: "https://tu-usuario.github.io/nova-wallet",
    featured: true,
    completionDate: "Enero 2026"
  },
  {
    slug: "aether-cms",
    title: "Aether CMS",
    shortDescription: "Gestor de contenido headless optimizado para velocidad, enfocado en redactores y editores de Markdown.",
    longDescription: "Aether CMS es un panel de administración estático y ultra-ligero para blogs basados en Markdown. Permite a los redactores escribir artículos con un editor de doble panel (Markdown + Vista previa), gestionar metadatos de forma visual y exportar archivos listos para Astro o Jekyll. Prioriza la accesibilidad, atajos de teclado y un entorno libre de distracciones.",
    tags: ["Astro", "TypeScript", "Markdown", "Web Storage API"],
    image: "/images/aether-cms.png",
    githubUrl: "https://github.com/tu-usuario/aether-cms",
    demoUrl: "https://tu-usuario.github.io/aether-cms",
    featured: true,
    completionDate: "Marzo 2026"
  },
  {
    slug: "helios-analytics",
    title: "Helios Analytics",
    shortDescription: "Plataforma de analítica web en tiempo real que respeta la privacidad y no utiliza cookies.",
    longDescription: "Helios es una alternativa ligera y privada a Google Analytics. El panel visualiza métricas de visitas, navegadores, países y páginas populares mediante gráficos interactivos de alta velocidad sin recopilar datos personales. El diseño utiliza glassmorphism y transiciones suaves para presentar datos complejos de una manera elegante y digerible.",
    tags: ["TypeScript", "CSS Grid", "Canvas API", "Astro"],
    image: "/images/helios-analytics.png",
    githubUrl: "https://github.com/tu-usuario/helios-analytics",
    demoUrl: "https://tu-usuario.github.io/helios-analytics",
    featured: true,
    completionDate: "Mayo 2026"
  },
  {
    slug: "vesper-os",
    title: "Vesper OS",
    shortDescription: "Simulador conceptual de sistema operativo ejecutado en el navegador con interfaz minimalista.",
    longDescription: "Vesper OS es un experimento interactivo que simula una interfaz de escritorio minimalista en el navegador. Incluye ventanas arrastrables, una terminal funcional interactiva, bloc de notas con guardado local, reproductor de música y temas visuales personalizables. Construido con manipulación nativa del DOM y CSS altamente dinámico para lograr un rendimiento de 60fps.",
    tags: ["JavaScript", "HTML5", "CSS Custom Properties", "Astro"],
    image: "/images/vesper-os.png",
    githubUrl: "https://github.com/tu-usuario/vesper-os",
    demoUrl: "https://tu-usuario.github.io/vesper-os",
    featured: true,
    completionDate: "Junio 2026"
  }
];
