export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  area: string;
  type: 'Prácticas preprofesionales' | 'Freelance' | 'Laboral';
  period: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: 'En curso' | 'Completado';
  details?: string;
}
