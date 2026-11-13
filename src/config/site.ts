import type { SiteConfig } from '@/types/site';

export const siteConfig: SiteConfig = {
  name: 'Dyer Mandujano',
  role: 'Desarrollo Web & Soluciones Digitales',
  tagline: 'Transformo ideas en soluciones digitales que impulsan el crecimiento de tu negocio',
  description:
    'Desarrollo páginas web modernas, sistemas personalizados y soluciones tecnológicas para emprendedores y empresas.',
  url: 'https://dyermandujano.dev', // Dominio editable
  author: 'Dyer Mandujano',
  ogImage: '/images/og-image.png',
  social: {
    github: 'https://github.com/DyerMandujano',
    linkedin: 'https://linkedin.com/in/dyermandujano-placeholder', // EDITABLE: pendiente de confirmar por Dyer
    whatsapp: 'https://wa.me/51999999999?text=Hola%20Dyer,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto', // EDITABLE
    email: 'contacto@dyermandujano.dev', // EDITABLE
  },
  availability: {
    status: 'available',
    label: 'Disponible para nuevos proyectos',
  },
};

export const formspreeConfig = {
  // Configuración de formulario de contacto (Formspree)
  // Reemplazar con el ID de formulario real obtenido en https://formspree.io/
  endpoint: 'https://formspree.io/f/placeholder_form_id', // EDITABLE
};
