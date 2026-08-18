export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  location?: string;
}

export interface EducationEntry {
  id: string;
  school: string;
  year: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  id: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  tags: string[];
  link?: string;
  placeholder?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  placeholder?: boolean;
}
