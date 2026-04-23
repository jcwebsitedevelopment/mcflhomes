import type { MetadataRoute } from 'next';
import { posts } from '@/lib/blog';

const BASE = 'https://mcflhomes.com';

const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/buy', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/sell', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/listings', priority: 0.95, changeFrequency: 'daily' as const },
  { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/mortgage-calculator', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    entries.push({
      url: `${BASE}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${BASE}${page.path}`,
          es: `${BASE}/es${page.path}`,
        },
      },
    });
  }

  for (const post of posts) {
    entries.push({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${BASE}/blog/${post.slug}`,
          es: `${BASE}/es/blog/${post.slug}`,
        },
      },
    });
  }

  return entries;
}
