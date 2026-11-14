import { siteConfig } from '@/config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
}

export function formatPageTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${siteConfig.name} | ${siteConfig.role}`;
  }
  if (pageTitle.includes(siteConfig.name)) {
    return pageTitle;
  }
  return `${pageTitle} | ${siteConfig.name}`;
}

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.replace(/\/$/, '');
  return `${siteConfig.url}${cleanPath}`;
}
