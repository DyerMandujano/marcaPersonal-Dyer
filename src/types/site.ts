export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  whatsapp: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  ogImage: string;
  social: SocialLinks;
  availability: {
    status: 'available' | 'busy';
    label: string;
  };
}
