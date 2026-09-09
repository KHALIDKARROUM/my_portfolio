import Link from 'next/link';
import { CodeXml, Menu } from 'lucide-react';
import { profile } from '@/data/profile';
import { BrandMark } from './BrandMark';
import { ResumeLink } from './ResumeLink';

const navigation = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export function SiteHeader() {
  return (
    <header className="site-nav">
      <div className="shell nav-inner">
        <Link href="/" className="wordmark" aria-label={`${profile.name} home`}>
          <BrandMark />
          <span>{profile.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={profile.github} aria-label="GitHub profile">
            <CodeXml aria-hidden="true" />
            GitHub
          </a>
          <ResumeLink className="nav-resume" compact />
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={profile.github}>GitHub</a>
            <ResumeLink />
          </nav>
        </details>
      </div>
    </header>
  );
}
