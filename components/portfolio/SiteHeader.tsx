import Link from 'next/link';
import { profile } from '@/data/profile';
import { ResumeLink } from './ResumeLink';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-name">
        {profile.name}
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
        <a href={profile.github}>GitHub</a>
        <ResumeLink compact />
        <ThemeToggle />
      </nav>
    </header>
  );
}
