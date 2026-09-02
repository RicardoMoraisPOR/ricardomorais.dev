import { fetchBlogPosts } from '@/api/FetchRequests';
import type { BlogPost } from '@/data/blog-posts';
import { GARBAGE_COLLECTED_TIME, STALE_TIME } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';

import { BlogCard } from './BlogCard';

const MAX_RELATED_POSTS = 2;

type RelatedPostsProps = {
  currentPost: BlogPost;
};

const sharedTagCount = (current: BlogPost, candidate: BlogPost) => {
  const currentTagIds = new Set(current.tags.map((tag) => tag.id));
  return candidate.tags.filter((tag) => currentTagIds.has(tag.id)).length;
};

export const RelatedPosts = ({ currentPost }: RelatedPostsProps) => {
  const { data } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: STALE_TIME,
    gcTime: GARBAGE_COLLECTED_TIME,
  });

  const relatedPosts = (data ?? [])
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => {
      const tagScoreDiff =
        sharedTagCount(currentPost, b) - sharedTagCount(currentPost, a);
      if (tagScoreDiff !== 0) return tagScoreDiff;

      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .slice(0, MAX_RELATED_POSTS);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 flex flex-col gap-5">
      <hr className="h-px w-full bg-border" role="separator" />
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        More from the blog
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} data={post} />
        ))}
      </div>
    </section>
  );
};
