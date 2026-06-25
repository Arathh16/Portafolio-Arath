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
    slug: "volcanes-guatemala",
    title: "Volcanes de Guatemala",
    shortDescription: "Landing page promocional para tours de senderismo y turismo de aventura en los volcanes de Guatemala.",
    longDescription: "Una landing page de alto impacto visual y rendimiento optimizado diseñada para promocionar tours guiados a los volcanes más importantes de Guatemala. Cuenta con galerías interactivas, secciones informativas de rutas y seguridad, y llamadas a la acción enfocadas a la reserva de tours. Ideal para turismo de aventura, con SEO local optimizado y un diseño moderno que capta la majestuosidad de los paisajes guatemaltecos.",
    tags: ["Landing Page", "HTML5", "CSS3", "JavaScript", "SEO"],
    image: "/images/volcanes-guatemala.png",
    githubUrl: "https://github.com/Arathh16/volcanes-guatemala",
    demoUrl: "https://demo-landing.serviencuentra.com/",
    featured: true,
    completionDate: "Febrero 2026"
  },
  {
    slug: "muros-don-marvin",
    title: "Muros Don Marvin",
    shortDescription: "Landing page para empresa de fabricación e instalación de muros prefabricados de alta resistencia en Guatemala.",
    longDescription: "Sitio web de aterrizaje optimizado para Muros Don Marvin, una empresa líder en diseño, fabricación e instalación de muros prefabricados de concreto en Guatemala. La landing page destaca las soluciones de muros perimetrales, antisísmicos y decorativos. Desarrollada con React y Vite para garantizar una velocidad de carga excepcional, cuenta con formularios integrados y enlaces directos de contacto para maximizar la conversión de clientes potenciales.",
    tags: ["Landing Page", "React", "Vite", "CSS Moderno", "SEO"],
    image: "/images/muros-don-marvin.png",
    githubUrl: "https://github.com/Arathh16/muros-don-marvin",
    demoUrl: "https://murosdonmarvin.intecod.com/",
    featured: true,
    completionDate: "Abril 2026"
  },
  {
    slug: "acont",
    title: "ACONT",
    shortDescription: "Plataforma web SaaS de contabilidad y facturación electrónica para la gestión financiera empresarial.",
    longDescription: "ACONT es una plataforma web completa de contabilidad y facturación electrónica orientada al mercado de Guatemala. Permite a las empresas gestionar facturas, reportes financieros, declaraciones contables y flujos de caja en tiempo real. Desarrollada como una aplicación web robusta con Angular y TypeScript, integra un diseño limpio basado en Material Design, atajos de teclado y múltiples paneles analíticos.",
    tags: ["Plataforma Web", "Angular", "TypeScript", "Material Design", "SaaS"],
    image: "/images/acont.png",
    githubUrl: "https://github.com/Arathh16/acont-platform",
    demoUrl: "https://acont-dev.intecod.com/",
    featured: true,
    completionDate: "Mayo 2026"
  },
  {
    slug: "intecod-desk",
    title: "Intecod Desk",
    shortDescription: "Sistema web de gestión administrativa, soporte técnico y asignación de tareas internas.",
    longDescription: "Intecod Desk es un portal administrativo interno diseñado para la automatización de flujos de trabajo, control de asistencia, tickets de soporte y asignación de tareas en equipo. Cuenta con un panel de control avanzado con visualizaciones gráficas integradas, roles de usuario detallados, y configuraciones de seguridad de vanguardia. La interfaz utiliza Tailwind CSS y Angular para un rendimiento fluido y responsive en cualquier dispositivo.",
    tags: ["Plataforma Web", "Angular", "TypeScript", "Tailwind CSS", "Dashboard"],
    image: "/images/desk.png",
    githubUrl: "https://github.com/Arathh16/intecod-desk",
    demoUrl: "http://desk.intecod.com/",
    featured: true,
    completionDate: "Junio 2026"
  }
];
