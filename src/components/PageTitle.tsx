import type { ReactNode } from 'react';

type PageTitleProps = {
  page: string;
  title: string;
  brief: string | ReactNode;
  ExtraContent?: ReactNode;
};

export const PageTitle = ({
  brief,
  page,
  title,
  ExtraContent,
}: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
        {page}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
        {brief}
      </p>
      {ExtraContent}
    </div>
  );
};
