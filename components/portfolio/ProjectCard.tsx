import Link from 'next/link';
import type { Project } from '@/types/portfolio';

type ProjectCardProps = {
  project: Project;
  headingLevel?: 2 | 3;
};

export function ProjectCard({ project, headingLevel = 3 }: ProjectCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';

  return (
    <article>
      <Heading>
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </Heading>
      <p>{project.oneLine}</p>
      <p className="project-tech">{project.tech.join(', ')}</p>
      <p>
        <a
          href={project.repository}
          aria-label={`${project.title} source code on GitHub`}
        >
          Source code
        </a>
      </p>
    </article>
  );
}
