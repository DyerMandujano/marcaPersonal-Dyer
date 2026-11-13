import type { SkillCategory } from '@/types/skill';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Desarrollo Web & Frontend',
    category: 'frontend',
    description: 'Construcción de interfaces modernas, reactivas y orientadas al usuario.',
    skills: [
      { name: 'Angular', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'HTML5', category: 'frontend' },
      { name: 'CSS3 / Tailwind', category: 'frontend' },
      { name: 'Astro', category: 'frontend', isRecent: true },
    ],
  },
  {
    title: 'Backend & APIs',
    category: 'backend',
    description: 'Lógica del lado del servidor, servicios REST y reglas de negocio.',
    skills: [
      { name: 'Java', category: 'backend' },
      { name: 'Spring Boot', category: 'backend' },
      { name: 'APIs REST', category: 'backend' },
    ],
  },
  {
    title: 'Bases de Datos',
    category: 'database',
    description: 'Diseño relacional, consultas complejas y procedimientos almacenados.',
    skills: [
      { name: 'Microsoft SQL Server', category: 'database' },
      { name: 'MySQL', category: 'database' },
      { name: 'SQL', category: 'database' },
    ],
  },
  {
    title: 'Inteligencia de Negocios (BI)',
    category: 'analytics',
    description: 'Análisis de métricas, modelado de datos y visualización gerencial.',
    skills: [
      { name: 'Power BI', category: 'analytics' },
      { name: 'Dashboards & KPIs', category: 'analytics' },
      { name: 'Modelado DAX', category: 'analytics' },
    ],
  },
  {
    title: 'Diseño UX/UI & Prototipado',
    category: 'design',
    description: 'Diseño visual de flujos de interacción y sistemas de diseño.',
    skills: [
      { name: 'Figma', category: 'design' },
      { name: 'Prototipado UX/UI', category: 'design' },
      { name: 'Arquitectura de Información', category: 'design' },
    ],
  },
  {
    title: 'Herramientas & Entorno',
    category: 'tools',
    description: 'Control de versiones, pruebas de endpoints y trabajo en equipo.',
    skills: [
      { name: 'Git', category: 'tools' },
      { name: 'GitHub', category: 'tools' },
      { name: 'Postman', category: 'tools' },
    ],
  },
];
