import type { BlogPostMetadata } from '@/data/blog-posts';

import { metadata as claudeCodeWorkflow } from './how-to-actually-use-claude-code-in-your-dev-workflow/metadata.js';
import { metadata as vercelCustomDomain } from './how-to-deploy-to-vercel-with-custom-domain/metadata.js';

/**
 * Vercel Functions can't use Vite's `import.meta.glob`, so this list has to
 * be maintained by hand: add one import + one array entry per new post.
 * `loadAllBlogPosts` (blog-posts.ts) remains the source of truth for content;
 * this only mirrors metadata for server-side lookups (og:image, blog-page).
 */
export const postMetadataRegistry: BlogPostMetadata[] = [
  claudeCodeWorkflow,
  vercelCustomDomain,
];

export const findPostMetadataBySlug = (
  slug: string,
): BlogPostMetadata | undefined =>
  postMetadataRegistry.find((post) => post.slug === slug);
