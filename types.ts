
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
  points: string[]; // Changed from impact: string to support list of achievements
}

export interface ProjectItem {
  title: string;
  description: string;
  links: string[];
  tags: string[];
  features: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  coursework: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
