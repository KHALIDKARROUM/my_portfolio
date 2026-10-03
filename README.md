# Khalid Karroum — Data Science & ML Engineering Portfolio

A recruiter-first personal portfolio for Khalid Karroum, built around factual, repository-verified project case studies. The site positions Khalid as an emerging Data Scientist and Machine Learning Engineer who works beyond notebooks: evaluation, calibration, APIs, persistence, decision workflows, testing, deployment, and monitoring.

## Pages

- `/` — recruiter-focused homepage
- `/projects` — selected project index
- `/projects/aegis-credit` — flagship credit-risk and model-governance case study
- `/projects/netguard` — anomaly-detection and cybersecurity case study
- `/projects/telco-churn` — reproducible churn-modeling case study
- `/projects/puddle-marketplace` — backend engineering case study
- `/about` — professional approach, education, and technical capabilities

## Featured projects

1. **Aegis-Credit** — calibrated credit-risk screening, durable review workflows, model governance, monitoring, authenticated API scoring, PostgreSQL, Docker, and CI.
2. **NetGuard** — UNSW-NB15 anomaly detection with Isolation Forest, Local Outlier Factor, Autoencoder, FastAPI, Streamlit, PyTorch, and Docker Compose.
3. **Telco Churn** — cross-validated model selection, calibration, out-of-fold threshold choice, shared Django/Streamlit artifact, tests, and CI.
4. **Puddle Marketplace** — Django authentication, guarded ownership, validated uploads, private conversations, and test coverage.

Tutorial-style repositories are intentionally excluded from the main presentation.

## Stack

- Next.js App Router-compatible React architecture
- TypeScript in strict mode
- Tailwind CSS
- Vinext and OpenAI Sites for the Cloudflare-compatible build
- Next.js 16 for Vercel deployment compatibility
- Lucide icons
- shadcn component foundation
- oxlint and oxfmt

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The Sites/Cloudflare production build is `npm run build`. The Vercel-specific Next.js build is `npm run build:vercel`.

## Environment variables

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is public and is used for canonical metadata, the sitemap, and social previews. No secrets are required.

## Editing content

Portfolio content is centralized:

- `data/profile.ts` — name, positioning, GitHub, email, LinkedIn, portrait, and resume state
- `data/projects.ts` — all project summaries, evidence, architectures, sections, lessons, and links
- `data/skills.ts` — grouped technical capabilities
- `data/education.ts` — degree, institution, dates, and coursework placeholders
- `types/portfolio.ts` — reusable content types

### Add a project

Add a new object to `projects` in `data/projects.ts`. The `/projects/[slug]` route automatically renders the case study. Use only repository-verifiable claims and omit unknown metrics.

### Replace the CV

1. Add the real PDF at `public/Khalid-Karroum-CV.pdf`.
2. Set `resume.available` to `true` in `data/profile.ts`.

Until both steps are complete, CV links stay hidden instead of pointing to a missing file.

### Add a profile photo

1. Add a professional portrait at `public/profile.jpg`.
2. Set `profileImage` to `'/profile.jpg'` in `data/profile.ts`.

The About page uses a neutral initials-based visual when no portrait is configured.

### Add screenshots

Use real project screenshots in:

- `public/projects/aegis-credit/`
- `public/projects/netguard/`

Each directory contains recommended filenames and privacy notes. No fake product screenshots are included.

## Deployment

### OpenAI Sites

The default `npm run build` produces the Cloudflare Worker-compatible artifact used by OpenAI Sites. The project’s `.openai/hosting.json` is managed by the Sites deployment flow.

### Vercel

1. Import this repository in Vercel.
2. Vercel reads `vercel.json` and runs `npm run build:vercel`.
3. Set `NEXT_PUBLIC_SITE_URL` to the final Vercel domain.
4. Redeploy after the domain is configured so canonical and social metadata use the public origin.

No server database, secret, or external API is required for the portfolio.

## Customization checklist

- Add email and LinkedIn in `data/profile.ts`.
- Add university and education dates in `data/education.ts`.
- Add the real CV and switch `resume.available` to `true`.
- Add a portrait only if it improves the professional presentation.
- Replace screenshot notes with actual product captures.
- Set `NEXT_PUBLIC_SITE_URL` before public deployment.

## Content integrity

The portfolio deliberately avoids invented experience, institutions, testimonials, certifications, live demos, and performance claims. Aegis-Credit’s 0.881 ROC-AUC is labeled with its final-test and historical-model context; NetGuard does not display an unverified headline metric.
