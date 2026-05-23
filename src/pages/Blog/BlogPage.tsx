import { useRef } from 'react';

import { fetchBlogPosts } from '@/api/FetchRequests';
import { LoadingState } from '@/components/LoadingState';
import { PageTitle } from '@/components/PageTitle';
import { GARBAGE_COLLECTED_TIME, STALE_TIME } from '@/utils/utils';
import { useGSAP } from '@gsap/react';
import { useQuery } from '@tanstack/react-query';
import { useHead } from '@unhead/react';
import gsap from 'gsap';

import { BlogCard } from './BlogCard';

export const BlogPage = () => {
  useHead({
    title: 'Blog | Ricardo Morais',
    meta: [
      {
        property: 'og:title',
        content: 'Blog | Ricardo Morais',
      },
      {
        property: 'og:description',
        content:
          'My thoughts on the front-end ecosystem, software engineering and things I find interesting.',
      },
      {
        name: 'twitter:title',
        content: 'Blog | Ricardo Morais',
      },
      {
        name: 'twitter:description',
        content:
          'My thoughts on the front-end ecosystem, software engineering and things I find interesting.',
      },
    ],
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: STALE_TIME,
    gcTime: GARBAGE_COLLECTED_TIME,
  });

  useGSAP(() => {
    if (!data || !containerRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      containerRef.current,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.4, ease: 'ease.out' },
    ).from(
      containerRef.current.children,
      {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.inOut',
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      },
      '-=0.2',
    );
  }, [data]);

  return (
    <section className="flex flex-col gap-6 min-h-[70vh]">
      <PageTitle
        brief="My thoughts on the front-end ecosystem, software engineering and
          things I find interesting."
        title="Posts"
        page="Blog"
      />

      {error && <div>ups...</div>}

      <div ref={containerRef} className="flex flex-col gap-5 mb-16 mt-16">
        <LoadingState isLoading={isLoading} />
        {data?.map((post) => (
          <BlogCard key={post.id} data={post} />
        ))}
        {data?.length === 0 && !isLoading && (
          <span className="text-muted text-sm">
            Sorry, It seems I haven't posted anything yet.
          </span>
        )}
      </div>
    </section>
  );
};
