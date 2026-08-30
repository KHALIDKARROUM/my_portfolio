import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { ProfileVisual } from '@/components/portfolio/ProfileVisual';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { education } from '@/data/education';
import { profile, technicalInterests } from '@/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description: 'How Khalid Karroum approaches Data Science, Machine Learning, applied AI, and end-to-end ML systems.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero shell">
        <div>
          <p className="eyebrow">About / professional approach</p>
          <h1>Modeling the problem is only half the work.</h1>
          <p>I’m interested in machine-learning systems where statistical judgment and engineering discipline reinforce each other. That means treating evaluation, interfaces, operational controls, and limitations as part of the same design.</p>
          <div className="about-location"><MapPin aria-hidden="true" /> {profile.location}</div>
        </div>
        <ProfileVisual />
      </section>

      <section className="about-principles shell" aria-label="Working principles">
        <article><span>01</span><h2>Start with the decision.</h2><p>Define who uses the output, what action it informs, and what an error costs before optimizing a score.</p></article>
        <article><span>02</span><h2>Protect the evaluation.</h2><p>Keep preprocessing, calibration, threshold selection, and holdout testing separated and reproducible.</p></article>
        <article><span>03</span><h2>Engineer the seams.</h2><p>Data contracts, APIs, persistence, access control, monitoring, and tests determine whether a model can be trusted in context.</p></article>
      </section>

      <section className="about-education shell">
        <SectionHeading eyebrow="Foundation / 01" title="Education & technical direction." />
        <div className="about-education-grid">
          <div>
            {education.map((item) => <article key={item.field}><span>Current</span><h3>{item.degree}</h3><p>{item.field}</p><small>{item.location}</small></article>)}
          </div>
          <div><span className="detail-label">Current depth</span><ul>{technicalInterests.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="about-skills shell">
        <SectionHeading eyebrow="Capabilities / 02" title="A focused, defensible stack." description="These capabilities are grounded in public project work, not decorative proficiency claims." />
        <SkillsGrid />
      </section>

      <section className="about-project-link shell">
        <p>See how those principles show up in the work.</p>
        <Link href="/projects">Explore project case studies <ArrowRight aria-hidden="true" /></Link>
      </section>
      <ContactCTA />
    </main>
  );
}
