export const profile = {
  name: 'Khalid Karroum',
  role: 'Data Scientist & Machine Learning Engineer',
  location: 'Morocco',
  availability:
    'Looking for PFE and internship opportunities in data science and AI.',
  positioning:
    'I work with data, train machine-learning models, and build applications around them.',
  github: 'https://github.com/KHALIDKARROUM',
  email: undefined as string | undefined,
  linkedIn: undefined as string | undefined,
  resume: {
    path: '/Khalid-Karroum-CV.pdf',
    available: false,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

export const technicalInterests = [
  'Algorithms & Data Structures',
  'Statistical Modeling',
  'Machine Learning Systems',
  'MLOps',
  'Financial Data Science',
] as const;
