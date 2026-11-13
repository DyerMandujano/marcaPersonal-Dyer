import type { ExperienceItem, EducationItem } from '@/types/experience';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'oncocare-practicas',
    company: 'ONCOCARE S.A.C.',
    role: 'Practicante Preprofesional de TI – Desarrollo',
    area: 'Tecnologías de la Información',
    type: 'Prácticas preprofesionales',
    period: 'Experiencia Práctica',
    startDate: '2023',
    endDate: '2024',
    responsibilities: [
      'Levantamiento y análisis de requerimientos funcionales en conjunto con usuarios y líderes de área.',
      'Diseño de prototipos de interfaz de usuario y flujos de navegación interactivos en Figma.',
      'Desarrollo y optimización de procedimientos almacenados, funciones y vistas en Microsoft SQL Server.',
      'Construcción y publicación de reportes y cuadros de mando interactivos en Power BI.',
      'Ejecución de pruebas funcionales y validación técnica antes de puestas en producción.',
      'Atención y soporte técnico resolutivo para incidencias en los sistemas internos.',
      'Elaboración de manuales de usuario y capacitación personalizada a personal médico y administrativo.',
      'Gestión y soporte de cuentas de usuario en entorno empresarial con Active Directory.',
    ],
    technologies: ['SQL Server', 'Power BI', 'Figma', 'Active Directory', 'Soporte TI'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'sistemas-computacionales',
    degree: 'Ingeniería de Sistemas Computacionales',
    institution: 'Formación Universitaria',
    status: 'En curso',
    details: 'Enfoque en desarrollo de software, gestión de bases de datos, arquitectura de sistemas y análisis de requerimientos.',
  },
];
