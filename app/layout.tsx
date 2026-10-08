import type { Metadata } from 'next';
import { Footer } from '@/components/portfolio/Footer';
import { SiteHeader } from '@/components/portfolio/SiteHeader';
import { profile } from '@/data/profile';
import './globals.css';

const siteUrl = new URL(profile.siteUrl ?? 'http://localhost:3000');

const themeScript = `try {
  document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
} catch {}`;

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Khalid Karroum | Data Scientist & Machine Learning Engineer',
    template: '%s | Khalid Karroum',
  },
  description:
    'Data Science, Machine Learning, and applied AI portfolio by Khalid Karroum in Morocco, featuring end-to-end ML systems.',
  keywords: [
    'Khalid Karroum',
    'Data Scientist Morocco',
    'Machine Learning Engineer',
    'Applied AI',
    'MLOps',
    'Credit Risk',
    'Anomaly Detection',
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Khalid Karroum | Data Scientist & Machine Learning Engineer',
    description:
      'Projects in machine learning, data analysis, and backend development by Khalid Karroum.',
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: 'summary',
    title: 'Khalid Karroum | Data Scientist & Machine Learning Engineer',
    description:
      'Projects in machine learning, data analysis, and backend development by Khalid Karroum.',
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  address: { '@type': 'PostalAddress', addressCountry: 'MA' },
  url: profile.siteUrl,
  sameAs: [profile.github],
  knowsAbout: [
    'Data Science',
    'Machine Learning',
    'Applied AI',
    'Credit Risk',
    'Anomaly Detection',
    'MLOps',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
