import { profile } from '@/data/profile';

type ResumeLinkProps = {
  compact?: boolean;
};

export function ResumeLink({ compact = false }: ResumeLinkProps) {
  if (!profile.resume.available) return null;

  return (
    <a href={profile.resume.path} download>
      {compact ? 'Resume' : 'Download CV'}
    </a>
  );
}
