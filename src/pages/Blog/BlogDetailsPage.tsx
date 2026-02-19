import { useRef } from 'react';

import { LoadingState } from '@/components/LoadingState';
import { useGSAP } from '@gsap/react';
import { useQuery } from '@tanstack/react-query';
import gsap from 'gsap';
import { ArrowLeft, LucideLink } from 'lucide-react';
import Markdown from 'react-markdown';
import { Link, useParams } from 'react-router';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { fetchBlogPost } from './FetchRequests';
import { MarkdownComponents } from './MarkdownComponents';
import { GARBAGE_COLLECTED_TIME, STALE_TIME, formatDate } from './utils';

export const BlogDetailsPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLHRElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['hashnode-post-details', slug],
    queryFn: fetchBlogPost(slug || ''),

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
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.inOut',
      },
      '-=0.2',
    );
  }, [data]);

  useGSAP(() => {
    if (!data || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 1,
        ease: 'expo.inOut',
      },
    );
  }, [data]);

  useGSAP(() => {
    if (!data || !separatorRef.current) return;

    gsap.fromTo(
      separatorRef.current,
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        scale: 1,
        delay: 0.2,
        duration: 1.5,
        ease: 'expo.inOut',
      },
    );
  }, [data]);

  if (isLoading) {
    return <LoadingState isLoading />;
  }

  if (!data || error) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center">
        <span className="text-muted text-sm">
          Sorry. this content is unavailable
        </span>
        <Link
          to="/blog"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to blog
        </Link>
      </div>
    );
  }

  // Strip out any trailing ' align="..."' from the URL
  const cleanMarkdown = data.content.markdown.replace(/ align=".*?"/g, '');

  return (
    <>
      <header ref={containerRef} className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={data.publishedAt} className="font-mono">
            {formatDate(data.publishedAt)}
          </time>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{data.readTimeInMinutes} min read</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
          {data.title}
        </h1>
        {data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </header>

      <hr
        ref={separatorRef}
        className="h-px w-full bg-border mt-5 mb-10"
        role="separator"
      />

      <article ref={contentRef}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={MarkdownComponents}
        >
          {cleanMarkdown}
        </Markdown>
        <div className="flex justify-center items-center gap-5 my-10">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Blog
          </Link>
          <Link
            to={data.url}
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LucideLink className="h-3.5 w-3.5" />
            See this post in Hashnode
          </Link>
        </div>
      </article>
    </>
  );
};
