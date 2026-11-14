import type { NavItem } from '@/types/site';

export const NAV_ITEMS: NavItem[] = [
  { title: 'Inicio', href: '/' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Proyectos', href: '/proyectos' },
  { title: 'Sobre mí', href: '/sobre-mi' },
  { title: 'Contacto', href: '/contacto' },
];

export const FOOTER_LINKS = {
  navigation: NAV_ITEMS,
  services: [
    { title: 'Páginas Web Empresariales', href: '/servicios#desarrollo-web' },
    { title: 'Landing Pages', href: '/servicios#landing-pages' },
    { title: 'Catálogos y Tiendas Virtuales', href: '/servicios#catalogos-ecommerce' },
    { title: 'Sistemas Web Personalizados', href: '/servicios#sistemas-web' },
    { title: 'Inteligencia de Negocios & BI', href: '/servicios#business-intelligence' },
    { title: 'Mantenimiento & Soporte TI', href: '/servicios#mantenimiento' },
  ],
};
