import type { SiteConfig } from '@/types/site';

/**
 * CONFIGURACIÓN CENTRALIZADA DEL SITIO WEB
 *
 * Todos los valores editables de la marca, enlaces sociales y canales de
 * contacto se administran exclusivamente desde este archivo.
 */

// Número de WhatsApp internacional para contacto (formato: +51 9XX XXX XXX)
// IMPORTANTE: Reemplazar '51999999999' con tu número real de WhatsApp cuando esté disponible.
export const WHATSAPP_PHONE_NUMBER = '51999999999';

export const siteConfig: SiteConfig = {
  // 1. Nombre de la marca y rol profesional
  name: 'Dyer Mandujano',
  role: 'Desarrollo Web & Soluciones Digitales',
  tagline: 'Transformo ideas en soluciones digitales que impulsan el crecimiento de tu negocio',
  description:
    'Desarrollo páginas web modernas, sistemas personalizados y soluciones tecnológicas para emprendedores y empresas.',

  // 2. Dominio oficial (utilizado para SEO, sitemap y canonical URLs)
  url: 'https://dyermandujano.dev',

  // 3. Autor y metadatos
  author: 'Dyer Mandujano',
  ogImage: '/images/og-image.png',

  // 4. Redes sociales y canales de contacto profesionales
  social: {
    github: 'https://github.com/DyerMandujano',
    // EDITABLE: Reemplazar con el perfil real de LinkedIn cuando esté definido
    linkedin: 'https://linkedin.com/in/dyermandujano',
    whatsappNumber: `+${WHATSAPP_PHONE_NUMBER}`,
    whatsapp: `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hola%20Dyer,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto%20digital.`,
    // EDITABLE: Reemplazar con tu correo electrónico de atención comercial
    email: 'contacto@dyermandujano.dev',
  },

  // 5. Estado de disponibilidad profesional
  availability: {
    status: 'available',
    label: 'Disponible para nuevos proyectos',
  },
};

/**
 * Generador dinámico de enlaces de WhatsApp con mensajes contextualizados.
 * @param customMessage Mensaje opcional personalizado para el chat.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Hola Dyer, me gustaría solicitar una cotización para un proyecto digital.';
  const msg = customMessage || defaultMsg;
  const cleanNumber = siteConfig.social.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
}

/**
 * CONFIGURACIÓN DEL PROVEEDOR DE FORMULARIOS (Formspree)
 *
 * Para activar el envío de correos desde el formulario de contacto:
 * 1. Regístrate gratis en https://formspree.io/
 * 2. Crea un nuevo formulario y copia el Form ID generado (ej: 'xyzgqwer').
 * 3. Reemplaza 'placeholder_form_id' con tu ID real a continuación.
 *
 * Mientras no se configure un ID real, el formulario guiará al usuario a enviar
 * sus datos directamente a tu WhatsApp oficial con el mensaje preformateado.
 */
export const formspreeConfig = {
  endpoint: 'https://formspree.io/f/placeholder_form_id',
};
