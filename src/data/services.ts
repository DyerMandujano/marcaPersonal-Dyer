import type { Service } from '@/types/service';

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo de páginas web empresariales',
    slug: 'desarrollo-web',
    shortDescription:
      'Sitios web corporativos modernos, responsivos y optimizados para transmitir confianza y captar clientes potenciales.',
    fullDescription:
      'Diseño y desarrollo de sitios web profesionales a la medida de tu empresa. No utilizo plantillas genéricas sobrecargadas, sino código limpio optimizado para una carga ultrarrápida, navegación intuitiva y una sólida presentación comercial de tus servicios o productos.',
    problemSolved:
      'Muchos negocios pierden clientes por contar con páginas web desactualizadas, lentas, no adaptadas a teléfonos móviles o que no transmiten confianza y profesionalismo.',
    benefits: [
      'Presencia digital profesional que genera credibilidad inmediata frente a la competencia.',
      'Carga instantánea que reduce la tasa de rebote y mejora la retención de visitantes.',
      'Navegación adaptada a pantallas móviles, tablets y computadoras de escritorio.',
      'Facilidad para que los prospectos soliciten cotizaciones o contacten por WhatsApp en un clic.',
    ],
    features: [
      'Diseño 100% responsivo y adaptativo para todos los dispositivos.',
      'Estructura de secciones comerciales pensada en la conversión del usuario.',
      'Integración con botones directos de WhatsApp y llamadas telefónicas.',
      'Formularios de contacto seguros con validación de datos en tiempo real.',
      'Optimización técnica de rendimiento (Core Web Vitals) y SEO básico.',
      'Enlaces a redes sociales y canales de atención corporativos.',
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'HTML5 Semántico', 'Vercel / Cloudflare'],
    iconName: 'Globe',
    targetAudience: 'Emprendedores, pequeñas y medianas empresas, estudios profesionales y prestadores de servicios.',
    isFeatured: true,
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    slug: 'landing-pages',
    shortDescription:
      'Páginas de aterrizaje diseñadas estratégicamente para presentar productos o servicios específicos y maximizar conversiones.',
    fullDescription:
      'Páginas web de una sola sección o enfoque directo, construidas con una narrativa visual y comercial diseñada para dirigir la atención del visitante hacia una única acción clave: solicitar una cotización, registrarse o contactar a ventas.',
    problemSolved:
      'Invertir presupuesto en publicidad digital (Facebook Ads, Google Ads, TikTok) y dirigir el tráfico a sitios web genéricos o confusos donde los usuarios se dispersan sin contactar.',
    benefits: [
      'Incremento en la tasa de conversión de prospectos a clientes potenciales.',
      'Mensaje directo y claro enfocado en una propuesta de valor única.',
      'Carga inmediata para no perder tráfico proveniente de anuncios móviles.',
      'Estructura ideal para medir el retorno de inversión en campañas de marketing.',
    ],
    features: [
      'Títulos de impacto y llamadas a la acción (CTAs) estratégicamente distribuidas.',
      'Formularios directos de cotización con la menor cantidad de pasos posible.',
      'Bloques de beneficios, testimonios o garantías para derribar objeciones.',
      'Velocidad de carga superior para optimizar el Quality Score de anuncios pagados.',
      'Compatibilidad con píxeles de seguimiento y herramientas de analítica.',
    ],
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript', 'Formspree / Webhooks'],
    iconName: 'Compass',
    targetAudience: 'Negocios con campañas publicitarias activas, lanzamientos de cursos, servicios o promociones puntuales.',
    isFeatured: true,
  },
  {
    id: 'ecommerce-catalog',
    title: 'Catálogos digitales y tiendas virtuales',
    slug: 'catalogos-ecommerce',
    shortDescription:
      'Plataformas digitales organizadas para exhibir inventarios comerciales y facilitar pedidos directos por internet.',
    fullDescription:
      'Soluciones digitales dinámicas para marcas y comercios que desean exhibir sus productos de forma ordenada, con categorías, especificaciones, precios y galerías fotográficas, facilitando que el cliente arme su pedido y lo envíe directamente a tu canal de ventas.',
    problemSolved:
      'Tener que enviar catálogos en archivos PDF pesados y desactualizados por mensaje, o perder ventas porque los clientes no encuentran con facilidad lo que buscan ni sus precios.',
    benefits: [
      'Tus clientes consultan tu catálogo completo las 24 horas del día desde su teléfono móvil.',
      'Facilita la actualización periódica de productos, descripciones y precios.',
      'Agiliza la recepción de pedidos organizados directamente a través de WhatsApp.',
      'Presentación visual moderna que realza el valor percibido de tus productos.',
    ],
    features: [
      'Organización por categorías, etiquetas y buscador interactivo.',
      'Fichas detalladas con galerías de imágenes y atributos técnicos.',
      'Botón de pedido personalizado por producto con mensaje preconfigurado.',
      'Optimización del peso de imágenes para una navegación rápida y ligera.',
      'Diseño pensado para negocios que venden en redes sociales y desean formalizarse.',
    ],
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'APIs REST / JSON', 'WhatsApp Web API'],
    iconName: 'ShoppingBag',
    targetAudience: 'Tiendas de ropa, tecnología, repuestos, artesanías, regalos, distribuidores mayoristas y minoristas.',
    isFeatured: true,
  },
  {
    id: 'custom-web-systems',
    title: 'Sistemas web personalizados',
    slug: 'sistemas-web',
    shortDescription:
      'Soluciones web a medida para digitalizar procesos internos, gestionar información y ahorrar tiempo operativo.',
    fullDescription:
      'Desarrollo de aplicaciones web administrativas construidas a la medida exacta de tus flujos de trabajo. Si tu negocio superó las hojas de cálculo y necesitas centralizar información, controlar accesos y automatizar tareas repetitivas, un sistema web a medida es la solución.',
    problemSolved:
      'Pérdida de datos, duplicidad de registros y errores manuales ocasionados por el uso excesivo de archivos de Excel aislados y procesos manuales desorganizados.',
    benefits: [
      'Información centralizada y accesible en tiempo real para tu equipo de trabajo.',
      'Control de roles y permisos para proteger los datos sensibles de tu empresa.',
      'Reducción drástica del tiempo invertido en tareas administrativas rutinarias.',
      'Plataforma escalable que crece junto con el volumen de operaciones de tu negocio.',
    ],
    features: [
      'Paneles de administración (Dashboards de control interno).',
      'Módulos de registro, edición y consulta de clientes, pedidos o inventario.',
      'Validaciones lógicas para evitar errores en el ingreso de datos.',
      'Exportación estructurada de reportes en formatos estándar.',
      'Arquitectura desacoplada y segura con diseño orientado a la usabilidad operativa.',
    ],
    technologies: ['TypeScript', 'Angular / Astro', 'Java / Spring Boot', 'SQL Server / MySQL', 'APIs REST'],
    iconName: 'Cpu',
    targetAudience: 'Pequeñas y medianas empresas, distribuidoras, clínicas, centros educativos y negocios con procesos internos.',
    isFeatured: true,
  },
  {
    id: 'business-intelligence',
    title: 'Inteligencia de negocios y dashboards',
    slug: 'business-intelligence',
    shortDescription:
      'Transformación de datos en dashboards interactivos para facilitar la toma de decisiones gerenciales basadas en hechos.',
    fullDescription:
      'Servicio de extracción, limpieza, modelado y visualización de datos empresariales mediante Power BI y consultas SQL. Te ayudo a convertir grandes volúmenes de datos transaccionales en tableros ejecutivos claros para entender qué ocurre en tus ventas, finanzas u operaciones.',
    problemSolved:
      'Tener datos dispersos en múltiples fuentes y tardar días preparando informes manuales, impidiendo tomar decisiones rápidas y basadas en métricas reales.',
    benefits: [
      'Visibilidad gerencial integral de los indicadores clave de rendimiento (KPIs).',
      'Ahorro de horas hombre en la elaboración repetitiva de reportes mensuales o semanales.',
      'Detección oportuna de tendencias comerciales, desviaciones de costos o caídas en ventas.',
      'Filtros interactivos que permiten explorar la información por fechas, sedes o categorías.',
    ],
    features: [
      'Modelado de bases de datos dimensionales (modelo estrella / copo de nieve).',
      'Desarrollo de métricas y cálculos avanzados con lenguaje DAX.',
      'Construcción de vistas, consultas y procedimientos en Microsoft SQL Server.',
      'Tableros visuales interactivos y ejecutivos en Power BI.',
      'Capacitación básica para la lectura y explotación de los reportes por parte del equipo.',
    ],
    technologies: ['Power BI', 'Microsoft SQL Server', 'DAX', 'Power Query / ETL', 'SQL'],
    iconName: 'BarChart3',
    targetAudience: 'Gerentes, administradores, jefes de área y empresas con sistemas transaccionales que buscan analítica de datos.',
    isFeatured: true,
  },
  {
    id: 'web-maintenance',
    title: 'Mantenimiento web y soporte tecnológico',
    slug: 'mantenimiento',
    shortDescription:
      'Soporte técnico continuo, actualización de contenidos, mejoras visuales y prevención de incidencias operativas.',
    fullDescription:
      'Un sitio web o sistema necesita mantenimiento regular para mantenerse seguro, rápido y alineado con los cambios comerciales de tu negocio. Ofrezco planes de soporte técnico y actualización para que nunca tengas que preocuparte por fallas técnicas inesperadas.',
    problemSolved:
      'Sitios web abandonados con información desactualizada, enlaces rotos, lentitud progresiva o falta de personal técnico disponible para resolver urgencias.',
    benefits: [
      'Tranquilidad de contar con un profesional de confianza para cualquier cambio o eventualidad.',
      'Tu sitio web siempre actualizado con nuevas ofertas, servicios y datos de contacto.',
      'Corrección oportuna de errores antes de que afecten la experiencia de tus clientes.',
      'Monitoreo preventivo del rendimiento y disponibilidad del servicio.',
    ],
    features: [
      'Actualización periódica de textos, banners, productos y secciones.',
      'Revisión y optimización continua de tiempos de carga y velocidad.',
      'Detección y corrección de enlaces rotos o desajustes responsivos en móviles.',
      'Orientación y asistencia tecnológica para dominios, correos y hosting.',
      'Soporte técnico puntual con tiempos de respuesta acordados.',
    ],
    technologies: ['HTML5', 'CSS3 / Tailwind', 'TypeScript', 'Gestión de Dominios / DNS', 'Git / GitHub'],
    iconName: 'Wrench',
    targetAudience: 'Negocios que ya cuentan con un sitio web pero no tienen tiempo ni equipo técnico interno para mantenerlo.',
    isFeatured: true,
  },
];
