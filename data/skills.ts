import type { SkillGroup } from '@/types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Machine Learning',
    description: 'Modeling choices backed by evaluation, calibration, and clear limitations.',
    items: [
      'scikit-learn',
      'PyTorch',
      'Supervised learning',
      'Anomaly detection',
      'Feature engineering',
      'Model calibration',
      'Threshold selection',
    ],
  },
  {
    title: 'Data & Statistics',
    description: 'From exploratory analysis to reproducible, deployment-aligned pipelines.',
    items: ['Python', 'SQL', 'pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'Matplotlib', 'Plotly'],
  },
  {
    title: 'Backend & Products',
    description: 'Turning model artifacts into interfaces and services people can actually use.',
    items: ['Django', 'FastAPI', 'REST APIs', 'Streamlit', 'API design', 'Authentication', 'Testing'],
  },
  {
    title: 'MLOps & Delivery',
    description: 'Operational controls around models, data, releases, and system health.',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI', 'Health checks', 'Drift monitoring', 'Git'],
  },
];
