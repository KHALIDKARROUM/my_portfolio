import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <span className="footer-mark">KK</span>
          <p>Machine learning, engineered for decisions.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a href={profile.github}>
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
        <p className="footer-meta">© {new Date().getFullYear()} {profile.name}<br />Morocco</p>
      </div>
    </footer>
  );
}
