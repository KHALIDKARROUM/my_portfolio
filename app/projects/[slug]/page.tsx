import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CodeXml } from 'lucide-react';
import { ArchitectureFlow } from '@/components/portfolio/ArchitectureFlow';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { getProject, projects } from '@/data/projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study`,
    description: project.oneLine,
    openGraph: { title: project.title, description: project.oneLine, images: [] },
    twitter: { title: project.title, description: project.oneLine, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page" data-accent={project.accent}>
      <section className="case-hero shell">
        <Link href="/projects" className="back-link"><ArrowLeft aria-hidden="true" /> Project index</Link>
        <p className="eyebrow">Case study / {String(currentIndex + 1).padStart(2, '0')}</p>
        <h1>{project.title}</h1>
        <p className="case-outcome">{project.oneLine}</p>
        <div className="case-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="case-hero-actions">
          <a href={project.repository} className="button button-primary">View source <CodeXml aria-hidden="true" /></a>
          <span>Repository-verified case study</span>
        </div>
      </section>

      <section className="case-summary shell" aria-label="Project summary">
        <div><span>Problem</span><p>{project.problem}</p></div>
        <div><span>Outcome</span><p>{project.outcome}</p></div>
      </section>

      {project.metrics && (
        <section className="metrics-grid shell" aria-label="Verified project metrics">
          {project.metrics.map((metric) => <article key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><p>{metric.context}</p></article>)}
        </section>
      )}

      {project.architecture && <section className="case-architecture shell"><ArchitectureFlow steps={project.architecture} label={`${project.title} architecture`} /></section>}

      <section className="case-body shell">
        <aside>
          <span>Case study map</span>
          <nav aria-label="Case study sections">
            {project.sections.map((section, index) => <a href={`#section-${index + 1}`} key={section.title}>{section.title}</a>)}
            <a href="#lessons">Lessons & next steps</a>
          </nav>
        </aside>
        <div className="case-sections">
          {project.sections.map((section, index) => (
            <article id={`section-${index + 1}`} key={section.title}>
              <div className="section-index">{String(index + 1).padStart(2, '0')}</div>
              <h2>{section.title}</h2>
              <p>{section.summary}</p>
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </article>
          ))}
          <article id="lessons" className="lessons-section">
            <div className="section-index">{String(project.sections.length + 1).padStart(2, '0')}</div>
            <h2>Lessons & next steps</h2>
            <div className="lessons-grid">
              <div><h3>What I learned</h3><ul>{project.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></div>
              <div><h3>Future improvements</h3><ul>{project.futureImprovements.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </article>
        </div>
      </section>

      <section className="case-stack shell"><span>Technology stack</span><div>{project.tech.map((item) => <span key={item}>{item}</span>)}</div></section>

      <Link href={`/projects/${nextProject.slug}`} className="next-project shell"><span>Next case study</span><strong>{nextProject.title}</strong><ArrowRight aria-hidden="true" /></Link>
      <ContactCTA />
    </main>
  );
}
