# PROYECTO: SITIO WEB PROFESIONAL – DYER MANDUJANO

## 1. ROL Y OBJETIVO

Actúa como un desarrollador frontend senior, arquitecto de software y especialista en UI/UX, SEO y diseño web moderno.

Tu objetivo es diseñar y desarrollar un sitio web profesional para mi marca personal "Dyer Mandujano", orientada a ofrecer servicios de desarrollo web y soluciones digitales para emprendedores, pequeños negocios y medianas empresas.

No quiero una página web genérica ni una plantilla convencional. Quiero un sitio moderno, elegante, minimalista, tecnológico y visualmente atractivo, que transmita profesionalismo, confianza y experiencia técnica.

La página debe funcionar como mi portafolio profesional y como una herramienta comercial para captar potenciales clientes.

El objetivo principal es que los visitantes conozcan mis servicios, revisen mis proyectos y puedan contactarme para solicitar una cotización.

Debes desarrollar el proyecto completo, no limitarte a generar una propuesta visual o una demostración.

---

## 2. INFORMACIÓN DE LA MARCA

Nombre: Dyer Mandujano.

Tipo de marca: Marca personal profesional.

Especialidad: Desarrollo web y soluciones digitales.

Público objetivo:
- Emprendedores.
- Pequeños negocios.
- Medianas empresas.
- Profesionales independientes.
- Negocios que necesitan digitalizar sus procesos.

Propuesta de valor:

"Transformo ideas en soluciones digitales que impulsan el crecimiento de tu negocio".

Mensaje principal de la página:

"Tu negocio merece una presencia digital profesional".

Descripción:

"Desarrollo páginas web modernas, sistemas personalizados y soluciones tecnológicas que ayudan a emprendedores y empresas a fortalecer su presencia digital, optimizar sus procesos y alcanzar sus objetivos".

Tono de comunicación:
- Profesional.
- Cercano.
- Moderno.
- Confiable.
- Orientado a resultados.

Todo el contenido de la página debe estar redactado en español.

---

## 3. TECNOLOGÍAS OBLIGATORIAS

Utiliza las siguientes tecnologías:

- Astro como framework principal.
- TypeScript para la programación.
- Tailwind CSS para los estilos.
- HTML5 semántico.
- CSS moderno.
- JavaScript cuando sea necesario.
- Lucide Icons para iconografía.
- Git y GitHub para control de versiones.
- Vercel como plataforma de despliegue.

Utiliza versiones estables y compatibles de las dependencias al momento de crear el proyecto.

Consideraciones técnicas:

1. Utiliza Astro con generación estática (SSG).
2. Prioriza componentes reutilizables.
3. No implementes Spring Boot ni backend propio en esta primera versión.
4. No utilices SQL Server ni bases de datos.
5. Evita dependencias innecesarias.
6. Utiliza TypeScript correctamente tipado.
7. Utiliza Tailwind CSS para mantener consistencia visual.
8. El proyecto debe estar preparado para desplegarse en Vercel.
9. Implementa buenas prácticas de accesibilidad.
10. No utilices código duplicado innecesariamente.

---

## 4. IDENTIDAD VISUAL Y DISEÑO

Quiero una estética moderna, tecnológica y minimalista, similar a los sitios web de estudios profesionales de desarrollo digital.

### Paleta de colores

Utiliza los siguientes colores:

- Navy oscuro: #101828
- Azul principal: #2563EB
- Cian secundario: #06B6D4
- Fondo principal: #F8FAFC
- Blanco: #FFFFFF
- Texto principal: #101828
- Texto secundario: #64748B
- Bordes: #E2E8F0

El azul eléctrico debe utilizarse para botones, enlaces y elementos destacados.

El navy debe utilizarse en secciones importantes, especialmente el Hero y el Footer.

### Tipografía

Utiliza:
- Inter o Manrope para la tipografía principal.
- Pesos 400, 500, 600 y 700.
- Jerarquía visual clara entre títulos, subtítulos y textos.

### Lineamientos de diseño

- Diseño limpio y minimalista.
- Espaciado amplio.
- Bordes redondeados moderados.
- Sombras suaves.
- Animaciones sutiles.
- Transiciones fluidas.
- Iconografía consistente.
- Tarjetas modernas.
- Microinteracciones en botones.
- Diseño completamente responsive.

Evita:
- Diseños recargados.
- Exceso de gradientes.
- Animaciones exageradas.
- Elementos decorativos sin propósito.
- Demasiados colores.
- Apariencia de plantilla genérica.

El resultado debe parecer el sitio web de un profesional tecnológico que ofrece servicios a empresas.

---

## 5. ESTRUCTURA DE CARPETAS

Organiza el proyecto utilizando la siguiente estructura:

dyer-web/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── services/
│   │   └── backgrounds/
│   │
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── MobileMenu.astro
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesPreview.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   ├── AboutPreview.astro
│   │   │   ├── WorkProcess.astro
│   │   │   └── ContactCTA.astro
│   │   │
│   │   ├── services/
│   │   │   ├── ServiceCard.astro
│   │   │   └── ServiceDetails.astro
│   │   │
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.astro
│   │   │   └── ProjectDetails.astro
│   │   │
│   │   ├── about/
│   │   │   ├── ExperienceTimeline.astro
│   │   │   ├── Skills.astro
│   │   │   └── Education.astro
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactForm.astro
│   │   │   └── WhatsAppButton.astro
│   │   │
│   │   └── common/
│   │       ├── SectionTitle.astro
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       └── Container.astro
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios/
│   │   │   └── index.astro
│   │   ├── proyectos/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── sobre-mi/
│   │   │   └── index.astro
│   │   └── contacto/
│   │       └── index.astro
│   │
│   ├── data/
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── navigation.ts
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── utils/
│       ├── constants.ts
│       └── seo.ts
│
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── README.md
└── .gitignore

Puedes realizar ajustes técnicos a esta estructura cuando exista una justificación real, pero mantén la separación entre componentes, páginas, datos y estilos.

---

# 6. SECCIONES Y FUNCIONALIDADES

Desarrolla las siguientes secciones:

## 6.1. NAVBAR

Crear una barra de navegación moderna y profesional.

Elementos:

- Logotipo tipográfico "DM".
- Nombre "Dyer Mandujano".
- Inicio.
- Servicios.
- Proyectos.
- Sobre mí.
- Contacto.
- Botón destacado "Hablemos".

Requisitos:
- Navbar sticky.
- Fondo blanco con ligera transparencia al hacer scroll, si aporta al diseño.
- Menú responsive.
- Menú hamburguesa en dispositivos móviles.
- Animación sutil al abrir y cerrar el menú.
- Enlaces funcionales a las respectivas rutas.
- Estado activo para identificar la sección o página actual.

## 6.2. HERO – PÁGINA PRINCIPAL

Esta será una de las secciones visualmente más importantes.

Título principal:

"Transformo ideas en soluciones digitales para impulsar tu negocio".

Subtítulo:

"Diseño y desarrollo páginas web modernas, sistemas personalizados y soluciones tecnológicas para emprendedores y empresas".

Agregar dos botones:

- "Solicitar una cotización".
- "Explorar proyectos".

Incluir:
- Elementos visuales tecnológicos.
- Composición moderna.
- Algún recurso gráfico relacionado con desarrollo web.
- Indicadores visuales de tecnologías.
- Una presentación atractiva de mi perfil profesional.

No utilizar fotografías de personas desconocidas como si fueran mi fotografía personal.

Si no proporciono una fotografía, utilizar un diseño tipográfico o avatar abstracto temporal.

## 6.3. SERVICIOS

Crear una sección con tarjetas visuales para los siguientes servicios:

### Servicio 1: Desarrollo de páginas web

Descripción:
Creación de páginas web profesionales, modernas y adaptadas a las necesidades de cada negocio.

Características:
- Diseño responsive.
- Presentación de servicios.
- Formularios de contacto.
- Integración con WhatsApp.
- Optimización SEO básica.

### Servicio 2: Landing Pages

Descripción:
Páginas diseñadas para presentar productos, servicios o campañas comerciales y facilitar la captación de clientes.

Características:
- Diseño orientado a conversiones.
- Llamadas a la acción.
- Formularios.
- Diseño optimizado para móviles.

### Servicio 3: Sistemas web personalizados

Descripción:
Desarrollo de soluciones web para digitalizar procesos y facilitar la administración de negocios.

Características:
- Sistemas administrativos.
- Gestión de información.
- Paneles de control.
- Automatización de procesos.

### Servicio 4: Tiendas virtuales y catálogos digitales

Descripción:
Soluciones digitales para mostrar productos y facilitar las ventas por internet.

Características:
- Catálogo de productos.
- Categorías.
- Galerías de imágenes.
- Integración con canales de contacto.

### Servicio 5: Inteligencia de negocios

Descripción:
Transformación de datos en información útil para facilitar la toma de decisiones empresariales.

Características:
- Dashboards en Power BI.
- Reportes empresariales.
- Consultas SQL.
- Preparación y consolidación de datos.

### Servicio 6: Mantenimiento web

Descripción:
Mantenimiento y mejora continua de sitios web y aplicaciones.

Características:
- Actualización de contenido.
- Corrección de errores.
- Mejoras visuales.
- Soporte técnico.

Cada servicio debe incluir icono, título, descripción y enlace para solicitar información.

No inventes certificaciones ni garantías.

## 6.4. PORTAFOLIO DE PROYECTOS

Crear una sección visualmente atractiva que permita mostrar mis proyectos.

Utilizar tarjetas con:
- Imagen o captura del proyecto.
- Nombre.
- Descripción.
- Tecnologías.
- Categoría.
- Botón para ver detalles.
- Enlace al repositorio GitHub cuando corresponda.
- Enlace a demostración cuando exista.

Proyectos iniciales:

### Proyecto 1: SkillUp

Descripción:
Plataforma E-Learning orientada a facilitar el acceso a formación técnica mediante cursos virtuales, gestión de usuarios, seguimiento de cursos y emisión de certificados.

Tecnologías:
Angular, TypeScript, Spring Boot y SQL Server.

Categoría:
Plataforma web.

### Proyecto 2: Sistema de gestión empresarial

Utilizar únicamente si existe un proyecto real apropiado en mi repositorio. Si no existe, dejar una tarjeta de proyecto pendiente de completar.

### Proyecto 3: Dashboard de inteligencia de negocios

Proyecto demostrativo orientado al análisis y visualización de datos empresariales con Power BI.

No afirmar que fue implementado en ONCOCARE ni publicar información interna de dicha empresa.

IMPORTANTE:

Mi GitHub es:
https://github.com/DyerMandujano

Revisa los repositorios públicos y utiliza únicamente información verificable.

No inventes proyectos, tecnologías utilizadas, resultados ni funcionalidades.

Si no puedes acceder a GitHub, prepara la estructura para que yo pueda completar los datos posteriormente.

Implementa los proyectos mediante un archivo centralizado projects.ts para facilitar su mantenimiento.

## 6.5. SOBRE MÍ

Crear una sección profesional que transmita confianza.

Título:

"Detrás de cada solución digital hay una idea que merece hacerse realidad".

Utilizar la siguiente información:

Soy Dyer Mandujano, estudiante de Ingeniería de Sistemas Computacionales y desarrollador de soluciones digitales.

Tengo interés y experiencia práctica en desarrollo web, bases de datos, análisis de requerimientos, diseño de interfaces y soluciones tecnológicas orientadas a empresas.

Durante mis prácticas preprofesionales en el área de Tecnologías de la Información de ONCOCARE S.A.C., participé en actividades relacionadas con el análisis de requerimientos, diseño de prototipos, desarrollo de consultas SQL, elaboración de reportes y dashboards en Power BI, pruebas funcionales y soporte tecnológico.

También participé en la documentación de funcionalidades y capacitación de usuarios sobre nuevas herramientas implementadas.

Mi objetivo es ayudar a emprendedores y empresas a fortalecer su presencia digital y mejorar sus procesos mediante soluciones tecnológicas funcionales y modernas.

No presentar las prácticas como un empleo de desarrollador senior ni atribuirme responsabilidades que no desempeñé.

## 6.6. EXPERIENCIA PROFESIONAL

Crear una línea de tiempo moderna.

Empresa:
ONCOCARE S.A.C.

Área:
Tecnologías de la Información – Desarrollo.

Tipo:
Prácticas preprofesionales.

Actividades realizadas:

- Atención y resolución de incidencias tecnológicas.
- Levantamiento y análisis de requerimientos.
- Elaboración de prototipos y flujos de navegación en Figma.
- Coordinación con usuarios y responsables de áreas.
- Desarrollo de procedimientos almacenados y vistas en SQL Server.
- Elaboración de reportes y dashboards en Power BI.
- Pruebas funcionales y validación de aplicaciones.
- Elaboración de manuales de usuario.
- Capacitación a médicos y personal administrativo.
- Administración de cuentas de usuario mediante Active Directory.

Mostrar estas actividades de forma resumida, organizada y visual.

No publicar información confidencial ni detalles internos de los sistemas empresariales.

## 6.7. HABILIDADES Y TECNOLOGÍAS

Crear una sección de habilidades agrupadas por categorías.

Desarrollo web:
- Angular.
- TypeScript.
- JavaScript.
- HTML5.
- CSS3.
- Astro.

Backend:
- Java.
- Spring Boot.
- APIs REST.

Bases de datos:
- Microsoft SQL Server.
- MySQL.
- SQL.

Diseño:
- Figma.
- Prototipado UX/UI.

Inteligencia de negocios:
- Power BI.

Herramientas:
- Git.
- GitHub.
- Postman.

Mostrar tecnologías mediante iconos y etiquetas visuales.

IMPORTANTE: presentar Astro como tecnología que utilizo en este nuevo proyecto, no como experiencia profesional previa. No inventar niveles de dominio ni certificaciones.

## 6.8. METODOLOGÍA DE TRABAJO

Crear una sección que explique cómo desarrollo los proyectos.

Etapas:

1. Análisis: identificación de necesidades y objetivos del cliente.
2. Diseño: elaboración de propuestas visuales y prototipos.
3. Desarrollo: programación e implementación.
4. Pruebas: validación funcional y corrección de errores.
5. Entrega: publicación y orientación al cliente.

Utilizar un diseño visual con pasos numerados, iconos y conectores.

## 6.9. CONTACTO

Crear una sección orientada a convertir visitantes en clientes.

Título:

"¿Tienes un proyecto en mente? Hagámoslo realidad".

Subtítulo:

"Cuéntame qué necesitas y conversemos sobre cómo puedo ayudarte".

Incluir un formulario con:

- Nombre completo.
- Nombre del negocio.
- Correo electrónico.
- Tipo de servicio.
- Presupuesto aproximado.
- Descripción del proyecto.

Incluir:
- Botón para enviar.
- Validaciones de campos.
- Mensajes de error.
- Mensaje de confirmación.
- Enlace a WhatsApp.
- Correo electrónico.
- Enlaces a LinkedIn y GitHub.

No inventes mi número telefónico, correo ni perfiles sociales. Utiliza constantes editables con valores pendientes claramente identificados.

El formulario debe estar preparado para integrarse con un servicio externo como Formspree o una solución equivalente. No simular que los datos se enviaron si no existe una integración funcional.

## 6.10. FOOTER

Incluir:
- Logotipo DM.
- Nombre.
- Descripción breve.
- Enlaces de navegación.
- Servicios principales.
- GitHub.
- LinkedIn.
- WhatsApp.
- Copyright dinámico según el año actual.

---

# 7. FUNCIONALIDADES GENERALES

Implementar:

1. Diseño responsive para móviles, tablets y escritorio.
2. Navegación funcional.
3. Menú móvil interactivo.
4. Animaciones de entrada sutiles.
5. Efectos hover.
6. Botón flotante de WhatsApp.
7. Formularios con validación.
8. Navegación entre páginas.
9. SEO básico.
10. Sitemap.
11. Robots.txt.
12. Favicon personalizado.
13. Open Graph para compartir en redes sociales.
14. Optimización de imágenes.
15. Accesibilidad básica.
16. Buen rendimiento de carga.

Utiliza transiciones y animaciones que respeten la preferencia de movimiento reducido del usuario.

Evita instalar librerías pesadas si Astro y CSS pueden resolver la funcionalidad.

---

# 8. SEO Y POSICIONAMIENTO

Optimizar el sitio para búsquedas relacionadas con:

- Desarrollo de páginas web en Lima.
- Diseño web para empresas.
- Creación de páginas web para negocios.
- Desarrollo web freelance.
- Sistemas web personalizados.
- Desarrollo de landing pages.
- Soluciones digitales para empresas.

Configurar:
- Title y meta description por página.
- Etiquetas semánticas.
- Canonical URLs.
- Sitemap XML.
- Robots.txt.
- Open Graph.
- Datos estructurados apropiados para un profesional independiente.

No inventar dirección física, reseñas, clientes ni certificaciones.

Dejar el dominio configurable mediante una constante o variable de entorno.

---

# 9. EXPERIENCIA DE USUARIO Y CALIDAD VISUAL

El diseño debe ser profesional tanto en escritorio como en móviles.

Priorizar:
- Jerarquía visual.
- Claridad del mensaje comercial.
- Legibilidad.
- Contraste adecuado.
- Espaciado consistente.
- Navegación intuitiva.
- Llamadas a la acción visibles.

El sitio debe tener una apariencia de portafolio profesional de desarrollo web, no de un proyecto universitario.

Utiliza imágenes de buena calidad y relacionadas con cada servicio o proyecto. No utilices imágenes genéricas sin relación con el contenido.

No inventes fotografías personales ni capturas de proyectos reales.

---

# 10. INSTRUCCIONES DE IMPLEMENTACIÓN

Sigue este orden de trabajo:

FASE 1:
- Analiza el entorno de desarrollo.
- Verifica si existe un proyecto previo.
- Inicializa Astro si es necesario.
- Instala y configura TypeScript y Tailwind CSS.
- Configura Lucide Icons.
- Crea la estructura de carpetas.

FASE 2:
- Configura MainLayout.
- Crea los componentes reutilizables.
- Implementa la identidad visual.
- Desarrolla Navbar y Footer.

FASE 3:
- Desarrolla la página de inicio.
- Desarrolla las páginas de servicios.
- Desarrolla el portafolio.
- Desarrolla Sobre mí.
- Desarrolla Contacto.

FASE 4:
- Implementa las funcionalidades.
- Configura SEO.
- Optimiza imágenes.
- Revisa responsive design.

FASE 5:
- Ejecuta npm run build.
- Corrige errores de TypeScript.
- Corrige errores de compilación.
- Revisa enlaces y rutas.
- Verifica los formularios.
- Verifica el diseño en diferentes tamaños de pantalla.

FASE 6:
- Prepara el proyecto para GitHub.
- Configura la publicación en Vercel.
- Documenta los comandos de ejecución y despliegue.

---

# 11. REGLAS IMPORTANTES

- No te limites a describir cómo debería hacerse: implementa el código.
- No generes todos los componentes en un solo archivo.
- Mantén una arquitectura limpia y reutilizable.
- No inventes información profesional.
- No inventes clientes ni testimonios.
- No utilices datos confidenciales de ONCOCARE.
- No coloques enlaces ficticios como si fueran funcionales.
- Centraliza los datos editables en archivos TypeScript.
- Utiliza nombres de componentes claros.
- Mantén consistencia en los estilos.
- No dejes errores de compilación.
- No elimines archivos existentes sin verificar su contenido.
- No sobrescribas configuraciones importantes sin justificación.
- Si falta información personal, utiliza constantes claramente identificadas como pendientes de completar.

Antes de finalizar, realiza una revisión completa del proyecto.

## 12. RESULTADO ESPERADO

Quiero recibir un sitio web profesional, completo, moderno y responsive para mi marca personal Dyer Mandujano.

Debe transmitir confianza, destacar mis habilidades técnicas y experiencia empresarial, mostrar mis proyectos y facilitar que potenciales clientes soliciten una cotización.

El resultado debe estar listo para ejecutar localmente y preparado para su posterior despliegue en Vercel.

Comienza analizando el entorno y ejecutando la FASE 1. Continúa con las demás fases sin detenerte en una simple propuesta de diseño, salvo que necesites información personal o credenciales que no hayan sido proporcionadas.