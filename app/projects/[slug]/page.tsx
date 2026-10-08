import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLine,
    openGraph: {
      title: project.title,
      description: project.oneLine,
      images: [],
    },
    twitter: { title: project.title, description: project.oneLine, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main-content" tabIndex={-1}>
      <section aria-labelledby="project-title">
        <p>
          <Link href="/projects">All projects</Link>
        </p>
        <h1 id="project-title">{project.title}</h1>
        <p>{project.summary}</p>
        <p>
          <strong>Technologies:</strong> {project.tech.join(', ')}
        </p>
        <p>
          <a href={project.repository}>Source code on GitHub</a>
        </p>
      </section>

      <section aria-labelledby="problem-title">
        <h2 id="problem-title">Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section aria-labelledby="outcome-title">
        <h2 id="outcome-title">Result</h2>
        <p>{project.outcome}</p>
      </section>

      {project.metrics && project.metrics.length > 0 && (
        <section aria-labelledby="evaluation-title">
          <h2 id="evaluation-title">Evaluation</h2>
          <dl>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>
                  {metric.label}: {metric.value}
                </dt>
                <dd>{metric.context}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.architecture && project.architecture.length > 0 && (
        <section aria-labelledby="workflow-title">
          <h2 id="workflow-title">Workflow</h2>
          <ol>
            {project.architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      <section className="case-sections" aria-label="Project details">
        {project.sections.map((section, index) => (
          <section
            id={`section-${index + 1}`}
            key={section.title}
            aria-labelledby={`detail-${index + 1}`}
          >
            <h2 id={`detail-${index + 1}`}>{section.title}</h2>
            <p>{section.summary}</p>
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </section>

      <section id="lessons" aria-labelledby="lessons-title">
        <h2 id="lessons-title">What I learned</h2>
        <ul>
          {project.lessons.map((lesson) => (
            <li key={lesson}>{lesson}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="next-steps-title">
        <h2 id="next-steps-title">Next steps</h2>
        <ul>
          {project.futureImprovements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-label="Project navigation">
        <Link href="/projects">Back to all projects</Link>
      </section>
    </main>
  );
}
