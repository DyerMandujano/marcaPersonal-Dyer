import type { Service } from '@/types/service';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo de páginas web empresariales',
    slug: 'desarrollo-web',
    shortDescription: 'Sitios web corporativos modernos, responsivos y optimizados para transmitir confianza y captar clientes.',
    fullDescription:
      'Diseño y desarrollo de sitios web profesionales con diseño responsive, presentación clara de servicios, integración con WhatsApp y formularios de contacto optimizados para captación.',
    iconName: 'Globe',
    features: [
      'Diseño 100% responsive (móvil, tablet, escritorio)',
      'Estructura clara orientada a presentación de servicios',
      'Formularios de contacto seguros y funcionales',
      'Integración directa con canal de WhatsApp',
      'Optimización SEO básica y alto rendimiento de carga',
    ],
    targetAudience: 'Emprendedores, profesionales y pequeños negocios que buscan presencia digital sólida.',
    isFeatured: true,
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    slug: 'landing-pages',
    shortDescription: 'Páginas diseñadas estratégicamente para presentar productos o servicios y maximizar conversiones.',
    fullDescription:
      'Páginas de aterrizaje estratégicas con llamadas a la acción claras, formularios directos y optimización para campañas publicitarias o lanzamientos de servicios.',
    iconName: 'Compass',
    features: [
      'Diseño visual enfocado en conversiones y ventas',
      'Llamadas a la acción (CTAs) estratégicamente ubicadas',
      'Formularios directos para generación de leads',
      'Carga ultrarrápida optimizada para tráfico móvil',
    ],
    targetAudience: 'Negocios con campañas publicitarias activas o lanzamientos específicos.',
    isFeatured: true,
  },
  {
    id: 'ecommerce-catalog',
    title: 'Catálogos digitales y tiendas virtuales',
    slug: 'catalogos-ecommerce',
    shortDescription: 'Plataformas digitales organizadas para exhibir inventario y facilitar pedidos directos por internet.',
    fullDescription:
      'Catálogos digitales organizados con galerías fotográficas, categorización de productos y enlaces de pedido directo para agilizar la compraventa.',
    iconName: 'ShoppingBag',
    features: [
      'Catálogo estructurado de productos y servicios',
      'Organización por categorías y filtros de búsqueda',
      'Galerías de imágenes optimizadas',
      'Integración fluida con canales de venta directa (WhatsApp)',
    ],
    targetAudience: 'Comercios, marcas y emprendedores con inventario físico o digital.',
    isFeatured: true,
  },
  {
    id: 'custom-web-systems',
    title: 'Sistemas web personalizados',
    slug: 'sistemas-web',
    shortDescription: 'Soluciones web a medida para digitalizar procesos internos, gestionar información y ahorrar tiempo.',
    fullDescription:
      'Aplicaciones web a medida orientadas a resolver flujos de trabajo internos, administración de datos, paneles de control y automatización de procesos operativos.',
    iconName: 'Cpu',
    features: [
      'Sistemas administrativos y paneles de control',
      'Gestión centralizada de información',
      'Automatización de procesos repetitivos',
      'Arquitectura modular y escalable',
    ],
    targetAudience: 'Pymes y empresas que requieren digitalizar operaciones internas.',
    isFeatured: true,
  },
  {
    id: 'business-intelligence',
    title: 'Inteligencia de negocios y dashboards',
    slug: 'business-intelligence',
    shortDescription: 'Transformación de datos en dashboards interactivos para facilitar la toma de decisiones gerenciales.',
    fullDescription:
      'Creación de dashboards interactivos en Power BI, modelado de consultas SQL y preparación de reportes analíticos para directores y gerentes.',
    iconName: 'BarChart3',
    features: [
      'Dashboards interactivos en Power BI',
      'Reportes visuales de indicadores clave (KPIs)',
      'Desarrollo de consultas y vistas SQL estructuradas',
      'Preparación, limpieza y consolidación de datos',
    ],
    targetAudience: 'Empresas que disponen de datos transaccionales y buscan visibilidad ejecutiva.',
    isFeatured: true,
  },
  {
    id: 'web-maintenance',
    title: 'Mantenimiento web y soporte tecnológico',
    slug: 'mantenimiento',
    shortDescription: 'Soporte técnico continuo, actualización de contenidos, mejoras visuales y prevención de incidencias.',
    fullDescription:
      'Soporte técnico preventivo y correctivo, actualización periódica de contenidos, mejoras visuales y optimización técnica para asegurar estabilidad.',
    iconName: 'Wrench',
    features: [
      'Actualización periódica de contenidos y banners',
      'Corrección de errores y problemas visuales',
      'Optimizaciones de velocidad y seguridad',
      'Soporte técnico continuo y confiable',
    ],
    targetAudience: 'Negocios que ya tienen una web pero necesitan soporte técnico constante.',
    isFeatured: true,
  },
];
