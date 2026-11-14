# Dyer Mandujano – Sitio Web Profesional

> Sitio web profesional y comercial de marca personal para **Dyer Mandujano**, orientado a ofrecer servicios de desarrollo web, landing pages, sistemas personalizados e inteligencia de negocios a emprendedores, pequeños negocios y medianas empresas.

Desarrollado con una arquitectura moderna de alto rendimiento basada en **Astro (SSG)**, **TypeScript**, **Tailwind CSS** y **Lucide Icons**.

---

## 🚀 Tecnologías Principales

* **Framework Principal:** [Astro v4.16](https://astro.build/) (Modo Static Site Generation - SSG).
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) configurado en modo estricto.
* **Estilos & Diseño:** [Tailwind CSS v3.4](https://tailwindcss.com/) con sistema de diseño corporativo.
* **Tipografía:** [Inter Variable](https://fontsource.org/fonts/inter) auto-hospedada de alto rendimiento.
* **Iconografía:** [Lucide Astro](https://lucide.dev/) (iconos SVG nativos en compilación).
* **SEO Técnico:** `@astrojs/sitemap`, Open Graph, Twitter Cards y Schema.org (JSON-LD).
* **Despliegue:** Preparado para [Vercel](https://vercel.com/) con CDN global y caché inmutable.

---

## 📁 Estructura del Proyecto

```text
MARCA_PERSONAL_WEB/
├── public/                     # Archivos estáticos directos
│   ├── favicon.svg             # Isotipo DM en SVG
│   ├── robots.txt              # Reglas de indexación para motores de búsqueda
│   ├── site.webmanifest        # Manifiesto PWA para dispositivos móviles
│   └── images/                 # Portadas SVG y recursos gráficos
│       ├── og-image.svg        # Previsualización para redes sociales
│       └── projects/           # Mockups vectoriales de proyectos
│
├── src/
│   ├── components/             # Componentes modulares y reutilizables
│   │   ├── common/             # Botones, títulos, badges y contenedores
│   │   ├── layout/             # Navbar sticky, menú móvil accesible y footer
│   │   ├── home/               # Secciones dedicadas de la página principal
│   │   ├── contact/            # Botón flotante de WhatsApp y formulario
│   │   └── seo/                # Metadatos SEO, Open Graph y Schema.org JSON-LD
│   │
│   ├── config/
│   │   └── site.ts             # CONFIGURACIÓN CENTRALIZADA (Datos editables)
│   │
│   ├── data/                   # Datos estructurados en TypeScript
│   │   ├── services.ts         # Catálogo detallado de los 6 servicios
│   │   ├── projects.ts         # Proyectos reales, académicos y demostrativos
│   │   ├── experience.ts       # Trayectoria en ONCOCARE S.A.C. y educación
│   │   ├── skills.ts           # Habilidades categorizadas por área técnica
│   │   └── navigation.ts       # Enlaces de cabecera y pie de página
│   │
│   ├── layouts/
│   │   └── MainLayout.astro    # Plantilla maestra con accesibilidad y SEO
│   │
│   ├── pages/                  # Enrutamiento estático (SSG)
│   │   ├── index.astro         # Página de inicio
│   │   ├── 404.astro           # Manejador amigable de error 404
│   │   ├── servicios/          # Fichas completas de servicios
│   │   ├── proyectos/          # Portafolio filtrable y ficha técnica ([slug].astro)
│   │   ├── sobre-mi/           # Perfil profesional y experiencia
│   │   └── contacto/           # Formulario validado y canales directos
│   │
│   ├── styles/
│   │   └── global.css          # Variables CSS, utilidades y accesibilidad
│   │
│   └── types/                  # Interfaces y definiciones de tipos TypeScript
│
├── astro.config.mjs            # Configuración de integraciones de Astro
├── package.json                # Scripts y dependencias
├── tailwind.config.mjs         # Tokens de diseño y colores corporativos
├── tsconfig.json               # Configuración estricta de compilador TypeScript
└── vercel.json                 # Cabeceras de seguridad y caché para Vercel
```

---

## ⚙️ Requisitos Previos

* **Node.js:** Versión 18.17.1 o superior (recomendado Node.js 20 LTS).
* **npm:** Versión 9.0 o superior.
* **Git:** Para control de versiones.

---

## 📦 Instalación y Ejecución Local

1. **Clonar o abrir el repositorio en la carpeta local:**
   ```bash
   cd F:\MARCA_PERSONAL_WEB
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la web con recarga rápida en vivo (*Hot Module Replacement*).

4. **Ejecutar verificación de tipos y compilación de producción:**
   ```bash
   npm run build
   ```
   Genera el directorio optimizado `dist/` con 0 errores de TypeScript y el sitemap generado.

5. **Previsualizar la compilación de producción localmente:**
   ```bash
   npm run preview
   ```

---

## 🛠️ Personalización y Configuración Centralizada

Para modificar datos personales, números de contacto o enlaces de redes sociales, **solo necesitas editar un único archivo:**

📂 `src/config/site.ts`:

* **Número de WhatsApp:**
  ```typescript
  export const WHATSAPP_PHONE_NUMBER = '51999999999'; // Reemplazar con tu número real
  ```
* **Correo de atención comercial:**
  ```typescript
  email: 'contacto@dyermandujano.dev',
  ```
* **Enlace a LinkedIn:**
  ```typescript
  linkedin: 'https://linkedin.com/in/tu-usuario-real',
  ```
* **Dominio web oficial:**
  ```typescript
  url: 'https://dyermandujano.dev',
  ```
* **Formulario de contacto (Formspree):**
  1. Crea una cuenta gratuita en [Formspree](https://formspree.io/).
  2. Crea un formulario nuevo y copia el Form ID generado (ej: `mbjndkwq`).
  3. Reemplaza el ID en `formspreeConfig.endpoint`:
     ```typescript
     export const formspreeConfig = {
       endpoint: 'https://formspree.io/f/TU_FORM_ID',
     };
     ```
  > *Nota: Mientras no se configure un ID real, el formulario guiará al cliente a enviar sus datos directamente a tu WhatsApp oficial con el mensaje ya estructurado.*

---

## 🌐 Despliegue en Vercel

El proyecto está 100% preparado para ser publicado en **Vercel** de forma gratuita:

### Paso 1: Subir cambios a tu repositorio en GitHub
```bash
git add .
git commit -m "feat: release version 1.0.0"
git push origin main
```

### Paso 2: Importar en Vercel
1. Ingresa a [vercel.com](https://vercel.com/) e inicia sesión con tu cuenta de GitHub (`DyerMandujano`).
2. Haz clic en **"Add New..."** > **"Project"**.
3. Selecciona el repositorio `MARCA_PERSONAL_WEB`.
4. Vercel detectará automáticamente la configuración de Astro:
   * **Framework Preset:** `Astro`
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
   * **Install Command:** `npm install`
5. En la sección **Environment Variables**, añade:
   * Nombre: `ASTRO_TELEMETRY_DISABLED`
   * Valor: `1`
6. Haz clic en **"Deploy"**.

En menos de 2 minutos tu sitio estará en línea con certificado SSL gratuito (HTTPS), CDN de alta velocidad y conexión automática con tu dominio personalizado.

---

## 📄 Licencia y Derechos

© 2026 Dyer Mandujano. Todos los derechos reservados.
Desarrollado con Astro y Tailwind CSS.
