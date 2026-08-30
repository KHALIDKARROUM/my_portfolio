import type { Metadata } from 'next';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected Data Science, Machine Learning, anomaly detection, and backend engineering case studies by Khalid Karroum.',
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero shell">
        <p className="eyebrow">Project index / {String(projects.length).padStart(2, '0')}</p>
        <h1>Evidence over inventory.</h1>
        <p>Four selected systems that demonstrate different parts of applied machine learning and software delivery. Each case study separates the problem, approach, result, and engineering decisions.</p>
      </section>
      <section className="project-index shell" aria-label="All selected projects">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} large />)}
      </section>
      <ContactCTA />
    </main>
  );
}
