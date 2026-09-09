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
    title: 'Data Analysis',
    description: 'From exploratory analysis to reproducible, deployment-aligned pipelines.',
    items: ['Python', 'pandas', 'NumPy', 'Jupyter', 'Exploratory data analysis', 'Data cleaning', 'Missing-value handling', 'Feature scaling'],
  },
  {
    title: 'Visualization & Evaluation',
    description: 'Make patterns visible and understand where a model succeeds or fails.',
    items: ['Matplotlib', 'Seaborn', 'Plotly', 'Cross-validation', 'ROC-AUC', 'Precision & recall', 'Confusion matrices', 'Feature importance'],
  },
  {
    title: 'Data & Databases',
    description: 'Query, organize, and persist the data behind analytical applications.',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'ETL/ELT', 'Data warehousing'],
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
