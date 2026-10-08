import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1>Page not found</h1>
      <p>
        <Link href="/">Home</Link> · <Link href="/projects">Projects</Link>
      </p>
    </main>
  );
}
