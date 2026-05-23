import type { BlogPostMetadata } from '@/data/blog-posts';

export const metadata: BlogPostMetadata = {
  id: '1',
  title: 'How to Deploy to Vercel with a Custom Domain',
  brief:
    'A comprehensive guide on hosting your application on Vercel, connecting a custom domain, and configuring DNS correctly.',
  slug: 'how-to-deploy-to-vercel-with-custom-domain',
  url: 'https://dev.to/ricardomorais/how-to-host-your-application-on-vercel-with-a-custom-domain-25on',
  publishedAt: new Date('2025-05-23').toISOString(),
  readTimeInMinutes: 8,
  tags: [
    { name: 'Vercel', id: 'tag-1' },
    { name: 'Deployment', id: 'tag-2' },
    { name: 'DNS', id: 'tag-3' },
    { name: 'Web Hosting', id: 'tag-4' },
  ],
};
