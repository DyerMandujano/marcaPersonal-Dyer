export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'design' | 'analytics' | 'tools';
  iconName?: string;
  isRecent?: boolean; // Para marcar Astro como incorporación reciente del proyecto
}

export interface SkillCategory {
  title: string;
  category: 'frontend' | 'backend' | 'database' | 'design' | 'analytics' | 'tools';
  description: string;
  skills: SkillItem[];
}
