import type { BlogPostMetadata } from '@/data/blog-posts';

export const metadata: BlogPostMetadata = {
  id: '1',
  title: 'How to Deploy to Vercel with a Custom Domain',
  brief:
    'A comprehensive guide on hosting your application on Vercel, connecting a custom domain, and configuring DNS correctly.',
  slug: 'how-to-deploy-to-vercel-with-custom-domain',
  publishedAt: new Date('2025-05-23').toISOString(),
  readTimeInMinutes: 8,
  tags: [
    { name: 'Vercel', id: 'vercel' },
    { name: 'Deployment', id: 'deployment' },
    { name: 'DNS', id: 'dns' },
    { name: 'Web Hosting', id: 'web-hosting' },
  ],
};
