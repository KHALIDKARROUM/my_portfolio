import { profile } from '@/data/profile';
import { ResumeLink } from './ResumeLink';

export function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <div className="links">
        {profile.email && <a href={`mailto:${profile.email}`}>Email</a>}
        {profile.linkedIn && <a href={profile.linkedIn}>LinkedIn</a>}
        <a href={profile.github}>GitHub</a>
        <ResumeLink />
      </div>
    </section>
  );
}
