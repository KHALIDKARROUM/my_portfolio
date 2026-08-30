import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 / route not found</p>
      <h1>This path does not lead to a case study.</h1>
      <Link href="/projects" className="button button-primary"><ArrowLeft aria-hidden="true" /> Back to projects</Link>
    </main>
  );
}
