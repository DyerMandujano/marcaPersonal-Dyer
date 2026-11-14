import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'skillup',
    title: 'SkillUp – Plataforma E-Learning',
    slug: 'skillup-plataforma-elearning',
    description:
      'Plataforma educativa orientada a facilitar el acceso a formación técnica mediante cursos virtuales, gestión de usuarios, seguimiento de avances y emisión de certificados.',
    longDescription:
      'Proyecto académico integral enfocado en la gestión educativa digital. Desarrollado con una arquitectura moderna desacoplada en el frontend (Angular) y backend robusto (Spring Boot) con persistencia relacional en Microsoft SQL Server.',
    category: 'Plataforma web',
    tags: ['Angular', 'TypeScript', 'Spring Boot', 'SQL Server'],
    image: '/images/projects/skillup-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    projectType: 'académico',
    badge: 'Proyecto Académico',
    highlights: [
      'Arquitectura desacoplada Frontend (Angular) y Backend (Spring Boot)',
      'Diseño de base de datos relacional en Microsoft SQL Server',
      'Módulos de autenticación, gestión de cursos y emisión de certificados',
    ],
  },
  {
    id: 'business-intelligence-dashboard',
    title: 'Dashboard de Inteligencia de Negocios',
    slug: 'dashboard-inteligencia-negocios',
    description:
      'Proyecto demostrativo orientado al modelado, análisis y visualización de indicadores comerciales y operativos mediante Power BI y consultas SQL estructuradas.',
    longDescription:
      'Cuadro de mando analítico para la toma de decisiones empresariales. Integra métricas en DAX, exploración visual por períodos y categorización de datos relacionales.',
    category: 'Inteligencia de negocios',
    tags: ['Power BI', 'SQL Server', 'DAX', 'Modelado de Datos'],
    image: '/images/projects/bi-dashboard-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    projectType: 'demostrativo',
    badge: 'Proyecto Demostrativo',
    highlights: [
      'Modelado dimensional estrella y métricas de desempeño en DAX',
      'Extracción y estructuración de datos mediante consultas SQL',
      'Filtros interactivos por período temporal y área de negocio',
    ],
  },
  {
    id: 'sistema-gestion-empresarial',
    title: 'Sistema de Gestión Empresarial',
    slug: 'sistema-gestion-empresarial',
    description:
      'Solución web administrativa en fase de diseño orientada a centralizar el registro y seguimiento de operaciones para pequeños negocios.',
    longDescription:
      'Propuesta de software administrativo orientado a reducir la dispersión de datos en hojas de cálculo, ofreciendo un panel de control intuitivo y modular.',
    category: 'Sistema web',
    tags: ['TypeScript', 'Astro', 'Tailwind CSS', 'SQL'],
    image: '/images/projects/gestion-cover.svg',
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'en-desarrollo',
    projectType: 'demostrativo',
    badge: 'En Desarrollo',
    highlights: [
      'Panel administrativo intuitivo para usuarios no técnicos',
      'Estructura modular lista para conectarse con APIs REST',
      'Diseño responsive enfocado en usabilidad operativa',
    ],
  },
];
