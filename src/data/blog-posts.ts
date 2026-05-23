export type BlogPostMetadata = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  tags: Array<{
    name: string;
    id: string;
  }>;
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

/**
 * Dynamically load all blog posts from the posts directory
 */
export const loadAllBlogPosts = async (): Promise<BlogPost[]> => {
  const metadataModules = import.meta.glob<{ metadata: BlogPostMetadata }>(
    './posts/*/metadata.ts',
    { eager: true },
  );

  const contentModules = import.meta.glob<string>('./posts/**/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  });

  const posts: BlogPost[] = [];

  for (const [path, module] of Object.entries(metadataModules)) {
    // Extract the slug from the path: ./posts/{slug}/metadata.ts
    const slug = path.split('/')[2];
    const metadata = module.metadata;

    // Find the corresponding markdown file
    const mdPath = `./posts/${slug}/${slug}.md`;
    const content = contentModules[mdPath];

    if (content && metadata) {
      posts.push({
        ...metadata,
        content,
      });
    }
  }

  // Sort by date (newest first)
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};
