export type Metric = {
  label: string;
  value: string;
  context: string;
};

export type CaseStudySection = {
  title: string;
  summary: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  oneLine: string;
  summary: string;
  problem: string;
  outcome: string;
  repository: string;
  featured: boolean;
  accent: 'lime' | 'blue' | 'amber' | 'violet';
  tags: string[];
  tech: string[];
  metrics?: Metric[];
  architecture?: string[];
  sections: CaseStudySection[];
  lessons: string[];
  futureImprovements: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};
