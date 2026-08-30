import { Download } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

type ResumeLinkProps = {
  className?: string;
  compact?: boolean;
};

export function ResumeLink({ className, compact = false }: ResumeLinkProps) {
  if (!profile.resume.available) {
    return (
      <Link href="/#contact" className={cn(className)} title="CV file has not been added yet">
        {compact ? 'Resume' : 'Request CV'}
        <Download aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a href={profile.resume.path} download className={cn(className)}>
      {compact ? 'Resume' : 'Download CV'}
      <Download aria-hidden="true" />
    </a>
  );
}
