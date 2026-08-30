import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = profile.siteUrl ?? 'http://localhost:3000';
  const routes = ['', '/projects', '/about', ...projects.map((project) => `/projects/${project.slug}`)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/projects' ? 0.9 : 0.7,
  }));
}
