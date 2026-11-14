export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: 'Plataforma web' | 'Sistema web' | 'Inteligencia de negocios' | 'Landing page' | 'E-Commerce';
  tags: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'completado' | 'en-desarrollo' | 'pendiente-confirmacion';
  projectType: 'académico' | 'demostrativo' | 'profesional';
  badge?: string;
  problemIdentified: string;
  developedSolution: string;
  features: string[];
  highlights?: string[];
}
