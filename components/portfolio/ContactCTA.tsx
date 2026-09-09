import { ArrowUpRight, CodeXml, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { ResumeLink } from './ResumeLink';

export function ContactCTA() {
  return (
    <section id="contact" className="contact-section shell" aria-labelledby="contact-title" data-reveal="scale">
      <div className="contact-copy">
        <p className="eyebrow">Contact / next step</p>
        <h2 id="contact-title">Let’s discuss a problem worth modeling.</h2>
        <p>
          I’m interested in Data Science, Machine Learning, applied AI, and PFE
          opportunities where analytical quality and engineering quality both matter.
        </p>
      </div>
      <div className="contact-actions">
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="contact-primary">
            Email me <Mail aria-hidden="true" />
          </a>
        )}
        {profile.linkedIn && (
          <a href={profile.linkedIn}>LinkedIn <ArrowUpRight aria-hidden="true" /></a>
        )}
        <a href={profile.github}>GitHub <CodeXml aria-hidden="true" /></a>
        <ResumeLink />
      </div>
    </section>
  );
}
