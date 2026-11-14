export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  benefits: string[];
  features: string[];
  technologies: string[];
  iconName: string;
  targetAudience: string;
  deliverables?: string[];
  isFeatured?: boolean;
}
