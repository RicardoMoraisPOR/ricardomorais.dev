import type { BlogPost } from '@/api/FetchRequests';
import { formatDate } from '@/utils/utils';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

type BlogCardProps = {
  data: BlogPost;
};

export const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <Link to={`/blog/${data.slug}`} className="group block">
      <article className="flex flex-col gap-3 rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-muted">
        <div className="flex items-center justify-between">
          <time
            dateTime={data.publishedAt}
            className="text-sm font-mono text-muted-foreground"
          >
            {formatDate(data.publishedAt)}
          </time>
          <span className="text-xs text-muted-foreground">
            {`${data.readTimeInMinutes} min read`}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/80">
            {data.title}
          </h2>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {data.brief}
        </p>
        {data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
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
      </article>
    </Link>
  );
};
