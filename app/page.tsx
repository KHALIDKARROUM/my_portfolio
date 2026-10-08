import Link from 'next/link';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section aria-labelledby="intro-title">
        <h1 id="intro-title">{profile.name}</h1>
        <p>
          {profile.role} · {profile.location}
        </p>
        <p>{profile.positioning}</p>
        <p>{profile.availability}</p>
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p>
          <Link href="/projects">All projects</Link>
        </p>
      </section>

      <section id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <SkillsGrid />
      </section>

      <section aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>
          I’m studying Data Science and Information Systems Security at Master’s
          level. My interests include financial risk, anomaly detection, and
          applied machine learning.
        </p>
        <p>
          <Link href="/about">More about me</Link>
        </p>
      </section>

      <ContactCTA />
    </main>
  );
}
