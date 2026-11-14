import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'skillup',
    title: 'SkillUp – Plataforma E-Learning',
    slug: 'skillup-plataforma-elearning',
    description:
      'Plataforma educativa orientada a facilitar el acceso a formación técnica mediante cursos virtuales, gestión de usuarios, seguimiento de avances y emisión de certificados.',
    longDescription:
      'SkillUp es un proyecto académico integral diseñado para la gestión y consumo estructurado de contenidos educativos. Fue concebido bajo una arquitectura moderna desacoplada en dos capas: un cliente web dinámico desarrollado en Angular y una API REST robusta construida con Spring Boot en Java, persistiendo la información en una base de datos relacional normalizada en Microsoft SQL Server.',
    category: 'Plataforma web',
    tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'SQL Server', 'APIs REST'],
    image: '/images/projects/skillup-cover.svg',
    gallery: [
      '/images/projects/skillup-cover.svg',
    ],
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    projectType: 'académico',
    badge: 'Proyecto Académico',
    problemIdentified:
      'La necesidad de centralizar cursos técnicos, materiales didácticos y evaluaciones en una única plataforma accesible, reduciendo la fricción en el seguimiento del rendimiento de los estudiantes y la emisión manual de constancias.',
    developedSolution:
      'Se diseñó e implementó un sistema integral con autenticación segura, control de roles (estudiantes e instructores), catálogo interactivo de cursos organizados por módulos temáticos, registro de avance porcentual en tiempo real y generación automatizada de certificados.',
    features: [
      'Autenticación de usuarios y control de accesos basado en roles.',
      'Panel de control del estudiante con visualización del progreso en cada curso.',
      'Módulo administrativo para la creación, edición y estructuración de contenido educativo.',
      'Seguimiento interactivo de lecciones completadas y evaluaciones por módulo.',
      'Módulo de generación y validación de certificados de finalización.',
      'API REST con endpoints para gestión de usuarios, inscripciones y reportes.',
    ],
    highlights: [
      'Arquitectura desacoplada Frontend (Angular) y Backend (Spring Boot)',
      'Diseño y normalización de base de datos relacional en Microsoft SQL Server',
      'Módulos de autenticación, control de accesos y emisión de certificados digitales',
    ],
  },
  {
    id: 'business-intelligence-dashboard',
    title: 'Dashboard de Inteligencia de Negocios',
    slug: 'dashboard-inteligencia-negocios',
    description:
      'Proyecto demostrativo orientado al modelado, análisis y visualización de indicadores comerciales y operativos mediante Power BI y consultas SQL estructuradas.',
    longDescription:
      'Desarrollo de un cuadro de mando integral enfocado en la analítica empresarial para la toma de decisiones gerenciales. A partir de un conjunto de datos transaccionales, se aplicaron técnicas de modelado dimensional en esquema estrella, creación de métricas clave con lenguaje DAX y construcción de dashboards visuales interactivos.',
    category: 'Inteligencia de negocios',
    tags: ['Power BI', 'Microsoft SQL Server', 'DAX', 'Modelado Dimensional', 'ETL'],
    image: '/images/projects/bi-dashboard-cover.svg',
    gallery: [
      '/images/projects/bi-dashboard-cover.svg',
    ],
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'completado',
    projectType: 'demostrativo',
    badge: 'Proyecto Demostrativo',
    problemIdentified:
      'La dificultad que experimentan muchas empresas al contar con grandes volúmenes de datos transaccionales dispersos, dependiendo de hojas de cálculo lentas que impiden identificar tendencias o caídas de rendimiento a tiempo.',
    developedSolution:
      'Se estructuró un pipeline analítico que extrae y limpia los datos mediante consultas SQL, organizándolos en un modelo dimensional con tablas de hechos y dimensiones, permitiendo a la gerencia explorar indicadores comerciales a través de filtros temporales y categóricos.',
    features: [
      'Modelado dimensional optimizado (Star Schema) para análisis analítico.',
      'Cálculo de métricas clave de ventas, márgenes, transacciones y crecimiento con DAX.',
      'Exploración visual con segmentadores por fecha, producto, sede y canal de venta.',
      'Visualizaciones de tendencias temporales y comparativas frente a períodos anteriores.',
      'Consultas estructuradas y vistas optimizadas en Microsoft SQL Server.',
    ],
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
      'Propuesta de arquitectura y desarrollo para una aplicación web modular destinada a digitalizar las operaciones comerciales de pequeños negocios. El sistema busca sustituir el manejo manual de registros y pedidos en hojas de cálculo por una interfaz intuitiva, con validación de entradas y almacenamiento seguro.',
    category: 'Sistema web',
    tags: ['TypeScript', 'Astro', 'Tailwind CSS', 'SQL', 'APIs REST'],
    image: '/images/projects/gestion-cover.svg',
    gallery: [
      '/images/projects/gestion-cover.svg',
    ],
    githubUrl: 'https://github.com/DyerMandujano',
    liveUrl: undefined,
    featured: true,
    status: 'en-desarrollo',
    projectType: 'demostrativo',
    badge: 'En Desarrollo',
    problemIdentified:
      'Los pequeños negocios suelen operar con registros fragmentados en cuadernos o múltiples archivos de cálculo, lo que genera retrasos en la atención, inconsistencias en el inventario y dificultad para conocer el estado real de los pedidos.',
    developedSolution:
      'Diseño de un panel de control web unificado, ligero y de respuesta rápida, que centraliza el registro de clientes, catálogo de productos y estados de pedidos, con una interfaz clara y responsiva para dispositivos móviles y de escritorio.',
    features: [
      'Panel administrativo intuitivo para usuarios con perfil operativo y administrativo.',
      'Módulo de gestión de catálogo con estados de inventario.',
      'Control de flujo de pedidos (recibido, en proceso, entregado).',
      'Diseño responsive optimizado para su consulta rápida desde smartphones.',
      'Estructura modular preparada para la integración con servicios backend externos.',
    ],
    highlights: [
      'Panel administrativo intuitivo para usuarios no técnicos',
      'Estructura modular lista para conectarse con APIs REST',
      'Diseño responsive enfocado en usabilidad operativa',
    ],
  },
];
