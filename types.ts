export interface JobListing {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Freiberuflich' | 'Minijob' | 'Saison' | 'Ausbildung';
  classes: string[];
  salaryRange?: string;
  postedDate: string;
  description: string;
}

export enum Page {
  HOME = 'HOME',
  JOB_SEEKERS = 'JOB_SEEKERS',
  EMPLOYERS = 'EMPLOYERS',
  CAREER_INFO = 'CAREER_INFO',
  IMPRESSUM = 'IMPRESSUM'
}

export interface NavItem {
  label: string;
  path: string;
}