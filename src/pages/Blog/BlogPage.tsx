import { useRef, useState } from 'react';

import { fetchBlogPosts } from '@/api/FetchRequests';
import { LoadingState } from '@/components/LoadingState';
import { PageTitle } from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { GARBAGE_COLLECTED_TIME, STALE_TIME } from '@/utils/utils';
import { useGSAP } from '@gsap/react';
import { useQuery } from '@tanstack/react-query';
import { useHead } from '@unhead/react';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isAnimatingRef = useRef(false);

  const [cursors, setCursors] = useState<Array<string>>(['']);

  const { data, isLoading, error } = useQuery({
    queryKey: ['hashnode-posts', cursors],
    queryFn: fetchBlogPosts(cursors.at(-1)),

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

  const animateOut = () => {
    const container = containerRef.current;
    if (!container) return Promise.resolve();

    return new Promise((resolve) => {
      gsap.to(container.children, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.05,
        ease: 'power2.in',
        onComplete: resolve,
      });
    });
  };

  useGSAP(() => {
    if (prevRef.current) {
      gsap.to(prevRef.current, {
        autoAlpha: cursors.length > 1 ? (isLoading ? 0.5 : 1) : 0,
        x: cursors.length > 1 ? 0 : -10,
        duration: 0.15,
        ease: 'power2.out',
        pointerEvents: cursors.length > 1 && !isLoading ? 'auto' : 'none',
      });
    }

    if (nextRef.current) {
      const showNext = isLoading || data?.pageInfo?.hasNextPage;

      gsap.to(nextRef.current, {
        autoAlpha: showNext ? (isLoading ? 0.5 : 1) : 0,
        x: showNext ? 0 : 10,
        duration: 0.15,
        ease: 'power2.out',
        pointerEvents: showNext && !isLoading ? 'auto' : 'none',
      });
    }
  }, [cursors.length, isLoading, data?.pageInfo?.hasNextPage]);

  const onNext = async () => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    await animateOut();

    setCursors((cursors) => [...cursors, data?.pageInfo?.endCursor || '']);
  };

  const onPrevious = async () => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    await animateOut();

    setCursors((cursors) => cursors.slice(0, -1));
  };

  return (
    <section className="flex flex-col gap-6 min-h-[70vh]">
      <PageTitle
        brief="My thoughts on the front-end ecosystem, software engineering and
          things I find interesting."
        title="Posts"
        page="Blog"
      />

      {error && <div>ups...</div>}

      <div className="flex justify-end items-end gap-5 min-h-10">
        <Button
          ref={prevRef}
          variant="ghost"
          disabled={isLoading}
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
          onClick={onPrevious}
          style={{
            opacity: 0,
          }}
        >
          {isLoading ? (
            <Spinner className="h-3.5 w-3.5" />
          ) : (
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          )}
          Previous posts
        </Button>

        <Button
          ref={nextRef}
          variant="ghost"
          disabled={isLoading}
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
          onClick={onNext}
        >
          Next posts
          {isLoading ? (
            <Spinner className="h-3.5 w-3.5" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          )}
        </Button>
      </div>

      <div ref={containerRef} className="flex flex-col gap-5 mb-16">
        <LoadingState isLoading={isLoading} />
        {data?.edges.map((posts) => (
          <BlogCard key={posts.node.id} data={posts.node} />
        ))}
        {data?.edges.length === 0 && !isLoading && (
          <span className="text-muted text-sm">
            Sorry, It seems I haven't posted anything yet.
          </span>
        )}
      </div>
    </section>
  );
};
