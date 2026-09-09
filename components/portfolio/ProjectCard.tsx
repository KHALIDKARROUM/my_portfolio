import Link from 'next/link';
import { ArrowRight, CodeXml } from 'lucide-react';
import type { Project } from '@/types/portfolio';
import { ProjectVisual } from './DataVisual';

type ProjectCardProps = {
  project: Project;
  index: number;
  large?: boolean;
};

export function ProjectCard({ project, index, large = false }: ProjectCardProps) {
  return (
    <article
      className={large ? 'project-card project-card-large' : 'project-card'}
      data-accent={project.accent}
      data-reveal="up"
      data-reveal-delay={Math.min(index, 3) * 90}
    >
      <div className="project-card-head">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.eyebrow}</span>
      </div>
      <ProjectVisual slug={project.slug} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p className="project-card-outcome">{project.oneLine}</p>
        <p>{project.summary}</p>
      </div>
      {project.metrics?.[0] && (
        <div className="card-metric">
          <strong>{project.metrics[0].value}</strong>
          <span>{project.metrics[0].label}</span>
          <small>{project.metrics[0].context}</small>
        </div>
      )}
      <div className="card-tech" aria-label="Technology stack">
        {project.tech.slice(0, large ? 6 : 4).map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="project-card-actions">
        <Link href={`/projects/${project.slug}`}>
          Read case study <ArrowRight aria-hidden="true" />
        </Link>
        <a href={project.repository} aria-label={`${project.title} source code`}>
          Source <CodeXml aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
