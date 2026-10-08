# Khalid Karroum — Portfolio

A simple portfolio for data science, machine learning, and backend projects.

The site uses a single column, plain text, and standard links. Project details include the problem, implementation, evaluation context, limitations, and source code.

The Dark mode checkbox in the header switches the color scheme and remembers the choice in your browser.

## Pages

- `/` — introduction, projects, skills, and contact links
- `/projects` — all five projects
- `/projects/[slug]` — project details
- `/about` — education, interests, and working approach

## Local setup

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

For the Vercel build, run `npm run build:vercel`.

## Editing content

- `data/profile.ts` — name, role, availability, and contact links
- `data/projects.ts` — project descriptions, technologies, evaluation, and repository links
- `data/skills.ts` — skill groups
- `data/education.ts` — education
- `app/globals.css` — shared styles

Add an email or LinkedIn URL in `data/profile.ts` to show those contact links.

To make the CV available, add `public/Khalid-Karroum-CV.pdf` and set `resume.available` to `true`. Until then, the CV link stays hidden.

New entries in `data/projects.ts` appear automatically in the project lists and detail routes.

## Deployment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public site origin for metadata and the sitemap.

The default build uses Vinext for Sites/Cloudflare. Vercel uses `vercel.json` and the Next.js build. No database, external API, or secrets are required by the portfolio.

## Project content

Only include claims supported by the project repositories. Keep evaluation results with their context: Aegis-Credit’s reported results belong to its historical 2.1.0 demonstration and do not validate the corrected 2.2.0 model. The diabetes notebook is an educational project.
