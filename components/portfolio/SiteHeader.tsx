'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    menuRef.current?.removeAttribute('open');
  }, [pathname]);

  const closeMenu = () => menuRef.current?.removeAttribute('open');

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

        <details className="mobile-menu" ref={menuRef}>
          <summary aria-label="Toggle navigation">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
            <a href={profile.github} onClick={closeMenu}>GitHub</a>
            <ResumeLink />
          </nav>
        </details>
      </div>
    </header>
  );
}
