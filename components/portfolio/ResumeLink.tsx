import { Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

type ResumeLinkProps = {
  className?: string;
  compact?: boolean;
};

export function ResumeLink({ className, compact = false }: ResumeLinkProps) {
  if (!profile.resume.available) {
    return null;
  }

  return (
    <a href={profile.resume.path} download className={cn(className)}>
      {compact ? 'Resume' : 'Download CV'}
      <Download aria-hidden="true" />
    </a>
  );
}
