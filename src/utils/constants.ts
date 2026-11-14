export {
  siteConfig,
  formspreeConfig,
  getWhatsAppUrl,
  WHATSAPP_PHONE_NUMBER,
} from '@/config/site';

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Análisis de necesidades',
    description:
      'Identificación de requerimientos comerciales, objetivos del cliente y alcance del proyecto.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Diseño y prototipado',
    description:
      'Estructuración visual de wireframes y prototipos navegables antes de programar.',
    icon: 'Layout',
  },
  {
    step: '03',
    title: 'Desarrollo e implementación',
    description:
      'Construcción con código limpio, arquitectura desacoplada, accesibilidad y diseño responsive.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Pruebas y entrega',
    description:
      'Control de calidad integral, validación en diferentes dispositivos y navegadores, puesta en producción y orientación.',
    icon: 'CheckCircle2',
  },
] as const;
