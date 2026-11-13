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
    { title: 'Páginas Web', href: '/servicios#desarrollo-web' },
    { title: 'Landing Pages', href: '/servicios#landing-pages' },
    { title: 'Sistemas Web', href: '/servicios#sistemas-web' },
    { title: 'Catálogos y E-Commerce', href: '/servicios#catalogos-ecommerce' },
    { title: 'Inteligencia de Negocios', href: '/servicios#business-intelligence' },
    { title: 'Mantenimiento Web', href: '/servicios#mantenimiento' },
  ],
};
