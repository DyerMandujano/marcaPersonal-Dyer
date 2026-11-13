export { siteConfig, formspreeConfig } from '@/config/site';

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Análisis',
    description: 'Identificación de necesidades, objetivos comerciales y requerimientos del cliente.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Diseño',
    description: 'Elaboración de propuestas visuales, arquitectura de información y prototipos.',
    icon: 'Layout',
  },
  {
    step: '03',
    title: 'Desarrollo',
    description: 'Programación limpia, componentes reutilizables y buenas prácticas de código.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Pruebas',
    description: 'Validación funcional, rendimiento, accesibilidad y diseño responsive.',
    icon: 'CheckCircle2',
  },
  {
    step: '05',
    title: 'Entrega',
    description: 'Publicación en producción, documentación y orientación personalizada.',
    icon: 'Rocket',
  },
] as const;
