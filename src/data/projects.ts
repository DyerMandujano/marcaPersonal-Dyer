import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'skillup',
    title: 'SkillUp – Plataforma E-Learning',
    slug: 'skillup-plataforma-elearning',
    description:
      'Plataforma educativa orientada a facilitar el acceso a formación técnica mediante cursos virtuales, gestión de usuarios, seguimiento de avances y emisión de certificados.',
    longDescription:
      'SkillUp es un sistema web integral diseñado para la gestión y consumo de contenido educativo. Incluye módulos para estudiantes e instructores, panel de administración de cursos, seguimiento del progreso académico y generación de certificados digitales.',
    category: 'Plataforma web',
    tags: ['Angular', 'TypeScript', 'Spring Boot', 'SQL Server'],
    image: '/images/projects/skillup-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    highlights: [
      'Arquitectura desacoplada Frontend (Angular) y Backend (Spring Boot)',
      'Diseño de base de datos relacional en Microsoft SQL Server',
      'Módulos de autenticación, control de accesos y emisión de certificados',
    ],
  },
  {
    id: 'business-intelligence-dashboard',
    title: 'Dashboard de Inteligencia de Negocios',
    slug: 'dashboard-inteligencia-negocios',
    description:
      'Proyecto demostrativo orientado al análisis, modelado y visualización de datos empresariales mediante Power BI y consultas SQL estructuradas.',
    longDescription:
      'Desarrollo de un cuadro de mando integral para la toma de decisiones gerenciales. Permite la exploración visual de KPIs comerciales y financieros, segmentación temporal y análisis comparativo a partir de fuentes de datos relacionales.',
    category: 'Inteligencia de negocios',
    tags: ['Power BI', 'SQL Server', 'DAX', 'Modelado de Datos'],
    image: '/images/projects/bi-dashboard-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    highlights: [
      'Modelado dimensional estrella y métricas en DAX',
      'Extracción y preparación de datos mediante consultas SQL',
      'Visualizaciones interactivas con filtros dinámicos por período y categoría',
    ],
  },
  {
    id: 'sistema-gestion-empresarial',
    title: 'Sistema de Gestión Empresarial',
    slug: 'sistema-gestion-empresarial',
    description:
      'Solución web administrativa diseñada para el registro, control de flujos operativos y seguimiento de actividades comerciales.',
    longDescription:
      'Aplicación en desarrollo orientada a digitalizar operaciones de pequeños negocios, reduciendo el uso de hojas de cálculo aisladas mediante una plataforma centralizada y accesible.',
    category: 'Sistema web',
    tags: ['TypeScript', 'Astro', 'Tailwind CSS', 'SQL'],
    image: '/images/projects/gestion-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: false,
    status: 'en-desarrollo',
    highlights: [
      'Panel administrativo intuitivo para usuarios no técnicos',
      'Estructura modular lista para conectarse con APIs REST',
      'Diseño responsive enfocado en usabilidad operativa',
    ],
  },
];
