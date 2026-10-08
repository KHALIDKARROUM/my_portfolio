import type { Metadata } from 'next';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Machine learning, data analysis, and backend projects by Khalid Karroum.',
};

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} headingLevel={2} />
        ))}
      </div>
    </main>
  );
}
