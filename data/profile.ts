export const profile = {
  name: 'Khalid Karroum',
  initials: 'KK',
  role: 'Data Scientist & Machine Learning Engineer',
  location: 'Morocco',
  availability: 'Seeking PFE · Data Science · AI opportunities',
  positioning:
    'I build machine-learning systems that connect rigorous evaluation to usable software—from calibrated models and APIs to decision workflows, deployment, and monitoring.',
  github: 'https://github.com/KHALIDKARROUM',
  email: undefined as string | undefined,
  linkedIn: undefined as string | undefined,
  profileImage: undefined as string | undefined,
  resume: {
    path: '/Khalid-Karroum-CV.pdf',
    available: false,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

export const recruiterSnapshot = [
  { label: 'Focus', value: 'Data Science · Machine Learning · Applied AI' },
  { label: 'Strengths', value: 'Evaluation · APIs · Data Products · MLOps' },
  { label: 'Interests', value: 'Financial AI · Risk · Anomaly Detection' },
  { label: 'Location', value: 'Morocco' },
  { label: 'Target', value: 'PFE · Internship · Early-career DS / AI' },
] as const;

export const technicalInterests = [
  'Algorithms & Data Structures',
  'Statistical Modeling',
  'Machine Learning Systems',
  'MLOps',
  'Financial Data Science',
] as const;
