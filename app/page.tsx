import Link from 'next/link';
import { ArrowRight, CodeXml, MapPin, ShieldCheck } from 'lucide-react';
import { ArchitectureFlow } from '@/components/portfolio/ArchitectureFlow';
import { ContactCTA } from '@/components/portfolio/ContactCTA';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ResumeLink } from '@/components/portfolio/ResumeLink';
import { SectionHeading } from '@/components/portfolio/SectionHeading';
import { SkillsGrid } from '@/components/portfolio/SkillsGrid';
import { education } from '@/data/education';
import { profile, recruiterSnapshot, technicalInterests } from '@/data/profile';
import { featuredProjects } from '@/data/projects';

const systemFlow = ['Data', 'Features', 'Model', 'API', 'Decision', 'Monitor'];
const buildFlow = [
  'Frame the decision',
  'Establish a baseline',
  'Engineer features',
  'Evaluate honestly',
  'Ship an interface',
  'Monitor behavior',
];

export default function Home() {
  return (
    <main>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="status-pill"><span aria-hidden="true" />{profile.availability}</div>
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title">I build ML systems that hold up <em>beyond the notebook.</em></h1>
          <p className="hero-lede">
            From calibrated models and rigorous evaluation to APIs, decision workflows,
            deployment, and monitoring—I turn data into systems people can inspect and use.
          </p>
          <div className="hero-actions">
            <Link href="#projects" className="button button-primary">View selected work <ArrowRight aria-hidden="true" /></Link>
            <ResumeLink className="button button-secondary" />
            <a href={profile.github} className="icon-link" aria-label="GitHub profile"><CodeXml aria-hidden="true" /></a>
          </div>
        </div>
        <div className="system-panel" aria-label="End-to-end machine learning workflow">
          <div className="panel-head"><div><span>ML SYSTEM / 01</span><strong>From signal to decision</strong></div><span className="live-label">SYSTEM VIEW</span></div>
          <div className="flow-list">
            {systemFlow.map((label, index) => (
              <div className="flow-step" key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong>{index < systemFlow.length - 1 && <ArrowRight aria-hidden="true" />}</div>
            ))}
          </div>
          <div className="signal-chart" aria-hidden="true">
            {[36, 48, 41, 63, 58, 76, 69, 84, 79, 91, 86, 96].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}
          </div>
          <div className="panel-foot"><span>MODEL QUALITY</span><span>ENGINEERING QUALITY</span><span>DECISION QUALITY</span></div>
        </div>
      </section>

      <section className="snapshot-shell shell" aria-label="Recruiter snapshot">
        <div className="snapshot-intro"><span>Recruiter snapshot</span><p>Technical range, in under 20 seconds.</p></div>
        <dl className="snapshot-grid">
          {recruiterSnapshot.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
        </dl>
      </section>

      <section id="projects" className="project-section shell" aria-labelledby="projects-title">
        <SectionHeading eyebrow="Selected work / 01" title="Built around real decisions." id="projects-title" description="Projects are documented as systems: the problem, evidence, model choices, engineering decisions, and operational trade-offs." />
        <div className="featured-project-grid">
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} large={index === 0} />)}
        </div>
        <Link href="/projects" className="all-projects-link">View the complete project index <ArrowRight aria-hidden="true" /></Link>
      </section>

      <section className="evidence-strip" aria-label="Aegis-Credit evidence">
        <div className="shell evidence-strip-grid">
          <div className="evidence-intro"><ShieldCheck aria-hidden="true" /><span>Flagship evidence</span><h2>0.881</h2><p>ROC-AUC · calibrated Gradient Boosting · untouched final test set</p></div>
          <div className="evidence-copy">
            <p className="eyebrow">Aegis-Credit / evaluation</p>
            <h3>The metric is useful because the evaluation boundary is explicit.</h3>
            <p>Training, model selection, calibration, threshold selection, and final testing use separate partitions. The repository also documents why its historical 2.1.0 result is not production-release evidence for the corrected 2.2.0 feature contract.</p>
            <Link href="/projects/aegis-credit" className="text-link">Inspect the full case study <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="skills" className="capabilities-section shell" aria-labelledby="skills-title">
        <SectionHeading eyebrow="Technical capabilities / 02" title="Model quality meets engineering quality." id="skills-title" description="A focused stack drawn from projects I can explain—from data contracts and calibration to APIs, persistence, testing, and deployment." />
        <SkillsGrid />
      </section>

      <section id="about" className="approach-section shell" aria-labelledby="approach-title">
        <div className="approach-copy">
          <p className="eyebrow">How I work / 03</p>
          <h2 id="approach-title">A model is a component. The decision system is the product.</h2>
          <p>I’m completing Master’s-level work in Data Science and Information Systems Security. My projects increasingly focus on the seams that make applied ML credible: data contracts, leakage controls, calibration, thresholds, explainability boundaries, APIs, durable workflows, and monitoring.</p>
          <Link href="/about" className="text-link">More about my approach <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="build-sequence" aria-label="How Khalid builds machine learning systems">
          {buildFlow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}
        </div>
      </section>

      <section className="workflow-shell shell"><ArchitectureFlow steps={systemFlow} label="Reusable ML delivery pattern" /></section>

      <section className="education-section shell" aria-labelledby="education-title">
        <SectionHeading eyebrow="Foundation / 04" title="Education & current depth." id="education-title" />
        <div className="education-grid">
          {education.map((item) => <article key={item.field}><span>Current education</span><h3>{item.degree}</h3><p>{item.field}</p><p className="education-location"><MapPin aria-hidden="true" /> {item.location}</p></article>)}
          <article className="learning-card"><span>Areas I’m deepening</span><ul>{technicalInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul></article>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
