import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    slug: 'aegis-credit',
    title: 'Aegis-Credit',
    eyebrow: 'Financial ML · Model Governance',
    oneLine:
      'Credit-risk modeling with application scoring, human review, and monitoring.',
    summary:
      'A calibrated model connected to risk bands, durable assessment cases, human review, batch scoring, monitoring, threshold economics, and an authenticated API.',
    problem:
      'A credit-risk model is only one component of a defensible screening workflow. Real use also requires consistent inputs, controlled thresholds, traceable reviews, operational monitoring, and clear boundaries around what the score can and cannot decide.',
    outcome:
      'A portfolio-grade decision-support workflow that demonstrates the complete path from validated application data to calibrated probability, review guidance, durable case records, and governance controls.',
    repository: 'https://github.com/KHALIDKARROUM/Aegis-Credit',
    featured: true,
    accent: 'lime',
    tags: ['Finance', 'Machine Learning', 'MLOps', 'Backend'],
    tech: [
      'Python',
      'Django',
      'scikit-learn',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
    ],
    metrics: [
      {
        label: 'Final test ROC-AUC',
        value: '0.881',
        context:
          'Historical 2.1.0 demonstration; not validation of the corrected 2.2.0 model.',
      },
      {
        label: 'Screening threshold recall',
        value: '0.755',
        context:
          'Historical 2.1.0 evaluation at threshold 0.21; not production-release evidence.',
      },
      {
        label: 'Final test rows',
        value: '6,484',
        context:
          'Held apart from training, model selection, calibration, and threshold selection.',
      },
    ],
    architecture: [
      'Application inputs',
      'Validation contract',
      'Calibrated risk model',
      'Risk band & guidance',
      'Human review',
      'Case & audit record',
      'Monitoring',
    ],
    sections: [
      {
        title: 'Problem & product boundary',
        summary:
          'The system is framed as decision support, not automated lending. It does not approve or decline credit and does not claim to generate compliant adverse-action notices.',
        bullets: [
          'Blank-by-default assessment with an explicit demo-data option',
          'Application-time validation and unusual-value warnings',
          'Model-behavior explanations separated from adverse-action reasons',
        ],
      },
      {
        title: 'Machine learning & evaluation',
        summary:
          'Gradient Boosting, Random Forest, and Logistic Regression were calibrated and evaluated through separate model-selection, calibration, threshold-selection, and final-test partitions.',
        bullets: [
          'Preprocessing remains inside scikit-learn pipelines',
          'The selected calibrated Gradient Boosting model reached 0.881 ROC-AUC on final test data',
          'The repository explicitly marks 2.1.0 results as historical UI evidence pending corrected-contract revalidation',
        ],
      },
      {
        title: 'Decision workflow',
        summary:
          'Probabilities become reachable Low, Medium, and High risk bands with staff guidance, then move into durable cases rather than disappearing after inference.',
        bullets: [
          'Assignments, SLA timing, immutable reviews, legal holds, and mature outcomes',
          'Scoped Analyst, Reviewer, Legal Officer, and Administrator roles',
          'Versioned financial threshold scenarios with administrator decisions',
        ],
      },
      {
        title: 'Backend, API & persistence',
        summary:
          'The Django application exposes the same scoring contract through the web workflow and an authenticated API while preserving cases and audit evidence.',
        bullets: [
          'API-key authentication, configurable rate limiting, and OpenAPI documentation',
          'Idempotent scoring with replay-safe results and keyed audit fingerprints',
          'SQLite for local use and PostgreSQL support for shared deployments',
        ],
      },
      {
        title: 'Batch, monitoring & MLOps',
        summary:
          'Operational paths include durable CSV/XLSX batch queues, version-filtered monitoring, and explicit deployment controls.',
        bullets: [
          'Retry, cancel, row warnings, validation feedback, and downloadable batch results',
          'Volume, risk, outcome, feature drift, and acknowledged monitoring runs',
          'Docker Compose, Render configuration, health checks, tests, and CI',
        ],
      },
    ],
    lessons: [
      'Model validity depends on the feature contract, not only a headline metric.',
      'Calibration and threshold choice should be isolated from final-test evaluation.',
      'Human review, persistence, and traceability are product requirements for high-stakes scoring.',
    ],
    futureImprovements: [
      'Repeat full evaluation for the corrected 2.2.0 feature contract.',
      'Add controlled external validation before any pilot discussion.',
      'Expand subgroup and stability analysis with an approved data-governance plan.',
    ],
  },
  {
    slug: 'netguard',
    title: 'NetGuard',
    eyebrow: 'Cybersecurity · Anomaly Detection',
    oneLine:
      'Network anomaly detection using Isolation Forest, LOF, and an autoencoder.',
    summary:
      'An UNSW-NB15 exploration and scoring application comparing unsupervised detectors, serving an ensemble through FastAPI, and presenting results in a Streamlit operations dashboard.',
    problem:
      'Suspicious network behavior is rare, varied, and difficult to model with labels alone. A useful exploration system needs multiple anomaly strategies, consistent preprocessing, transparent evaluation, and an interface for inspecting both data and predictions.',
    outcome:
      'A containerized FastAPI and Streamlit application that loads trained artifacts, compares detection strategies, explores traffic distributions, and scores a single connection from raw network fields.',
    repository: 'https://github.com/KHALIDKARROUM/anomaly_detection',
    featured: true,
    accent: 'blue',
    tags: ['Security', 'Anomaly Detection', 'Deep Learning', 'API'],
    tech: [
      'Python',
      'FastAPI',
      'PyTorch',
      'scikit-learn',
      'Streamlit',
      'Plotly',
      'Docker Compose',
    ],
    architecture: [
      'UNSW-NB15 traffic',
      'Preprocessing',
      '20-feature vector',
      'IF · LOF · Autoencoder',
      'Ensemble',
      'FastAPI',
      'Streamlit dashboard',
    ],
    sections: [
      {
        title: 'Problem formulation',
        summary:
          'NetGuard treats detection as an anomaly-ranking problem and compares complementary unsupervised strategies rather than relying on a single classifier.',
        bullets: [
          'Isolation Forest for tree-based isolation',
          'Local Outlier Factor for neighborhood-density deviation',
          'Autoencoder for reconstruction-based anomaly evidence',
        ],
      },
      {
        title: 'Data & preprocessing',
        summary:
          'The project uses the UNSW-NB15 training and testing artifacts. Raw prediction fields are transformed server-side into the same 20-feature representation expected by the saved models.',
        bullets: [
          'Separated notebooks for EDA, preprocessing, feature engineering, modeling, and evaluation',
          'Cached data and model loaders in the API layer',
          'Training target labels are not passed to the anomaly models',
        ],
      },
      {
        title: 'Evaluation methodology',
        summary:
          'Labels are used only after unsupervised training to compare predictions using F1, recall, precision, ROC-AUC, confusion matrices, and score visualizations.',
        bullets: [
          'Model-comparison endpoint and PCA, score, confusion, and ROC visualizations',
          'Saved ensemble combines Isolation Forest, LOF, and Autoencoder outputs',
          'No unverified performance number is presented in this case study',
        ],
      },
      {
        title: 'Application engineering',
        summary:
          'The model workflow is exposed as a stable API and a multi-page operations interface instead of remaining confined to notebooks.',
        bullets: [
          'FastAPI health, dataset, comparison, visualization, and prediction routes',
          'Streamlit pages for dataset exploration, performance, and live scoring',
          'Separate Dockerfiles with Docker Compose orchestration',
        ],
      },
    ],
    lessons: [
      'Anomaly detectors expose different notions of “unusual,” so comparison matters.',
      'Inference must reproduce the exact training feature contract.',
      'Labels can support evaluation without turning unsupervised training into supervised learning.',
    ],
    futureImprovements: [
      'Document ensemble score normalization and voting trade-offs in more detail.',
      'Add time-aware evaluation for network drift and evolving attack patterns.',
      'Expand API tests around malformed and out-of-distribution inputs.',
    ],
  },
  {
    slug: 'telco-churn',
    title: 'Telco Churn',
    eyebrow: 'Applied ML · Reproducibility',
    oneLine:
      'Customer churn prediction with a shared model for Django and Streamlit.',
    summary:
      'A reproducible training pipeline that compares models with training-only cross-validation, calibrates the selected estimator, chooses a threshold from out-of-fold scores, and serves one artifact to Django and Streamlit.',
    problem:
      'Churn demos often leak holdout information or let dashboard logic diverge from training. This project centers the deployable artifact and keeps preprocessing, threshold selection, scoring, and interfaces aligned.',
    outcome:
      'A shared analytics layer and calibrated artifact used consistently across Django and Streamlit, with tests and CI covering the path from cleaning to form scoring.',
    repository: 'https://github.com/KHALIDKARROUM/customer-churn-prediction',
    featured: true,
    accent: 'amber',
    tags: ['Machine Learning', 'Product Analytics', 'Calibration', 'CI'],
    tech: ['Python', 'Django', 'Streamlit', 'scikit-learn', 'GitHub Actions'],
    architecture: [
      'Telco data',
      'Cleaning',
      'Cross-validation',
      'Calibration',
      'Threshold',
      'Shared artifact',
      'Two interfaces',
    ],
    sections: [
      {
        title: 'Modeling workflow',
        summary:
          'The pipeline cleans the 7,043-row Telco dataset, removes 11 incomplete records, holds out a stratified 20% test set, and compares three candidate models by five-fold cross-validation.',
        bullets: [
          'Logistic Regression, Random Forest, and Gradient Boosting candidates',
          'Sigmoid calibration for the selected model',
          'Training-only out-of-fold threshold selection before one final holdout evaluation',
        ],
      },
      {
        title: 'Engineering & delivery',
        summary:
          'A shared core keeps data, scoring, charts, and forms aligned across two application surfaces.',
        bullets: [
          'Django and Streamlit interfaces use the same fitted preprocessing/model artifact',
          'Tests cover cleaning, scoring, comparisons, and GET/POST application behavior',
          'GitHub Actions retrains and verifies the workflow on each change',
        ],
      },
      {
        title: 'Responsible interpretation',
        summary:
          'The repository documents that the cross-sectional dataset has no explicit prediction horizon and that patterns are not causal evidence for retention actions.',
      },
    ],
    lessons: [
      'Out-of-fold scores are safer for threshold selection and population views than in-sample scores.',
      'One fitted pipeline prevents categorical handling from drifting between training and inference.',
      'A model card is part of the deliverable when the dataset has important limitations.',
    ],
    futureImprovements: [
      'Record the authoritative dataset source and redistribution license.',
      'Add time-based validation once data with a prediction horizon is available.',
      'Evaluate calibration and performance across relevant customer subgroups.',
    ],
  },
  {
    slug: 'diabetes-prediction',
    title: 'Diabetes Prediction',
    eyebrow: 'Data Science · Classification',
    oneLine:
      'An educational notebook comparing classifiers on health measurements.',
    summary:
      'A notebook project connecting exploratory analysis, missing-value handling, feature scaling, and classifier comparison using diagnostic measurements.',
    problem:
      'Health measurements need careful exploration and preprocessing before classification. This learning project examines how data preparation and model choice affect predictions.',
    outcome:
      'A documented notebook comparing logistic regression and a decision tree, with visualizations, cross-validation, confusion matrices, and ROC analysis. For learning and experimentation only, not clinical use.',
    repository: 'https://github.com/KHALIDKARROUM/Diabetes-Prediction-',
    featured: true,
    accent: 'violet',
    tags: ['Data Science', 'EDA', 'Classification', 'Visualization'],
    tech: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'Seaborn',
      'Matplotlib',
      'Jupyter',
    ],
    architecture: [
      'Health measurements',
      'EDA',
      'Missing values',
      'Feature scaling',
      'Classification',
      'Evaluation',
    ],
    sections: [
      {
        title: 'Explore & prepare',
        summary:
          'Explore individual variables and relationships, identify invalid zero measurements, and compare scaling approaches.',
        bullets: [
          'Univariate, bivariate, and multivariate visualizations',
          'Missing-value handling for invalid zeros',
          'Min-Max scaling and standardization examples',
        ],
      },
      {
        title: 'Train & evaluate',
        summary:
          'Compare logistic regression and decision tree classifiers using a train/test split and multiple evaluation views.',
        bullets: [
          'Accuracy and cross-validation',
          'Confusion matrix and ROC-AUC',
          'Feature importance plots',
        ],
      },
      {
        title: 'Scope & limitations',
        summary:
          'This is an educational notebook, not a medical tool. Reported results depend on the dataset, execution order, and environment. The repository documents further work on reproducibility and preprocessing pipelines.',
      },
    ],
    lessons: [
      'Explore suspicious values before fitting a model.',
      'Use several evaluation views to understand classification behavior.',
      'Keep experimental results tied to their dataset and limitations.',
    ],
    futureImprovements: [
      'Package preprocessing in a fitted scikit-learn pipeline.',
      'Pin dependencies for reproducible notebook execution.',
      'Extend model comparison and hyperparameter tuning.',
    ],
  },
  {
    slug: 'puddle-marketplace',
    title: 'Puddle Marketplace',
    eyebrow: 'Software Engineering · Django',
    oneLine:
      'A Django marketplace with listings, user accounts, and private messaging.',
    summary:
      'A Django marketplace for searchable second-hand listings, authenticated item management, validated image uploads, and private buyer–seller conversations.',
    problem:
      'Multi-user products need more than CRUD: authorization boundaries, ownership checks, safe uploads, private conversations, and production-aware configuration must work together.',
    outcome:
      'A complete Django application demonstrating account flows, access-controlled marketplace operations, media handling, admin tooling, and automated tests.',
    repository: 'https://github.com/KHALIDKARROUM/Marketplace',
    featured: false,
    accent: 'violet',
    tags: ['Backend', 'Django', 'Authentication', 'Testing'],
    tech: ['Python', 'Django', 'SQLite', 'Pillow', 'HTML/CSS'],
    architecture: [
      'Visitor',
      'Catalogue',
      'Authentication',
      'Listings',
      'Conversations',
      'Seller dashboard',
    ],
    sections: [
      {
        title: 'Product surface',
        summary:
          'Visitors can browse, search, and filter listings; signed-in users can manage their own items and contact sellers through private conversation threads.',
      },
      {
        title: 'Authorization & safety',
        summary:
          'Ownership checks guard listing edits and deletion, conversation membership restricts message access, and destructive actions use POST-only routes.',
        bullets: [
          'PNG, JPEG, and WebP validation with a 5 MB limit',
          'Production settings for secure cookies, HSTS, HTTPS redirects, and trusted origins',
          'Tests for sign-up, validation, ownership, conversation access, and messaging',
        ],
      },
    ],
    lessons: [
      'Authorization belongs at every mutation boundary, not only in the interface.',
      'Upload validation and production media storage need separate treatment.',
      'Access-control behavior should be covered by tests.',
    ],
    futureImprovements: [
      'Move production media to durable object storage.',
      'Add pagination and structured search for larger catalogues.',
      'Introduce deployment automation for the production checklist.',
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
