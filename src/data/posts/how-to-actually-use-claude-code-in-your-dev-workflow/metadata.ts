import type { BlogPostMetadata } from '@/data/blog-posts';

export const metadata: BlogPostMetadata = {
  id: '2',
  title: 'How to Actually Use Claude Code in Your Dev Workflow',
  brief:
    'Autocomplete was never the interesting part. Here is how to get real value out of Claude Code, from a CLAUDE.md file to plan mode and a persistent memory system.',
  slug: 'how-to-actually-use-claude-code-in-your-dev-workflow',
  url: 'https://dev.to/ricardomorais',
  publishedAt: new Date('2026-08-25').toISOString(),
  readTimeInMinutes: 7,
  tags: [
    { name: 'AI', id: 'tag-1' },
    { name: 'Claude Code', id: 'tag-2' },
    { name: 'Developer Tools', id: 'tag-3' },
    { name: 'Productivity', id: 'tag-4' },
  ],
};
