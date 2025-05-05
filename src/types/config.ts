export interface Social {
  platform: string;
  url: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  github?: string;
}

export interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    description: string;
    avatar: string;
    location: string;
    email: string;
    socials: Social[];
  };
  about: {
    title: string;
    description: string;
    resume: string;
  };
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
}
