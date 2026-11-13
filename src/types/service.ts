export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  targetAudience: string;
  deliverables?: string[];
  isFeatured?: boolean;
}
